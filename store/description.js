export const state = () =>
  ({
    chosenDescription: null,
    isOpen: false
  })

export const actions = {
  leaveDescription: async({commit}) => {
    commit('leaveWindow')
    await new Promise(r => setTimeout(r, 200))
    commit('leaveDescription')
  }
}

export const mutations = {
  enterDescription(state, description){
    state.chosenDescription = description
    state.isOpen = true
  },
  leaveWindow(state){
    state.isOpen = false
  },
  leaveDescription(state){
    state.chosenDescription = null
  },
}
