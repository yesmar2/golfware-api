const ScorecardController = require('../controllers/scorecard.controller');
const Joi = require("joi");

module.exports = [
    // TODO: creating events
    {
        path: "/api/scorecard",
        method: "POST",
        options: {
            validate: {
                payload: {
                    playerOne: Joi.string().required(),
                    playerTwo: Joi.string(),
                    playerThree: Joi.string(),
                    playerFour: Joi.string(),
                },
                failAction: (request, h, error) => {
                    return error.isJoi
                        ? h.response(error.details[0]).takeover()
                        : h.response(error).takeover();
                }
            }
        },
        handler: ScorecardController.create
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