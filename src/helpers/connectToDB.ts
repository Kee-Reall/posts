import { Collection, MongoClient } from "mongodb";

export const connector = async (
    client: MongoClient,
    collectionName: string,
    callback: Function
) => {
    try {
        await client.connect()
        console.log('connection is up')
        const collection: Collection<Document> = client.db().collection(collectionName)
        await callback(collection)
        await client.close()
        console.log('connector helper is finished')
    } catch (e) {
        console.log(e)
    }
}
