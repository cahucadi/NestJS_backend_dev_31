import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IStudent } from './interfaces/student.interface';
import { CreateStudentDTO } from './dto/create_student.dto';

@Injectable()
export class StudentService {

    constructor(@InjectModel('Student') private readonly studentModel: Model<IStudent> ){}


    getStudents(): Promise<IStudent[]> {
        const students = this.studentModel.find();
        return Promise.resolve(students);
    }

    async getStudentByID(studentId: string):Promise<IStudent>{
        const student = await this.studentModel.findById(studentId);
        return student;
    }

    async createStudent(createStudentDTO: CreateStudentDTO): Promise<IStudent>{
        const student = new this.studentModel(createStudentDTO);
        await student.save();
        return student;
    }

    async updateStudent(studentId: string, createStudentDTO: CreateStudentDTO):Promise<IStudent>{
        const updatedStudent = await this.studentModel.findByIdAndUpdate(studentId, createStudentDTO, { new: true} );
        return updatedStudent;
    }

    async deleteStudent(studentId: string):Promise<IStudent>{
        const deletedStudent = await this.studentModel.findByIdAndDelete(studentId);
        return deletedStudent;
    }



}
