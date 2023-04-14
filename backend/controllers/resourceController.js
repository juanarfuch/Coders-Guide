const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const getProfile = async (req, res) => {
    try {
      const user = await User.findById(req.userId);
      res.status(200).json({ profile: user });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  const updateProfile = async (req, res) => {
    try {
      const { goals, interests, experience } = req.body;
      const updatedUser = await User.findByIdAndUpdate(
        req.userId,
        { goals, interests, experience },
        { new: true }
      );
      res.status(200).json({ profile: updatedUser });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };

  const getResources = async (req, res) => {
    try {
      const { query } = req.query;
  
      // Replace the following with the actual OpenAI API call
      const response = await axios.get('https://api.openai.com/v1/models ', {
        params: { q: query },
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
      });
  
      const resources = response.data.results;
      res.status(200).json({ resources });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };