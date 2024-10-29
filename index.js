const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');


// app.use(cors({
//     origin: 'https://www.maziapp.io' 
// }));

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = 8080;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
