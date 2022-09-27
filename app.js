const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');

app.listen(3000, () => console.log('Server on'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.use(express.static(publicPath));