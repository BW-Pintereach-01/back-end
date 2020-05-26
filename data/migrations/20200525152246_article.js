
exports.up = function(knex) {
    return knex.schema
            .createTable('articles', tbl => {
                tbl.increments();

            
                tbl.string('users_id')
                    .notNullable()
                    .unsigned()
                    .references('id')
                    .inTable('users')
                    .onUpdate('CASCADE')
                    .onDelete("CASCADE");

                tbl.string('link').notNullable();
                tbl.string('title');
                tbl.string('author').notNullable();

                tbl.string('category_id')
                    .notNullable()
                    .unsigned()
                    .references('id')
                    .inTable('categories')
                    .onUpdate('CASCADE')
                    .onDelete('CASCADE')
            })

            .createTable('categories', tbl => {
                tbl.increments();
    
                tbl.string('category').notNullable();
                tbl
				.integer('users_id')
				.notNullable()
				.unsigned()
				.references('id')
				.inTable('user')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
            })

            .createTable('authors', tbl => {
                tbl.increments();
    
                tbl.string('name').notNullable();
            })

            .createTable('articles_author', tbl => {
                tbl.increments();
    
                tbl.integer('author_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('authors')
                .onUpdate('CASCADE')
                .onDelete("CASCADE");
    
                tbl.integer('article_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('articles')
                .onUpdate('CASCADE')
                .onDelete("CASCADE");
            
            })
  
};

exports.down = function(knex) {
  return knex.schema
         .dropTableIfExists('articles')
         .dropTableIfExists('categories')
         .dropTableIfExists('authors')
         .dropTableIfExists('articles_author')

};
