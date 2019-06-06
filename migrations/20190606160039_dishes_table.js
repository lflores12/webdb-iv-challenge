
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl) {
      tbl.increments();

      tbl
      .string('dish', 128)
      .notNullable()
      .unique();
  })
  .createTable('recipes', function(tbl) {
      tbl.increments();

      tbl
      .string('recipe', 128)
      .unique()
      .notNullable();

      tbl
      .string('directions',5000)
      .unique();

      tbl
      .integer('dish_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('dishes')
      .onDelete('RESTRICT')
      .onUpdate("CASCADE");
  })

  .createTable('ingredients', function(tbl) {
      tbl.increments();

      tbl
      .string('ingredient',128)
      .unique();
  })
  .createTable('recipe_ingredients', function(tbl) {
      tbl.increments();

      tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

      tbl
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  })
};



exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('recipe_ingredients')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
  .dropTableIfExists('dishes')
};
