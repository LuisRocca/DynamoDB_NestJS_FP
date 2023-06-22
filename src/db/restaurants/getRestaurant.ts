import { DynamoDB } from 'aws-sdk';
require('dotenv').config();

const dynamoDB = new DynamoDB.DocumentClient({
  region: 'us-west-2',
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEY,
});
export async function getOneRestaurant(uniqueId: string): Promise<any[]> {
    const params: DynamoDB.DocumentClient.QueryInput = {
      TableName: 'restaurant',
      KeyConditionExpression: 'id = :id',
      ExpressionAttributeValues: {
        ':id': uniqueId,
      },
    };
  
    try {
      const result = await dynamoDB.query(params).promise();
      return result.Items || [];
    } catch (error) {
      console.error('Error al consultar datos:', error);
      return [];
    }
  }