const db = require('./../data/dbConfig');

module.exports = {
    insert,
    remove
    
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