import Knex from "knex";


export async function up(knex: Knex): Promise<any> {
  knex.schema.createTable('ongs',(table) => {
    table.string('id').primary();

    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  })
}


export async function down(knex: Knex): Promise<any> {
  knex.schema.dropTable('ongs')
}