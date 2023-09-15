export interface ISubject {
    name: string;
    assessments: IAssessment[]
}

export interface IAssessment {
    name: string,
    weight: number,
    mark: number
}
