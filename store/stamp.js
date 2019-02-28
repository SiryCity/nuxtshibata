export const state = () =>
({
  pts: 0,
})

/*
export const getters = () =>
({
  sizeOfStamp: state => 70 + state.percentForSizeOfStamp / 10
})
*/

export const mutations = {
  changePts(state, pts){
    state.pts += pts
  },
}

export const actions = {
  startToStamp({commit, rootGetters}, e){

    const CELLS_OF_POINT_FOR_ONE_SIDE = 6
    const POINTS_OF_STAMP = 4

    if(e.touches.length !== POINTS_OF_STAMP) return


    // 押された座標
    const coordsOfStamp = [... e.touches].map(e =>
      ({
        x: e.pageX,
        y: e.pageY
      })
    )


    // 実際に押されたエリア
    const touchedArea = coordsOfStamp.reduce((pre, cur) =>
      ({
        left: pre ? Math.min(pre.left, cur.x) : cur.x,
        right: pre ? Math.max(pre.right, cur.x) : cur.x,
        top: pre ? Math.min(pre.top, cur.y) : cur.y,
        bottom: pre ? Math.max(pre.bottom, cur.y) : cur.y,
      })
    , null)

    // 予測されるエリア
    const expectedArea = {
      left: touchedArea.left - ((touchedArea.right - touchedArea.left) / ((CELLS_OF_POINT_FOR_ONE_SIDE - 1) * 2)),
      right: touchedArea.right + ((touchedArea.right - touchedArea.left) / ((CELLS_OF_POINT_FOR_ONE_SIDE - 1) * 2)),
      top: touchedArea.top - ((touchedArea.bottom - touchedArea.top) / ((CELLS_OF_POINT_FOR_ONE_SIDE - 1) * 2)),
      bottom: touchedArea.bottom + ((touchedArea.bottom - touchedArea.top) / ((CELLS_OF_POINT_FOR_ONE_SIDE - 1) * 2)),
    }

    // 予測されるセル
    const expectedCells = Array(CELLS_OF_POINT_FOR_ONE_SIDE ** 2).fill().map((cell, i) =>
      ({
        left: expectedArea.left + (expectedArea.right - expectedArea.left) / CELLS_OF_POINT_FOR_ONE_SIDE * (i % CELLS_OF_POINT_FOR_ONE_SIDE + 0),
        right: expectedArea.left + (expectedArea.right - expectedArea.left) / CELLS_OF_POINT_FOR_ONE_SIDE * (i % CELLS_OF_POINT_FOR_ONE_SIDE + 1),
        top: expectedArea.top + (expectedArea.bottom - expectedArea.top) / CELLS_OF_POINT_FOR_ONE_SIDE * ~~(i / CELLS_OF_POINT_FOR_ONE_SIDE + 0),
        bottom: expectedArea.top + (expectedArea.bottom - expectedArea.top) / CELLS_OF_POINT_FOR_ONE_SIDE * ~~(i / CELLS_OF_POINT_FOR_ONE_SIDE + 1),
      })
    )
    
    // 押したか押してないかをboolで判定
    const arePushed = expectedCells.map(cell =>
      coordsOfStamp.some(coord =>
        cell.left <= coord.x
        && cell.right >= coord.x
        && cell.top <= coord.y
        && cell.bottom >= coord.y
      )
    )

    // 文字型のバイナリに変換
    const binaryOfStamp = arePushed.reduce((pre, cur) => pre + (cur ? '1' : '0'), '')


    alert(binaryOfStamp)

    const gainedPts = rootGetters['buildings/buildings'].find(v =>
      v.binary === + binaryOfStamp
    )

    if(!gainedPts) return

    alert(`success!!!`)
    commit('changePts', gainedPts.pts)
  }
}