import { Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';

@Controller('student')
export class StudentController {

    @Get()
    getStudents():string{
        return "We the people";
    }

    @Post("create")
    createStudent(@Res() res){
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message:'accepted method'
        });
    }

}
