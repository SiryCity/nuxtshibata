export const state = () =>
({
  isLoaded: false
})

export const getters = {
  //スマートフォンか
  isSP: () => /iPhone|iPod|iPad|Android/i.test(navigator.userAgent)
}

export const actions = {
  //画面1個分の高さをセットする
  setStatic100vh({commit, getters}){
    commit('setStatic100vh', getters.isSP)
  },

}

export const mutations = {
  //画面1個分の高さをセットする
  setStatic100vh(_, isSP){
    document.documentElement.style.setProperty(
      '--static100vh',
      isSP ? window.outerHeight + 'px' : '100vh'
    )
  },

  visiblePointArea(state){
    state.isLoaded = true
  },

}

