Hooks.once("ready", () => {
    CONFIG.DND5E.featureTypes.witchcraft = {
        label: "Witchcraft",
        subtypes: {
            curse: "Witch's Curse",
            hex: "Hex",
            grandhex: "Grand Hex"
        }
    };
});