const SeasonModel = require('../models/season.model');
const LeagueModel = require('../models/league.model');

module.exports = {
    async create(request, h) {
        try {
            const { payload, params } = request;
            const { leagueId } = params;
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
};