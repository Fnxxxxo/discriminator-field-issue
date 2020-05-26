/**
 * Created by Jaron Long on 2019/11/19
 */
import { Database, Model, Fields } from '@vuex-orm/core'
import { ChatCrmModel, UserModel } from './index'

export class ChatModel extends Model {
  static entity = 'chats'
  static typeKey = '_type'

  static fields(): Fields {
    return {
      // chatId or deviceId
      _type: this.string('crm'),
      _local: this.boolean(true),
      id: this.uid(),
      chatId: this.number(null).nullable(),
      chatUnionId: this.number(null).nullable(),
      channel: this.string(null).nullable(),
      updateTime: this.attr(new Date()),
      unread: this.number(0),
      targetId: this.attr(null).nullable(),
      target: this.belongsTo(UserModel, 'targetId'),
      ownerId: this.attr(null).nullable(),
      owner: this.belongsTo(UserModel, 'ownerId'),
    }
  }

  static types() {
    return {
      crm: ChatCrmModel,
    }
  }
}

export default ChatModel
