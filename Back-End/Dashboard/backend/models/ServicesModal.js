const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const servicesSchema = new Schema({
  category: {
    type: String,
    required: true,
    enum: [
      "home services",
      "office services",
      "vehicle services",
      "other services",
    ],
    default: "home services",
  },
  servicename: {
    type: String,
    required: [true, "A service must have a name"],
    unique: true,
  },
  servicePrice: {
    type: String,
    required: [true, "A service must have a price"],
  },
  // summary: {
  //   type: String,
  //   trim: true,
  //   required: [true, "A tour must have a description"],
  // },
});

module.exports = mongoose.model("Service", servicesSchema);
