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

    getStudents(): Promise<IStudent[]> {
        const students = this.studentRepository.find();
        console.log(students);
        return Promise.resolve(students);

    }

    getStudentByID(studentId: string):Promise<IStudent>{
        const student = this.studentRepository.findOne(studentId);
        console.log(student);
        return Promise.resolve(student);
    }

    createStudent(createStudentDTO: CreateStudentDTO): Promise<IStudent>{
        const student = this.studentRepository.save(createStudentDTO);
        return Promise.resolve(student);

    }

    updateStudent(studentId: string, createStudentDTO: CreateStudentDTO):Promise<any>{
        const updatedStudent = this.studentRepository.update(studentId ,createStudentDTO );
        return Promise.resolve(updatedStudent);
    }

    deleteStudent(studentId: string):Promise<any>{
        const deletedStudent = this.studentRepository.delete(studentId);
        return Promise.resolve(deletedStudent);
    }



}
