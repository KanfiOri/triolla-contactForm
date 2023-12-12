import { contactForm } from "entities/entites"

export interface iDataProvider {
    FormDataProvider: iFormDataProvider
}

export interface iFormDataProvider {
    createContactForm: (form: contactForm) => Promise<void>
}