const Competition = require('../models/Competition');
const Registration = require('../models/Registration');

const availability = c => ({
  maxParticipants: c.maxParticipants,
  registered: c.registeredCount,
  remaining: Math.max(0, c.maxParticipants - c.registeredCount),
});
const findComp = id => Competition.findOne({ slug: id });

exports.getCompetition = async (req, res, next) => {
  try {
    const c = await findComp(req.params.id);
    if (!c) return res.status(404).json({ code: 'NOT_FOUND', message: 'Competition not found' });
    const reg = await Registration.exists({ competition: c._id, userId: req.userId });
    const { registeredCount, ...rest } = c.toObject();
    res.json({ competition: rest, availability: availability(c), userState: { isRegistered: !!reg } });
  } catch (e) { next(e); }
};

exports.register = async (req, res, next) => {
  try {
    const c = await findComp(req.params.id);
    if (!c) return res.status(404).json({ code: 'NOT_FOUND', message: 'Competition not found' });
    if (await Registration.exists({ competition: c._id, userId: req.userId }))
      return res.status(409).json({ code: 'ALREADY_REGISTERED', message: 'You are already registered' });

    // Atomic seat claim: succeeds only if open, before deadline, and seats remain.
    const claimed = await Competition.findOneAndUpdate(
      { _id: c._id, status: 'open', 'dates.registerBefore': { $gt: new Date() }, $expr: { $lt: ['$registeredCount', '$maxParticipants'] } },
      { $inc: { registeredCount: 1 } },
      { new: true }
    );
    if (!claimed) {
      const closed = c.status !== 'open' || c.dates.registerBefore <= new Date();
      return res.status(closed ? 400 : 409).json(closed ? { code: 'REGISTRATION_CLOSED', message: 'Registration is closed' } : { code: 'NO_SPOTS', message: 'No spots left' });
    }
    try {
      await Registration.create({ competition: c._id, userId: req.userId });
    } catch (err) {
      await Competition.updateOne({ _id: c._id }, { $inc: { registeredCount: -1 } }); // release seat
      if (err.code === 11000) return res.status(409).json({ code: 'ALREADY_REGISTERED', message: 'You are already registered' });
      throw err;
    }
    res.status(201).json({ availability: availability(claimed), userState: { isRegistered: true } });
  } catch (e) { next(e); }
};
