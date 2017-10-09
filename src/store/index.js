import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export function createStore () {
  return new Vuex.Store({
    state: {
      user: {
        id: '',
        name: '',
        avator_url: '',
        logined: false
      },
      post: {
        id: '',
        user_id: '',
        image_url: '',
        like_count: '',
        comments: [],
        created_at: ''
      }
    },
    actions,
    mutations,
    getters
  })
}
