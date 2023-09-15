import * as React from "react";
import { getIcon, setIcon } from "obsidian";
import { SubjectComponent } from "./Gradebook/SubjectComponent"
import { Icon } from "./Icon";
import { English_Subject } from "subjects";
export function GradeBookComponent() {
  const svgIcon = getIcon("right-triangle")
  let f = svgIcon?.ELEMENT_NODE
  let Subject_Name = "Test_1"




  return(
    <>
        <SubjectComponent subject={English_Subject} />
    </>
  )


  return (
    <>
      <div className="nav-header"></div>
      <div className="nav-files-container">
      <div className="tree-item nav-folder ">
        <div className="tree-item-self is-clickable mod-collapsible nav-folder-title">
          <div className="tree-item-inner setting-item-name">
            {Subject_Name}
          </div>
          <div className="tree-item-icon collapse-icon nav-folder-collapse-indicator is-collapsed">
            <Icon name="right-triangle" className=""/>
          </div>
        </div>
        <div className="gradebook-tree-item-children">
          <div className="tree-item nav-file">
            <div className="tree-item-self is-clickable nav-file-title">fdgfsdgd</div>
          </div>
        </div>
      </div>

    </div>
    </>

  )



};