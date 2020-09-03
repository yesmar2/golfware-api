const SeasonModel = require('../models/season.model');
const LeagueModel = require('../models/league.model');

module.exports = {
    async create(request, h) {
        try {
            const { payload } = request;
            const { leagueId } = payload;

            const seasonResult = await SeasonModel.create(payload);

            const league = await LeagueModel.findById(leagueId).exec();
            league.seasons.push(seasonResult._id);

            if (!league.activeSeasonId) {
                league.activeSeasonId = seasonResult._id;
            }

            await league.save();

            return h.response(seasonResult);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    async findOne(request, h) {
        try {
            var season = await SeasonModel.findById(request.params.seasonId)
                .populate("league", "name")
                .populate("events")
                .populate({ path: "events", populate: { path: "matchups.scorecards", populate: { path: "scores" } } })
                .populate({ path: "teams", populate: { path: "players" } })
                .exec();
            return h.response(season);
        } catch (error) {
            console.log(error);
            return h.response(error).code(500);
        }
    },
};
