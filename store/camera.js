import jsQR from 'jsqr'

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
      
      // アクセス可能な場合
      // video要素に動画を表示
      document.getElementById('video').srcObject = media
      // 画面を切り替え
      commit('changeDisplay', {display: 'video', rootState})

      // svgとimgに動画をコピーしていく処理をループ
      dispatch('drawImg', media)

    }

    // アクセス不可能な場合
    catch(e){
      commit('changeDisplay', {display: 'reject', rootState})
    }
  },

  drawImg: async({dispatch}, media) => {

    await new Promise(r => setTimeout(r, 250))
       
    const video = document.getElementById('video')
    const vWidth = video.videoWidth
    const vHeight = video.videoHeight
    const vMin = Math.min(vWidth, vHeight)

    const canvas = document.getElementById('canvas')
    const cWidth = canvas.offsetWidth
    const cHeight = canvas.offsetHeight
    const context = canvas.getContext('2d')

    context.drawImage(
      video,
      vWidth <= vHeight ? 0 : vWidth / 2 - vMin / 2,
      vHeight <= vWidth ? 0 : vHeight / 2 - vMin / 2,
      vMin,
      vMin,
      0,
      0,
      cWidth,
      cHeight,
    )

    const judge = context.getImageData(
      0,
      0,
      cWidth,
      cHeight,
    )

    const code = jsQR(
      judge.data,
      cWidth,
      cHeight,
    )
    
    if(code){
      media.getVideoTracks().forEach(track => {
        track.stop()
      })
      media.getAudioTracks().forEach(track => {
        track.stop()
      })
      alert(code.data)
    } else {

      dispatch('drawImg', media)

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