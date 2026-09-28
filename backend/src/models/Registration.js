const { Schema, model } = require('mongoose');

const schema = new Schema({
  competition: { type: Schema.Types.ObjectId, ref: 'Competition', required: true },
  userId: { type: String, required: true },
  paymentStatus: { type: String, default: 'paid' },
}, { timestamps: true });
// Guarantees no duplicate registration, even under concurrent requests.
schema.index({ competition: 1, userId: 1 }, { unique: true });
module.exports = model('Registration', schema);
