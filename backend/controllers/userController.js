const User = require('../models/User');
const bcrypt = require('bcrypt');
//Libreria que se utiliza para cifrar las contraseñas de los usuarios
const jwt = require('jsonwebtoken');
//Se utiliza para generar y verificar tokens de autenticación. 
const dotenv = require('dotenv');
//Se utiliza para cargar las variables de entor desde el archivo .env
dotenv.config();

const register = async (req, res) => {
    try {
        const { email, password, name } = req.body;

        const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, name });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
} catch (error) {
    res.status(500).json({ message: 'Server error' });
}
};

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.status(200).json({ token, message: 'User logged in successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };

  module.exports = { register, login };
