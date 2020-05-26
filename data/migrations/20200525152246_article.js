exports.up = function(knex) {
  return knex.schema
  .createTable('articles', tbl => {
    tbl.increments();
    tbl.string('link', 255).notNullable();
    tbl.string('title', 225);
    tbl.string('author', 225).notNullable();
    tbl.string('category', 255)
    tbl.integer('users_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete("RESTRICT");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('articles')
    
};