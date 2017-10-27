import * as uuid from "uuid";
import { cloneDeep } from "lodash";

import { people } from "./people";
import { weekdays } from "./weekdays";
import { conversations } from "./conversations";

export const UserQuery = `
  User(id){
    conversations
  }
`;

export const ConversationQuery = `
  Conversation(id){
    participants,
    messages
  }
`;

export async function query(query) {
  return new Promise((resolve, reject) => {
    switch (query) {
      case UserQuery:
        resolve({ conversations });
        break;
      case ConversationQuery:
        resolve(conversations[0]);
        break;
      default:
        break;
    }
  });
}

export async function getConversation(id) {
  return new Promise((resolve, reject) => {
    const conversation = conversations.filter(c => c.id === id)[0];
    resolve(cloneDeep(conversation));
  });
}

export async function getUser(userId) {
  return new Promise((resolve, reject) => {
    const person = people.filter(person => person.id === userId)[0];
    resolve(cloneDeep(person));
  });
}

export async function getWeekdays() {
  return new Promise((resolve, reject) => {
    resolve(cloneDeep(weekdays));
  });
}

export async function getCurrentUserId() {
  return new Promise((resolve, reject) => {
    resolve("89568a74-671d-41b9-83bb-578025ee9d57");
  });
}

/**
  * Generates a new conversation with the provided participants
  * @argument {User[]} participants an array of users to add to the conversation
  */
export async function createConversation(participants) {
  return new Promise((resolve, reject) => {
    const conversation = {
      id: uuid.v4(),
      participants,
      messages: []
    };
    conversations.push(conversation);
    participants.forEach(async id => {
      const user = people.filter(person => person.id === id)[0];
      user.conversations.push(conversation.id);
    });
    resolve(conversation.id);
  });
}

/**
 * Adds a message to a conversation
 * @param {string} messageText The message to be send
 * @param {string} threadId the conversation the message is a part of
 */
export async function sendMessage(messageText, threadId) {
  return new Promise(async (resolve, reject) => {
    const message = {
      sender: await getCurrentUserId(),
      timeSent: Date.now(),
      text: messageText
    };
    const conversation = conversations.filter(c => c.id === threadId)[0];
    conversation.messages.push(message);
    resolve(cloneDeep(message));
  });
}
