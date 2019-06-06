const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development)

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ hello: "World!"});
})

server.get('/api/dishes', async (req,res) => {
    try {
        const dishes = await db('dishes');
        res.status(200).json(dishes)
    } catch(error){
        res.status(500).json({message: "Error retrieving dishes"})
    }
});

server.get('/api/recipes', async(req, res) => {
    try {
        const recipes = await db('recipes');
        res.status(200).json(recipes);
    } catch(error) {
        res.status(500).json({ message: "Error retrieving recipes"})
    }
})

module.exports = server;