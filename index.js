const express = require('express');
const cors = require('cors');
require('dotenv').config();






app.get('/', (req, res) => {
    res.send('Server is running')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})