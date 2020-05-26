const db = require('../data/dbConfig.js');

module.exports = {
  findAllArticles,
  findArticleById,
  findUserArticles,
  add,
  update,
  remove
}

function findAllArticles() {
  return db('articles')
}

function findArticleById(id) {
  return db('articles').where({ id }).first();
}

// select distinct a.link, a.title, a.author, a.category
// from users as u
// join articles as a 
// where a.users_id = 1

function findUserArticles(id) {
  return db('users as u')
    .join('articles as a', 'a.users_id', '=', 'u.id')
    .select('a.link', 'a.title', 'a.author', 'a.category')
    .distinct('a.title')
    .where('a.users_id', '=', id)
}

function add(data) {
  return db('articles')
    .insert(data)
    .then(ids => {
      return findById(ids[0]);
    });
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

function remove(id) {
  return db('articles').where({ id }).del();
}