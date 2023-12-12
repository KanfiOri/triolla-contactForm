import { transaction } from "db/mongo/dbUtils";
import { contactForm } from "entities/entites";
import { iFormDataProvider } from "logic/interfaces/dataProvider";
import { Collection, MongoClient, ObjectId } from "mongodb";

export const createTaskDataProvider = (client: MongoClient): iFormDataProvider => {
    return {
        createContactForm: async ({ subject, email, phone, message }: contactForm) => {
            transaction<void>(client, async (collection: Collection<any>) => {
                const newContactForm: contactForm = {
                    _id: null,
                    subject,
                    email,
                    phone,
                    message
                };
                await collection.insertOne(newContactForm)
            })
        }
    }
}