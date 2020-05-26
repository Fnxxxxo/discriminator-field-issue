/**
 * Created by Jaron Long on 2020/5/26
 */
import { UserModel } from './index'
import { Database, Fields } from '@vuex-orm/core'

export class UserPatientModel extends UserModel {
  static entity = 'users_patient'
  static baseEntity = 'users'

  static fields(): Fields {
    return {
      ...super.fields(),
      guestId: this.string(null).nullable()
    }
  }
}

export default UserPatientModel
