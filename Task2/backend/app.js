
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const port = 5000;
dotenv.config();
const githubToken = process.env.GITHUB_TOKEN;
app.use(cors());
app.use(express.json());
app.get('/api/search/repositories', async (req, res) => {
    try {
        const { q } = req.query;
        const response = await axios.get('https://api.github.com/search/repositories', {
            params: { q },
            headers: { 'Authorization': `token ${githubToken}` }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching repositories:', error.message);
        res.status(500).json({ error: error.message });
    }
});
app.get('/api/repositories/:owner/:repo', async (req, res) => {
    try {
        const { owner, repo } = req.params;
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}`, {
            headers: { 'Authorization': `token ${githubToken}` }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching repository details:', error.message);
        res.status(500).json({ error: error.message });
    }
});
app.get('/api/users/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const response = await axios.get(`https://api.github.com/users/${username}`, {
            headers: { 'Authorization': `token ${githubToken}` }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching user profile:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
