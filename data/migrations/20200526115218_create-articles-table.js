exports.up = function(knex) {
  return knex.schema.createTable('categories', tbl => {
    tbl.increments();
    tbl.string('category', 255).notNullable();
  })
  .createTable('articles', tbl => {
    tbl.increments();
    tbl.string('link', 255).notNullable();
    tbl.string('title', 225);
    tbl.string('author', 225).notNullable();
    tbl.integer('users_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete("RESTRICT");
    tbl.integer('category_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('categories')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('articles')
    .dropTableIfExists('categories')
};