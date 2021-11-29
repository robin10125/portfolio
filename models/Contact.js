const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    content: { type: String, required: true }
  },{
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);