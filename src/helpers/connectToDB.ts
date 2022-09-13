import { MongoClient} from "mongodb";
import { dbURI } from "./config";

const client = new MongoClient(dbURI)

export const connector = async () => {
    try {
        await client.connect()
        console.log('connection is up')
        const collection = client.db().collection('user')
        const fromDB = await collection.findOne({name: 'admin'})
        console.log(fromDB)
        await client.close()
    }catch (e) {
        console.log(e)
    }
}