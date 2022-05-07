const express = require('express');
const app = express();
const path = require('path');
const data = require('./data.json');  

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
  res.render('home', {data});
})

app.get('/form', (req, res) => {
  res.render('form')
})

app.post('/form', (req, res) => {
  var user = {
    name: req.body.n,
    email: req.body.e,
    age: req.body.a,
    city: req.body.c,
    profession: req.body.p
  }
  data.push(user);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log('Listening to port 3000')
})