const EventModel = require('../models/event.model');
const SeasonModel = require('../models/season.model');

module.exports = {
    async create(request, h) {
        try {
            const { payload, params } = request;
            const { number, date, description, matchups, seasonId } = payload;

            const eventResult = await EventModel.create({
                number,     
                date,
                matchups,
                description,
                seasonId
            });

            return h.response(eventResult);
        } catch (error) {
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
    },
    async findEventsBySeasonId(request, h) {
        try {
            const { seasonId } = request.params;
            var events = await EventModel.find({ seasonId }).exec();
            return h.response(events);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
};