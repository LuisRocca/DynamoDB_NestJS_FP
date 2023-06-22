import { DynamoDB } from 'aws-sdk';
require('dotenv').config();

const dynamoDB = new DynamoDB.DocumentClient({
  region: 'us-west-2',
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEY,
});
export async function getRecipesByIngredient(ingredients: string): Promise<any[]> {
    const params: DynamoDB.DocumentClient.ScanInput = {
      TableName: 'recipe',
      FilterExpression: 'contains (#ingredients, :ingredients)',
      ExpressionAttributeNames: {
        '#ingredients': 'ingredients',
      },
      ExpressionAttributeValues: {
        ':ingredients': ingredients, // Ingrediente especificado por el usuario
      },
    };
    console.log('estre')
    try {
      const result = await dynamoDB.scan(params).promise();
      return result.Items || [];
    } catch (error) {
      console.error('Error al obtener las recetas:', error);
      return [];
    }
  }