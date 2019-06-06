const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getRecipes,
    addRecipe
};

function getRecipes() {
    return db('recipes')
};

function addRecipe(recipe) {
    return db('recipes')
    .insert(recipe, 'id')
}