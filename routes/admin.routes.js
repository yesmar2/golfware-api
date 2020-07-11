const AdminController = require('../controllers/admin.controller');
const Joi = require("joi");

module.exports = [
    {
        path: "/api/admin",
        method: "POST",
        options: {
            validate: {
                payload: {
                    firebaseUID: Joi.string().required(),
                    leagues: Joi.array().items(Joi.string())
                },
                failAction: (request, h, error) => {
                    return error.isJoi
                        ? h.response(error.details[0]).takeover()
                        : h.response(error).takeover();
                }
            }
        },
        handler: AdminController.create
    },
    {
        path: "/api/admins",
        method: "GET",
        handler: AdminController.find
    },
    {
        path: "/api/admin/{firebaseUID}",
        method: "GET",
        handler: AdminController.findOneByFirebaseUID
    },
    // {
    //     path: "/api/event/{id}",
    //     method: "DELETE",
    //     handler: EventController.delete
    // }
];