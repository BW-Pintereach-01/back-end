exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('catergories').insert([
        {id: 1, category: 'horror', users_id:'1'},
        {id: 2, category: 'comedy', users_id:'1'},
        {id: 3, category: 'sports', users_id:'1'}
      ]);
    });
};
