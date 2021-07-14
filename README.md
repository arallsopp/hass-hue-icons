# hass-hue-icons

Vector based icon pack for Home Assistant, inspired by the Hue icons. For personal use only. 
Includes custom vectors for hue fixtures that were created for this repo, alone.

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
- In your entity editor, specify an icon as `hue:icon-name` 
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

| Icon | Name | Icon | Name 
| :--- | :--- | :--- | :--- |
| ![hue:bloom](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bloom.svg)| hue:bloom | ![hue:bollard](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bollard.svg)| hue:bollard |
| ![hue:bulb-candle](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bulb-candle.svg)| hue:bulb-candle | ![hue:bulb-classic](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bulb-classic.svg)| hue:bulb-classic |
| ![hue:bulb-flood](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bulb-flood.svg)| hue:bulb-flood | ![hue:bulb-spot](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bulb-spot.svg)| hue:bulb-spot |
| ![hue:bulb-sultan](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bulb-sultan.svg)| hue:bulb-sultan | ![hue:ceiling-round](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/ceiling-round.svg)| hue:ceiling-round |
| ![hue:ceiling-square](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/ceiling-square.svg)| hue:ceiling-square | ![hue:desk-lamp](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/desk-lamp.svg)| hue:desk-lamp |
| ![hue:dimmer-switch](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/dimmer-switch.svg)| hue:dimmer-switch | ![hue:double-spot](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/double-spot.svg)| hue:double-spot |
| ![hue:downstairs](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/downstairs.svg)| hue:downstairs | ![hue:floor-lantern](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/floor-lantern.svg)| hue:floor-lantern |
| ![hue:floor-shade](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/floor-shade.svg)| hue:floor-shade | ![hue:floor-spot](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/floor-spot.svg)| hue:floor-spot |
| ![hue:go](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/go.svg)| hue:go | ![hue:iris](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/iris.svg)| hue:iris |
| ![hue:lightstrip](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/lightstrip.svg)| hue:lightstrip | ![hue:motion-sensor](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/motion-sensor.svg)| hue:motion-sensor |
| ![hue:outdoor-motion-sensor](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/outdoor-motion-sensor.svg)| hue:outdoor-motion-sensor | ![hue:pendant-long](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/pendant-long.svg)| hue:pendant-long |
| ![hue:pendant-round](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/pendant-round.svg)| hue:pendant-round | ![hue:play-bar](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/play-bar.svg)| hue:play-bar |
| ![hue:recessed-ceiling](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/recessed-ceiling.svg)| hue:recessed-ceiling | ![hue:recessed-floor](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/recessed-floor.svg)| hue:recessed-floor |
| ![hue:room-attic](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-attic.svg)| hue:room-attic | ![hue:room-balcony](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-balcony.svg)| hue:room-balcony |
| ![hue:room-bathroom](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-bathroom.svg)| hue:room-bathroom | ![hue:room-bbq](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-bbq.svg)| hue:room-bbq |
| ![hue:room-bedroom](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-bedroom.svg)| hue:room-bedroom | ![hue:room-carport](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-carport.svg)| hue:room-carport |
| ![hue:room-closet](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-closet.svg)| hue:room-closet | ![hue:room-computer](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-computer.svg)| hue:room-computer |
| ![hue:room-dining](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-dining.svg)| hue:room-dining | ![hue:room-driveway](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-driveway.svg)| hue:room-driveway |
| ![hue:room-front-door](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-front-door.svg)| hue:room-front-door | ![hue:room-games](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-games.svg)| hue:room-games |
| ![hue:room-garage](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-garage.svg)| hue:room-garage | ![hue:room-guestroom](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-guestroom.svg)| hue:room-guestroom |
| ![hue:room-gym](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-gym.svg)| hue:room-gym | ![hue:room-hallway](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-hallway.svg)| hue:room-hallway |
| ![hue:room-kids](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-kids.svg)| hue:room-kids | ![hue:room-kitchen](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-kitchen.svg)| hue:room-kitchen |
| ![hue:room-laundry](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-laundry.svg)| hue:room-laundry | ![hue:room-living](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-living.svg)| hue:room-living |
| ![hue:room-lounge](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-lounge.svg)| hue:room-lounge | ![hue:room-nursery](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-nursery.svg)| hue:room-nursery |
| ![hue:room-office](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-office.svg)| hue:room-office | ![hue:room-other](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-other.svg)| hue:room-other |
| ![hue:room-outdoors](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-outdoors.svg)| hue:room-outdoors | ![hue:room-pool](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-pool.svg)| hue:room-pool |
| ![hue:room-porch](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-porch.svg)| hue:room-porch | ![hue:room-recreation](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-recreation.svg)| hue:room-recreation |
| ![hue:room-stairs](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-stairs.svg)| hue:room-stairs | ![hue:room-storage](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-storage.svg)| hue:room-storage |
| ![hue:room-studio](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-studio.svg)| hue:room-studio | ![hue:room-terrace](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-terrace.svg)| hue:room-terrace |
| ![hue:room-toilet](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-toilet.svg)| hue:room-toilet | ![hue:single-spot](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/single-spot.svg)| hue:single-spot |
| ![hue:table-shade](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/table-shade.svg)| hue:table-shade | ![hue:table-wash](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/table-wash.svg)| hue:table-wash |
| ![hue:upstairs](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/upstairs.svg)| hue:upstairs | ![hue:wall-lantern](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/wall-lantern.svg)| hue:wall-lantern |
| ![hue:wall-shade](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/wall-shade.svg)| hue:wall-shade | ![hue:wall-spot](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/wall-spot.svg)| hue:wall-spot |

[//]: # (End Hue Icons) 

Icons designed by author for specific hue fixtures. 

[//]: # (Start Custom Icons)

| Icon | Name | Icon | Name 
| :--- | :--- | :--- | :--- |
| ![hue:amaze](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/amaze.svg)| hue:amaze | ![hue:lily-xl](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/lily-xl.svg)| hue:lily-xl |
| ![hue:pendant-long-up](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/pendant-long-up.svg)| hue:pendant-long-up | ![hue:wall-econic](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-econic.svg)| hue:wall-econic |
| ![hue:wall-flood](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-flood.svg)| hue:wall-flood | ![hue:wall-fuzo-h](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-fuzo-h.svg)| hue:wall-fuzo-h |
| ![hue:wall-fuzo](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-fuzo.svg)| hue:wall-fuzo | ![hue:wall-impress-narrow](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-impress-narrow.svg)| hue:wall-impress-narrow |
| ![hue:wall-nyro](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-nyro.svg)| hue:wall-nyro | ![hue:wall-turaco](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-turaco.svg)| hue:wall-turaco |

[//]: # (End Custom Icons) 

### Sample Dash 
With view icons and state color applied. Play bars are offline.
![lovelace_example](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/examples/lovelace_example.png)


### Compatibility with v1.0.8 and before.
Prior to v1.0.9, the icons glyphs were identified with underscores rather than dashes. 
For standards adhesion with HomeAssistant, the preferred names are now dash separated, eg. `hue:wall-spot`.
To maintain backwards compatibility, all old names still work, so `hue:wall-spot` and `hue:wall_spot` can be used interchangeably.

### Troubleshooting:
If you cannot see the new icons, or you get an empty box where you're expecting an icon, flush your network cache. 

# Thanks and Props
@hulkhaugen and @thomasloven for the technique.
