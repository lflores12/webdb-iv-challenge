
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe: "granny's tacos", directions: "test", dish_id:"1"},
        { recipe: "tex-mex tacos", directions: "test 2", dish_id:"1"}
      ]);
    });
};
