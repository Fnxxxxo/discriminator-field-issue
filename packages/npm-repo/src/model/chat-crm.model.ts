/**
 * Created by Jaron Long on 2020/5/22
 */
import { ChatModel } from './index'
import { Database, Fields } from '@vuex-orm/core'

export class ChatCrmModel extends ChatModel {
  static entity = 'chats_crm'
  static baseEntity = 'chats'

  static fields(): Fields {
    return {
      ...super.fields(),
      group: this.number(0)
    }
  }
}

export default ChatCrmModel
