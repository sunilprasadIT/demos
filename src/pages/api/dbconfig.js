// Create service client module using ES6 syntax.
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

// Set the AWS Region.
const REGION = "us-east-1"; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.

const ddbClient = new DynamoDBClient({
    region: REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

export { ddbClient };