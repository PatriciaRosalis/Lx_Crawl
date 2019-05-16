const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const PubCrawl = require("../models/PubCrawl");


const bcryptSalt = 10;

require('../configs/database')

let users = [
  new User({
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
  }),
  new User({
    username: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
  })
]

let pubCrawlExamples = [
  new PubCrawl({
    name: "Pensão Amor",
    places: [{
      address: "R. do Alecrim 19, 1200-292 Lisboa",
      location: {
        coordinates: [38.7092441,-9.2081959 ] //lng, lat
      },
    }],
    _user: users[0]._id,
  }),
  new PubCrawl({
    name: "Gin Lovers & Less",
    places: [{
      address: "Praça do Príncipe Real 26, 1250-184 Lisboa",
      location: {
        coordinates: [38.7135124,-9.156094,], //lng, lat
      },
    }],
    _user: users[0]._id,
  }),
  new PubCrawl({
    name: "The Insólito" ,
    places: [{
      address:"R. de São Pedro de Alcântara 83, 1250-238 Lisboa",
      location: {
        coordinates: [38.7135124,-9.156094], //lng, lat
      },
    }],
    _user: users[0]._id,
  })),
]

Promise.all([
  User.deleteMany(),
  PubCrawl.deleteMany(),
])
  .then(() => {
    console.log('All users and Pub Crawls have been deleted')

    return Promise.all([
      User.create(users),
      PubCrawl.create(pubCrawlExamples),
    ])
  })
  .then(() => {
    console.log(`${users.length} users created`)
    console.log(`${pubCrawlExamples.length} Pub Crawls created`)
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })