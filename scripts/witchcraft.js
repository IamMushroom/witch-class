const label = game.i18n.localize("witchcraft.label")
const curse = game.i18n.localize("witchcraft.subtypes.curse")
const hex = game.i18n.localize("witchcraft.subtypes.hex")
const grandhex = game.i18n.localize("witchcraft.subtypes.grandhex")

Hooks.on("ready", () => {
    CONFIG.DND5E.featureTypes.witchcraft = {
        label: label,
        subtypes: {
            curse: curse,
            hex: hex,
            grandhex: grandhex
        }
    };
});