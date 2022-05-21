const express = require('express');
const path = require('path');
const app = express();
const User = require('./models/user'); 
const methodOverride = require('method-override')
require('./db/conn');

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, '../public');

app.use(express.static(static_path));
app.set('view engine', 'ejs')
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", async (req,res) => {
  try {
    const users = await User.find({});
    res.render('home', {users});
  } catch(e) {
    res.send(e)
  }
});

app.get("/form", (req,res) => {
  res.render('form');
});

app.post("/form", async(req,res) => {
  try {
    const userDetails = new User({
      name: req.body.n,
      email: req.body.e
    })
    const savedUser = await userDetails.save();
    res.status(201).redirect('/');
  }catch(e) {
    res.status(400).send(e);
  }
});app

app.put('/put/:id', async(req, res) => {
  try {
    const {id:userID} = req.params;
    const users = await User.findById({_id:userID});
    let status = true;
    if(users.isPromoted === null) {
      status = true;
    } else {
      status = false;
    }
    await User.findByIdAndUpdate(userID, {isPromoted:status});
    res.redirect('/')
  } catch(e) {
    res.send(e);
  }
})

app.delete("/delete/:id", async(req, res) => {
  try {
    const _id = req.params.id;
    const delUser = await User.findByIdAndDelete({_id});
    res.redirect('/');
  } catch(e) {
    res.status(500).send(e);
  }
})

app.listen(port, () => {
  console.log(`Connection is live at port no. ${port}`);
})