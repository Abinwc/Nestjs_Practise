//const Cloud = require('@google-cloud/storage')
import * as Cloud from '@google-cloud/storage';
const path = require('path')
const serviceKey = path.join(__dirname, './keys.json')

const { Storage } = Cloud

export const storage = new Storage({
  keyFilename: serviceKey,
  projectId: 'reitan-denv',
});

const bucket = storage.bucket("fe",{});

