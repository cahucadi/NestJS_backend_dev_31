import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateStudentDTO } from './dto/create_student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

    constructor(private readonly studentService: StudentService ){}

    @Get()
    async getStudents(@Res() res){
        const students = await this.studentService.getStudents();
        
        return res.status(HttpStatus.OK).json({
            message:'Students listed',
            students: students
        });
        

    }

    @Post("create")
    async createStudent(@Res() res, @Body() createStudentDTO: CreateStudentDTO){

        const student = await this.studentService.createStudent(createStudentDTO);

        return res.status(HttpStatus.CREATED).json({
            message:'accepted method',
            student: student
        });
    }

}
