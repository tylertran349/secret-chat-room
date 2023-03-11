const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const MessageSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},
    title: {type: String, required: true},
    message: {type: String, required: true},
    time: {type: Date, required: true}
});

MessageSchema.virtual("time_formatted").get(function() {
    return DateTime.fromJSDate(this.time).toLocaleString(DateTime.DATETIME_SHORT); // Format time like this: 5/07/2015, 6:31 AM
});

module.exports = mongoose.model("Message", MessageSchema);