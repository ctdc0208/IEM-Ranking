const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IEMRankinSchema = new Schema({
    rank: { type: Number, required: true },
    value_rating: { type: Number, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    signature: { type: String, required: true },
    comments: { type: String },
    tone_grade: { type: String, required: true },
    technical_grade: { type: String, required: true },
    setup: { type: String, required: true },
})


module.exports = mongoose.model("IEMRanking", IEMRankinSchema);