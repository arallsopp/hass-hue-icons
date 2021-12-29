<html>
<head>
    <title>Build script</title>
</head>
<body>
<?php
// Run this to regenerate the documentation and script from svgs in the svg and custom_svg folders

ini_set('display_errors','on');

$readme_file = '../../README.md';
$script_file = '../../dist/hass-hue-icons.js';
$new_version = isset($_GET['v']) ? $_GET['v'] : null;
$version = find_version($script_file);

// handle versioning
$version_components = explode('.',$version);
echo 'Was version:' . $version;
if(!is_null($new_version)){
    echo '<br/>This version:' . $new_version;
    $version_components = explode('.',$new_version);
}

$version_components[2] = intval($version_components[2]) + 1;
$incremented_version = join('.',$version_components);
echo '<br/><a href="?v=' . $incremented_version  . '">Increment to version ' . $incremented_version . '</a><hr/>';

get_latest_icons_for_comment('../custom_svgs/',5);

$hue_icons = read_files('../svgs/');
$custom_icons = read_files('../custom_svgs/');


echo '<p><b>RELEASE NOTES</b><br/>Thanks for the suggestion. As always, feel free to raise an [icon request](https://github.com/arallsopp/hass-hue-icons/issues/new/choose) for any other hue fixtures or combinations you\'re missing.</p>';
echo '<p><b>FEATURE REQUEST NOTES</b>
      <br/>Thanks. Its in release [v.' . $new_version . '](https://github.com/arallsopp/hass-hue-icons/releases/tag/v.' . $new_version .').
      <br/>### Want to help the community?
      <br/>If you like what you see and want to help others discover this repo, please consider giving it a free star. Every one of the ' . sizeof($custom_icons) . ' custom icons has been driven by a community request just like yours, and stars help people find this repo.
      <br/>### Want to get involved?
      <br/>Its always good to see these icons being used. If you\'re proud of your dash, why not share a screenshot in the [forum thread](https://community.home-assistant.io/t/created-custom-colorizable-hue-icons-as-a-lovelace-resource)?</p>';


update_readme($readme_file,$hue_icons,$custom_icons);
update_script($script_file,$hue_icons,$custom_icons,$new_version);


function get_latest_icons_for_comment($path,$limit = 5){
    $files = glob($path . '*.svg');
    $count = 0;
    usort($files, function($a, $b) {
        return filemtime($b) - filemtime($a);
    });

    foreach ($files as $file){
        if($count++ > $limit) return;

        echo '<pre>| Icon | Name |' . PHP_EOL . '| :--- | :--- |' . PHP_EOL .
            '| ![hue:' . basename($file,'.svg') . '](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/' . basename($file) . ')| hue:' . basename($file,'.svg') . '|' . PHP_EOL .  PHP_EOL . '</pre>';

    }
}

function find_version($script_file){

    $script = file_get_contents($script_file);
    $re = '/HASS-HUE-ICONS\s+\\\\n%c Version (.*) /m';

    preg_match_all($re, $script, $matches, PREG_SET_ORDER, 0);

    // Print the entire match result
    return $matches[0][1];
}

function update_script($script_file,$hue_icons,$custom_icons,$version = null){

    $script = file_get_contents($script_file);

    $re = '/const HUE_ICONS_MAP = {.*?};/s';
    $subst = 'const HUE_ICONS_MAP = {' . PHP_EOL;


    // combine the two objects
    $full_set = array_merge($hue_icons,$custom_icons);
    usort($full_set, function($a, $b) {return strcmp($a->name, $b->name);});

    // read in the aliases
    $aliases = json_decode(file_get_contents('aliases.json'));

    //output all icons
    foreach ($full_set as $icon) {
        //see if it has an alias
        if(!isset($aliases->aliases->{$icon->name})){
            $aliases->aliases->{$icon->name} = ['light'];
        }
        $icon_aliases = $aliases->aliases->{$icon->name};
        $icon_aliases_as_array_vals = sprintf('"%s"', implode('","', $icon_aliases ) );
        $subst .= PHP_EOL . '  "' . $icon->name . '":{' . PHP_EOL . '    path:"' . $icon->content . '", ' . PHP_EOL . '    keywords: [' . $icon_aliases_as_array_vals . ']' . PHP_EOL . '  },';
    }

    //lose the last comma
    $subst = substr($subst,0,strlen($subst)-1);

    $subst .= PHP_EOL . '};';
    $script = preg_replace($re, $subst, $script);

    if(!is_null($version)){
        //write the version tag to the script
        $re = '/HASS-HUE-ICONS\s+\\\\n%c Version [\d]+\.[\d]+\.[\d]+/m';
        $subst = 'HASS-HUE-ICONS' . str_repeat(' ',(15 - strlen($version))) . '\n%c Version ' . $version;
        $script = preg_replace($re, $subst, $script);
    }

    echo '<hr/><em>Script</em>';
    echo '<pre>' . $script . '</pre>';
    file_put_contents($script_file,$script);
    file_put_contents('aliases.json',json_encode($aliases,JSON_PRETTY_PRINT));
}

function update_readme($readme_file,$hue_icons,$custom_icons){
    $readme = file_get_contents($readme_file);

    $subst = '(Start Hue Icons)' . PHP_EOL . PHP_EOL . '| Icon | Name | Icon | Name ' . PHP_EOL . '| :--- | :--- | :--- | :--- |' ;
    $new_row = true;

    //do the hue icons
    foreach ($hue_icons as $icon){
        $subst .=  ($new_row ? PHP_EOL . '|' : '') . ' ![hue:' . $icon->name . '](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/' . $icon->name . '.svg)| hue:' . $icon->name . ' |';
        $new_row = !$new_row;
    }
    $re = '/\(Start Hue Icons\).*\(End Hue Icons\)/s';
    $subst .= PHP_EOL . PHP_EOL . '[//]: # (End Hue Icons)';
    $readme = preg_replace($re, $subst, $readme);
    if(!$new_row){
        $subst .= '| |';
    }


    $subst = '(Start Custom Icons)' . PHP_EOL . PHP_EOL . '| Icon | Name | Icon | Name ' . PHP_EOL . '| :--- | :--- | :--- | :--- |' ;
    $new_row = true;

    //do the custom icons
    foreach ($custom_icons as $icon){
        $subst .=  ($new_row ? PHP_EOL . '|' : '') . ' ![hue:' . $icon->name . '](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/' . $icon->name . '.svg)| hue:' . $icon->name . ' |';
        $new_row = !$new_row;
    }
    if(!$new_row){
        $subst .= '| |';
    }

    $re = '/\(Start Custom Icons\).*\(End Custom Icons\)/s';
    $subst .= PHP_EOL . PHP_EOL . '[//]: # (End Custom Icons)';
    $readme = preg_replace($re, $subst, $readme);

    // update the icon counts
    $re = '/(hass-hue-icons includes) (\d+) (Hue icons)/';
    $subst = '$1 ' . sizeof($hue_icons) . ' $3';
    $readme = preg_replace($re, $subst, $readme, 1);

    // update the icon counts
    $re = '/(hass-hue-icons includes) (\d+) (custom icons)/';
    $subst = '$1 ' . sizeof($custom_icons) . ' $3';
    $readme = preg_replace($re, $subst, $readme, 1);

    echo '<hr/><em>README.md</em>';
    echo '<pre>' . $readme . '</pre>';
    file_put_contents($readme_file,$readme);
}

function read_files($path,$debug = false) {
    if($debug) echo 'reading <em>' . $path . '</em>';
    $items = [];

    $files = glob($path . '*.svg');


    natsort($files); // sort.

// print.
    foreach ($files as $file) {
        $name = basename($file, '.svg');
        if($name != 'blank') {
            $content = file_get_contents($file);
            $re = '/<path d\s?=\s?"(.*)"\/>/mis';
            preg_match_all($re, $content, $matches, PREG_SET_ORDER, 0);

            if(sizeof($matches)) {
                $item = new stdClass();
                $item->name = $name;
                $item->content = $matches[0][1];

                if ($debug) {
                    var_dump($item);
                }

                $optimised_output = '<svg viewBox="0 0 24 24" height="24px" width="24px" fill="#44739e" xmlns="http://www.w3.org/2000/svg"><title>hue:' . $item->name . '</title><desc>Source: https://github.com/arallsopp/hass-hue-icons</desc><path d="' . $item->content . '"/></svg>';
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