/**
 * Created by Jaron Long on 2020/5/25
 */
import { ChatCrmModel, ChatModel, UserModel } from 'npm-repo'
import { ChatHrModel } from '~/store/chat-hr.model'

export function init() {
  UserModel.insertOrUpdate({
    data: [
      {
        _type: 'doctor',
        id: 1,
        name: 'Counselor',
        doctorId: 'c1'
      },
      {
        _type: 'patient',
        id: 2,
        name: 'Patient',
        guestId: 'p1'
      }
    ]
  })
  ChatModel.insertOrUpdate({
    data: [
      {
        _type: 'crm',
        chatId: 1,
        ownerId: 1,
        targetId: 2
      }
    ]
  })
  ChatCrmModel.insertOrUpdate({
    data: [
      {
        chatId: 2,
        ownerId: 1,
        targetId: 2
      }
    ]
  })
  ChatHrModel.insertOrUpdate({
    data: [
      {
        chatId: 3,
        ownerId: 2,
        targetId: 1
      }
    ]
  })


  console.log('ChatHrModel:', ChatHrModel.all())
  console.log('ChatCrmModel: ', ChatCrmModel.all())
  console.log('ChatModel: ', ChatModel.all())
  console.log('UserModel: ', UserModel.all())
}
