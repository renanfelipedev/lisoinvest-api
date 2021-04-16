import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class LoginController {
  public async store({ request, auth }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])

    const { token } = await auth.use('api').attempt(email, password)

    const { id, name } = await User.findByOrFail('email', email)

    return {
      user: {
        id,
        name,
      },
      token,
    }
  }

  public async destroy({ auth, response }: HttpContextContract) {
    await auth.use('api').logout()

    return response.status(204)
  }
}
