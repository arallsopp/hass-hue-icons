<?php
// Run this to regenerate the documentation and script from svgs in the svg and custom_svg folders

class HassHueIcon{
    public $path;
    public $name;
    public $modified_at;
    public $tags;

    public function __construct($name='',$path='',$modified_at=null,$tags = []){
        $this->name = $name;
        $this->path = $path;
        $this->modified_at = $modified_at;
        $this->tags = $tags;
    }
}
class IconLibrary{
    public $default_icon_set;
    public $custom_icon_set;
    public $readme_file_path;
    public $readme_file_contents;
    public $script_file_path;
    public $script_file_contents;
    public $new_version;
    public $version;
    public $output_string_latest_icons = '';

    public function __construct(){}

    /**
     * @param mixed $readme_file_path
     */
    public function setReadmeFile($readme_file_path): void{
        $this->readme_file_path = $readme_file_path;
    }

    /**
     * @param mixed script_file_path
     */
    public function setScriptFile($script_file_path): void{
        $this->script_file_path = $script_file_path;
    }

    /**
     * @param mixed $new_version
     */
    public function setNewVersion($new_version): void{
        $this->new_version = $new_version;
    }


    public function get_latest_icons_for_comment($path,$limit = 12){
        $this->output_string_latest_icons = '| Icon | Name |' . PHP_EOL . '| :--- | :--- |' . PHP_EOL;
        $files = glob($path . '*.svg');
        $count = 0;
        usort($files, function($a, $b) {
            return filemtime($b) - filemtime($a);
        });


        foreach ($files as $file){
            if($count++ > $limit) return;

            $this->output_string_latest_icons .=
                '| ![hue:' . basename($file,'.svg') . '](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/' . basename($file) . ')| hue:' . basename($file,'.svg') . '|' . PHP_EOL;
        }
    }

    private function check_single_path($icon_text){
        $count = substr_count($icon_text,'path');
        if($count == 0){
            $just_bloody_accept_it = true;
        }
        return ($count == 1);
    }

    public function find_version(){

        $this->script_file_contents = file_get_contents($this->script_file_path);
        $re = '/HASS-HUE-ICONS\s+%c Version (.*) /m';

        preg_match_all($re, $this->script_file_contents, $matches, PREG_SET_ORDER, 0);

        // Print the entire match result
        $this->version = $matches[0][1];
    }

    public function update_script(){

        $return_string = '';
        $entity_table = '<table border="1">';

        $this->script_file_contents = file_get_contents($this->script_file_path);

        $re = '/const HUE_ICONS_MAP = {.*?};/s';
        $subst = 'const HUE_ICONS_MAP = {' . PHP_EOL;


        // combine the two objects
        $full_set = array_merge($this->default_icon_set,$this->custom_icon_set);
        usort($full_set, function($a, $b) {return strcmp($a->name, $b->name);});

        // read in the meta data for aliases
        $meta = json_decode(file_get_contents('meta.json'));

        //output all icons
        foreach ($full_set as $icon) {
            //see if it has an alias
            if(!isset($meta->aliases->{$icon->name})){
                $meta->aliases->{$icon->name} = ['light'];
            }
            $icon_aliases = $meta->aliases->{$icon->name};
            $icon_aliases_as_array_vals = sprintf('"%s"', implode('","', $icon_aliases ) );
            $subst .= PHP_EOL . '  "' . $icon->name . '":{' . PHP_EOL . '    path:"' . $icon->path . '", ' . PHP_EOL . '    keywords: [' . $icon_aliases_as_array_vals . ']' . PHP_EOL . '  },';

            //update entity table
            $entity_table .= '<tr' . ($icon_aliases_as_array_vals == '"light"' ? ' style="background:#f3d1d1"' : '') . '><td><img src="../' . (file_exists( '../svgs/' . $icon->name . '.svg') ? 'svgs/'  : 'custom_svgs/') . $icon->name . '.svg"</td><th>' . $icon->name . '</th><td>' . $icon_aliases_as_array_vals . '</td></tr>';

            //todo: update the object here so that you have the meta?
            //even better, make it build the properties logically, then spit out the file system changes, etc.

        }

        //lose the last comma
        $subst = substr($subst,0,strlen($subst)-1);

        $subst .= PHP_EOL . '};';
        $this->script_file_contents = preg_replace($re, $subst, $this->script_file_contents);

        if(!is_null($this->version)){
            //write the version tag to the script
            $re = '/HASS-HUE-ICONS\s+%c Version [\d]+\.[\d]+\.[\d]+/m';
            $subst = 'HASS-HUE-ICONS %c Version ' . (isset($this->new_version)
                    ? $this->new_version
                    : $this->version);
            $this->script_file_contents = preg_replace($re, $subst, $this->script_file_contents);
        }

        $return_string .= '<hr/><em>Script</em><pre>' . $this->script_file_contents . '</pre>';
        file_put_contents($this->script_file_path,$this->script_file_contents);
        $meta = $this->sort_the_meta($meta);

        file_put_contents('meta.json',json_encode($meta,JSON_PRETTY_PRINT));

        $return_string .= '<h2>Entity Table</h2>' . $entity_table . '</table>';
        return $return_string;
    }

    private function sort_the_meta($meta){
        //sort the fixtures
        $array_fixtures = (array) $meta->aliases;
        ksort($array_fixtures);

        $meta->aliases = (object) $array_fixtures;


        foreach ($meta->aliases as $key => $value) {
            sort($value);
            $meta->aliases->$key = $value;
        }

        return $meta;
    }

    public function update_readme(){
        $return_string = '';
        $this->readme_file_contents = file_get_contents($this->readme_file_path);

        $subst = '(Start Hue Icons)' . PHP_EOL . PHP_EOL . '| Icon | Name | Icon | Name ' . PHP_EOL . '| :--- | :--- | :--- | :--- |' ;
        $new_row = true;

        //do the hue icons
        foreach ($this->default_icon_set as $icon){
            $subst .=  ($new_row ? PHP_EOL . '|' : '') . ' ![hue:' . $icon->name . '](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/' . $icon->name . '.svg)| hue:' . $icon->name . ' |';
            $new_row = !$new_row;
        }
        $re = '/\(Start Hue Icons\).*\(End Hue Icons\)/s';
        $subst .= PHP_EOL . PHP_EOL . '[//]: # (End Hue Icons)';
        $readme = preg_replace($re, $subst, $this->readme_file_contents);
        if(!$new_row){
            $subst .= '| |';
        }

        $subst = '(Start Custom Icons)' . PHP_EOL . PHP_EOL . '| Icon | Name | Icon | Name ' . PHP_EOL . '| :--- | :--- | :--- | :--- |' ;
        $new_row = true;

        //do the custom icons
        foreach ($this->custom_icon_set as $icon){
            $subst .=  ($new_row ? PHP_EOL . '|' : '') . ' ![hue:' . $icon->name . '](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/' . $icon->name . '.svg)| hue:' . $icon->name . ' |';
            $new_row = !$new_row;
        }
        if(!$new_row){
            $subst .= '| |';
        }

        $re = '/\(Start Custom Icons\).*\(End Custom Icons\)/s';
        $subst .= PHP_EOL . PHP_EOL . '[//]: # (End Custom Icons)';
        $this->readme_file_contents = preg_replace($re, $subst, $this->readme_file_contents);

        // update the icon counts
        $re = '/(hass-hue-icons includes) (\d+) (Hue icons)/';
        $subst = '$1 ' . sizeof($this->default_icon_set) . ' $3';
        $this->readme_file_contents = preg_replace($re, $subst, $this->readme_file_contents, 1);

        // update the icon counts
        $re = '/(hass-hue-icons includes) (\d+) (custom icons)/';
        $subst = '$1 ' . sizeof($this->custom_icon_set) . ' $3';
        $this->readme_file_contents = preg_replace($re, $subst, $this->readme_file_contents, 1);

        file_put_contents($this->readme_file_path,$this->readme_file_contents);
        $return_string .= '<hr/><em>README.md</em><pre>' . $readme . '</pre>';
        return $return_string;
    }
    private function flag_if_more_than_two_decimal_places($item_path,$name){
        //find any coords in the path that exceed 2dp
        $re = '/\.\d{3,10}/m';
        preg_match_all($re, $item_path, $matches, PREG_SET_ORDER, 0);

        //go through each and round them.
        if(sizeof($matches)){
            echo '<h2>Re-save ' . $name . '</h2>';
        }

        return $item_path;
    }

    public function read_files($path,$debug = false) {
        if($debug) echo 'reading <em>' . $path . '</em>';
        $items = [];
        $files = glob($path . '*.svg');

        natsort($files); // sort.

// print.
        foreach ($files as $file) {
            $name = basename($file, '.svg');
            if($name != 'blank') {
                $content = file_get_contents($file);
                $re = '/(<path|<path class="st\d") d\s?=\s?"(.*)"\/>/mis';
                preg_match_all($re, $content, $matches, PREG_SET_ORDER, 0);

                $ok_to_proceed = $this->check_single_path($content);

                if(!$ok_to_proceed){
                    die('Aborting: Multiple paths in ' . $name);
                }

                if(sizeof($matches)) {
                    $item = new HassHueIcon($name,$matches[0][2]);

                    if ($debug) {
                        var_dump($item);
                    }

                    //clean the spaces out.
                    $item_path = str_replace(array("\r", "\n", "\t"), ' ', $item->path);
                    $item_path = str_replace("  "," ",$item_path);
                    $item_path = $this->flag_if_more_than_two_decimal_places($item_path,$name);
                    $optimised_output = '<svg viewBox="0 0 24 24" fill="#44739e" xmlns="http://www.w3.org/2000/svg"><title>hue:' . $item->name . '</title><desc>Source: https://github.com/arallsopp/hass-hue-icons</desc><path d="' . $item_path . '"/></svg>';
                    if ($content !== $optimised_output) {
                        file_put_contents($file, $optimised_output);
                    }

                    array_push($items, $item);
                }else{
                    die('failed to find pattern in ' . $file);
                }
            }
        }
        if($debug) echo ' found <em>' . sizeof($items) . '</em> icons</br>';
        return $items;
    }
}

ini_set('display_errors','on');

$myIconLibrary = new IconLibrary();
$myIconLibrary->setReadmeFile('../../README.md');
$myIconLibrary->setScriptFile('../../dist/hass-hue-icons.js');
$myIconLibrary->setNewVersion(isset($_GET['v']) ? $_GET['v'] : null);
$myIconLibrary->find_version();
$version_components = explode('.',$myIconLibrary->version);
?>

<html>
<head>
    <title>Build script</title>
    <style>
        textarea{
            width:100%;
            height:200px;
            overflow-y:auto;
            font-size:10px;
        }
    </style>
</head>
<body><?php

// handle versioning
echo 'Was version:' . $myIconLibrary->version;
if(!is_null($myIconLibrary->new_version)){
    echo '<br/>This version:' . $myIconLibrary->new_version;
    $version_components = explode('.',$myIconLibrary->new_version);
}

$version_components[2] = intval($version_components[2]) + 1;
$incremented_version = join('.',$version_components);
echo '<br/><a href="?v=' . $incremented_version  . '">Increment to version ' . $incremented_version . '</a><hr/>';

$limit = 12;
$myIconLibrary->get_latest_icons_for_comment('../custom_svgs/',$limit);
echo '<strong>' . $limit . ' LATEST ICONS</strong><br/><textarea>' . $myIconLibrary->output_string_latest_icons . '</textarea>';

$myIconLibrary->default_icon_set = $myIconLibrary->read_files('../svgs/');
$myIconLibrary->custom_icon_set = $myIconLibrary->read_files('../custom_svgs/');

echo '<p><b>RELEASE NOTES</b><br/><textarea style="height:40px">Thanks for the suggestion. As always, feel free to raise an [icon request](https://github.com/arallsopp/hass-hue-icons/issues/new/choose) for any other hue fixtures or combinations you\'re missing.</textarea></p>';
echo '<p><b>FEATURE REQUEST NOTES</b><br/>
      <textarea>Thanks. Its in release [v' . $myIconLibrary->new_version . '](https://github.com/arallsopp/hass-hue-icons/releases/tag/v' . $myIconLibrary->new_version .').' . PHP_EOL .
      '### Want to help the community?' . PHP_EOL .
      'If you like what you see and want to help others discover this repo, please consider giving it a free star. Every one of the ' . sizeof($myIconLibrary->custom_icon_set) . ' custom icons has been driven by a community request just like yours, and stars help people find this repo.' . PHP_EOL .
      '### Want to get involved?' . PHP_EOL .
      'Its always good to see these icons being used. If you\'re proud of your dash, why not share a screenshot in the [forum thread](https://community.home-assistant.io/t/created-custom-colorizable-hue-icons-as-a-lovelace-resource)?</textarea></p>';


echo $myIconLibrary->update_readme();
echo $myIconLibrary->update_script();
?>
<style>
    body{
        font-family: monospace;
    }
    em{
        font-style: normal;
        color:red;
    }
</style>
</body>
</html>