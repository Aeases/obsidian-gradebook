import { IAssessment, ISubject } from "./util/Gradebook";

class Subject implements ISubject {
    constructor({name, assessments}: ISubject) {
        this.name = name
        this.assessments = assessments
    }
    name: string;
    assessments: IAssessment[];
    getWeightedScore(): number {
        throw new Error("Method not implemented.");
    }
    
}

class Assessment implements IAssessment{
    name: string;
    weight: number;
    mark: number;
    constructor({name, weight, mark}: IAssessment) {
        this.name = name
        this.mark = mark
        this.weight = weight
    }
}


let asses: IAssessment[] = [
    new Assessment({name: "Balance of Payments", mark: 0.75, weight: 0.10}),
    new Assessment({name: "Aggregate Demand & Supply", mark: 0.35, weight: 0.10}),
    new Assessment({name: "Demand-Side Economic Management", mark: 0.50, weight: 0.10}),
    new Assessment({name: "Structural Reform & Productivity", mark: 0.65, weight: 0.10}),
]

export let English_Subject = new Subject({name: "Economics", assessments: asses})