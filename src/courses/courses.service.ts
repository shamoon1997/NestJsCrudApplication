import { HttpException, Injectable } from '@nestjs/common';
import { resolve } from 'path';
import { COURSES } from '../Data/courses.mock';
@Injectable()
export class CoursesService {
    courses=COURSES

    getCourses(): Promise<any>{
        return new Promise(resolve=>{
            resolve(this.courses);
        })
    }
    getCourse(courseId: Number): Promise<any>{
        return new Promise((resolve)=>{
            const course=this.courses.find((course)=> course.id == courseId)
            if (!course) {
                throw new HttpException('Course doesnot exists',404);
            }
            resolve(course);
        });
    }
    addCourse(course){
        this.courses.push(course);
        return this.courses;
    }
    deleteCourse(courseId: number) : any{
        const index=this.courses.findIndex((course)=>course.id==courseId);
        this.courses.splice(index,1);
        return this.courses;
    }
}
