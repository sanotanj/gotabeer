var mongoose = require('mongoose');

// Create the MovieSchema.
var MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  origin: {
  	type: String,
  	required: true
  }
});

// Export the model schema.
module.exports = MovieSchema;
