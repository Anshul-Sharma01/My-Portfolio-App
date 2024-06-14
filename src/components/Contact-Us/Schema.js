import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    email: String,
    name: String,
    message: String
});

const ContactModel = mongoose.model('Contact', contactSchema);

export default ContactModel;
