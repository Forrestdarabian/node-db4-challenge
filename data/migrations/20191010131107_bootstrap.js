exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl;
      tbl.increments();
      tbl.string("title").notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.float("quantity");
    })
    .createTable("recipes_ingredients", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");
      tbl.unique(["recipe_id", "ingredient_id"]);
      //   tbl.string("ingredient_name");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
