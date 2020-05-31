import Knex from 'knex'

export async function up (knex: Knex): Promise<any> {
  return await knex.schema.createTable('incidents', (table) => {
    table.increments()

    table.string('title').notNullable()
    table.string('description').notNullable()
    table.decimal('value').notNullable()

    table.string('ong_id').notNullable()

    table.foreign('ong_id')
      .references('id')
      .inTable('ongs')
      .onDelete('cascade')

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

export async function down (knex: Knex): Promise<any> {
  return await knex.schema.dropTable('incidents')
}
