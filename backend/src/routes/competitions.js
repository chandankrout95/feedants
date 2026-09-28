const router = require('express').Router();
const ctrl = require('../controllers/competitions');

// Demo identity. Swap for JWT auth middleware in production.
router.use((req, res, next) => {
  req.userId = req.header('x-user-id');
  if (!req.userId) return res.status(401).json({ code: 'GENERIC', message: 'Unauthorized' });
  next();
});
router.get('/:id', ctrl.getCompetition);
router.post('/:id/register', ctrl.register);
module.exports = router;
