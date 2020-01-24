exports.seed = async knex => {
  await knex("ingredients").insert([
    {
      name: "cocoa",
      quantities: "12.3",
      unit: "gs"
    },
    {
      name: "berries",
      quantities: "1.1",
      unit: "tsps"
    },
    {
      name: "milk",
      quantities: "1",
      unit: "cups"
    }
  ]);
};
