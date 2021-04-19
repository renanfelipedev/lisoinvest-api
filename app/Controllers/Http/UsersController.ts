import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index() {
    const users = await User.all()

    return users
  }

  public async store({ request }: HttpContextContract) {
    const user = await User.create(request.all())

    return user
  }

  public async update({ request, params }: HttpContextContract) {
    const { id } = params

    const user = await User.findOrFail(id)

    user.merge(request.all())

    await user.save()

    return user
  }

  public async destroy({ params, response }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    await user.delete()

    return response.status(204)
  }

  public async toogleActivation({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.user_id)

    user.merge({
      active: !user.active,
    })

    await user.save()

    return {
      name: user.name,
      active: user.active,
    }
  }
}
