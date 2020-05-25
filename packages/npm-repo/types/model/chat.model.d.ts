/**
 * Created by Jaron Long on 2019/11/19
 */
import { Database, Model } from '@vuex-orm/core';
import { ChatCrmModel } from '.';
export declare class ChatModel extends Model {
    static entity: string;
    static typeKey: string;
    static fields(): {
        _type: import("@vuex-orm/core").String;
        _local: import("@vuex-orm/core").Boolean;
        id: import("@vuex-orm/core").Uid;
        chatId: import("@vuex-orm/core").Number;
        chatUnionId: import("@vuex-orm/core").Number;
        channel: import("@vuex-orm/core").String;
        updateTime: import("@vuex-orm/core").Attr;
        unread: import("@vuex-orm/core").Number;
    };
    static types(): {
        crm: typeof ChatCrmModel;
    };
}
export declare const ChatStore: {};
export declare function initialize(database: Database): void;
