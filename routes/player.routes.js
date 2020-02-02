const PlayerController = require('../controllers/player.controller');
const Joi = require("joi");

module.exports = [
    {
        path: '/api/player',
        method: 'POST',
        options: {
            validate: {
                payload: {
                    firstName: Joi.string().required(),
                    lastName: Joi.string().required(),
                    handicap: Joi.number(),
                    team: Joi.string()
                },
                failAction: (request, h, error) => {
                    return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
                }
            }
        },
        handler: PlayerController.create
    },
    {
        path: '/api/players',
        method: 'GET',
        handler: PlayerController.find
    },
    {
        path: '/api/player/{id}',
        method: 'GET',
        handler: PlayerController.findOne
    },
    {
        path: '/api/player/{id}',
        method: 'DELETE',
        handler: PlayerController.delete
    },
    {
        path: '/api/companplayeries/{id}',
        method: 'PUT',
        options: {
            validate: {
                payload: {
                    firstname: Joi.string().optional(),
                    lastname: Joi.string().optional()
                },
                failAction: (request, h, error) => {
                    return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
                }
            }
        },
        handler: PlayerController.update
    }
];