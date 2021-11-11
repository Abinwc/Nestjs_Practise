import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import { CloudStorageService } from '../core/services/cloud-storage.service';

@Module({
  controllers: [PhotosController],
  providers: [PhotosService, CloudStorageService]
})
export class PhotosModule {}
