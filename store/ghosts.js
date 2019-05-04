
import ghost0 from '~/assets/ghosts/eiya.png'
import ghost1 from '~/assets/ghosts/john.png'
import ghost2 from '~/assets/ghosts/kisimomen.png'
import ghost3 from '~/assets/ghosts/koike.png'
import ghost4 from '~/assets/ghosts/koitu.png'
import ghost5 from '~/assets/ghosts/rinutus8.png'
import ghost6 from '~/assets/ghosts/shubataro.png'
import ghost7 from '~/assets/ghosts/yuureisan.png'
import ghost8 from '~/assets/ghosts/hana.jpg'
import ghost9 from '~/assets/ghosts/pet.jpg'

export const getters = {
  ghosts: () =>
    [
      {
          name: 'あかゑい',
          description: 'COROAIにあらわれた、しまくらいの おおきさがある うみにすむ おばけ。',
          src: ghost0,
          author: '日比野晟正 (大同大学)',
          lat: 35.0769,//こっちが本物
          long: 136.9115,//こっちが本物
          //lat: 35.0794,//こっちはテスト用
          //long: 136.9060,//こっちはテスト用
      },
      {
          name:'すねこすり',
          description: 'ピアゴにあらわれた、ひとのあしに ふわふわのからだを こすりつけて おどろかせる おばけ。',
          src: ghost1,
          author: '仙敷絵理 (大同大学)',
          lat: 35.0765,//こっちが本物
          long: 136.9108,//こっちが本物
          //lat: 35.0794,//こっちはテスト用
          //long: 136.9060,//こっちはテスト用
      },
      {
          name:'いったんもめん',
          description: '小島印房にあらわれた、ゆうがた ふわふわ とぶ ながい ぬの の おばけ。',
          src: ghost2,
          author: '小池朔弘 (大同大学)',
          lat: 35.0750,
          long: 136.9105,
      },
      {
          name:'ほおずきおばけ',
          description: '喫茶南苑にあらわれた、よなかに あかくひかり うかぶ ほおずきの おばけ。',
          src: ghost3,
          author: '匿名希望 (大同大学)',
          lat: 35.0747,
          long: 136.9106,
      },
      {
          name:'ばけちょうちん',
          description: '松老園にあらわれた、よなかに なるとうごきだす ふるい ちょうちん の おばけ。',
          src: ghost4,
          author: '石野要 (大同大学)',
          lat: 35.0745,
          long: 136.9100,
      },
      {
          name:'はろゐんごーすと',
          description: '福井薬局にあらわれた、はろゐんにさわぐ しろい ふわふわした からだをもつ おばけ。',
          src: ghost5,
          author: '松崎涼太 (大同大学)',
          lat: 35.0746,
          long: 136.9110,
      },
      {
          name:'ばけねこ',
          description: '宇佐美工業にあらわれた、にほんあしで あるいて ことばをはなす ねこの おばけ。',
          src: ghost6,
          author: '仙敷絵理 (大同大学)',
          lat: 35.0741,
          long: 136.9109,
      },
      {
          name:'はろゐんごーすと',
          description: 'たつたやにあらわれた、はろゐんにさわぐ しろい ふわふわした からだをもつ おばけ。',
          src: ghost7,
          author: '林このみ (大同大学)',
          lat: 35.0740,
          long: 136.9105,
      },
      //added
      {
          name: 'あかゑい',
          description: 'デイサービスはくすいにあらわれた、しまくらいの おおきさがある うみにすむ おばけ。',
          src: ghost0,
          author: '日比野晟正 (大同大学)',
          lat: 35.0737,
          long: 136.9100,
      },
      {
          name:'すねこすり',
          description: 'ゑびすやにあらわれた、ひとのあしに ふわふわのからだを こすりつけて おどろかせる おばけ。',
          src: ghost1,
          author: '仙敷絵理 (大同大学)',
          lat: 35.0738,
          long: 136.9114,
      },
      {
          name:'いったんもめん',
          description: 'しろがねやにあらわれた、ゆうがた ふわふわ とぶ ながい ぬの の おばけ。',
          src: ghost2,
          author: '小池朔弘 (大同大学)',
          lat: 35.0728,
          long: 136.9103,
      },
      {
          name:'ほおずきおばけ',
          description: 'みよしやにあらわれた、よなかに あかくひかり うかぶ ほおずきの おばけ。',
          src: ghost3,
          author: '匿名希望 (大同大学)',
          lat: 35.0728,
          long: 136.9114,
      },
      {
          name:'はなおばけ',
          description: 'きものサロン丸東にあらわれた、はな の おばけ。',
          src: ghost8,
          author: '鯉江政称 (大同大学)',
          lat: 35.0750,
          long: 136.9100,
      },
      {
          name:'ペットボトルおばけ',
          description: '丸久精肉店にあらわれた、ペットボトルの おばけ。',
          src: ghost9,
          author: '鯉江政称 (大同大学)',
          lat: 35.0738,
          long: 136.9119,
      },
    ]
}