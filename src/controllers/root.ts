import { Response, Request } from "express";
import { connector } from "../helpers/connectToDB";
import { Collection, MongoClient } from "mongodb";
import { dbURI } from "../helpers/config";



export default async function (req: Request, res: Response): Promise<void> {
    const client = new MongoClient(dbURI)
    await connector(client, 'user',async (collection: Collection<any>) => {
        const searchResult = await collection.findOne({name: 'admin'})
        res.json(searchResult)
    })
}