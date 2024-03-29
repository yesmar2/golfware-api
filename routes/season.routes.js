const SeasonController = require('../controllers/season.controller');
const Joi = require("joi");

module.exports = [
    {
        path: "/api/season/{leagueId}",
        method: "POST",
        options: {
            validate: {
                payload: {
                    year: Joi.number().required(),
                    leagueId: Joi.string().required(),
                },
                failAction: (request, h, error) => {
                    return error.isJoi
                        ? h.response(error.details[0]).takeover()
                        : h.response(error).takeover();
                }
            }
        },
        handler: SeasonController.create
    },
    {
        path: "/api/season/{seasonId}",
        method: "GET",
        handler: SeasonController.findOne
    },
    // {
    //     path: "/api/event/{id}",
    //     method: "DELETE",
    //     handler: EventController.delete
    // }
];