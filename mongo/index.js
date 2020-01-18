var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var stringdb = 'mongodb://<dbuser>:<dbpassword>@ds061631.mlab.com:61631/heroku_bfz4n0w5'
var db = mongoose.connect(stringdb);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () { console.log("Mongo On"); });

var UsersSchema = mongoose.Schema({
  id : {type : String},
  name : {type: String},
  phoneNum : {type: String},
  passwd : {type : String},
  token : {type: String}
});

var HealthSchema = mongoose.Schema({
  name : {type: String, required: true},
  percent : {type: String, required: true},
  money : {type: String, required: true},
  lat : {type: Number, required: true},
  lng : {type: Number, required: true},
  subdata: {type: String, required: true},
  userToken : {type : String},
  isGujik : {type : String },
  token : {type: String}
});

var JobSchem = mongoose.Schema({
  title : {type: String, required: true},
  subdata : {type: String, required: true},
  timeStamp : {type: String},
  userToken : {type : String, required: true},
  userName : {type : String, required: true},
  docToken : {type : String}
});


Users = mongoose.model('users', UsersSchema);
Health = mongoose.model('cm', HealthSchema);
Job = mongoose.model('campaign', JobSchem);

exports.Users = Users;
exports.Health = Health;
exports.Job = Job;
exports.db = db;
