import { baseClassName } from "main";
import { App, normalizePath } from "obsidian";



export function getSettingsJson(app: App) {
    const configDir = app.vault.configDir
    app.vault.adapter.read(normalizePath(`${configDir}/plugins/${baseClassName}`)).then((v) => {
        return(JSON.parse(v))
    })
}