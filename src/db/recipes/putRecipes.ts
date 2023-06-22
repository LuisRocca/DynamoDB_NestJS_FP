import { DynamoDB } from 'aws-sdk';
require('dotenv').config();

export async function insertRecipes(createRecipeDto, uniqueId): Promise<void> {
  const dynamoDB = new DynamoDB.DocumentClient({
    region: 'us-west-2',
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY,
  });
  const {name,ingredients} = createRecipeDto
  const params: DynamoDB.DocumentClient.PutItemInput = {
    TableName: 'recipe',
    Item: {
      id: uniqueId,
      name: name,
      ingredients: ingredients,
    },
  };

  try {
    await dynamoDB.put(params).promise();
    console.log('Datos insertados correctamente');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  }
}
