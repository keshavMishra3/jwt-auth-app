const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// UserSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) {
//     console.log('Password not modified, skipping hash.');
//     return next();
//   }
  
//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     console.log('Password hashed successfully.');
//     next();
//   } catch (err) {
//     next(err);
//   }
// });


module.exports = mongoose.model('User', UserSchema);
