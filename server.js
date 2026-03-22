const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.status(200).json({
        message: "Testing: Volume mounting in docker with express image"
    })
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});