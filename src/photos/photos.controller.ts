import {
	Controller,
	Post,
	UseInterceptors,
	UploadedFile,
	UploadedFiles,
	BadRequestException,
	Logger,
	Body,
	Patch
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {
	private logger: Logger;

	constructor(private PS: PhotosService) {
		this.logger = new Logger('PHOTO_CONTROLLER');
	}

	@UseInterceptors(
		FileInterceptor('logo', {
			storage: memoryStorage(),
			limits: { fileSize: 2097152 }, // 2MB --- 2*2^20
			fileFilter: (req, file, callback) => {
				return file.mimetype.match(/image\/(jpg|jpeg|png|gif)$/)
					? callback(null, true)
					: callback(
							new BadRequestException('Only image files are allowed'),
							false,
					  );
			},
		}),
	)

	@Post('upload')
	async save(@UploadedFile() logo) {
		this.logger.log(`Save function called with data : ${JSON.stringify(logo)}`);
		this.logger.debug(`logo: ${logo}`);
		return this.PS.save(logo);
	}

	@Post('uploads')
	@UseInterceptors(FilesInterceptor('photos[]', 10, { dest: './uploads' }))
	uploadMultiple(@UploadedFiles() files) {
		console.log(files);
	}
}
