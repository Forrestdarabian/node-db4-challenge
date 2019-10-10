const db = require("../data/db");
function getRecipes() {
  return db("recipes");
}
function getById(id) {
  return getRecipes()
    .where({ id })
    .first();
}
module.exports = { getRecipes, getById };
