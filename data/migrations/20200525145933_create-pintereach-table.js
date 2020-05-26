exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      users.increments();
  
      users
        .string('username', 255)
        .notNullable()
        .unique();
      users.string('password', 255).notNullable();
    })
  
  .createTable('categories', tbl => {
      tbl.increments();
  
      tbl.string('category').notNullable();
  })
  .createTable('articles', tbl => {
    tbl.increments();
  
  
    tbl.integer('users_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete("RESTRICT");
  
    tbl.string('link', 255).notNullable();
    tbl.string('title', 225);
    tbl.string('author', 225).notNullable();
  
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
    return knex.schema.dropTableIfExists('users')
    .dropTableIfExists('categories')
    .dropTableIfExists('articles');
  };
  
