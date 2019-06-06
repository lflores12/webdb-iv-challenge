const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getDish,
    getDishById,
    addDish
};

function getDish() {
    return db('dishes')
};

function getDishById(id) {
    return db('dishes')
    .where({ id })
    .first();
}

function addDish(dish) {
    return db('dishes')
    .insert(dish, 'id')
}