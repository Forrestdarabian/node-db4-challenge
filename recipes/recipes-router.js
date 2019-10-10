const router = require("express").Router();
const Recipes = require("./recipes-model");

router.get("/", (req, res) => {
  Recipes.getRecipes().then(recipes => {
    res.status(200).json(recipes);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Recipes.getById(id).then(recipe => {
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).end;
    }
  });
});
module.exports = router;
