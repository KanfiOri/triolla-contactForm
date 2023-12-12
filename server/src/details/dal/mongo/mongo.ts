import { appConfig } from '../../../config/appConfig';
import { iDataProvider } from '../../../logic/interfaces/dataProvider';
import { MongoClient } from 'mongodb';
import { createTaskDataProvider } from './contactFormMongo';


export const createMongoDal = ():iDataProvider => {
    const url = appConfig.string_connection; // Replace with your MongoDB connection string

    const client = new MongoClient(url);
    
    return {
        FormDataProvider: createTaskDataProvider(client),
    }
}