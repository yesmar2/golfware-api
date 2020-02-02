const EventModel = require('../models/event.model');
const MatchupModel = require('../models/matchup.model');
const ScorecardModel = require('../models/scorecard.model');
const ScoreModel = require('../models/score.model');

module.exports = {
    async create(request, h) {
        console.log(request.payload)
        try {
            
            const payloadTest = {
                number: 1,
                date: '04/21/2020',
                matchups: [
                    {
                        number: 1,
                        teamOne: 1,
                        teamTwo: 10,
                        scorecardOne: {
                            playerOne: {
                                player: 1,
                                scores: [
                                    {
                                        holeNumber: 1,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 2,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 3,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 4,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 5,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 6,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 7,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 8,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 9,
                                        score: undefined
                                    },
                                ]
                            },
                            playerTwo: {
                                player: 2,
                                scores: [
                                    {
                                        holeNumber: 1,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 2,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 3,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 4,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 5,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 6,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 7,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 8,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 9,
                                        score: undefined
                                    },
                                ]
                            },
                            playerThree: {
                                player: 39,
                                scores: [
                                    {
                                        holeNumber: 1,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 2,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 3,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 4,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 5,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 6,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 7,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 8,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 9,
                                        score: undefined
                                    },
                                ]
                            },
                            playerFour: {
                                player: 40,
                                scores: [
                                    {
                                        holeNumber: 1,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 2,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 3,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 4,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 5,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 6,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 7,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 8,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 9,
                                        score: undefined
                                    },
                                ]
                            }
                        },
                        scorecardTwo: {
                            playerOne: {
                                player: 3,
                                scores: [
                                    {
                                        holeNumber: 1,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 2,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 3,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 4,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 5,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 6,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 7,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 8,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 9,
                                        score: undefined
                                    },
                                ]
                            },
                            playerTwo: {
                                player: 4,
                                scores: [
                                    {
                                        holeNumber: 1,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 2,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 3,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 4,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 5,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 6,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 7,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 8,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 9,
                                        score: undefined
                                    },
                                ]
                            },
                            playerThree: {
                                player: 37,
                                scores: [
                                    {
                                        holeNumber: 1,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 2,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 3,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 4,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 5,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 6,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 7,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 8,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 9,
                                        score: undefined
                                    },
                                ]
                            },
                            playerFour: {
                                player: 38,
                                scores: [
                                    {
                                        holeNumber: 1,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 2,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 3,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 4,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 5,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 6,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 7,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 8,
                                        score: undefined
                                    },
                                    {
                                        holeNumber: 9,
                                        score: undefined
                                    },
                                ]
                            }
                        }
                    }
                ]
            }

            const { matchups } = payloadTest;
            const { scorecardOne } = matchups[0];
            const { playerOne } = scorecardOne;
            
            var result = await ScoreModel.create(playerOne);
            //var result = await EventModel.create(request.payload);
            return h.response(result);
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