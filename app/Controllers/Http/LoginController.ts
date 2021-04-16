import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class LoginController {
  public async store({ request, response, auth }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])

    try {
      const { token } = await auth.use('api').attempt(email, password)

      const { id, name, active } = await User.findByOrFail('email', email)

      if (!active) {
        throw new Error('User deactived by administrator.')
      }

      return {
        user: {
          id,
          name,
        },
        token,
      }
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  public async destroy({ auth, response }: HttpContextContract) {
    await auth.use('api').logout()

    return response.status(204)
  }
}
