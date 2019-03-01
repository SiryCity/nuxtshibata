export const state = () =>
({
  pts: 0,
  challenges: {
    times: 0,
    previousHours: null,
  },
})

/*
export const getters = () =>
({
  sizeOfStamp: state => 70 + state.percentForSizeOfStamp / 10
})
*/

export const mutations = {
  changePts(state, {points, shops}){
    
    const CELLS_OF_POINT_FOR_ONE_SIDE = 6
    const POINTS_OF_STAMP = 4
    const VALID_MIN_PX = 16
    const VALID_MAX_CHALLENGES = 30

    if(state.challenges.times > VALID_MAX_CHALLENGES) return

    // ツメの数が違ったら無効
    if(points.touches.length !== POINTS_OF_STAMP) return

    // 認証のチャレンジを開始する
    state.challenges.times ++

    // 押された座標
    const coordsOfStamp = [... points.touches].map(point =>
      ({
        x: point.pageX,
        y: point.pageY
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

    // 予測されるエリアが小さすぎた場合は無効
    if(expectedArea.right - expectedArea.left < VALID_MIN_PX) return
    if(expectedArea.bottom - expectedArea.top < VALID_MIN_PX) return

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
    const binaryOfStamp = arePushed.reduce((pre, cur) =>
      pre + (cur ? '1' : '0')
    ,'')

    // バイナリを元に現在いる店を特定
    const beingShop = shops.find(v =>
      v.binary === + binaryOfStamp
    )

    // 該当する店舗データがなければ無効
    if(!beingShop) return

    // 店舗の曜日、始業時間、終業時間を満たしていなければ無効
    const date = new Date()
    if(!(beingShop.openedDays.includes(date.getDay()))) return
    if(!(beingShop.openedHours.from <= date.getHours())) return
    if(!(beingShop.openedHours.to > date.getHours())) return

    // ポイントを追加
    state.pts += beingShop.pts
  },

  // チャレンジ回数をリセットする
  resetChallenges(state){
    state.challenges.times = 0
  }
}

export const actions = {
  startToStamp({commit, rootGetters}, points){
    commit('changePts', {points, shops: rootGetters['buildings/buildings']})
  }
}