/**
 * Created by Jaron Long on 2019/11/19
 */
import { Database, Model, Fields } from '@vuex-orm/core'
import { UserDoctorModel, UserPatientModel } from './index'

export class UserModel extends Model {
  static entity = 'users'
  static typeKey = '_type'

  static fields(): Fields {
    return {
      _type: this.string('doctor'),
      id: this.uid(),
      name: this.string(null).nullable()
    }
  }

  static types() {
    return {
      doctor: UserDoctorModel,
      patient: UserPatientModel
    }
  }
}

export default UserModel
