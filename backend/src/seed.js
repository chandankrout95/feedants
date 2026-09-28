require('dotenv').config();
const mongoose = require('mongoose');
const Competition = require('./models/Competition');
const Registration = require('./models/Registration');

const h = 3600e3, now = Date.now();
const img = i => `https://i.pravatar.cc/200?img=${i}`;
(async () => {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/feedants');
  await Competition.deleteMany({}); await Registration.deleteMany({});
  const c = await Competition.create({
    slug: 'feedants-classical-dance',
    title: { en: 'Feedants Classical Dance', hi: 'फीडेंट्स शास्त्रीय नृत्य' },
    category: { en: 'Dance', hi: 'नृत्य' },
    winnerType: { en: 'Multi-Win', hi: 'मल्टी-विनर' },
    perk: { en: 'Winners get certificate', hi: 'विजेताओं को प्रमाणपत्र' },
    prizePool: 1500, entryFee: 99, maxParticipants: 20, registeredCount: 1,
    judge: {
      name: { en: 'Manju Dubey', hi: 'मंजू दुबे' },
      title: { en: 'Professional Kathak Dancer', hi: 'पेशेवर कथक नर्तकी' },
      experience: { en: '12+ Years of Experience', hi: '12+ वर्षों का अनुभव' },
      photoUrl: img(47),
    },
    dates: {
      registerBefore: new Date(now + 30 * h + 28 * 60e3 + 32e3),
      submissionStarts: new Date(now + 40 * h), submissionEnds: new Date(now + 400 * h), resultDate: new Date(now + 430 * h),
    },
    previousWinners: [
      { name: { en: 'Riya Shah', hi: 'रिया शाह' }, position: 1, photoUrl: img(5) },
      { name: { en: 'Aarav Mehta', hi: 'आरव मेहता' }, position: 1, photoUrl: img(15) },
      { name: { en: 'Neha Verma', hi: 'नेहा वर्मा' }, position: 2, photoUrl: img(32) },
      { name: { en: 'Ishita Chopra', hi: 'इशिता चोपड़ा' }, position: 3, photoUrl: img(44) },
    ],
    info: {
      about: {
        en: ['This is an online classical dance competition open for all age groups.', 'Participate from anywhere and showcase your talent.', 'Express your passion through traditional dance.', 'Submit a video of 2 to 4 minutes performing any classical form.'],
        hi: ['यह सभी आयु वर्ग के लिए खुली एक ऑनलाइन शास्त्रीय नृत्य प्रतियोगिता है।', 'कहीं से भी भाग लें और अपनी प्रतिभा दिखाएं।', 'पारंपरिक नृत्य के माध्यम से अपना जुनून व्यक्त करें।', 'किसी भी शास्त्रीय शैली में 2 से 4 मिनट का वीडियो जमा करें।'],
      },
      judging: {
        en: ['Technique and grace', 'Expression and storytelling', 'Rhythm and timing', 'Costume and presentation'],
        hi: ['तकनीक और लालित्य', 'भाव-अभिव्यक्ति और कथन', 'लय और समय', 'वेशभूषा और प्रस्तुति'],
      },
      rules: {
        en: ['Open to all age groups', 'Video must be original and unedited', 'One entry per participant', 'Only paid participants are judged'],
        hi: ['सभी आयु वर्ग के लिए खुला', 'वीडियो मौलिक और बिना एडिट किया हुआ होना चाहिए', 'प्रति प्रतिभागी एक प्रविष्टि', 'केवल भुगतान करने वाले प्रतिभागियों का मूल्यांकन होगा'],
      },
    },
    rewards: [550, 300, 240, 200, 130, 80].map((amount, i) => ({ position: i + 1, amount })),
    disclaimer: {
      en: 'Only contributions from paid participants will be considered for judging.',
      hi: 'केवल भुगतान करने वाले प्रतिभागियों की प्रविष्टियों पर ही निर्णय के लिए विचार किया जाएगा।',
    },
    referral: { link: 'https://feedants.com/r/referral123', amountPerSignup: 10 },
  });
  await Registration.create({ competition: c._id, userId: 'demo-user-1' });
  console.log('Seeded:', c.slug);
  process.exit(0);
})();
