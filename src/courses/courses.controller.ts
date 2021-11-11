import { Body, Controller, Get, Post } from '@nestjs/common';
import { timeStamp } from 'console';
import { CourseDetails } from './courseDetails.dto';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {

    constructor(private CS : CoursesService){
        console.log("course.controller.ts")
    }

    @Post()
    addCourse(@Body() data : CourseDetails){
        return this.CS.addCourse(data);
    }

    @Get()
    getCourse(){
        return this.CS.getCourse()
    }
}
