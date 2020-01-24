exports.seed = async knex => {
  await knex("ingredients").truncate();
  await knex("recipe-ingredients").truncate();
  await knex("steps").truncate();
  await knex("recipes").truncate();
};
