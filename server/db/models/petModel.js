const Sequelize = require('sequelize')
const db = require('../db')

const Pet = db.define('pet', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/petdefaultimage.png'
  },
  species: {
    type: Sequelize.STRING,
    allowNull: false
  },
  breed: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sex: {
    type: Sequelize.ENUM('Female', 'Male')
  },
  age: {
    type: Sequelize.ENUM('Baby', 'Young', 'Adult', 'Senior')
  },
  size: {
    type: Sequelize.ENUM('Small', 'Medium', 'Large', 'XL')
  }
})

module.exports = Pet
