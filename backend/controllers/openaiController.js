const { Configuration, OpenAIApi } = require('openai');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateResources = async (req, res) => {
  try {
    const { query } = req.query;

    const response = await openai.createCompletion({
      engine: 'davinci-codex',
      prompt: `Generate learning resources for new coders. ${query}`,
      max_tokens: 150,
      n: 3,
      stop: null,
      temperature: 0.7,
    });

    const resources = response.data.choices.map((choice) => choice.text.trim());
    res.json({ resources });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generating resources' });
  }
};

module.exports = { generateResources };
