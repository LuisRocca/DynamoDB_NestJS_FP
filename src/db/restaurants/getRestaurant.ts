import { DynamoDB } from 'aws-sdk';
import { dynamoDB } from '../client'

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