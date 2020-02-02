const TeamController = require('../controllers/team.controller');
const Joi = require("joi");

module.exports = [
    {
        path: '/api/team',
        method: 'POST',
        options: {
            validate: {
                payload: {
                    number: Joi.number().required(),
                    color: Joi.string().required()
                },
                failAction: (request, h, error) => {
                    return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
                }
            }
        },
        handler: TeamController.create
    },
    {
        path: '/api/teams',
        method: 'GET',
        handler: TeamController.find
    },
    {
        path: '/api/team/{id}',
        method: 'GET',
        handler: TeamController.findOne
    },
    {
        path: '/api/team/{id}',
        method: 'DELETE',
        handler: TeamController.delete
    },
    {
        path: '/api/team/{id}',
        method: 'PUT',
        options: {
            validate: {
                payload: {
                    number: Joi.string().optional()
                },
                failAction: (request, h, error) => {
                    return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
                }
            }
        },
        handler: TeamController.update
    }
];