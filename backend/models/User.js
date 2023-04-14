//Creating the User model schema

//Importing the mongoose librarie
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Esta línea define el objeto de esquema de Mongoose.

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  goals: { type: [String], default: [] },
  interests: { type: [String], default: [] },
  experience: { type: String, default: '' },
  savedResources: { type: [String], default: [] },
  completedResources: { type: [String], default: [] },
});
//Este objeto de esquema define los campos que se utilizarán para almacenar los detalles del usuario