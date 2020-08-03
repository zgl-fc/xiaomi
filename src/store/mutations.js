import { SAVEUSERNAME, SAVECARTCOUNT } from './constant'

export default {
  [SAVEUSERNAME](state, username) {
    state.username = username
  },
  [SAVECARTCOUNT](state, count) {
    state.count = count
  }
}