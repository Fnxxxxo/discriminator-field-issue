import { Model } from '@vuex-orm/core';

/**
 * Created by Jaron Long on 2019/11/19
 */
let ChatModel = /** @class */ (() => {
    class ChatModel extends Model {
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
            };
        }
        static types() {
            return {
                crm: ChatCrmModel,
            };
        }
    }
    ChatModel.entity = 'chats';
    ChatModel.typeKey = '_type';
    return ChatModel;
})();
const ChatStore = {};
function initialize(database) {
    if (database) {
        database.register(ChatModel, ChatStore);
    }
}

/**
 * Created by Jaron Long on 2020/5/22
 */
let ChatCrmModel = /** @class */ (() => {
    class ChatCrmModel extends ChatModel {
        static fields() {
            return {
                ...super.fields(),
                group: this.number(0)
            };
        }
    }
    ChatCrmModel.entity = 'chats_crm';
    ChatCrmModel.baseEntity = 'chats';
    return ChatCrmModel;
})();
const ChatCrmStore = {};
function initialize$1(database) {
    if (database) {
        database.register(ChatCrmModel, ChatCrmStore);
    }
}
//# sourceMappingURL=chat-crm.model.js.map

export { ChatCrmModel, ChatModel, initialize as initializeChat, initialize$1 as initializeChatCrmModel };
