const express = require('express');
const router = express.Router();
const { submitContactForm, getContactForm } = require('../controller/contactc');



router.post('/', submitContactForm );

router.get('/', getContactForm );

module.exports = router;
