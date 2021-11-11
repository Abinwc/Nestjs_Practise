import { Injectable } from '@nestjs/common';
import { CourseDetails } from './courseDetails.dto';
import * as admin from 'firebase-admin'

@Injectable()
export class CoursesService {

    courses:CourseDetails;

    constructor(){
        console.log("course.service.ts")
    }

    

addCourse (data : CourseDetails){
    this.courses=data
    console.log(this.courses) 
    admin.database().ref('course-details').push(this.courses)
    return this.courses;
}


async getCourse(){
/*     console.log("service called")
    return "received the courses" */
    console.log(await admin.database().ref('course-details').once('value'))
    return admin.database().ref('course-details').once('value')

}
}
