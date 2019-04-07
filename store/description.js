export const state = () =>
  ({
    chosenDescription: null,
    isOpen: false
  })

export const mutations = {
  enterDescription(state, description){
    state.chosendDescription = description
    state.isOpen = true
  }
}
