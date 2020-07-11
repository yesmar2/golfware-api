const AdminModel = require('../models/admin.model');

module.exports = {
    async create(request, h) {
        try {
            const { payload } = request;

            const adminResult = await AdminModel.create(payload);

            return h.response(adminResult);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    async find(request, h) {
        try {
            var admin = await AdminModel.find().exec();
            return h.response(admin);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    async findOneByFirebaseUID(request, h) {
        try {
            var admin = await AdminModel.find({ firebaseUID: request.params.firebaseUID }).exec();
            return h.response(admin);
        } catch (error) {
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