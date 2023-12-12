import { contactForm } from "entities/entites";
import { iDataProvider } from "logic/interfaces/dataProvider";

const createContactForm = async(dataProvider: iDataProvider, contactForm: contactForm) => {
    return await dataProvider.FormDataProvider.createContactForm(contactForm)
}

export const contactFormLogic = { createContactForm }