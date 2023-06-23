import { DynamoDB } from 'aws-sdk';
import { dynamoDB } from '../client'
export async function getRecipesByIngredient(ingredients: string): Promise<any[]> {
    const params: DynamoDB.DocumentClient.ScanInput = {
      TableName: 'recipe',
      FilterExpression: 'contains (#ingredients, :ingredients)',
      ExpressionAttributeNames: {
        '#ingredients': 'ingredients',
      },
      ExpressionAttributeValues: {
        ':ingredients': ingredients, 
      },
    };
    
    try {
      const result = await dynamoDB.scan(params).promise();
      return result.Items || [];
    } catch (error) {
      console.error('Error al obtener las recetas:', error);
      return [];
    }
  }