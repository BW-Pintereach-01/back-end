exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        {
          id: 1,
          users_id:1,
          link: 'https://theconversation.com/when-halloween-became-americas-most-dangerous-holiday-123132',
          title:'When Halloween became America’s most dangerous holiday',
          author:'Pat Dal',
          category_id:1
        },
        {
          id: 2,
          users_id:1,
          link: 'https://theconversation.com/why-we-love-big-blood-curdling-screams-124148',
          title:'Why we love big, blood-curdling screams',
          author:'Pat Dal',
          category_id:1
        },
        {
          id: 3,
          users_id:1,
          link: 'https://theconversation.com/victorian-scientists-thought-theyd-found-an-explanation-for-ghosts-but-the-public-didnt-want-to-hear-it-126153',
          title:'Victorian scientists thought they’d found an explanation for ghosts – but the public didn’t want to hear it',
          author:'Pat Dal',
          category_id:1
        }
      ]);
    });
};