const EventController = require('../controllers/event.controller');
const Joi = require("joi");

module.exports = [
    {
        path: "/api/event",
        method: "POST",
        options: {
            validate: {
                payload: {
                    number: Joi.number().required(),
                    date: Joi.date().required(),
                    description: Joi.string().required(),
                    matchups: Joi.array().items(
                        Joi.object({
                            number: Joi.number().required(),
                            teamOneNumber: Joi.number().required(),
                            teamTwoNumber: Joi.number().required()
                        })
                    ).required(),
                    seasonId: Joi.string().required(),
                },
                failAction: (request, h, error) => {
                    return error.isJoi
                        ? h.response(error.details[0]).takeover()
                        : h.response(error).takeover();
                }
            }
        },
        handler: EventController.create
    },
    {
        path: "/api/events",
        method: "GET",
        handler: EventController.find
    },
    {
        path: "/api/event/{id}",
        method: "GET",
        handler: EventController.findOne
    },
    {
        path: "/api/event/{id}",
        method: "DELETE",
        handler: EventController.delete
    },
    {
        path: "/api/events/{seasonId}",
        method: "GET",
        handler: EventController.findEventsBySeasonId
    },
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