const express = require('express');
const path = require('path');
const data = require('../data.json');  
// const User = require('./models/user');
const app = express();
require('./db/conn');

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {data});
})


/* app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '../public')));
 */
/* app.get('/', (req,res) => {
  res.render('home', {data});
}) */

/* app.get('/form', (req, res) => {
  res.render('form')
})

app.post('/form', (req, res) => {
  var user = {
    name: req.body.n,
    email: req.body.e,
  }
  data.push(user);
  res.redirect("/");
}); */

app.listen(port, () => {
  console.log(`Server is running at port no ${port}`);
})