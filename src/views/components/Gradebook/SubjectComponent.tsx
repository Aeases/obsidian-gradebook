import { ISubject, IAssessment } from "../../../util/Gradebook"
import { Icon } from "../Icon";
import { AssessmentComponent } from "./AssessmentComponent";

export function SubjectComponent({subject}: {subject: ISubject}) {

    return(
        <div className="tree-item nav-folder ">
        <div className="tree-item-self is-clickable mod-collapsible nav-folder-title">
          <div className="tree-item-inner gradebook-subject-header-title ">
            {subject.name}
          </div>
          <div className="tree-item-icon collapse-icon nav-folder-collapse-indicator is-collapsed">
            <Icon name="right-triangle" className=""/>
          </div>
        </div>
        <div className="gradebook-tree-item-children">
            {subject.assessments.length != 0 && subject.assessments.map((a) => {
                return(<AssessmentComponent assessment={a} key={a.name} />)
            })}
        </div>
      </div>
    )
}