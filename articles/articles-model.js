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
  return db('articles as a')
    .join('users as u', 'a.users_id', '=', 'u.id')
    .select('a.link', 'a.title', 'a.author', 'a.category')
    .where('a.users_id', '=', id)
}