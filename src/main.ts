import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
const bodyParser = require('body-parser')

//Fire-base
import * as admin from 'firebase-admin';
import { ServiceAccount } from "firebase-admin";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const serviceAccount = require('../firebase-secret.json')

  // Initialize the firebase admin app
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://rms-project-1d7f1-default-rtdb.firebaseio.com/",
  });

  app.enableCors();
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({extended: false}))
  await app.listen(5000);
  
}
bootstrap();
