import { Address } from "./address";

export interface University {
    _id: string;
    name: string;
    type: string;
    address: Address;
    url: string;
    totalStudents: number;
    establishmentDate: Date;
    coursenames: [string];
}