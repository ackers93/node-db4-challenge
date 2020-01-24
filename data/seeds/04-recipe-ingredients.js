exports.seed = async knex => {
  await knex("recipe-ingredients").insert([
    {
      ingredient_id: 1,
      recipe_id: 2
    },
    {
      ingredient_id: 3,
      recipe_id: 1
    },
    {
      ingredient_id: 2,
      recipe_id: 2
    }
  ]);
};
