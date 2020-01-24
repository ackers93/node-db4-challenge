const db = require("../data/db-config");

async function getRecipes(query = {}) {
  const { limit = 10, sortby = "id", sortdir = "asc" } = query;

  let rows = await db("recipes")
    .orderBy(sortby, sortdir)
    .limit(limit);

  return rows;
}

function findById(id) {
  return db
    .select("*")
    .from("recipes")
    .where({ id })
    .first();
}

function getShoppingList(recipe_id) {
  return db("ingredients")
    .select(
      { ingredient_Name: "ingredients.name" },
      "ingredients.quantities",
      {
        recipes_id: "recipes.id"
      },
      { recipe_Name: "recipes.name" },
      "ingredients_recipes.recipe_id"
    )
    .join("recipes", "recipes.id", "recipe-ingredients.recipe_id")
    .join("recipe-ingredients", "recipe-ingredients.id", "ingredients.id")
    .where("recipe_id", recipe_id);
}

function getInstructions(recipe_id) {
  return db("steps")
    .select(
      {
        recipe_name: "recipes.name"
      },
      "steps.instructions",
      "steps.step_number",
      "steps.id"
    )
    .join("recipes", "recipes.id", "steps.recipe_id")
    .where("recipe_id", recipe_id);
}

module.exports = { getRecipes, findById, getShoppingList, getInstructions };
