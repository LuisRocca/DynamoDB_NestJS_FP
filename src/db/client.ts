import { DynamoDB } from 'aws-sdk';
require('dotenv').config();

export const dynamoDB = new DynamoDB.DocumentClient({
  region: process.env.REGION,
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEY,
});