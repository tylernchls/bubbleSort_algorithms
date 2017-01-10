const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bubbleSort = require('./routes/bubbleSort');
const quick_sort = require('./routes/quick_sort');



app.use(bodyParser.urlencoded({
  extended:true
}))

app.use(bodyParser.json())

app.use('/bubbleSort', bubbleSort);
app.use('/quick_sort', quick_sort);


if(!module.parent){
    app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
}

module.exports = app;