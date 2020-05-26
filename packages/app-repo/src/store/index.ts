/**
 * Created by Jaron Long on 2020/5/25
 */
import VuexORM from '@vuex-orm/core'
import {
  ChatCrmModel,
  ChatModel,
  UserModel,
  UserDoctorModel,
  UserPatientModel
} from 'npm-repo'

import {ChatHrModel} from './chat-hr.model'
import * as actions from './actions'

const database = new VuexORM.Database()
database.register(UserModel)
database.register(UserDoctorModel)
database.register(ChatModel)
database.register(ChatCrmModel)
database.register(UserPatientModel)
database.register(ChatHrModel)

export const plugins = [VuexORM.install(database)]

export const state = () => ({
  loading: false
})

export {
  actions
}
