import { DynamoDB } from 'aws-sdk';
require('dotenv').config();

const dynamoDB = new DynamoDB.DocumentClient({
  region: 'us-west-2',
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEY,
});
export async function getAllRecipes(): Promise<any[]> {
  const params: DynamoDB.DocumentClient.ScanInput = {
    TableName: 'recipe', // Reemplaza con el nombre de tu tabla
  };
 console.log('este es el getall')
  try {
    const result = await dynamoDB.scan(params).promise();
    return result.Items || [];
  } catch (error) {
    console.error('Error al obtener las recetas:', error);
    return [];
  }
}




