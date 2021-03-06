import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      messages: []
    }),
    mutations: {
      increment(state) {
        state.counter++
      },
      addMessage(state, messageText) {
        state.messages.push({username: "guest", text: messageText})
      }
    }
  })
}

export default createStore