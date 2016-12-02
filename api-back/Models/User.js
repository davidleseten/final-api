const mongoose = require('mongoose');

var userSchema{
  loginId: String,
  firstName: String,
  lastName: String,
  about: String,
  active: Boolean,
  picture: String,
  activities: [{type: mongoose.Schema.Types.ObjectId, ref: 'Activity'}]
}

var User = mongoose.model('User', userSchema);
module.exports = User;
