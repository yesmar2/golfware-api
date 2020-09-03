const LeagueModel = require('../models/league.model');
const SeasonModel = require('../models/season.model');

module.exports = {
    async create(request, h) {
        try {
            const { payload } = request;
            const { leagueName, admin, golfCourseId } = payload;

            const season = {
                golfCourses: [golfCourseId],
            };

            const seasonResult = await SeasonModel.create(season);
            const { _id: seasonId } = seasonResult;

            const league = { 
                leagueName,
                admins: [admin],
                seasons: [seasonId],
                activeSeasonId: seasonId,
            };

            const leagueResult = await LeagueModel.create(league);
            const { _id: leagueId } = leagueResult;
            
            seasonResult.league = leagueId;
            await seasonResult.save();

            return h.response(leagueResult);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    async find(request, h) {
        try {
            var leagues = await LeagueModel.find().populate("season").exec();
            return h.response(leagues);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    async findLeaguesByFirebaseId(request, h) {
        const { firebaseID } = request.params;

        try {
            var leagues = await LeagueModel.find({ admins: [ firebaseID ] }).exec();
            return h.response(leagues);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    // async findOne(request, h) {
    //     try {
    //         var event = await EventModel.findById(request.params.id).exec();
    //         return h.response(event);
    //     } catch (error) {
    //         return h.response(error).code(500);
    //     }
    // },
    async addSeason(request, h) {
        try {
            const { payload, params } = request;
            const { leagueId } = params;
            const { season } = payload;

            const league = await LeagueModel.findById(leagueId).exec();
        
            league.seasons.push(season)
            
            const leagueResult = await league.save();

            return h.response(leagueResult);
        } catch (error) {
            console.log("error", error);
            return h.response(error).code(500);
        }
    },
    // async delete(request, h) {
    //     try {
    //         var result = await EventModel.findByIdAndDelete(request.params.id);
    //         return h.response(result);
    //     } catch (error) {
    //         return h.response(error).code(500);
    //     }
    // }
};