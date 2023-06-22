import { Injectable } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';


@Injectable()
export class AppService {
  private readonly dynamoDBClinet: DynamoDB;
  private readonly dynamoDB: DocumentClient;

  constructor() {
    this.dynamoDBClinet = new DynamoDB(); 
    this.dynamoDB = new DynamoDB.DocumentClient();
  }
  

  async createTable(): Promise<void> {
    const params: DynamoDB.Types.CreateTableInput = {
      TableName: 'exampleTable',
      AttributeDefinitions: [
        { AttributeName: 'id', AttributeType: 'N' },
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
      await this.dynamoDBClinet.createTable(params).promise();
      console.log('Tabla creada correctamente');
    } catch (error) {
      console.error('Error al crear la tabla:', error);
    }
  }

  async insertData(): Promise<void> {
    const params: DynamoDB.DocumentClient.PutItemInput = {
      TableName: 'exampleTable',
      Item: {
        id: 3,
        name: 'Ejemplo2',
        email: 'ejemploEjemplar'
      },
    };

    try {
      await this.dynamoDB.put(params).promise();
      console.log('Datos insertados correctamente');
    } catch (error) {
      console.error('Error al insertar datos:', error);
    }
  }

  async queryData(): Promise<void> {
    const params: DynamoDB.DocumentClient.QueryInput = {
      TableName: 'exampleTable',
      KeyConditionExpression: 'id = :id',
      ExpressionAttributeValues: {
        ':id': 1,
      },
    };

    try {
      const result = await this.dynamoDB.query(params).promise();
      console.log('Datos consultados:', result.Items);
    } catch (error) {
      console.error('Error al consultar datos:', error);
    }
  }
  getHello(): string {
    // this.createTable()
    this.insertData()
    // this.queryData()
    return 'Hello World!';
  }
}
