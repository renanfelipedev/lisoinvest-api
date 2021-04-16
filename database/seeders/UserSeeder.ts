import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeederSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'admin@email.com',
        name: 'Administrador',
        password: 't',
      },
      {
        email: 'renan.fb.dantas@gmail.com',
        name: 'Renan Felipe Brito Dantas',
        password: 't',
      },
    ])
  }
}
