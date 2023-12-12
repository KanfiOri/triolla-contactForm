import {MongoClient, Collection} from 'mongodb'

const SCHEMA_NAME = 'ContactForm';
const COLLECTION_NAME = 'Form';

async function createSchema(client: MongoClient): Promise<void> {
    try {
        const db = client.db(SCHEMA_NAME);
        // Create the schema (if not already exists) by creating a dummy document
        await db.createCollection(COLLECTION_NAME);
    } catch (error) {
        throw error;
    }
}

export async function transaction<Type>(client: MongoClient, callback: (collection: Collection<any>) => Promise<Type>): Promise<Type> {
    try {
        await client.connect();
        await createSchema(client)

        const db = client.db(SCHEMA_NAME);
        const collection = db.collection(COLLECTION_NAME);
        const res: Type = await callback(collection);

        return res;

    } catch (error) {
        throw error
    }
}