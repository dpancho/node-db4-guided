exports.up = function(knex) {
    return knex.schema.createTable('species', t => {
      t.increments(); // the type of Primary Key is integer automatically
      t.string('name', 255).notNullable();
    })
    .createTable('animals', t => {
      t.increments();
      t.string('name', 255).notNullable();
      //define our Foreign Key
      t
      .integer('species_id')
      .unsigned()
      .references('id')
      .inTable('species')
      .onDelete('RESTRICT') // about deleteing the record from the primary key table. Could be 'RESTRICT', 'IGNORE', 'DO NOTHING'... etc
      .onUpdate('CASCADE') // about changing the value of the primary key
      // we have bears and a few animals that are bears
    })
    .createTable('zoos', t => {
        t.increments();
        t.string('name', 255).notNullable();
        t.string('address', 255);
    })
    .createTable('animal_zoos', t => {
        t.increments();
        t.string('to', 255)
        t.string('from', 255).notNullable();
        t
        .integer('zoo_id')
        .unsigned()
        .references('id')
        .inTable('zoo')
        .inTable('zoos')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
  
        t
        .integer('animal_id')
        .unsigned()
        .references('id')
        .inTable('animals')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')     
    })
  };
  exports.down = function(knex) {
    
  };