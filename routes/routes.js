const express = require('express');
const Router = express.Router();
const db = require('../config/mongoose')
const user = require('../models/user')

console.log("Router loaded");

let createRes = (code, message, error, data) => {
  return {
    "code" : code,
    "message" : message,
    "error" : error,
    "data": data
  }
}

Router.get('/', function (req, res, next) {
    user.find({})
    .then(function (user) {
      res.status(200).json(createRes(200, "User fetched successfully", false, user))
    })
    .catch(function (err) {
      console.log("error in fetching")
      res.status(400).json(createRes(400, "Error in fetching user records", err.message, null))
    })
  })

Router.get('/:id', function (req, res, next) {
    user.find({_id : req.params.id})
    .then(function (user) {
      res.status(200).json(createRes(200, "User fetched successfully", false, user))
    })
    .catch(function (err) {
      console.log("error in fetching")
      res.status(400).json(createRes(400, "Error in fetching user records", err.message, null))
    })
  })

Router.post('/', function (req, res, next) {
  user.create(req.body)
  .then(function (user) { 
    console.log("user created" + user)
    res.status(200).json(createRes(200, "User created successfully", false, user))
  }).catch(function (err) {
    console.log("error in creating new user")
    res.status(400).json(createRes(400, "Error in creating user", err.message, null))
  })
})

Router.put('/:id', function (req, res, next) {
  user.findByIdAndUpdate({ _id : req.params.id}, req.body, {new: true})
  .then(function (user) { 
    console.log("user updated" + user)
    res.status(200).json(createRes(200, "User updated successfully", false, user))
  })
  .catch(function (err) { 
    console.log("error in updating user")
    res.status(400).json(createRes(400, "Error in updating user", err.message, null))
  })
})


Router.delete('/:id', function (req, res, next) {
  user.findByIdAndRemove({ _id : req.params.id})
  .then(function (user) { 
    console.log("user deleted" + user)
    res.status(200).json(createRes(200, "User deleted successfully", false, user))
  })
  .catch(function (err) { 
    console.log("error in deleting user")
    res.status(400).json(createRes(200, "Error in deleting user records", err.message, null))
  })
})

module.exports = Router