/**
 * Created by Jaron Long on 2020/5/25
 */
import VuexORM from '@vuex-orm/core'
import {
  initializeChat,
  initializeChatCrmModel
} from 'npm-repo'
import * as actions from './actions'

// I want to do this with a discriminator type 'hr'
import { initialize as initializeHr } from './chat-hr.model'


const database = new VuexORM.Database()
initializeChat(database)
initializeChatCrmModel(database)
initializeHr(database)

export const plugins = [VuexORM.install(database)]

export const state = () => ({
  loading: false
})

export {
  actions
}
