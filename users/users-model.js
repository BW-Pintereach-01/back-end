const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update
};

function find() {
  return db("users as u")
    .select("u.id", "u.username")
    .orderBy("u.id");
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .orderBy("id");
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("users").where({ id }).first();
}

function remove(id) {
  return db('users')
      .where('id', Number(id))
      .del();
}

function update(changes, id) {
  return db('users')
    .where({ id })
    .update(changes)
    .then(success => {
      if(success) {
        return findById(id)
      } else {
        return res.status(500).json({ message: 'Failed to update user' });
      }
    })
}