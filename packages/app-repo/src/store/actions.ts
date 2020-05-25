/**
 * Created by Jaron Long on 2020/5/25
 */
import { ChatCrmModel, ChatModel } from 'npm-repo'
import { ChatHrModel } from '~/store/chat-hr.model'

export function init() {
  ChatModel.insertOrUpdate({
    data: [
      {
        _type: 'crm',
        chatId: 1
      }
    ]
  })
  ChatCrmModel.insertOrUpdate({
    data: [
      {
        chatId: 2
      }
    ]
  })
  ChatHrModel.insertOrUpdate({
    data: [
      {
        chatId: 3
      }
    ]
  })
  console.log('ChatHrModel:', ChatHrModel.all())
  console.log('ChatCrmModel: ', ChatCrmModel.all())
  // Currently, the type of ChatHrModel is actually ChatModel
  console.log('All: ', ChatModel.all())
}
