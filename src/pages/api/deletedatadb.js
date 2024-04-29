import { ddbDocClient } from "./ddbDocClient";
import {DeleteCommand, UpdateCommand} from "@aws-sdk/lib-dynamodb";

export default async function handler(req,res) {
    if (req.method === 'DELETE') {
        let payloadData = JSON.parse(req.body);
        let payload = {
            TableName: process.env.TABLE_NAME,
            ...payloadData,
        }
        const data = await ddbDocClient.send(new DeleteCommand(payload));
        return res.status(200).json(data);
    }
}