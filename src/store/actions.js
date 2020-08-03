import { SAVEUSERNAME, SAVECARTCOUNT } from './constant'

export default {
  [SAVEUSERNAME](context, username) {
    context.commit(SAVEUSERNAME, username)
  },
  [SAVECARTCOUNT](state, count) {
    context.commit(SAVECARTCOUNT, count)
  }
}