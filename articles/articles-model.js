const db = require('./../data/dbConfig');

module.exports = {
    insert,
    remove,
    update,
    findAllArticles,
    findUserArticles,
    findArticleById
}

function insert(article) {
    return db('articles')
    .insert(article, 'id')
    .then(ids => ({id: ids[0]}));
}

function remove(id) {
    return db('articles')
        .where('id', Number(id))
        .del();
}

function update(changes, id) {
    return db('articles')
      .where({ id })
      .update(changes)
      .then(success => {
        if(success) {
          return findArticleById(id)
        } else {
          return res.status(500).json({ message: 'Failed to update article' });
        }
      })
  }

  function findAllArticles() {
    return db('articles')
  }
  function findArticleById(id) {
    return db('articles').where({ id }).first();
  }
  function findUserArticles(id) {
    return db('users as u')
      .join('articles as a', 'a.users_id', '=', 'u.id')
      .select('a.link', 'a.title', 'a.author', 'a.category')
      .distinct('a.title')
      .where('a.users_id', '=', id)
  }