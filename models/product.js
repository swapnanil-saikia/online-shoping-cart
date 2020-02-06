// import { model } from "mongoose";

var mongoose = reqire('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
      imagePath: {type: String, required:true},
      title: {type: String, required:true},
      description: {type: String, required:true},
      price: {type: Number, required:true}
});
modeule.exports = mongoose.model('product', schema);