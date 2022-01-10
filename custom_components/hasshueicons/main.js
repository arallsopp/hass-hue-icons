const HHI_DOMAIN = "hasshueicons";

const HHI_ICON_STORE = {};

const HHI_PREFIXES = {
    hue: "svgs"
};

const HHI_PATH_CLASSES = {
    primary: "primary",
    secondary: "secondary",
};

const HHI_ICON_MAP = {

    "adore":{
        keywords: ["bathroom","light","wall"]
    },
    "adore-alt":{
        keywords: ["bathroom","light","wall"]
    },
    "adore-mirror":{
        keywords: ["bathroom","light","wall"]
    },
    "amarant":{
        keywords: ["floor","light"]
    },
    "amaze":{
        keywords: ["ceiling","light","pendant"]
    },
    "amaze-alt":{
        keywords: ["ceiling","light","pendant"]
    },
    "aura":{
        keywords: ["floor","light","table"]
    },
    "aura-group":{
        keywords: ["floor","light","table"]
    },
    "beyond":{
        keywords: ["floor","lamp","light"]
    },
    "beyond-down":{
        keywords: ["floor","lamp","light"]
    },
    "beyond-solid":{
        keywords: ["floor","lamp","light"]
    },
    "beyond-up":{
        keywords: ["floor","lamp","light"]
    },
    "bloom":{
        keywords: ["floor","light","table"]
    },
    "bloom-group":{
        keywords: ["floor","light","table"]
    },
    "bollard":{
        keywords: ["calla","exterior","light","pillar"]
    },
    "bridge-v1":{
        keywords: ["infrastructure"]
    },
    "bridge-v2":{
        keywords: ["infrastructure"]
    },
    "bulb-candle":{
        keywords: ["light","retro"]
    },
    "bulb-classic":{
        keywords: ["light"]
    },
    "bulb-classic-hung":{
        keywords: ["light"]
    },
    "bulb-classic-off":{
        keywords: ["light"]
    },
    "bulb-filament":{
        keywords: ["light","retro"]
    },
    "bulb-filament-alt":{
        keywords: ["light","retro"]
    },
    "bulb-filament-alt-hung":{
        keywords: ["light","retro"]
    },
    "bulb-filament-candle":{
        keywords: ["light","retro"]
    },
    "bulb-filament-hung":{
        keywords: ["light","retro"]
    },
    "bulb-flood":{
        keywords: ["light","par38"]
    },
    "bulb-golfball-e14":{
        keywords: ["light"]
    },
    "bulb-group":{
        keywords: ["light","sultan"]
    },
    "bulb-group-bollard":{
        keywords: ["calla","exterior","light"]
    },
    "bulb-group-bollard-3":{
        keywords: ["calla","exterior","light"]
    },
    "bulb-group-candle":{
        keywords: ["light","retro"]
    },
    "bulb-group-candle-lightstrip":{
        keywords: ["light"]
    },
    "bulb-group-ceiling-round":{
        keywords: ["aurelle","devere","enrave","light"]
    },
    "bulb-group-ceiling-square":{
        keywords: ["aurelle","light","surimu"]
    },
    "bulb-group-centura":{
        keywords: ["ceiling","light"]
    },
    "bulb-group-centura-round":{
        keywords: ["ceiling","light"]
    },
    "bulb-group-classic":{
        keywords: ["light"]
    },
    "bulb-group-classic-hung":{
        keywords: ["light"]
    },
    "bulb-group-filament":{
        keywords: ["light","retro"]
    },
    "bulb-group-filament-alt":{
        keywords: ["light","retro"]
    },
    "bulb-group-filament-alt-filament-hung":{
        keywords: ["light"]
    },
    "bulb-group-filament-alt-hung":{
        keywords: ["light","retro"]
    },
    "bulb-group-filament-candle":{
        keywords: ["light","retro"]
    },
    "bulb-group-filament-filament-alt":{
        keywords: ["light","retro"]
    },
    "bulb-group-filament-filament-alt-hung":{
        keywords: ["light","retro"]
    },
    "bulb-group-filament-go":{
        keywords: ["light"]
    },
    "bulb-group-filament-hung":{
        keywords: ["light","retro"]
    },
    "bulb-group-filament-spot":{
        keywords: ["light"]
    },
    "bulb-group-filament-sultan":{
        keywords: ["light"]
    },
    "bulb-group-go-filament":{
        keywords: ["light"]
    },
    "bulb-group-go-sultan":{
        keywords: ["light"]
    },
    "bulb-group-golfball-e14":{
        keywords: ["light"]
    },
    "bulb-group-lightstrip":{
        keywords: ["led","light"]
    },
    "bulb-group-lightstrip-v":{
        keywords: ["led","light"]
    },
    "bulb-group-pillar-impress":{
        keywords: ["bollard","light"]
    },
    "bulb-group-pillar-impress-3":{
        keywords: ["bollard","light"]
    },
    "bulb-group-pillar-impress-short":{
        keywords: ["bollard","light"]
    },
    "bulb-group-pillar-turaco-short-tall":{
        keywords: ["exterior","light"]
    },
    "bulb-group-spot":{
        keywords: ["light"]
    },
    "bulb-group-sultan-go":{
        keywords: ["light"]
    },
    "bulb-group-sultan-lightstrip":{
        keywords: ["light"]
    },
    "bulb-group-sultan-lightstrip-off":{
        keywords: ["light"]
    },
    "bulb-group-sultan-spot":{
        keywords: ["light"]
    },
    "bulb-group-sultan-spot-off":{
        keywords: ["light"]
    },
    "bulb-par-38":{
        keywords: ["flood","light"]
    },
    "bulb-spot":{
        keywords: ["light"]
    },
    "bulb-spot-off":{
        keywords: ["light"]
    },
    "bulb-sultan":{
        keywords: ["light"]
    },
    "bulb-sultan-off":{
        keywords: ["light"]
    },
    "button":{
        keywords: ["light","switch","wall"]
    },
    "ceiling-aurelle":{
        keywords: ["light","panel"]
    },
    "ceiling-aurelle-circle":{
        keywords: ["light"]
    },
    "ceiling-aurelle-rect":{
        keywords: ["light","panel"]
    },
    "ceiling-being":{
        keywords: ["light"]
    },
    "ceiling-beyond":{
        keywords: ["light"]
    },
    "ceiling-beyond-alt":{
        keywords: ["light"]
    },
    "ceiling-buckram":{
        keywords: ["light","spot"]
    },
    "ceiling-buckram-three":{
        keywords: ["light","spot"]
    },
    "ceiling-buckram-two":{
        keywords: ["light","spot"]
    },
    "ceiling-buratto":{
        keywords: ["light","spot"]
    },
    "ceiling-buratto-four":{
        keywords: ["light","spot"]
    },
    "ceiling-buratto-three":{
        keywords: ["light","spot"]
    },
    "ceiling-buratto-two":{
        keywords: ["light","spot"]
    },
    "ceiling-cher-semiflush":{
        keywords: ["ceiling","light"]
    },
    "ceiling-explore":{
        keywords: ["light","pendant"]
    },
    "ceiling-fair":{
        keywords: ["light"]
    },
    "ceiling-fair-semiflush":{
        keywords: ["light","pendant"]
    },
    "ceiling-flourish":{
        keywords: ["light"]
    },
    "ceiling-flourish-pendant":{
        keywords: ["light"]
    },
    "ceiling-flush-circular":{
        keywords: ["light"]
    },
    "ceiling-fugato-four":{
        keywords: ["light","spot"]
    },
    "ceiling-fugato-four-alt":{
        keywords: ["light","spot"]
    },
    "ceiling-fugato-three":{
        keywords: ["light","spot"]
    },
    "ceiling-fugato-three-alt":{
        keywords: ["light","spot"]
    },
    "ceiling-fugato-two":{
        keywords: ["light","spot"]
    },
    "ceiling-fugato-two-alt":{
        keywords: ["light","spot"]
    },
    "ceiling-infuse":{
        keywords: ["light"]
    },
    "ceiling-muscari":{
        keywords: ["light"]
    },
    "ceiling-rect":{
        keywords: ["aurelle","light","panel","surimu"]
    },
    "ceiling-round":{
        keywords: ["devere","enrave","light"]
    },
    "ceiling-square":{
        keywords: ["aurelle","light","panel","surimu"]
    },
    "ceiling-still":{
        keywords: ["light"]
    },
    "ceiling-surimu":{
        keywords: ["light","panel"]
    },
    "ceiling-xamento":{
        keywords: ["ceiling","light"]
    },
    "centris":{
        keywords: ["ceiling","light","spot"]
    },
    "centris-three":{
        keywords: ["ceiling","light","spot"]
    },
    "centris-two":{
        keywords: ["ceiling","light","spot"]
    },
    "centura":{
        keywords: ["ceiling","light","spot"]
    },
    "centura-round":{
        keywords: ["ceiling","light","spot"]
    },
    "centura-two":{
        keywords: ["ceiling","light","spot"]
    },
    "daylo-wall":{
        keywords: ["light"]
    },
    "desk-lamp":{
        keywords: ["light","table"]
    },
    "dimmer-switch":{
        keywords: ["light","switch"]
    },
    "double-spot":{
        keywords: ["light"]
    },
    "downstairs":{
        keywords: ["area"]
    },
    "ensis":{
        keywords: ["ceiling","light","pendant"]
    },
    "ensis-up":{
        keywords: ["ceiling","light","pendant"]
    },
    "floor-lantern":{
        keywords: ["bollard","exterior","lamp","light"]
    },
    "floor-lantern-group":{
        keywords: ["bollard","exterior","lamp","light"]
    },
    "floor-lantern-off":{
        keywords: ["bollard","exterior","lamp","light"]
    },
    "floor-shade":{
        keywords: ["lamp","light"]
    },
    "floor-spot":{
        keywords: ["light"]
    },
    "flourish":{
        keywords: ["floor","light","table"]
    },
    "flourish-alt":{
        keywords: ["floor","light","table"]
    },
    "friends-of-hue-20042LEDSWACDMG-BLRFR":{
        keywords: ["exterior","light","wall"]
    },
    "friends-of-hue-arke":{
        keywords: ["light","switch"]
    },
    "friends-of-hue-arke-round":{
        keywords: ["light","switch"]
    },
    "friends-of-hue-eikon":{
        keywords: ["light","switch"]
    },
    "friends-of-hue-flat-p":{
        keywords: ["light","wall"]
    },
    "friends-of-hue-flat-p-alt":{
        keywords: ["light","wall"]
    },
    "friends-of-hue-iq-flush":{
        keywords: ["ceiling","light"]
    },
    "friends-of-hue-iq-pendant":{
        keywords: ["ceiling","light"]
    },
    "friends-of-hue-retrotouch-black-chrome":{
        keywords: ["light","switch"]
    },
    "friends-of-hue-retrotouch-black-plain":{
        keywords: ["light","switch"]
    },
    "friends-of-hue-retrotouch-white-chrome":{
        keywords: ["light","switch"]
    },
    "friends-of-hue-retrotouch-white-plain":{
        keywords: ["light","switch"]
    },
    "friends-of-hue-rigel":{
        keywords: ["ceiling","light","pendant"]
    },
    "friends-of-hue-senic":{
        keywords: ["light","switch"]
    },
    "go":{
        keywords: ["floor","light","table"]
    },
    "go-group":{
        keywords: ["floor","light","table"]
    },
    "go-off":{
        keywords: ["floor","light","table"]
    },
    "gradient-lightstrip":{
        keywords: ["led","light"]
    },
    "gradient-lightstrip-wrap":{
        keywords: ["led","light"]
    },
    "gradient-tube-long":{
        keywords: ["light"]
    },
    "gradient-tube-short":{
        keywords: ["light"]
    },
    "iris":{
        keywords: ["floor","light","table"]
    },
    "liane":{
        keywords: ["floor","light","table"]
    },
    "lightstrip":{
        keywords: ["led","light"]
    },
    "lightstrip-off":{
        keywords: ["led","light"]
    },
    "lightstrip-tv":{
        keywords: ["led","light"]
    },
    "lightstrip-tv-alt":{
        keywords: ["led","light"]
    },
    "lightstrip-tv-off":{
        keywords: ["led","light"]
    },
    "lightstrip-wrap":{
        keywords: ["led","light"]
    },
    "lily":{
        keywords: ["exterior","light","spot"]
    },
    "lily-two":{
        keywords: ["exterior","light","spot"]
    },
    "lily-xl":{
        keywords: ["exterior","light","spot"]
    },
    "logo":{
        keywords: ["philips"]
    },
    "logo-alt":{
        keywords: ["philips"]
    },
    "motion-sensor":{
        keywords: ["pir"]
    },
    "motion-sensor-temperature":{
        keywords: ["pir"]
    },
    "outdoor-motion-sensor":{
        keywords: ["exterior","pir"]
    },
    "outdoor-motion-sensor-temperature":{
        keywords: ["exterior","pir"]
    },
    "pedestal-econic":{
        keywords: ["bollard","exterior","lamp","light"]
    },
    "pendant-being":{
        keywords: ["ceiling","light"]
    },
    "pendant-cher":{
        keywords: ["ceiling","light"]
    },
    "pendant-long":{
        keywords: ["ceiling","light"]
    },
    "pendant-long-up":{
        keywords: ["ceiling","light"]
    },
    "pendant-muscari":{
        keywords: ["ceiling","light"]
    },
    "pendant-round":{
        keywords: ["ceiling","light"]
    },
    "phoenix-pendant":{
        keywords: ["ceiling","light"]
    },
    "phoenix-plafond":{
        keywords: ["ceiling","light"]
    },
    "phoenix-semiflush":{
        keywords: ["ceiling","light"]
    },
    "phoenix-table":{
        keywords: ["lamp","light"]
    },
    "pillar-impress":{
        keywords: ["bollard","exterior","light"]
    },
    "pillar-impress-short":{
        keywords: ["bollard","exterior","light"]
    },
    "pillar-nyro":{
        keywords: ["bollard","exterior","light"]
    },
    "pillar-spot":{
        keywords: ["light"]
    },
    "pillar-spot-double":{
        keywords: ["light"]
    },
    "pillar-tuar":{
        keywords: ["bollard","exterior","lamp","light"]
    },
    "pillar-turaco-short":{
        keywords: ["exterior","light"]
    },
    "pillar-turaco-tall":{
        keywords: ["exterior","light"]
    },
    "play-bar":{
        keywords: ["light"]
    },
    "play-bar-three":{
        keywords: ["light"]
    },
    "play-bar-two":{
        keywords: ["light"]
    },
    "play-bar-v":{
        keywords: ["light"]
    },
    "play-bar-v-alt":{
        keywords: ["light"]
    },
    "play-bar-v-two":{
        keywords: ["light"]
    },
    "play-bar-v-two-in":{
        keywords: ["light"]
    },
    "play-bar-v-two-out":{
        keywords: ["light"]
    },
    "plug":{
        keywords: ["infrastructure","light"]
    },
    "plug-eu":{
        keywords: ["infrastructure","light"]
    },
    "plug-uk":{
        keywords: ["infrastructure","light"]
    },
    "recessed-ceiling":{
        keywords: ["light"]
    },
    "recessed-floor":{
        keywords: ["light"]
    },
    "room-attic":{
        keywords: ["area","light"]
    },
    "room-balcony":{
        keywords: ["area","bannister","light"]
    },
    "room-bathroom":{
        keywords: ["area","shower"]
    },
    "room-bbq":{
        keywords: ["area","barbecue"]
    },
    "room-bedroom":{
        keywords: ["area","double"]
    },
    "room-carport":{
        keywords: ["area","garage"]
    },
    "room-closet":{
        keywords: ["area"]
    },
    "room-computer":{
        keywords: ["area"]
    },
    "room-dining":{
        keywords: ["area"]
    },
    "room-driveway":{
        keywords: ["area"]
    },
    "room-front-door":{
        keywords: ["area"]
    },
    "room-games":{
        keywords: ["area","console","xbox"]
    },
    "room-garage":{
        keywords: ["area","config","tools"]
    },
    "room-guestroom":{
        keywords: ["area","bed","single"]
    },
    "room-gym":{
        keywords: ["area","exercise","weights"]
    },
    "room-hallway":{
        keywords: ["area","coat"]
    },
    "room-kids":{
        keywords: ["area","bear","toy"]
    },
    "room-kitchen":{
        keywords: ["area","cook"]
    },
    "room-laundry":{
        keywords: ["area","utility","washing"]
    },
    "room-living":{
        keywords: ["area","lounge","settee","sofa"]
    },
    "room-lounge":{
        keywords: ["area","chaise","settee"]
    },
    "room-nursery":{
        keywords: ["area","rocking","toys"]
    },
    "room-office":{
        keywords: ["area","chair","work"]
    },
    "room-other":{
        keywords: ["area","door"]
    },
    "room-outdoors":{
        keywords: ["area","garden","trees"]
    },
    "room-pool":{
        keywords: ["area","swim"]
    },
    "room-porch":{
        keywords: ["area","rocking"]
    },
    "room-recreation":{
        keywords: ["area","games","ping","toys"]
    },
    "room-stairs":{
        keywords: ["area","basement","upstairs"]
    },
    "room-storage":{
        keywords: ["area","box","filing"]
    },
    "room-studio":{
        keywords: ["area","easel","paint"]
    },
    "room-terrace":{
        keywords: ["area","picnic"]
    },
    "room-toilet":{
        keywords: ["area","wc"]
    },
    "sana":{
        keywords: ["light"]
    },
    "sana-alt":{
        keywords: ["light"]
    },
    "signe":{
        keywords: ["light"]
    },
    "signe-gradient-floor":{
        keywords: ["light"]
    },
    "signe-gradient-table":{
        keywords: ["light"]
    },
    "single-spot":{
        keywords: ["ceiling","light"]
    },
    "socket-eu":{
        keywords: ["infrastructure","light"]
    },
    "socket-uk":{
        keywords: ["infrastructure","light"]
    },
    "socket-us":{
        keywords: ["infrastructure","light"]
    },
    "sync-box":{
        keywords: ["infrastructure","light"]
    },
    "sync-box-alt":{
        keywords: ["infrastructure","light"]
    },
    "table-shade":{
        keywords: ["lamp","light"]
    },
    "table-wash":{
        keywords: ["light"]
    },
    "tap":{
        keywords: ["light","switch"]
    },
    "upstairs":{
        keywords: ["light"]
    },
    "wall-appear":{
        keywords: ["exterior","light"]
    },
    "wall-appear-group":{
        keywords: ["exterior","light"]
    },
    "wall-attract":{
        keywords: ["exterior","light"]
    },
    "wall-econic":{
        keywords: ["exterior","light"]
    },
    "wall-econic-lantern":{
        keywords: ["exterior","light"]
    },
    "wall-econic-lantern-base":{
        keywords: ["exterior","light"]
    },
    "wall-econic-lantern-top":{
        keywords: ["exterior","light"]
    },
    "wall-flood":{
        keywords: ["exterior","light"]
    },
    "wall-fuzo":{
        keywords: ["exterior","light"]
    },
    "wall-fuzo-h":{
        keywords: ["exterior","light"]
    },
    "wall-impress":{
        keywords: ["exterior","light"]
    },
    "wall-impress-narrow":{
        keywords: ["exterior","light"]
    },
    "wall-lantern":{
        keywords: ["exterior","light"]
    },
    "wall-lucca":{
        keywords: ["exterior","light"]
    },
    "wall-lucca-alt":{
        keywords: ["exterior","light"]
    },
    "wall-lucca-alt-below":{
        keywords: ["exterior","light"]
    },
    "wall-nyro":{
        keywords: ["exterior","light"]
    },
    "wall-resonate":{
        keywords: ["exterior","light"]
    },
    "wall-shade":{
        keywords: ["lamp","light"]
    },
    "wall-spot":{
        keywords: ["light"]
    },
    "wall-switch-module":{
        keywords: ["switch"]
    },
    "wall-tuar":{
        keywords: ["exterior","light"]
    },
    "wall-turaco":{
        keywords: ["exterior","light"]
    },
    "wellner":{
        keywords: ["light","table"]
    },
    "wellner-solid":{
        keywords: ["light","table"]
    },
    "wellness":{
        keywords: ["light","table"]
    }
};

const preProcessIcon = async (iconSet, iconName) => {
    const [icon, format] = iconName.split("#");
    const data = await fetch(`/${HHI_DOMAIN}/icons/${iconSet}/${icon}.svg`);
    const text = await data.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");

    if (!doc || !doc.querySelector("svg")) return {};

    const viewBox = doc.querySelector("svg").getAttribute("viewBox");
    const _paths = doc.querySelectorAll("path");
    const paths = {};
    let path = "";
    for (const pth of _paths) {
        path = path + pth.getAttribute("d");
        const cls = pth.classList[0];
        if (HHI_PATH_CLASSES[cls]) {
            paths[HHI_PATH_CLASSES[cls]] = pth.getAttribute("d");
        }
    }

    // Don't allow full code to be used if the svg may contain javascript
    let fullCode = null;
    const svgEl = doc.querySelector("svg");
    const hasOn = Array.from(svgEl.attributes).some((a) =>
        a.name.startsWith("on")
    );
    if (!hasOn) {
        if (!svgEl.getElementsByTagName("script").length) {
            fullCode = svgEl;
        }
    }

    return { viewBox, path, paths, format, fullCode };
};

const getIcon = (iconSet, iconName) => {
    return new Promise(async (resolve, reject) => {
        const icon = `${iconSet}:${iconName}`;
        if (HHI_ICON_STORE[icon]) resolve(HHI_ICON_STORE[icon]);

        HHI_ICON_STORE[icon] = preProcessIcon(iconSet, iconName);

        resolve(HHI_ICON_STORE[icon]);
    });
};

const getIconList = async (iconSet) => {
    const data = await fetch(`/${HHI_DOMAIN}/list/${iconSet}`);
    const text = await data.text();
    let listing = JSON.parse(text);
    for (let i = 0;i < listing.length; i++){
        listing[i].keywords = HHI_ICON_MAP.hasOwnProperty(listing[i].name) ? HHI_ICON_MAP[listing[i].name].keywords : [];
    }
    return listing;
};

if (!("customIconsets" in window)) {
    window.customIconsets = {};
}
if (!("customIcons" in window)) {
    window.customIcons = {};
}

window.customIcons["hue"] = {
    getIcon: (iconName) => getIcon("svgs", iconName),
    getIconList: () => getIconList("svgs")
};
window.customIcons["my"] = {
    getIcon: (iconName) => getIcon("my", iconName),
    getIconList: () => getIconList("my")

};

// Duotone patches
customElements.whenDefined("ha-icon").then(() => {
    const HaIcon = customElements.get("ha-icon");
    HaIcon.prototype._setCustomPath = async function (promise, requestedIcon) {
        const icon = await promise;
        if (requestedIcon !== this.icon) return;
        this._path = icon.path;
        this._viewBox = icon.viewBox;

        await this.UpdateComplete;

        const el = this.shadowRoot.querySelector("ha-svg-icon");
        if (!el || !el.setPaths) {
            return;
        }
        el.clearPaths();

        if (icon.fullCode && icon.format === "fullcolor") {
            await el.updateComplete;
            const root = el.shadowRoot.querySelector("svg");
            const styleEl = document.createElement("style");
            styleEl.innerHTML = `
        svg:first-child>g:first-of-type>path {
          display: none;
        }
      `;
            root.appendChild(styleEl);
            root.appendChild(icon.fullCode.cloneNode(true));
        } else {
            el.setPaths(icon.paths);
            if (icon.format) {
                el.classList.add(...icon.format.split("-"));
            }
        }
    };
});

customElements.whenDefined("ha-svg-icon").then(() => {
    const HaSvgIcon = customElements.get("ha-svg-icon");

    HaSvgIcon.prototype.clearPaths = async function () {
        await this.updateComplete;

        const svgRoot = this.shadowRoot.querySelector("svg");
        while (svgRoot && svgRoot.children.length > 1)
            svgRoot.removeChild(svgRoot.lastChild);

        const svgGroup = this.shadowRoot.querySelector("g");
        while (svgGroup && svgGroup.children.length > 1)
            svgGroup.removeChild(svgGroup.lastChild);

        while (this.shadowRoot.querySelector("style.hasshueicons")) {
            const el = this.shadowRoot.querySelector("style.hasshueicons");
            el.parentNode.removeChild(el);
        }
    };

    HaSvgIcon.prototype.setPaths = async function (paths) {
        await this.updateComplete;
        if (paths == undefined || Object.keys(paths).length === 0) return;
        const styleEl =
            this.shadowRoot.querySelector("style.hasshueicons") ||
            document.createElement("style");
        styleEl.classList.add("hasshueicons");
        styleEl.innerHTML = `
      .secondary {
        opacity: 0.4;
      }
      :host(.invert) .secondary {
        opacity: 1;
      }
      :host(.invert) .primary {
        opacity: 0.4;
      }
      :host(.color) .primary {
        opacity: 1;
      }
      :host(.color) .secondary {
        opacity: 1;
      }
      :host(.color:not(.invert)) .secondary {
        fill: var(--icon-secondary-color, var(--disabled-text-color));
      }
      :host(.color.invert) .primary {
        fill: var(--icon-secondary-color, var(--disabled-text-color));
      }
      path:not(.primary):not(.secondary) {
        opacity: 0;
      }
      `;
        this.shadowRoot.appendChild(styleEl);
        const root = this.shadowRoot.querySelector("g");
        for (const k in paths) {
            const el = document.createElementNS("http://www.w3.org/2000/svg", "path");
            el.setAttribute("d", paths[k]);
            el.classList.add(k);
            root.appendChild(el);
        }
    };
});

console.info(
    `%c HASS-HUE-ICONS %c Version 2.0.0 `,
    "color: orange; font-weight: bold; background: black",
    "color: white; font-weight: bold; background: dimgray"
);