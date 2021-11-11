import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IStudent } from './interfaces/student.interface';
import { CreateStudentDTO } from './dto/create_student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from './models/student.entity';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';

@Injectable()
export class StudentService {

    constructor(@InjectRepository(StudentEntity) private readonly studentRepository: Repository<IStudent>  ){}

    async getStudents(): Promise<IStudent[]> {
        const students = await this.studentRepository.find();
        console.log(students);
        return Promise.resolve(students);

    }

    async getStudentByID(studentId: string):Promise<IStudent>{
        const student = await this.studentRepository.findOne(studentId);
        console.log(student);
        return Promise.resolve(student);
    }

    async createStudent(createStudentDTO: CreateStudentDTO): Promise<IStudent>{
        const student = await this.studentRepository.save(createStudentDTO);
        return Promise.resolve(student);

    }

    async updateStudent(studentId: string, createStudentDTO: CreateStudentDTO):Promise<IStudent>{
        await this.studentRepository.update(studentId ,createStudentDTO );
        const updatedStudent = await this.studentRepository.findOne(studentId); 
        return Promise.resolve(updatedStudent);
    }

    async deleteStudent(studentId: string):Promise<IStudent>{
        const deletedStudent = await this.studentRepository.findOne(studentId); 
        await this.studentRepository.delete(studentId);
        return Promise.resolve(deletedStudent);
    }



}
