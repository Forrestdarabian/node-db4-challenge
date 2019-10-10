
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').truncate()
    .then(() => knex('ingredients').truncate())
    .then(() => knex('recipes').truncate())
    {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
