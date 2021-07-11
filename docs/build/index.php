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
    $subst = '    | Icon | Name ' . PHP_EOL . '    | :--- | :--- |';

    //do the hue icons
    $re = '/\[\/\/\]\: # \(Start Hue Icons\)(.*)\[\/\/\]\: # \(End Hue Icons\)/s';
    foreach ($hue_icons as $hue_icon){
        $subst .=  PHP_EOL . '| ![hue:' . $hue_icon->name . '](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/' . $hue_icon->name . '.svg)| hue:' . $hue_icon->name . ' |';
    }
    $readme = preg_replace($re, $subst, $readme);


    //do the custom icons
    $subst = '    | Icon | Name ' . PHP_EOL . '    | :--- | :--- |';
    $re = '/\[\/\/\]\: # \(Start Custom Icons\)(.*)\[\/\/\]\: # \(End Custom Icons\)/s';
    foreach ($custom_icons as $custom_icon){
        $subst .=  PHP_EOL . '| ![hue:' . $custom_icon->name . '](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/' . $custom_icon->name . '.svg)| hue:' . $custom_icon->name . ' |';
    }
    $readme = preg_replace($re, $subst, $readme);

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
        $content = file_get_contents($file);
        $re = '/<path d\s?=\s?"(.*)"\/>/mis';
        preg_match_all($re, $content, $matches, PREG_SET_ORDER, 0);

        $item = new stdClass();
        $item->name = $name;
        $item->content = $matches[0][1];

        var_dump($item);
        array_push($items,$item);
    }
    return $items;
}

