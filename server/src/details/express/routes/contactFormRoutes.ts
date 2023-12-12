import { iDataProvider } from "../../../logic/interfaces/dataProvider";
import { createRoute } from "../expressUtils";
import { contactForm } from "../../../entities/entites";
import { contactFormLogic } from "../../../logic/entityLogic/contactFormLogic";
import { makeNetworkCreateResult } from "../../../entities/networkEntites";

export const createContactFormRoutes = (router: any, dataProvider: iDataProvider) => {
    createRoute(router, {
        type: 'post',
        path: '/createContactForm',
        handler: async(req, res) => {
            const subject: string = req.body.subject;
            const email: string = req.body.email;
            const phone: string = req.body.phone;
            const message: string = req.body.message;
            const contactForm: contactForm = {_id: null, subject, email, phone, message}
            await contactFormLogic.createContactForm(dataProvider, contactForm)
            res.status(200).send(makeNetworkCreateResult())
        }
    })

    return router
}