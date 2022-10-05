///////////////////////////////////////////////////////////
// Our schema and model for the fruit resource
///////////////////////////////////////////////////////////
// this is the old mongoose import
// const mongoose = require("mongoose") // import mongoose
const mongoose = require('./connection')

// we're going to pull the Schema and model from mongoose
// we'll use a syntax called "destructuring"
const { Schema, model } = mongoose

// fruits schema
const fruitSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean
})

// make the fruit model
// the model method takes two args
// the first is what we will call our model
// the second is what we will use to build the model
const Fruit = model("Fruit", fruitSchema)

//////////////////////////////////////////////////
// Export our model
//////////////////////////////////////////////////
module.exports = Fruit