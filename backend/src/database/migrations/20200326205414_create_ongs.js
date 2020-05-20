// Método (up) usado para criação de tabelas
exports.up = function(knex) {
  return knex.schema.createTable('ongs', (table) => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  })
};

// Método (down) quando eu quiser voltar atrás EX: deletar uma tabela
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
