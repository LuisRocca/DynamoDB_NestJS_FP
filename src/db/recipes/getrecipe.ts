import { DynamoDB } from 'aws-sdk';
import { dynamoDB } from '../client'

export async function getOneRecipe(uniqueId: string): Promise<any[]> {
    const params: DynamoDB.DocumentClient.QueryInput = {
      TableName: 'recipe',
      KeyConditionExpression: 'id = :id',
      ExpressionAttributeValues: {
        ':id': uniqueId,
      },
    };
    try {
      const result = await dynamoDB.query(params).promise();
      return result.Items || [];
      // console.log('Datos consultados:', result.Items);
    } catch (error) {
      console.error('Error al consultar datos:', error);
      return [];
    }
  }