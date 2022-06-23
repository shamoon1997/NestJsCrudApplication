import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {CoursesService} from './courses.service'
import {AddCourse} from '../Validation/addCourse'

@Controller('courses')
export class CoursesController {
    constructor(private coursesService:CoursesService){};
    @Get()
    async getCourses(){
        return await this.coursesService.getCourses();
    }

    @Get(':courseId')
    async getCourse(@Param('courseId') courseId){
        return await this.coursesService.getCourse(courseId);
    }

    @Post()
    async addCourse(@Body() addCourse: AddCourse){
        return await this.coursesService.addCourse(addCourse);
    }

    @Delete(':courseId')
    async deleteCourse(@Param('courseId') courseId){
        return await this.coursesService.deleteCourse(courseId);
    }
}
