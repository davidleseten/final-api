const mongoose = require('mongoose');

var activitySchema = {
  title: String,
  headliine: String,
  description: String,
  active: Boolean,
  spotlight: Boolean,
  picture: String,
  users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
}

var Activity = mongoose.model('User', activitySchema);
module.exports = Activity;
