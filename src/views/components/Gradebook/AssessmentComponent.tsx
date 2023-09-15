import { EditorSuggest, Menu, MenuItem, Modal, normalizePath } from "obsidian";
import { IAssessment } from "../../../util/Gradebook";
import { MouseEvent, useContext } from "react";
import { Icon } from "../Icon";
import { AppContext } from "views/grade-book-view";
import { getuid } from "process";
import { json } from "stream/consumers";
import MyPlugin from "main";


export function AssessmentComponent({assessment}: {assessment: IAssessment}) {

    const plugin = useContext(AppContext) as unknown as MyPlugin

    function showMenu(e: React.MouseEvent) {
        let clickMenu = new Menu()
        clickMenu.addItem((MenuItem) => {
            MenuItem.setIcon("lucide-edit-3")
            MenuItem.setTitle("Rename")
            MenuItem.onClick((e) => {
                console.log(`${assessment.name}`)
                document.querySelector(".nav-file")?.addClass(".is-being-renamed")
            })
        })
        clickMenu.addSeparator()
        clickMenu.addItem((MenuItem) => {
            MenuItem.setIcon("lucide-settings-2")
            MenuItem.setTitle("Edit")
            MenuItem.onClick((e) => {
                editAssessmentModel()
            })
        })
            clickMenu.showAtPosition({x: e.pageX, y: e.pageY})
    }

    function editAssessmentModel() {
        if (app) {
            let EditModel = new Modal(plugin?.app)
            EditModel.titleEl.title = `Editing ${assessment.name}`
            plugin.loadData().then((e) => {
                console.log(e.mySetting)
            })
            // TODO: Make this check if the current assessment exists, then make fields for it so it can be edited in the modal
            EditModel.open()
        }

    }


    return(
        <>
        <div onClick={(e) => showMenu(e)} className="tree-item nav-file">  
            <div className="tree-item-self is-clickable nav-file-title">
                <div className="gradebook-item-assessment-title">{assessment.name}</div>
                <div className="gradebook-item-mark">{assessment.mark}</div>
            </div>
        </div>
        </>

    )
}