const EventModel = require('../models/event.model');

module.exports = {
    async create(request, h) {
        try {
            const { payload } = request;
            const { number, date, matchups } = payload;

            const eventResult = await EventModel.create({
                number,
                date,
                matchups
            });

            return h.response(eventResult);
        } catch (error) {
            console.log(error)
            return h.response(error).code(500);
        }
    },
    async find(request, h) {
        try {
            var event = await EventModel.find().exec();
            return h.response(event);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    async findOne(request, h) {
        try {
            var event = await EventModel.findById(request.params.id).exec();
            return h.response(event);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    async update(request, h) {
        try {
            var result = await EventModel.findByIdAndUpdate(request.params.id, request.payload, { new: true });
            return h.response(result);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    async delete(request, h) {
        try {
            var result = await EventModel.findByIdAndDelete(request.params.id);
            return h.response(result);
        } catch (error) {
            return h.response(error).code(500);
        }
    }
};