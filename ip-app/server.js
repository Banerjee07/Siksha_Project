const express = require('express');
const app = express();
const path = require('path');

// app.use(express.static(__dirname + '/dist'));
app.use(express.static('./dist/ip-app'));


app.get('/*', (req, res)=>{
    res.sendFile(path.join(__dirname + '/dist/ip-app/index.html'));
});
app.listen(process.env.PORT || 8080);

console.log('port listening');