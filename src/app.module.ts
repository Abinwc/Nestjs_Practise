import { Module } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import { PhotosModule } from './photos/photos.module';

@Module({
  imports: [CoursesModule, PhotosModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(){
  }
}
