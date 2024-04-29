import { ddbDocClient } from "./ddbDocClient";
import { ScanCommand  } from "@aws-sdk/lib-dynamodb";

export default async function handler(req,res) {
    if (req.method === 'GET') {
        const data = await ddbDocClient.send(new ScanCommand({TableName:process.env.TABLE_NAME}));
        return res.status(200).json(data);
    }
}