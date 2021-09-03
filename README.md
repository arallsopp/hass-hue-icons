# hass-hue-icons

Additional vector icons for Home Assistant, to better represent Philips Hue bulbs and fixtures. 
Inspired by the Hue icons in the iOS app, and for personal use only, this repo also includes custom vectors for Hue 
fixtures and groups that aren't represented by the 'official' icon set.

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)
[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]
[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]


[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg

## <a name="installation"></a>Installation

Hass-hue-icons has been accepted into the [Home Assistant Community Store (HACS)](https://hacs.xyz). 

### HACS (Recommended):
This is the recommended way to install hass-hue-icons. Hass-hue-icons is a default repository for HACS. To install:

- Load HACS (installation instructions are [here](https://hacs.xyz/docs/installation/installation/)).
- Select 'Frontend' to see the list of front end plugins and repositories.
- Click the '+ Explore & Add repositories' button.
- Type 'hass hue icons' into the search bar and click the row returned.
- Click 'Install this repository in HACS' from the resulting dialog. 
- Add the following to your configuration.yaml, save and restart HA.
```
frontend:
  extra_module_url:
    - /hacsfiles/hass-hue-icons/hass-hue-icons.js
```

### Manual:
- Copy `dist/hass-hue-icons.js` into your `config/www` folder.
- Go to Configuration -> Lovelace Dashboards -> Resources -> Add Resource
- set url as `/local/hass-hue-icons.js` and Resource Type as `Javascript Module`.
- Add the following to your configuration.yaml, save and restart HA.
```
frontend:
  extra_module_url:
    - /local/hass-hue-icons.js
```

- Save, restart Home Assistant.


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
    icon: hue:wall-spot
```

## Icons

### Hue Icons

hass-hue-icons includes 69 Hue icons modelled upon the Hue iOS app for personal use

[//]: # (Start Hue Icons)

| Icon | Name | Icon | Name 
| :--- | :--- | :--- | :--- |
| ![hue:bloom](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bloom.svg)| hue:bloom | ![hue:bollard](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bollard.svg)| hue:bollard |
| ![hue:bulb-candle](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bulb-candle.svg)| hue:bulb-candle | ![hue:bulb-classic](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bulb-classic.svg)| hue:bulb-classic |
| ![hue:bulb-filament](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bulb-filament.svg)| hue:bulb-filament | ![hue:bulb-flood](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bulb-flood.svg)| hue:bulb-flood |
| ![hue:bulb-group](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bulb-group.svg)| hue:bulb-group | ![hue:bulb-spot](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bulb-spot.svg)| hue:bulb-spot |
| ![hue:bulb-sultan](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/bulb-sultan.svg)| hue:bulb-sultan | ![hue:ceiling-round](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/ceiling-round.svg)| hue:ceiling-round |
| ![hue:ceiling-square](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/ceiling-square.svg)| hue:ceiling-square | ![hue:desk-lamp](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/desk-lamp.svg)| hue:desk-lamp |
| ![hue:dimmer-switch](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/dimmer-switch.svg)| hue:dimmer-switch | ![hue:double-spot](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/double-spot.svg)| hue:double-spot |
| ![hue:downstairs](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/downstairs.svg)| hue:downstairs | ![hue:floor-lantern](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/floor-lantern.svg)| hue:floor-lantern |
| ![hue:floor-shade](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/floor-shade.svg)| hue:floor-shade | ![hue:floor-spot](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/floor-spot.svg)| hue:floor-spot |
| ![hue:go](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/go.svg)| hue:go | ![hue:iris](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/iris.svg)| hue:iris |
| ![hue:lightstrip](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/lightstrip.svg)| hue:lightstrip | ![hue:motion-sensor](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/motion-sensor.svg)| hue:motion-sensor |
| ![hue:outdoor-motion-sensor](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/outdoor-motion-sensor.svg)| hue:outdoor-motion-sensor | ![hue:pendant-long](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/pendant-long.svg)| hue:pendant-long |
| ![hue:pendant-round](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/pendant-round.svg)| hue:pendant-round | ![hue:play-bar](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/play-bar.svg)| hue:play-bar |
| ![hue:plug](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/plug.svg)| hue:plug | ![hue:recessed-ceiling](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/recessed-ceiling.svg)| hue:recessed-ceiling |
| ![hue:recessed-floor](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/recessed-floor.svg)| hue:recessed-floor | ![hue:room-attic](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-attic.svg)| hue:room-attic |
| ![hue:room-balcony](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-balcony.svg)| hue:room-balcony | ![hue:room-bathroom](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-bathroom.svg)| hue:room-bathroom |
| ![hue:room-bbq](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-bbq.svg)| hue:room-bbq | ![hue:room-bedroom](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-bedroom.svg)| hue:room-bedroom |
| ![hue:room-carport](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-carport.svg)| hue:room-carport | ![hue:room-closet](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-closet.svg)| hue:room-closet |
| ![hue:room-computer](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-computer.svg)| hue:room-computer | ![hue:room-dining](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-dining.svg)| hue:room-dining |
| ![hue:room-driveway](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-driveway.svg)| hue:room-driveway | ![hue:room-front-door](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-front-door.svg)| hue:room-front-door |
| ![hue:room-games](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-games.svg)| hue:room-games | ![hue:room-garage](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-garage.svg)| hue:room-garage |
| ![hue:room-guestroom](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-guestroom.svg)| hue:room-guestroom | ![hue:room-gym](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-gym.svg)| hue:room-gym |
| ![hue:room-hallway](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-hallway.svg)| hue:room-hallway | ![hue:room-kids](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-kids.svg)| hue:room-kids |
| ![hue:room-kitchen](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-kitchen.svg)| hue:room-kitchen | ![hue:room-laundry](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-laundry.svg)| hue:room-laundry |
| ![hue:room-living](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-living.svg)| hue:room-living | ![hue:room-lounge](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-lounge.svg)| hue:room-lounge |
| ![hue:room-nursery](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-nursery.svg)| hue:room-nursery | ![hue:room-office](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-office.svg)| hue:room-office |
| ![hue:room-other](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-other.svg)| hue:room-other | ![hue:room-outdoors](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-outdoors.svg)| hue:room-outdoors |
| ![hue:room-pool](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-pool.svg)| hue:room-pool | ![hue:room-porch](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-porch.svg)| hue:room-porch |
| ![hue:room-recreation](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-recreation.svg)| hue:room-recreation | ![hue:room-stairs](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-stairs.svg)| hue:room-stairs |
| ![hue:room-storage](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-storage.svg)| hue:room-storage | ![hue:room-studio](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-studio.svg)| hue:room-studio |
| ![hue:room-terrace](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-terrace.svg)| hue:room-terrace | ![hue:room-toilet](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/room-toilet.svg)| hue:room-toilet |
| ![hue:single-spot](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/single-spot.svg)| hue:single-spot | ![hue:table-shade](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/table-shade.svg)| hue:table-shade |
| ![hue:table-wash](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/table-wash.svg)| hue:table-wash | ![hue:upstairs](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/upstairs.svg)| hue:upstairs |
| ![hue:wall-lantern](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/wall-lantern.svg)| hue:wall-lantern | ![hue:wall-shade](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/wall-shade.svg)| hue:wall-shade |
| ![hue:wall-spot](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/svgs/wall-spot.svg)| hue:wall-spot |

[//]: # (End Hue Icons) 

### User Requested Hue Icons
hass-hue-icons includes 108 custom icons designed by the author for specific hue fixtures and bulb combinations that aren't represented by the 'official' icon set. 

[//]: # (Start Custom Icons)

| Icon | Name | Icon | Name 
| :--- | :--- | :--- | :--- |
| ![hue:adore-alt](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/adore-alt.svg)| hue:adore-alt | ![hue:adore](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/adore.svg)| hue:adore |
| ![hue:amarant](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/amarant.svg)| hue:amarant | ![hue:amaze](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/amaze.svg)| hue:amaze |
| ![hue:aura](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/aura.svg)| hue:aura | ![hue:beyond-down](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/beyond-down.svg)| hue:beyond-down |
| ![hue:beyond-solid](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/beyond-solid.svg)| hue:beyond-solid | ![hue:beyond-up](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/beyond-up.svg)| hue:beyond-up |
| ![hue:beyond](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/beyond.svg)| hue:beyond | ![hue:bulb-filament-alt](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/bulb-filament-alt.svg)| hue:bulb-filament-alt |
| ![hue:bulb-filament-candle](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/bulb-filament-candle.svg)| hue:bulb-filament-candle | ![hue:bulb-group-candle](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/bulb-group-candle.svg)| hue:bulb-group-candle |
| ![hue:bulb-group-ceiling-round](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/bulb-group-ceiling-round.svg)| hue:bulb-group-ceiling-round | ![hue:bulb-group-ceiling-square](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/bulb-group-ceiling-square.svg)| hue:bulb-group-ceiling-square |
| ![hue:bulb-group-centura-round](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/bulb-group-centura-round.svg)| hue:bulb-group-centura-round | ![hue:bulb-group-centura](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/bulb-group-centura.svg)| hue:bulb-group-centura |
| ![hue:bulb-group-filament-alt](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/bulb-group-filament-alt.svg)| hue:bulb-group-filament-alt | ![hue:bulb-group-filament-candle](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/bulb-group-filament-candle.svg)| hue:bulb-group-filament-candle |
| ![hue:bulb-group-filament-filament-alt](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/bulb-group-filament-filament-alt.svg)| hue:bulb-group-filament-filament-alt | ![hue:bulb-group-filament-spot](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/bulb-group-filament-spot.svg)| hue:bulb-group-filament-spot |
| ![hue:bulb-group-filament-sultan](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/bulb-group-filament-sultan.svg)| hue:bulb-group-filament-sultan | ![hue:bulb-group-filament](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/bulb-group-filament.svg)| hue:bulb-group-filament |
| ![hue:bulb-group-lightstrip-v](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/bulb-group-lightstrip-v.svg)| hue:bulb-group-lightstrip-v | ![hue:bulb-group-lightstrip](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/bulb-group-lightstrip.svg)| hue:bulb-group-lightstrip |
| ![hue:bulb-group-spot](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/bulb-group-spot.svg)| hue:bulb-group-spot | ![hue:bulb-group-sultan-lightstrip-off](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/bulb-group-sultan-lightstrip-off.svg)| hue:bulb-group-sultan-lightstrip-off |
| ![hue:bulb-group-sultan-lightstrip](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/bulb-group-sultan-lightstrip.svg)| hue:bulb-group-sultan-lightstrip | ![hue:button](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/button.svg)| hue:button |
| ![hue:ceiling-buratto-four](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/ceiling-buratto-four.svg)| hue:ceiling-buratto-four | ![hue:ceiling-buratto-three](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/ceiling-buratto-three.svg)| hue:ceiling-buratto-three |
| ![hue:ceiling-buratto-two](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/ceiling-buratto-two.svg)| hue:ceiling-buratto-two | ![hue:ceiling-buratto](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/ceiling-buratto.svg)| hue:ceiling-buratto |
| ![hue:ceiling-explore](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/ceiling-explore.svg)| hue:ceiling-explore | ![hue:ceiling-fair](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/ceiling-fair.svg)| hue:ceiling-fair |
| ![hue:ceiling-flourish](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/ceiling-flourish.svg)| hue:ceiling-flourish | ![hue:ceiling-fugato-four-alt](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/ceiling-fugato-four-alt.svg)| hue:ceiling-fugato-four-alt |
| ![hue:ceiling-fugato-four](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/ceiling-fugato-four.svg)| hue:ceiling-fugato-four | ![hue:ceiling-fugato-three-alt](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/ceiling-fugato-three-alt.svg)| hue:ceiling-fugato-three-alt |
| ![hue:ceiling-fugato-three](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/ceiling-fugato-three.svg)| hue:ceiling-fugato-three | ![hue:ceiling-fugato-two-alt](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/ceiling-fugato-two-alt.svg)| hue:ceiling-fugato-two-alt |
| ![hue:ceiling-fugato-two](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/ceiling-fugato-two.svg)| hue:ceiling-fugato-two | ![hue:ceiling-rect](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/ceiling-rect.svg)| hue:ceiling-rect |
| ![hue:ceiling-still](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/ceiling-still.svg)| hue:ceiling-still | ![hue:centris-three](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/centris-three.svg)| hue:centris-three |
| ![hue:centris-two](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/centris-two.svg)| hue:centris-two | ![hue:centris](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/centris.svg)| hue:centris |
| ![hue:centura-round](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/centura-round.svg)| hue:centura-round | ![hue:centura-two](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/centura-two.svg)| hue:centura-two |
| ![hue:centura](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/centura.svg)| hue:centura | ![hue:daylo-wall](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/daylo-wall.svg)| hue:daylo-wall |
| ![hue:ensis-up](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/ensis-up.svg)| hue:ensis-up | ![hue:ensis](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/ensis.svg)| hue:ensis |
| ![hue:flourish-alt](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/flourish-alt.svg)| hue:flourish-alt | ![hue:flourish](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/flourish.svg)| hue:flourish |
| ![hue:friends-of-hue-arke-round](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/friends-of-hue-arke-round.svg)| hue:friends-of-hue-arke-round | ![hue:friends-of-hue-arke](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/friends-of-hue-arke.svg)| hue:friends-of-hue-arke |
| ![hue:friends-of-hue-eikon](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/friends-of-hue-eikon.svg)| hue:friends-of-hue-eikon | ![hue:friends-of-hue-senic](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/friends-of-hue-senic.svg)| hue:friends-of-hue-senic |
| ![hue:gradient-lightstrip-wrap](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/gradient-lightstrip-wrap.svg)| hue:gradient-lightstrip-wrap | ![hue:gradient-lightstrip](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/gradient-lightstrip.svg)| hue:gradient-lightstrip |
| ![hue:gradient-tube-long](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/gradient-tube-long.svg)| hue:gradient-tube-long | ![hue:gradient-tube-short](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/gradient-tube-short.svg)| hue:gradient-tube-short |
| ![hue:liane](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/liane.svg)| hue:liane | ![hue:lightstrip-tv-alt](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/lightstrip-tv-alt.svg)| hue:lightstrip-tv-alt |
| ![hue:lightstrip-tv](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/lightstrip-tv.svg)| hue:lightstrip-tv | ![hue:lightstrip-wrap](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/lightstrip-wrap.svg)| hue:lightstrip-wrap |
| ![hue:lily-xl](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/lily-xl.svg)| hue:lily-xl | ![hue:pedestal-econic](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/pedestal-econic.svg)| hue:pedestal-econic |
| ![hue:pendant-long-up](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/pendant-long-up.svg)| hue:pendant-long-up | ![hue:pillar-nyro](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/pillar-nyro.svg)| hue:pillar-nyro |
| ![hue:pillar-spot-double](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/pillar-spot-double.svg)| hue:pillar-spot-double | ![hue:pillar-spot](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/pillar-spot.svg)| hue:pillar-spot |
| ![hue:pillar-tuar](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/pillar-tuar.svg)| hue:pillar-tuar | ![hue:play-bar-three](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/play-bar-three.svg)| hue:play-bar-three |
| ![hue:play-bar-two](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/play-bar-two.svg)| hue:play-bar-two | ![hue:play-bar-v-alt](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/play-bar-v-alt.svg)| hue:play-bar-v-alt |
| ![hue:play-bar-v](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/play-bar-v.svg)| hue:play-bar-v | ![hue:plug-eu](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/plug-eu.svg)| hue:plug-eu |
| ![hue:plug-uk](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/plug-uk.svg)| hue:plug-uk | ![hue:sana](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/sana.svg)| hue:sana |
| ![hue:signe-gradient-floor](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/signe-gradient-floor.svg)| hue:signe-gradient-floor | ![hue:signe-gradient-table](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/signe-gradient-table.svg)| hue:signe-gradient-table |
| ![hue:signe](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/signe.svg)| hue:signe | ![hue:socket-eu](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/socket-eu.svg)| hue:socket-eu |
| ![hue:socket-uk](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/socket-uk.svg)| hue:socket-uk | ![hue:socket-us](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/socket-us.svg)| hue:socket-us |
| ![hue:sync-box-alt](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/sync-box-alt.svg)| hue:sync-box-alt | ![hue:sync-box](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/sync-box.svg)| hue:sync-box |
| ![hue:tap](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/tap.svg)| hue:tap | ![hue:wall-appear](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-appear.svg)| hue:wall-appear |
| ![hue:wall-attract](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-attract.svg)| hue:wall-attract | ![hue:wall-econic-lantern-base](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-econic-lantern-base.svg)| hue:wall-econic-lantern-base |
| ![hue:wall-econic-lantern-top](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-econic-lantern-top.svg)| hue:wall-econic-lantern-top | ![hue:wall-econic-lantern](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-econic-lantern.svg)| hue:wall-econic-lantern |
| ![hue:wall-econic](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-econic.svg)| hue:wall-econic | ![hue:wall-flood](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-flood.svg)| hue:wall-flood |
| ![hue:wall-fuzo-h](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-fuzo-h.svg)| hue:wall-fuzo-h | ![hue:wall-fuzo](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-fuzo.svg)| hue:wall-fuzo |
| ![hue:wall-impress-narrow](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-impress-narrow.svg)| hue:wall-impress-narrow | ![hue:wall-impress](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-impress.svg)| hue:wall-impress |
| ![hue:wall-lucca](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-lucca.svg)| hue:wall-lucca | ![hue:wall-nyro](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-nyro.svg)| hue:wall-nyro |
| ![hue:wall-resonate](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-resonate.svg)| hue:wall-resonate | ![hue:wall-tuar](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-tuar.svg)| hue:wall-tuar |
| ![hue:wall-turaco](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wall-turaco.svg)| hue:wall-turaco | ![hue:wellner-solid](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wellner-solid.svg)| hue:wellner-solid |
| ![hue:wellner](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wellner.svg)| hue:wellner | ![hue:wellness](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/custom_svgs/wellness.svg)| hue:wellness |

[//]: # (End Custom Icons) 

### Icon Requests?
Your light not there? Let me know what's missing by raising a [Custom Icon Request](https://github.com/arallsopp/hass-hue-icons/issues/new?assignees=arallsopp&labels=icon+request&template=custom-icon-request.md&title=).


### Sample Dash 
With view icons and state color applied. Play bars are offline.
![lovelace_example](https://raw.githubusercontent.com/arallsopp/hass-hue-icons/main/docs/examples/lovelace_example.png)


### Compatibility with v1.0.8 and before.
Prior to v1.0.9, the icons glyphs were identified with underscores rather than dashes. 
For standards adhesion with HomeAssistant, the preferred names are now dash separated, eg. `hue:wall-spot`.
To maintain backwards compatibility, all old names still work, so `hue:wall-spot` and `hue:wall_spot` can be used interchangeably.

### Discussion:
There's a thread over at the [home assistant forums](https://community.home-assistant.io/t/created-custom-colorizable-hue-icons-as-a-lovelace-resource) that tracks this repo.

## Troubleshooting:

### Can't ever see the icons?
If you cannot see the new icons, or you get an empty box where you're expecting an icon, flush your network cache. 

### Icons don't show on first load of the dash?
Did you add the frontend extra_module_url in your configuration.yaml? See the [installation section](#installation) for details.

 
## Thanks and Props
@hulkhaugen and @thomasloven for the technique.
@ludeeus for the installation guidance.

### Stargazers
[![Stargazers repo roster for @arallsopp/hass-hue-icons](https://reporoster.com/stars/arallsopp/hass-hue-icons)](https://github.com/arallsopp/hass-hue-icons/stargazers)

---

### License

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].
I do this for fun and to give back to the community without charge. You may remix, tweak, and build upon this work non-commercially, as long as you credit the original author and license your new creations under identical terms. 
