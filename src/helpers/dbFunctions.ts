import { Collection } from "mongodb";

export const findAllUserPosts = async (collection: Collection<any>, user: string) => {
    return await collection.find({author: user}).toArray()
}



