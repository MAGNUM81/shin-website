const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(__dirname + '/dist'));

app.get('/', function(request, response){
    response.sendFile('/dist/default.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})