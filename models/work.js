const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  workoutType: { type: String, required: true },
  duration: { type: Number, required: true },
  caloriesBurned: { type: Number, required: true },
  workoutDate: { type: Date, required: true },
  notes: { type: String }
});

module.exports = mongoose.model('Workout', workoutSchema);

