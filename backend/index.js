const express = require('express');
const connection = require("./connection");
const app = express();
const cors = require('cors');
const contactRoute = require('./routes/contactRoutes');
app.use(express.json());
app.use(cors());

connection();
require('dotenv').config();

app.use('/api', contactRoute);

app.get('/api/youtube-thumbnail', async (req, res) => {
    try {
      const videoId = 'KvWSCzrvSA0';
      const apiKey = process.env.YOUTUBE_API_KEY;
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos`,
        {
          params: {
            part: 'snippet',
            id: videoId,
            key: apiKey
          }
        }
      );
      const thumbnailUrl = response.data.items[0].snippet.thumbnails.medium.url;
      res.json({ thumbnailUrl });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching YouTube video thumbnail' });
    }
  });

const port = process.env.port || 8000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})