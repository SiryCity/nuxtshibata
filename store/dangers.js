
import danger1 from '@/assets/photo/disaster/oeRiverW.jpg'
import danger2 from '@/assets/photo/disaster/oeRiverE.jpg'
import danger3 from '@/assets/photo/disaster/seseragiWaterwayW.jpg'
import danger4 from '@/assets/photo/disaster/daidoShrine.jpg'
import danger5 from '@/assets/photo/disaster/shibataMansion.png'
import danger6 from '@/assets/photo/disaster/seseragiWaterwayE.jpg'
import danger7 from '@/assets/photo/disaster/tenpakuRiver.jpg'

export const getters = {
  dangers: () =>
    [
      {
        name: '→　大江川堤防際の排水路',
        description: '狭くて深い排水路なので、滑って落ちると戻れなくなり、危険です。見えにくい場所なので注意しましょう。',
        src: danger1,
        author: '建築学科 (大同大学)',
        lat: 35.0800,
        long: 136.9068,
      },
      {
        name: '→　大江川',
        description: '近くに公園があり多くの人が利用していますが、大雨になると滑りやすくなるため、注意しましょう。',
        src: danger2,
        author: '建築学科 (大同大学)',
        lat: 35.0800,
        long: 136.9116,
      },
      {
        name: 'せせらぎ水路(西)',
        description: 'まわりの地面は低く、水害時は水があふれることがあります。道と川との境目が分からなくなるので、落ちないように気を付けましょう。',
        src: danger3,
        author: '建築学科 (大同大学)',
        lat: 35.0773,
        long: 136.9066,
      },
      {
        name: '→　大同神明社前排水口',
        description: '水害時に、道にあるこうした排水口から水があふれだすことがあるため、注意しましょう。',
        src: danger4,
        author: '建築学科 (大同大学)',
        lat: 35.0800,
        long: 136.9096,
      },
      {
        name: '→　柴田荘1棟の近くの排水口',
        description: '水害時にたくさんの水にまきこまれて、吸い込まれることがあるので、近づかないようにしましょう。',
        src: danger5,
        author: '建築学科 (大同大学)',
        lat: 35.0737,
        long: 136.9050,
        //lat: 35.07757,//こっちはテスト用
        //long: 136.9125496,//こっちはテスト用
      },
      {
        name: 'せせらぎ水路(東)',
        description: 'まわりの地面は低く、水害時は水があふれることがあります。道と川との境目が分からなくなるので、落ちないように気を付けましょう。',
        src: danger6,
        author: '建築学科 (大同大学)',
        lat: 35.0771,
        long: 136.9089,
      },
      {
        name: '天白川堤防の上(西)',
        description: 'この近くは、堤防の高さが低い場所があるので水害の時に水があふれやすくなります。注意しましょう。',
        src: danger7,
        author: '建築学科 (大同大学)',
        lat: 35.0695,
        long: 136.9090,
      },
      {
        name: '天白川堤防の上(東)',
        description: 'この近くは、堤防の高さが低い場所があるので水害の時に水があふれやすくなります。注意しましょう。',
        src: danger7,
        author: '建築学科 (大同大学)',
        lat: 35.0694,
        long: 136.9097,
      },
    ]
}