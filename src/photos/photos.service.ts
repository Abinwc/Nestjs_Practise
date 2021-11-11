import { Injectable, Logger } from '@nestjs/common';
import * as util from 'util';
const { format } = util;
import { CloudStorageService } from '../core/services/cloud-storage.service';

@Injectable()
export class PhotosService {
	private logger: Logger;
	constructor(private cloudStorageService: CloudStorageService){
		this.logger = new Logger('PHOTO_SERVICE');
	}

	
	async save(logo){

   if (logo) {
      const file = await this.cloudStorageService.uploadFile(logo, '');
		  return file;	
	 }
	}

	
   makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
   charactersLength));
     }
     return result;
  }
}

