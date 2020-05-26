/**
 * Created by Jaron Long on 2020/4/7
 */
import { UserModel } from './index'
import { Database, Fields } from '@vuex-orm/core'

export class UserDoctorModel extends UserModel {
  static entity = 'users_doctor'
  static baseEntity = 'users'

  static fields(): Fields {
    return {
      ...super.fields(),
      doctorId: this.string(null).nullable()
    }
  }
}

export default UserDoctorModel
