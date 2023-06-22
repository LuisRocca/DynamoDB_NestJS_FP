import { DynamoDB } from 'aws-sdk';
require('dotenv').config();

export async function insertRestaurants(createRestaurantDto,uniqueId): Promise<void> {
  const dynamoDB = new DynamoDB.DocumentClient({
    region: 'us-west-2',
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY,
  });
  const {name , recipes, address} = createRestaurantDto
  const params: DynamoDB.DocumentClient.PutItemInput = {
    TableName: 'restaurant',
    Item: {
      id: uniqueId,
      name: name,
      recipes: recipes,
      address: address
    },
  };

  try {
    await dynamoDB.put(params).promise();
    console.log('Datos insertados correctamente');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  }
}
