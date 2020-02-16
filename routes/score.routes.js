const ScoreController = require('../controllers/score.controller');
const Joi = require("joi");

module.exports = [
    // TODO: creating events
    {
        path: "/api/score",
        method: "POST",
        options: {
            validate: {
                payload: {
                    playerId: Joi.string().required(),
                },
                failAction: (request, h, error) => {
                    return error.isJoi
                        ? h.response(error.details[0]).takeover()
                        : h.response(error).takeover();
                }
            }
        },
        handler: ScoreController.create
    },
    // {
    //     path: "/api/events",
    //     method: "GET",
    //     handler: EventController.find
    // },
    // {
    //     path: "/api/event/{id}",
    //     method: "GET",
    //     handler: EventController.findOne
    // },
    // {
    //     path: "/api/event/{id}",
    //     method: "DELETE",
    //     handler: EventController.delete
    // }
    // TODO: update events
    // {
    //     path: '/api/event/{id}',
    //     method: 'PUT',
    //     options: {
    //         validate: {
    //             payload: {
    //                 number: Joi.string().optional()
    //             },
    //             failAction: (request, h, error) => {
    //                 return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
    //             }
    //         }
    //     },
    //     handler: EventController.update
    // }
];