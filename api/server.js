const express = require('express');
const helmet = require('helmet');
// const knex = require('knex');
// const knexConfig = require('../knexfile.js');

const Dishes = require('../data/dish-model.js');
const Recipes = require('../data/recipe-model.js');


const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ hello: "World!"});
})

server.get('/api/dishes', async (req,res) => {
    try {
        const dishes = await Dishes.getDish();
        res.status(200).json(dishes)
    } catch(error){
        res.status(500).json({message: "Error retrieving dishes"})
    }
});

server.get('/api/dishes/:id', async (req,res) => {
    try {
        const dish = await Dishes.getDishById(req.params.id);
        res.status(200).json(dish)
    } catch(error) {
        res.status(404).json({ message: "That dish does not exist"})
    }
});

server.post('/api/dishes', async (req, res) => {
    try {
        const newDish = await Dishes.addDish(req.body); 
        res.status(201).json(newDish)
    } catch(error){
        res.status(500).json({ message: "Error adding dish"})
    }
});


server.get('/api/recipes', async(req, res) => {
    try {
        const recipes = await Recipes.getRecipes();
        res.status(200).json(recipes);
    } catch(error) {
        res.status(500).json({ message: "Error retrieving recipes"})
    }
});

server.post('/api/recipes', async(req,res) => {
    try {
        const newRecipe = await Recipes.addRecipe(req.body);
        res.status(201).json(newRecipe);
    } catch(error){
        res.status(500).json({ message: "Error adding recipe"})
    }
});

module.exports = server;