import {MongoClient, Collection, Db} from 'mongodb'

const SCHEMA_NAME = 'ContactForm';
const COLLECTION_NAME = 'Form';

async function createSchema(db: Db): Promise<void> {
    try {
        const validator = {
            $jsonSchema: {
                bsonType: 'object',
                required: ['subject', 'email', 'phone', 'message'],
                properties: {
                    subject: {
                        bsonType: 'string'
                    },
                    email: {
                        bsonType: 'string'
                    },
                    phone: {
                        bsonType: 'string'
                    },
                    message: {
                        bsonType: 'string'
                    }
                }
            }
        };

        await db.createCollection(COLLECTION_NAME, { validator });
    } catch (error) {
        throw new Error(`Schema creation error: ${error}`);
    }
}

export async function transaction<Type>(client: MongoClient, callback: (collection: Collection<any>) => Promise<Type>): Promise<Type> {
    try {
        await client.connect();
        const db = client.db(SCHEMA_NAME);
        await createSchema(db);
        const collection = db.collection(COLLECTION_NAME);
        const res: Type = await callback(collection);

        return res;
    } catch (error) {
        throw new Error(`Transaction error: ${error}`);
    }
}