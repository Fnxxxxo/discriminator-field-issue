/**
 * Created by Jaron Long on 2020/5/25
 */
import { ChatModel } from 'npm-repo'

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
