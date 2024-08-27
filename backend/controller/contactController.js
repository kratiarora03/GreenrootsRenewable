const Contact = require('../models/contactModel');
const sendEmail = require('../utils/sendEmail'); // Adjust the path as per your file structure

const contactController = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Define the start and end of the current day
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    // Check the number of contacts from the same email within the current day
    const contactCount = await Contact.countDocuments({
      email,
      createdAt: { $gte: startOfDay, $lte: endOfDay }
    });

    if (contactCount >= 2) {
      return res.status(400).json({ message: 'You have already sent two contact requests today' });
    }

    // Save contact information to database
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    // Send email to the provided email address
    const toEmail = [email, 'Sales@greenrootsrenewable.in'];
    const emailSubject = 'Thank you for contacting us';
    const emailContent = `<p>Dear ${name},</p>
                          <p>Thank you for contacting us. We will get back to you soon.</p>`;

    await sendEmail(toEmail, emailSubject, emailContent);

    // Respond to client with success message
    res.status(201).json({ message: 'Contact sent successfully' });
  } catch (error) {
    console.error('Error saving contact or sending email:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = contactController;
