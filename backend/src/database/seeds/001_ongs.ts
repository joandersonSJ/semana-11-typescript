import Knex from 'knex'

export async function seed (knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex('ongs').del()
    .then(() => {
      return knex('ongs').insert([
        {
          id: '1',
          name: 'Ong1',
          email: 'ong1@ong1.com',
          whatsapp: '111111',
          city: 'cityOng1',
          uf: 'BA'
        },
        {
          id: '2',
          name: 'Ong2',
          email: 'ong2@ong2.com',
          whatsapp: '222222',
          city: 'cityOng2',
          uf: 'BA'
        },
        {
          id: '3',
          name: 'Ong3',
          email: 'ong3@ong3.com',
          whatsapp: '333333',
          city: 'cityOng3',
          uf: 'BA'
        },
        {
          id: '4',
          name: 'Ong4',
          email: 'ong4@ong4.com',
          whatsapp: '444444',
          city: 'cityOng4',
          uf: 'BA'
        },
        {
          id: '5',
          name: 'Ong5',
          email: 'ong5@ong5.com',
          whatsapp: '555555',
          city: 'cityOng5',
          uf: 'BA'
        },
        {
          id: '6',
          name: 'Ong6',
          email: 'ong6@ong6.com',
          whatsapp: '666666',
          city: 'cityOng6',
          uf: 'BA'
        },
        {
          id: '7',
          name: 'Ong7',
          email: 'ong7@ong7.com',
          whatsapp: '777777',
          city: 'cityOng7',
          uf: 'BA'
        },
        {
          id: '8',
          name: 'Ong8',
          email: 'ong8@ong8.com',
          whatsapp: '888888',
          city: 'cityOng8',
          uf: 'BA'
        },
        {
          id: '9',
          name: 'Ong9',
          email: 'ong9@ong9.com',
          whatsapp: '999999',
          city: 'cityOng9',
          uf: 'BA'
        },
        {
          id: '10',
          name: 'Ong10',
          email: 'ong10@ong10.com',
          whatsapp: '101010101010',
          city: 'cityOng10',
          uf: 'BA'
        }

      ])
    })
};
