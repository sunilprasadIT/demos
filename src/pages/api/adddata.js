import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "./ddbDocClient";

export default async function handler(req,res) {
    if (req.method === 'POST') {
        let payloadData = JSON.parse(req.body);
        let payload = {
            TableName: process.env.TABLE_NAME,
            ...payloadData,
        }
        const data = await ddbDocClient.send(new PutCommand(payload));
        return res.status(200).json(data);
    }
}