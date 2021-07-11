<?php
//todo: iterate svgs folder.
//read the line I want
//add it to the readme table
//add it to the js


// read svgs
// write to docs
// write to js


ini_set('display_errors','on');
$readme_file = '../../README.md';
$hue_icons = read_files('../svgs/');
$custom_icons = read_files('../custom_svgs/');
update_readme($readme_file,$hue_icons,$custom_icons);

function update_readme($readme_file,$hue_icons,$custom_icons){
    $readme = file_get_contents($readme_file);

    $subst = '(Start Hue Icons)' . PHP_EOL . PHP_EOL . '    | Icon | Name ' . PHP_EOL . '    | :--- | :--- |';

    //do the hue icons
    $re = '/\(Start Hue Icons\).*\(End Hue Icons\)/s';
    foreach ($hue_icons as $icon){
        $subst .=  PHP_EOL . '    | ![hue:' . $icon->name . '](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/' . $icon->name . '.svg)| hue:' . $icon->name . ' |';
    }
    $subst .= PHP_EOL . PHP_EOL . '[//]: # (End Hue Icons)';
    $readme = preg_replace($re, $subst, $readme);


    $subst = '(Start Custom Icons)' . PHP_EOL . PHP_EOL . '    | Icon | Name ' . PHP_EOL . '    | :--- | :--- |';

    //do the custom icons
    $re = '/\(Start Custom Icons\).*\(End Custom Icons\)/s';
    foreach ($custom_icons as $icon){
        $subst .=  PHP_EOL . '    | ![hue:' . $icon->name . '](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/' . $icon->name . '.svg)| hue:' . $icon->name . ' |';
    }
    $subst .= PHP_EOL . PHP_EOL . '[//]: # (End Custom Icons)';
    $readme = preg_replace($re, $subst, $readme);

    echo '<pre>' . $readme . '</pre>';
    file_put_contents($readme_file,$readme);
}

function read_files($path) {
    echo 'reading ' . $path;
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

            $item = new stdClass();
            $item->name = $name;
            $item->content = $matches[0][1];

            var_dump($item);
            array_push($items, $item);
        }
    }
    return $items;
}

