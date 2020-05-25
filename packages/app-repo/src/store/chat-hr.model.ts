/**
 * Created by Jaron Long on 2020/5/25
 */
import { ChatModel } from 'npm-repo'
import { Database } from '@vuex-orm/core'

export class ChatHrModel extends ChatModel {
  static entity = 'chats_hr'
  static baseEntity = 'chats'

  static fields() {
    return {
      ...super.fields(),
      group: this.number(0)
    }
  }
}

export const ChatHrStore = {}

export function initialize(database: Database) {
  if (database) {
    database.register(ChatHrModel, ChatHrStore)
  }
}
