
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('articles')
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        {
          users_id: 1,
          link: 'https://theconversation.com/when-halloween-became-americas-most-dangerous-holiday-123132',
          title:'When Halloween became America\'s most dangerous holiday',
          author:'Pat Dal',
          category: 'Horror'
        }
      ]);
    });
};