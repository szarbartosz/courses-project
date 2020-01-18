export enum Types {
    wykład,
    ćwiczenia,
    laboratoria
}

export interface Course{
    id: string;
    name: string;
    ects: number;
    type: Types;
    semester: number;
    capacity: number;
    img: string;
    description: string;
    rate: number[];
    students: string[];
}