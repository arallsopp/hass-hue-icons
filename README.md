# hass-hue-icons

Vector based icon pack for Home Assistant, inspired by the Hue icons. For personal use only.

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)

## Installation

### Manual:
- Copy `dist/hass-hue-icons.js` into your `config/www` folder.
- Go to Configuration -> Lovelace Dashboards -> Resources -> Add Resource
- set url as `/local/hass-hue-icons.js` and Resource Type as `Javascript Module`.
- Save, restart Home Assistant.

### HACS:
Hass-hue-icons is a custom repository for HACS. To install:

- Go to HACS, Frontend.
- Click the three dots
- Choose custom repositories
- For the custom repository URL, choose https://github.com/arallsopp/hass-hue-icons
- For the category, choose Lovelace
- Click Add.

## Usage
- In your entity editor, specify an icon as `hue:icon_name` 
- If you set `state_color: true` in your card, you'll see the icons get colorised based upon the current RGB setting.

### Example:

```
title: My Room
state_color: true
type: entities
entities:
  - entity: light.my_wall_light
    name: My Wall Light
    icon: hue:wall_spot
```

### Hue Icons

Icons modelled upon the Hue iOS app for personal use

[//]: # (Start Hue Icons)

| Icon | Name 
| :--- | :--- |
| ![hue:bollard](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bollard.svg)| hue:bollard |
| ![hue:bulb_candle](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bulb_candle.svg)| hue:bulb_candle |
| ![hue:bulb_classic](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bulb_classic.svg)| hue:bulb_classic |
| ![hue:bulb_flood](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bulb_flood.svg)| hue:bulb_flood |
| ![hue:bulb_spot](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bulb_spot.svg)| hue:bulb_spot |
| ![hue:bulb_sultan](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bulb_sultan.svg)| hue:bulb_sultan |
| ![hue:ceiling_round](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/ceiling_round.svg)| hue:ceiling_round |
| ![hue:ceiling_square](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/ceiling_square.svg)| hue:ceiling_square |
| ![hue:desk_lamp](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/desk_lamp.svg)| hue:desk_lamp |
| ![hue:device_dimmer](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/device_dimmer.svg)| hue:device_dimmer |
| ![hue:dimmer_switch](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/dimmer_switch.svg)| hue:dimmer_switch |
| ![hue:double_spot](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/double_spot.svg)| hue:double_spot |
| ![hue:downstairs](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/downstairs.svg)| hue:downstairs |
| ![hue:floor_lantern](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/floor_lantern.svg)| hue:floor_lantern |
| ![hue:floor_shade](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/floor_shade.svg)| hue:floor_shade |
| ![hue:floor_spot](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/floor_spot.svg)| hue:floor_spot |
| ![hue:outdoor_motion_sensor](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/outdoor_motion_sensor.svg)| hue:outdoor_motion_sensor |
| ![hue:pendant_long](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/pendant_long.svg)| hue:pendant_long |
| ![hue:pendant_round](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/pendant_round.svg)| hue:pendant_round |
| ![hue:play_bar](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/play_bar.svg)| hue:play_bar |
| ![hue:recessed_ceiling](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/recessed_ceiling.svg)| hue:recessed_ceiling |
| ![hue:recessed_floor](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/recessed_floor.svg)| hue:recessed_floor |
| ![hue:single_spot](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/single_spot.svg)| hue:single_spot |
| ![hue:table_shade](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/table_shade.svg)| hue:table_shade |
| ![hue:table_wash](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/table_wash.svg)| hue:table_wash |
| ![hue:upstairs](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/upstairs.svg)| hue:upstairs |
| ![hue:wall_lantern](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/wall_lantern.svg)| hue:wall_lantern |
| ![hue:wall_shade](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/wall_shade.svg)| hue:wall_shade |
| ![hue:wall_spot](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/wall_spot.svg)| hue:wall_spot |

[//]: # (End Hue Icons) 

Icons designed by author

[//]: # (Start Custom Icons)

| Icon | Name 
| :--- | :--- |
| ![hue:amaze](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/amaze.svg)| hue:amaze |
| ![hue:pendant_long_up](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/pendant_long_up.svg)| hue:pendant_long_up |
| ![hue:wall_flood](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall_flood.svg)| hue:wall_flood |

[//]: # (End Custom Icons) 

### Sample Dash 
With view icons and state color applied. Play bars are offline.
![lovelace_example](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/examples/lovelace_example.png)

### Troubleshooting:
If you cannot see the new icons, or you get an empty box where you're expecting an icon, flush your network cache. 

# Thanks and Props
@hulkhaugen and @thomasloven for the technique.
