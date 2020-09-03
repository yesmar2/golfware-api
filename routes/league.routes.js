const LeagueController = require('../controllers/league.controller');
const Joi = require("joi");

module.exports = [
    {
        path: "/api/league",
        method: "POST",
        options: {
            validate: {
                payload: {
                    leagueName: Joi.string().required(),
                    admin: Joi.string().required(),
                    golfCourseId: Joi.string().required(),
                    numberOfHoles: Joi.number().required(),
                },
                failAction: (request, h, error) => {
                    return error.isJoi
                        ? h.response(error.details[0]).takeover()
                        : h.response(error).takeover();
                }
            }
        },
        handler: LeagueController.create
    },
    {
        path: "/api/leagues",
        method: "GET",
        handler: LeagueController.find
    },
    {
        path: "/api/leagues/byFirebaseID/{firebaseID}",
        method: "GET",
        handler: LeagueController.findLeaguesByFirebaseId
    },
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
];