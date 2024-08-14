const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Route
app.post('/api/chat', async(req, res) => {
    const { message } = req.body;
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }]
        }, {
            headers: {
                'Authorization': `Bearer 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`,
                'Content-Type': 'application/json'
            }
        });

        // Return the OpenAI response
        res.json({
            reply: response.data.choices[0].message.content
        });
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});