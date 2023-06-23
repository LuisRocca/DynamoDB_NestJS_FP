import { DynamoDB } from 'aws-sdk';
import { dynamoDB } from '../client'
export async function getAllRecipes(): Promise<any[]> {
  const params: DynamoDB.DocumentClient.ScanInput = {
    TableName: 'recipe', // Reemplaza con el nombre de tu tabla
  };
 
  try {
    const result = await dynamoDB.scan(params).promise();
    return result.Items || [];
  } catch (error) {
    console.error('Error al obtener las recetas:', error);
    return [];
  }
}




