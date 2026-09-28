const { Schema, model } = require('mongoose');

// Translatable fields: English required, Hindi optional (app falls back to English).
const L = { en: { type: String, required: true, trim: true }, hi: { type: String, trim: true }, _id: false };
const LA = { en: [String], hi: [String], _id: false };

module.exports = model('Competition', new Schema({
  slug: { type: String, unique: true, required: true },
  title: L, category: L, winnerType: L, perk: L, disclaimer: L,
  prizePool: Number, entryFee: Number,
  maxParticipants: { type: Number, required: true, min: 1 },
  registeredCount: { type: Number, default: 0, min: 0 },
  status: { type: String, enum: ['open', 'closed', 'completed'], default: 'open' },
  judge: { name: L, title: L, experience: L, photoUrl: String, introVideoUrl: String },
  dates: { registerBefore: Date, submissionStarts: Date, submissionEnds: Date, resultDate: Date },
  previousWinners: [{ name: L, position: Number, photoUrl: String, videoUrl: String, _id: false }],
  info: { about: LA, judging: LA, rules: LA },
  rewards: [{ position: Number, amount: Number, _id: false }],
  referral: { link: String, amountPerSignup: Number },
}, { timestamps: true }));
