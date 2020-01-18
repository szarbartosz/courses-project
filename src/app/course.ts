export enum Types {
    Wykład,
    Ćwiczenia,
    Laboratoria
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
    rate: number;
    rateSum: number;
    rateNo: number;
}