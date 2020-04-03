var Brands = {
    "Omega": {
        "name": "Omega",
        "src": require("./Images/Brands_Logos/omega_logo.png"),
        "display": true

    },
    "Raymond Weil": {
        "name": "Raymond Weil",
        "src": require("./Images/Brands_Logos/Raymond_weil_logo.png"),
        "display": true

    },
    "Tag Heuer": {
        "name": "Tag Heuer",
        "src": require("./Images/Brands_Logos/tag_heuer_logo.png"),
        "display": true

    },
    "Tissot": {
        "name": "Tissot",
        "src": require("./Images/Brands_Logos/tissot_logo.png"),
        "display": true

    },
    "Pryngeps": {
        "name": "Pryngeps",
        "src": require("./Images/Brands_Logos/pryngeps_logo.png"),
        "display": true

    },
    "Heuer": {
        "name": "Heuer",
        "src": require("./Images/Brands_Logos/heuer_logo.png"),
        "display": false

    },
    "Camel Trophy": {
        "name": "Camel Trophy",
        "src": require("./Images/Brands_Logos/camel_logo.png"),
        "display": true

    },
    "Cauny": {
        "name": "Cauny",
        "src": require("./Images/Brands_Logos/cauny_logo.png"),
        "display": true

    },
    "Lanco": {
        "name": "Lanco",
        "src": require("./Images/Brands_Logos/lanco_logo.png"),
        "display": true

    },
    "Lorus": {
        "name": "Lorus",
        "src": require("./Images/Brands_Logos/lorus_logo.png"),
        "display": true

    },
    "Lucerne": {
        "name": "Lucerne",
        "src": require("./Images/Brands_Logos/Lucerne_logo.png"),
        "display": true

    },
    "Seiko": {
        "name": "Seiko",
        "src": require("./Images/Brands_Logos/seiko_logo.png"),
        "display": true

    },
    "Timex": {
        "name": "Timex",
        "src": require("./Images/Brands_Logos/timex_logo.png"),
        "display": true

    },
    "Solvil et Titus": {
        "name": "Solvil et Titus",
        "src": require("./Images/Brands_Logos/titus_logo.png"),
        "display": true

    },
    "Zodiac": {
        "name": "Zodiac",
        "src": require("./Images/Brands_Logos/zodiac_logo.png"),
        "display": true

    },
    "Admes": {
        "name": "Admes",
        "src": require("./Images/Brands_Logos/admes_logo.png"),
        "display": false

    },
    "Belex": {
        "name": "Belex",
        "src": require("./Images/Brands_Logos/belex_logo.png"),
        "display": false

    },
    "Calypso (Festina Group)": {
        "name": "Calypso (Festina Group)",
        "src": require("./Images/Brands_Logos/calypso_logo.png"),
        "display": false

    },
    "Celsus": {
        "name": "Celsus",
        "src": require("./Images/Brands_Logos/celsus_logo.png"),
        "display": false

    },
    "Royal Geographical Society": {
        "name": "Royal Geographical Society",
        "src": require("./Images/Brands_Logos/delma_logo.png"),
        "display": false

    },
    "Emes": {
        "name": "Emes",
        "src": require("./Images/Brands_Logos/Emes_logo.png"),
        "display": false

    },
    "Festina Group": {
        "name": "Festina Group",
        "src": require("./Images/Brands_Logos/Festina_Watches_logo.png"),
        "display": true

    },
    "Festina": {
        "name": "Festina",
        "src": require("./Images/Brands_Logos/Festina_Watches_logo.png"),
        "display": false

    },
    "Fontaine": {
        "name": "Fontaine",
        "src": require("./Images/Brands_Logos/fontaine_logo.png"),
        "display": false

    },
    "Greenwich": {
        "name": "Greenwich",
        "src": require("./Images/Brands_Logos/greenwich logo.png"),
        "display": false

    },
    "Helma": {
        "name": "Helma",
        "src": require("./Images/Brands_Logos/helma_logo.png"),
        "display": false

    },
    "Kelton": {
        "name": "Kelton",
        "src": require("./Images/Brands_Logos/kelton_logo.png"),
        "display": false

    },
    "Latino": {
        "name": "Latino",
        "src": require("./Images/Brands_Logos/latino_logo.png"),
        "display": false

    },
    "Martini": {
        "name": "Martino",
        "src": require("./Images/Brands_Logos/martini_logo.png"),
        "display": false

    },
    "Mercedes Benz": {
        "name": "Mercedes Benz",
        "src": require("./Images/Brands_Logos/mercedes_benz_logo.png"),
        "display": false

    },
    "Miura": {
        "name": "Miura",
        "src": require("./Images/Brands_Logos/miura_logo.png"),
        "display": false

    },
    "Monumental": {
        "name": "Monumental",
        "src": require("./Images/Brands_Logos/monumental_logo.png"),
        "display": false

    },
    "Natalis": {
        "name": "Natalis",
        "src": require("./Images/Brands_Logos/natalis_logo.png"),
        "display": false

    },
    "One": {
        "name": "One",
        "src": require("./Images/Brands_Logos/One_logo.png"),
        "display": false

    },
    "Omodox": {
        "name": "Omodox",
        "src": require("./Images/Brands_Logos/omodox_logo.png"),
        "display": false

    },
    "Provita": {
        "name": "Provita",
        "src": require("./Images/Brands_Logos/Provita_logo.png"),
        "display": false

    },
    "Rone": {
        "name": "Rone",
        "src": require("./Images/Brands_Logos/rone_logo.png"),
        "display": false

    },
    "Sector": {
        "name": "Sector",
        "src": require("./Images/Brands_Logos/sector_logo.png"),
        "display": false

    },
    "Tourist": {
        "name": "Tourist",
        "src": require("./Images/Brands_Logos/tourist_logo.png"),
        "display": false

    },
}

Brands = Object.assign({}, ...Object.entries(Brands).map(([k, v]) => ({
    [k]: v
})));


export default Brands