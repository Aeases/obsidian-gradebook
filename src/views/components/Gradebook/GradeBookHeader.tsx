import { App, Plugin } from "obsidian"
import { CreateSubjectModal } from "./Modals"
import { Icon } from "../Icon"


export function GradeBookHeader({app, plugin}: {app: App, plugin: Plugin}) {
    return(
        <div className="nav-header ">
            <button className="nav-action-button clickable-icon gradebook-header-create-new-subject" onClick={((e) => {new CreateSubjectModal(app, plugin).open()})}>
                <Icon name="copy-plus" />
            </button>
            <div className="gradebook-header-inline-title">
                <p className="gradebook-no-margin">Weighted Average: 69.2%</p>
            </div>
        </div>
    )
}