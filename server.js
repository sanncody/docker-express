const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to Express.js in Docker"
    })
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});