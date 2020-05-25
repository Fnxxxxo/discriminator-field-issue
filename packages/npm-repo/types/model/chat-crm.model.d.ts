/**
 * Created by Jaron Long on 2020/5/22
 */
import { ChatModel } from '.';
import { Database } from '@vuex-orm/core';
export declare class ChatCrmModel extends ChatModel {
    static entity: string;
    static baseEntity: string;
    static fields(): {
        group: import("@vuex-orm/core").Number;
        _type: import("@vuex-orm/core").String;
        _local: import("@vuex-orm/core").Boolean;
        id: import("@vuex-orm/core").Uid;
        chatId: import("@vuex-orm/core").Number;
        chatUnionId: import("@vuex-orm/core").Number;
        channel: import("@vuex-orm/core").String;
        updateTime: import("@vuex-orm/core").Attr;
        unread: import("@vuex-orm/core").Number;
    };
}
export declare const ChatCrmStore: {};
export declare function initialize(database: Database): void;
