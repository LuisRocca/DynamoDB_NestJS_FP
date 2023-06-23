import { DynamoDB } from 'aws-sdk';
import { dynamoDB } from '../client'
export async function getAllRestaurants(): Promise<any[]> {
  const params: DynamoDB.DocumentClient.ScanInput = {
    TableName: 'restaurant', 
  };

  try {
    const result = await dynamoDB.scan(params).promise();
    return result.Items || [];
  } catch (error) {
    console.error('Error al obtener las recetas:', error);
    return [];
  }
}




