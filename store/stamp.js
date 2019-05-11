export const state = () =>
({
  challenges: {
    times: 0,
    previousHours: null,
  },
})

export const mutations = {
  calcPts(state, {placesOfClaw, dataOfShops, rootState}){
    
    const CLAWS_FOR_ONE_SIDE = 6
    const COLLECT_CLAWS = 4
    const VALID_MIN_PX = 16
    const VALID_MAX_CHALLENGES = 30

    // チャレンジ可能回数を超えたら無効
    if(state.challenges.times > VALID_MAX_CHALLENGES) return

    // ツメの数が違ったら無効
    if(placesOfClaw.touches.length !== COLLECT_CLAWS) return

    // 認証のチャレンジを開始する
    state.challenges.times ++

    // 全てのツメの座標
    const coordsOfClaws = [... placesOfClaw.touches].map(place =>
      ({
        x: place.pageX,
        y: place.pageY
      })
    )

    // ツメの座標から算出したスタンプ本体の上下左右の位置
    const actualAreaOfStamp = coordsOfClaws.reduce((pre, cur) =>
      ({
        left: pre ? Math.min(pre.left, cur.x) : cur.x,
        right: pre ? Math.max(pre.right, cur.x) : cur.x,
        top: pre ? Math.min(pre.top, cur.y) : cur.y,
        bottom: pre ? Math.max(pre.bottom, cur.y) : cur.y,
      })
    , null)

    // ツメの先端の尖りを考慮し予測したスタンプ本体の上下左右の位置
    const virtualAreaOfStamp = {
      left: actualAreaOfStamp.left - ((actualAreaOfStamp.right - actualAreaOfStamp.left) / ((CLAWS_FOR_ONE_SIDE - 1) * 2)),
      right: actualAreaOfStamp.right + ((actualAreaOfStamp.right - actualAreaOfStamp.left) / ((CLAWS_FOR_ONE_SIDE - 1) * 2)),
      top: actualAreaOfStamp.top - ((actualAreaOfStamp.bottom - actualAreaOfStamp.top) / ((CLAWS_FOR_ONE_SIDE - 1) * 2)),
      bottom: actualAreaOfStamp.bottom + ((actualAreaOfStamp.bottom - actualAreaOfStamp.top) / ((CLAWS_FOR_ONE_SIDE - 1) * 2)),
    }

    // 予測されるエリアが小さすぎた場合は無効
    if(virtualAreaOfStamp.right - virtualAreaOfStamp.left < VALID_MIN_PX) return
    if(virtualAreaOfStamp.bottom - virtualAreaOfStamp.top < VALID_MIN_PX) return

    // 予測されるセル
    const areasOfClaws = Array(CLAWS_FOR_ONE_SIDE ** 2).fill().map((_, i) =>
      ({
        left: virtualAreaOfStamp.left + (virtualAreaOfStamp.right - virtualAreaOfStamp.left) / CLAWS_FOR_ONE_SIDE * (i % CLAWS_FOR_ONE_SIDE + 0),
        right: virtualAreaOfStamp.left + (virtualAreaOfStamp.right - virtualAreaOfStamp.left) / CLAWS_FOR_ONE_SIDE * (i % CLAWS_FOR_ONE_SIDE + 1),
        top: virtualAreaOfStamp.top + (virtualAreaOfStamp.bottom - virtualAreaOfStamp.top) / CLAWS_FOR_ONE_SIDE * ~~(i / CLAWS_FOR_ONE_SIDE + 0),
        bottom: virtualAreaOfStamp.top + (virtualAreaOfStamp.bottom - virtualAreaOfStamp.top) / CLAWS_FOR_ONE_SIDE * ~~(i / CLAWS_FOR_ONE_SIDE + 1),
      })
    )
    
    // 押したか押してないかをboolで判定
    const arePushed = areasOfClaws.map(areaOfClaw =>
      coordsOfClaws.some(coordOfClaw =>
        areaOfClaw.left <= coordOfClaw.x
        && areaOfClaw.right >= coordOfClaw.x
        && areaOfClaw.top <= coordOfClaw.y
        && areaOfClaw.bottom >= coordOfClaw.y
      )
    )

    // 文字型のバイナリに変換
    const binaryOfPressedStamp = arePushed.reduce((pre, cur) =>
      pre + (cur ? '1' : '0')
    ,'')

    // バイナリを元に現在いる店を特定
    const shopYouAre = dataOfShops.find(v =>
      v.binary === + binaryOfPressedStamp
    )

    // 該当する店舗データがなければ無効
    if(!shopYouAre) return

    // 店舗の曜日、始業時間、終業時間を満たしていなければ無効
    const date = new Date()
    if(!(shopYouAre.openedDays.includes(date.getDay()))) return
    if(!(shopYouAre.openedHours.from <= date.getHours())) return
    if(!(shopYouAre.openedHours.to > date.getHours())) return

    // ポイントを追加
    rootState.saveData.pts += shopYouAre.pts
    alert('test: ポイントが追加されました。')
  },

  // チャレンジ回数をリセットする
  resetChallenges(state){
    state.challenges.times = 0
  }
}

export const actions = {
  pressTheStamp({commit, rootGetters, rootState}, placesOfClaw){
    commit('calcPts', {placesOfClaw, dataOfShops: rootGetters['buildings/buildings'], rootState})
  }
}