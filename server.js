const express = require('express');
const app = express();

app.use(express.static('public'));

// set apprun as view engine
app.engine('js', require('apprun/viewEngine')());
app.set('view engine', 'js');

// set global ssr flag
app.use((req, res, next) => {
  global.ssr = req.headers.accept.indexOf('application/json') < 0;
  next();
});

app.use('/', require('./routers/index'));
app.use('/about', require('./routers/about'));
app.use('/contact', require('./routers/contact'));

const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});