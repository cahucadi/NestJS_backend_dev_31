import { Document } from "mongoose";

export interface IStudent extends Document {
    readonly code: number,
    readonly name: string,
    readonly photoURL: string,
    readonly createdAt: Date
}