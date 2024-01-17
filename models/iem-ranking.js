const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IEMRankinSchema = new Schema({
    name: { type: String, required: true },
    value_rating: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: String, required: true },
    signature: { type: String, required: true },
    comments: { type: String },
    tone_grade: { type: String, required: true },
    technical_grade: { type: String, required: true },
    setup: { type: String, required: true },
})


module.exports = mongoose.model("Author", IEMRankinSchema);