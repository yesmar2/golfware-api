const TeamModel = require('../models/team.model');

module.exports = {
    async create(request, h) {
        console.log(request.payload)
        try {
            var result = await TeamModel.create(request.payload);
            return h.response(result);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    async find(request, h) {
        try {
            var team = await TeamModel.find().exec();
            return h.response(team);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    async findOne(request, h) {
        try {
            var team = await TeamModel.findById(request.params.id).exec();
            return h.response(team);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    async update(request, h) {
        try {
            var result = await TeamModel.findByIdAndUpdate(request.params.id, request.payload, { new: true });
            return h.response(result);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    async delete(request, h) {
        try {
            var result = await TeamModel.findByIdAndDelete(request.params.id);
            return h.response(result);
        } catch (error) {
            return h.response(error).code(500);
        }
    }
};