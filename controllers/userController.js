'use strict'

const bcrypt = require('bcrypt')

const Models = require('../models')

const getUsers = (res) => {
  Models.User.findAll({})
    .then((data) => {
      // Do NOT return passwords
      // Remove the password key before returning
      // Either through Javascript, OR through scope attribute, see: /models/user.js Line #45
      // for(const user in data){
      //   data[user].password = undefined //The Javascript way of removing a property.key
      // }
      res.send({result: 200, data: data})
    })
    .catch(err => {
      console.log("Error:", err)
      throw err
    })
}


module.exports = {
    getUsers
}