const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/assignment_4')
.then(() => {
  console.log('Connection is successfull');
}).catch((e) => {
  console.log('No Connection');
});