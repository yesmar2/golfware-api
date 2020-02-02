const PlayerModel = require('../models/player.model');

module.exports = {
    async create(request, h) {
        try {
            var result = await PlayerModel.create(request.payload);
            return h.response(result);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    async find(request, h) {
        try {
            var player = 
                await PlayerModel
                .find()
                .populate("team")
                .exec();
            return h.response(player);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    async findOne(request, h) {
        try {
            var player = await PlayerModel.findById(request.params.id).exec();
            return h.response(player);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    async update(request, h) {
        try {
            var result = await PlayerModel.findByIdAndUpdate(request.params.id, request.payload, { new: true });
            return h.response(result);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    async delete(request, h) {
        try {
            var result = await PlayerModel.findByIdAndDelete(request.params.id);
            return h.response(result);
        } catch (error) {
            return h.response(error).code(500);
        }
    }
};