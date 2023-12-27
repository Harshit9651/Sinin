
const validator = require("validator");
const mongoose = require("mongoose");



main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/people');
console.log("mongoose responsed gggggsucessfully");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}