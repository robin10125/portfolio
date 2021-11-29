const express = require('express');
const router = express.Router();
const contactCtrl = require('../../controllers/api/contact');

// POST new post
router.post('/', contactCtrl.create)

module.exports = router;