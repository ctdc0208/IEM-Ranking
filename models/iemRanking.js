const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IEMRankingSchema = new Schema({
    rank: { type: String, required: true },
    value_rating: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    signature: { type: String, required: true },
    comments: { type: String },
    tone_grade: { type: String, required: true },
    technical_grade: { type: String, required: true },
    setup: { type: String, required: true },
})

IEMRankingSchema.virtual("url").get(function () {
    return `/iem/${this.model}/${this._id}`;
});

module.exports = mongoose.model("IEMRanking", IEMRankingSchema);