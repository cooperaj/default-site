var express = require('express')
var app = express()

app.use(require('express-naked-redirect')({
  reverse: true,
  status: 301
}))
app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/.well-known/webfinger', function (req, res) {
  res.redirect('https://social.n8e.dev' + req.originalUrl)
})

app.get('/', function (req, res) {
  res.status(process.env.CODE || 200);
  res.render('index');
})

app.listen(process.env.PORT, function () {
  console.log('App listening on port ' + process.env.PORT + '!')
})
