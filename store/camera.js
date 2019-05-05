
export const actions = {
  // カメラへのアクセスが許可されているかの確認
  checkCameraPermission: async({rootState, dispatch, commit}) =>{
    // 確認のためカメラにアクセスしてみる
    try{

      // カメラを取得
      const media = await navigator.mediaDevices.getUserMedia({
        video: {facingMode: 'environment'},
        audio: false,
      })
      
      // アクセス不可能な場合
      // 画面に動画を表示
      document.getElementById('video').srcObject = media
      commit('changeDisplay', {display: 'video', rootState})
    }

    // アクセス不可能な場合
    catch(e){
      commit('changeDisplay', {display: 'reject', rootState})
    }
  },


  // 前回の最後に画面表示が撮影中などで終わっていたら
  // 画面状態を初期状態(initial)に戻す
  returnDisplay({rootState}){
    if(
      rootState.saveData.display === 'video'
      || rootState.saveData.display === 'search'
    ){
      commit('changeDisplay', {display: 'initial', rootState})
    }
  },

  

}

export const mutations = {
  
  changeDisplay(state, payload){
    payload.rootState.saveData.display = payload.display
  }
}