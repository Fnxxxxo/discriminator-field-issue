/**
 * Created by Jaron Long on 2019/11/19
 */
import { Database, Model } from '@vuex-orm/core'
import { ChatCrmModel } from '.'

export class ChatModel extends Model {
  static entity = 'chats'
  static typeKey = '_type'

  static fields() {
    return {
      // chatId or deviceId
      _type: this.string('crm'),
      _local: this.boolean(true),
      id: this.uid(),
      chatId: this.number(null).nullable(),
      chatUnionId: this.number(null).nullable(),
      channel: this.string(null).nullable(),
      updateTime: this.attr(new Date()),
      unread: this.number(0)
    }
  }

  static types() {
    return {
      crm: ChatCrmModel,
    }
  }
}

export const ChatStore = {}

export function initialize(database: Database) {
  if (database) {
    database.register(ChatModel, ChatStore)
  }
}
