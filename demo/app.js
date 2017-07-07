var express = require('express')
  , app = express()
  , template = __dirname + '/index.html'

app.use(express.static(__dirname))

app.get('/', function (req, res, next) {
  try {
    res.sendFile( '/index.html')
  } catch (e) {
    next(e)
  }
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})