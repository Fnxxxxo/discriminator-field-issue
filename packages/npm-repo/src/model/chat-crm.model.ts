/**
 * Created by Jaron Long on 2020/5/22
 */
import { ChatModel } from '.'
import { Database } from '@vuex-orm/core'

export class ChatCrmModel extends ChatModel {
  static entity = 'chats_crm'
  static baseEntity = 'chats'

  static fields() {
    return {
      ...super.fields(),
      group: this.number(0)
    }
  }
}

export const ChatCrmStore = {}

export function initialize(database: Database) {
  if (database) {
    database.register(ChatCrmModel, ChatCrmStore)
  }
}
