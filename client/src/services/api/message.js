import axios from 'axios'
import BaseApiService from './base'

class MessageService extends BaseApiService {
  getConversation (gameId, fromPlayerId) {
    return axios.get(this.BASE_URL + 'game/' + gameId + '/message/conversation/' + fromPlayerId,
      { withCredentials: true })
  }

  getConversations (gameId) {
    return axios.get(this.BASE_URL + 'game/' + gameId + '/message/conversations',
      { withCredentials: true })
  }

  getUnreadCount (gameId) {
    return axios.get(this.BASE_URL + 'game/' + gameId + '/message/unread',
      { withCredentials: true })
  }

  markAllConversationsAsRead (gameId) {
    return axios.put(this.BASE_URL + 'game/' + gameId + '/message/markallread', { },
      { withCredentials: true })
  }

  send (gameId, toPlayerId, message) {
    return axios.post(this.BASE_URL + 'game/' + gameId + '/message/send',
      {
        toPlayerId,
        message
      },
      { withCredentials: true })
  }
}

export default new MessageService()
