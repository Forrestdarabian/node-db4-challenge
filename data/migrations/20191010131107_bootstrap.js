exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("title").notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("name");
      tbl.float("quantity");
    })
    .createTable("recipes_ingredients", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .reference("id")
        .inTable("recipes");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .reference("id")
        .inTable("ingredients");
      //   tbl.string("ingredient_name");
    });
};

exports.down = function(knex) {};
