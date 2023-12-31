import { DynamoDB } from 'aws-sdk';

export async function createRestaurantTable(dynamoDB: DynamoDB): Promise<void> {
  const restaurantTableParams: DynamoDB.Types.CreateTableInput = {
    TableName: 'restaurant',
    AttributeDefinitions: [
      { AttributeName: 'id', AttributeType: 'S' },
    ],
    KeySchema: [
      { AttributeName: 'id', KeyType: 'HASH' },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  };

  try {
    await dynamoDB.createTable(restaurantTableParams).promise();
    console.log('Tabla restaurantTable creada correctamente');
  } catch (error) {
    if (error.statusCode === 400) {
      // console.log('tabla ya existente', error)
      return 
    }
    console.error('Error al crear la tabla restaurantTable:', error);
  }
}
