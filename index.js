var express = require('express')
var app = express()

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.status(410);
  res.render('index');
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT + '!')
})
