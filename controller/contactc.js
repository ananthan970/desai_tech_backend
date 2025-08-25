const Contact = require('../models/contact');

const submitContactForm = async (req, res) => {
  const { fullName, email, subject, message } = req.body;

  try {
    const newContact = new Contact({ fullName, email, subject, message });
    await newContact.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error saving contact form:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getContactForm = async (req, res) => {
  

  
    
    
    res.status(200).json({ message: 'Form received successfully' });
};



module.exports = { submitContactForm, getContactForm };
