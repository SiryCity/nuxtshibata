
//写真
//伊藤
//import src0 from '~/assets/photo/ito/DSC_1473.jpg'
import src1 from '~/assets/photo/ito/DSC_1555.jpg'
import src2 from '~/assets/photo/ito/DSC_1447.jpg'
import src3 from '~/assets/photo/ito/DSC_1445.jpg'
import src4 from '~/assets/photo/ito/DSC_1455.jpg'
import src5 from '~/assets/photo/ito/DSC_1458.jpg'
import src6 from '~/assets/photo/ito/DSC_1471.jpg'
import src7 from '~/assets/photo/ito/DSC_1492.jpg'
import src8 from '~/assets/photo/ito/DSC_1529.jpg'
import src9 from '~/assets/photo/ito/DSC_1517.jpg'
import src10 from '~/assets/photo/ito/DSC_1506.jpg'
//水谷
import src11 from '~/assets/photo/mizutani/DSC_153919385.jpg'
import src12 from '~/assets/photo/mizutani/DSC_154223964.jpg'
import src13 from '~/assets/photo/mizutani/DSC_154338069.jpg'
import src14 from '~/assets/photo/mizutani/DSC_154516760.jpg'
import src15 from '~/assets/photo/mizutani/DSC_154601346.jpg'
import src16 from '~/assets/photo/mizutani/DSC_154743597.jpg'
import src17 from '~/assets/photo/mizutani/DSC_154822474.jpg'
import src18 from '~/assets/photo/mizutani/DSC_155002328.jpg'
import src19 from '~/assets/photo/mizutani/DSC_155119402.jpg'
//import src20 from '~/assets/photo/mizutani/DSC_155151993.jpg'
import src21 from '~/assets/photo/mizutani/DSC_155414084.jpg'
import src22 from '~/assets/photo/mizutani/DSC_155512981.jpg'
import src23 from '~/assets/photo/mizutani/DSC_155745902.jpg'
import src24 from '~/assets/photo/mizutani/DSC_155937437.jpg'
import src25 from '~/assets/photo/mizutani/DSC_160136215.jpg'
import src26 from '~/assets/photo/mizutani/DSC_160221452.jpg'
import src27 from '~/assets/photo/mizutani/DSC_160306158.jpg'
import src28 from '~/assets/photo/mizutani/DSC_160412243.jpg'
import src29 from '~/assets/photo/mizutani/DSC_160417615.jpg'
import src30 from '~/assets/photo/mizutani/DSC_160519006.jpg'
import src31 from '~/assets/photo/mizutani/DSC_160924961.jpg'
import src32 from '~/assets/photo/mizutani/DSC_155052169.jpg'

//チェックポイントのアイコン
import redCastle from '~/assets/icon/red_castle.svg'
import greenCastle from '~/assets/icon/green_castle.svg'
import crossing from '~/assets/icon/crossing.svg'
import forest from '~/assets/icon/forest.svg'
import bigCastle from '~/assets/icon/big_castle.svg'

export const getters = {
  buildings: () =>
    [
      {
        name: '279ステーション',
        url: 'http://279.nagoya/',
        description: '地域の人と人、人と物をつなげる、名古屋市南区まちづくり・コミュニティレンタルスペースです。ポイントが貯まったらここで景品と交換しよう!',
        iconsImage: bigCastle,
        src: src28,
        author: '伊藤健汰 (大同大学)',
        lat: 35.0741,
        long: 136.9111,
        binary: 1000010000000000000000000000000100001,
        pts: -10,
      },
      {
        name: '柴田本通1交差点',
        url: null,
        description: '柴田町一帯では一番大きい交差点です。もうすぐ新しい建物が建つのかな?',
        iconsImage: crossing,
        src: src1,
        author: '伊藤健汰 (大同大学)',
        lat: 35.0751,
        long: 136.9109,
        binary: null,
        pts: null,
      },
      {
        name: '大同大学',
        url: 'https://www.daido-it.ac.jp/',
        description: '１４階建ての大きな大学です。このページを作っているひとは8階にいます。',
        iconsImage: crossing,
        src: src2,
        author: '伊藤健汰 (大同大学)',
        lat: 35.0794,
        long: 136.9063,
        binary: null,
        pts: null,
      },
      {
        name: '白水公園野球場',
        url: 'https://teams.one/search_grounds/4333',
        description: '柴田町一帯では一番広い公園です。',
        iconsImage: forest,
        src: src3,
        author: '伊藤健汰 (大同大学)',
        lat: 35.0758,
        long: 136.9049,
        binary: null,
        pts: null,
      },
      {
        name: '南交差点',
        url: null,
        description: '柴田小学校の近くの交差点です。交差点の名前は...ないの?',
        iconsImage: crossing,
        src: src4,
        author: '伊藤健汰 (大同大学)',
        lat: 35.0754,
        long: 136.9062,
        binary: null,
        pts: null,
      },
      {
        name: '元柴田公園',
        url: 'http://www.sda.nagoya-cu.ac.jp/~okamura/minami/mm019/mm019.htm',
        description: '病院の裏にある公園です。木がたくさん、大きな広場もあるよ!',
        iconsImage: forest,
        src: src5,
        author: '伊藤健汰 (大同大学)',
        lat: 35.0739,
        long: 136.9070,
        binary: null,
        pts: null,
      },
      {
        name: '柴田本通3交差点',
        url: null,
        description: '駅に行くときによく通る交差点です。人がたくさん!',
        iconsImage: crossing,
        src: src6,
        author: '伊藤健汰 (大同大学)',
        lat: 35.0729,
        long: 136.9106,
        binary: null,
        pts: null,
      },
      {
        name: '柴田本通4交差点',
        url: null,
        description: '駅に行くときによく通る交差点です。歩道橋から見える橋を渡ると東海市だよ!',
        iconsImage: crossing,
        src: src7,
        author: '伊藤健汰 (大同大学)',
        lat: 35.0719,
        long: 136.9104,
        binary: null,
        pts: null,
      },
      {
        name: '三吉公園',
        url: null,
        description: '家の近くにある大きい公園です。放課後には人がいっぱい!',
        iconsImage: forest,
        src: src8,
        author: '伊藤健汰 (大同大学)',
        lat: 35.0731,
        long: 136.9147,
        binary: null,
        pts: null,
      },
      {
        name: '名南中学校北交差点',
        url: null,
        description: '小学校と中学校の近くの交差点です。学校に行くときに通る人もいるかな?',
        iconsImage: crossing,
        src: src9,
        author: '伊藤健汰 (大同大学)',
        lat: 35.0729,
        long: 136.9173,
        binary: null,
        pts: null,
      },
      {
        name: '源兵衛公園',
        url: 'http://www.sda.nagoya-cu.ac.jp/~okamura/minami/mm014/mm014.htm',
        description: '神社が近くにある公園です。読み方が難しい!',
        iconsImage: forest,
        src: src10,
        author: '伊藤健汰 (大同大学)',
        lat: 35.0713,
        long: 136.9180,
        binary: null,
        pts: null,
      },

    //チェックポイント近くの店舗

      {
        name: '宇佐美工業㈱',
        url: 'http://www.usamikk.co.jp/',
        description: '279ステーションのすぐお隣!川や道路の仕事をする会社らしい...',
        iconsImage: redCastle,
        src: src29,
        author: '水谷竜斗 (大同大学)',
        lat: 35.0743,
        long: 136.9112,
        binary: null,
        pts: null,
      },
      {
        name: 'ゑびすや',
        url: 'http://www.kinsyachi.com/shop/detail/0002605',
        description: '交差点を曲がってすぐ、化粧品のお店。',
        iconsImage: redCastle,
        src: src26,
        author: '水谷竜斗 (大同大学)',
        lat: 35.0739,
        long: 136.9116,
        binary: null,
        pts: null,
      },
      {
        name: '丸久精肉店',
        url: 'https://loco.yahoo.co.jp/place/g-pKl0RmoBCxM/',
        description: '赤い「肉」の字が目印!',
        iconsImage: redCastle,
        src: src25,
        author: '水谷竜斗 (大同大学)',
        lat: 35.0739,
        long: 136.9119,
        binary: null,
        pts: null,
      },
      {
        name: '美容室COROAI',
        url: 'http://www.kinsyachi.com/shop/detail/0002637',
        description: 'お店の外には見たこともない植物が...!?',
        iconsImage: redCastle,
        src: src31,
        author: '水谷竜斗 (大同大学)',
        lat: 35.0769,
        long: 136.9116,
        binary: null,
        pts: null,
      },
      {
        name: '松老園',
        url: 'http://www.kinsyachi.com/shop/detail/0002601',
        description: '和菓子のお店。美味しそうな水まんじゅうも...',
        iconsImage: redCastle,
        src: src13,
        author: '水谷竜斗 (大同大学)',
        lat: 35.0744,
        long: 136.9099,
        binary: null,
        pts: null,
      },
      {
        name: 'たつたや',
        url: 'https://loco.yahoo.co.jp/place/g-4ZXwS1EEugc/?genrecd=0209',
        description: 'バス停で待っていると、後ろからおいしい匂いが...',
        iconsImage: redCastle,
        src: src14,
        author: '水谷竜斗 (大同大学)',
        lat: 35.0740,
        long: 136.9104,
        binary: null,
        pts: null,
      },
      {
        name: '藤一番',
        url: 'http://www.kinsyachi.com/shop/detail/0001346',
        description: '黄色い亀、亀?のキャラクターが目印!',
        iconsImage: redCastle,
        src: src15,
        author: '水谷竜斗 (大同大学)',
        lat: 35.0735,
        long: 136.9103,
        binary: null,
        pts: null,
      },
      {
        name: 'しろがねや',
        url: 'http://www.kinsyachi.com/shop/detail/0002648',
        description: '青い看板のガスのお店。',
        iconsImage: redCastle,
        src: src22,
        author: '水谷竜斗 (大同大学)',
        lat: 35.0727,
        long: 136.9102,
        binary: null,
        pts: null,
      },

    //110番の店舗

      {
        name: 'コヤマカメラ',
        url: 'http://www.kinsyachi.com/shop/detail/0002613',
        description: '特急プリント!スピード仕上げ!早そう。',
        iconsImage: greenCastle,
        src: src24,
        author: '水谷竜斗 (大同大学)',
        lat: 35.0729,
        long: 136.9128,
        binary: null,
        pts: null,
      },
      {
        name: 'みよしや',
        url: 'http://www.kinsyachi.com/shop/detail/0002627',
        description: '事務用品のお店。大通りからでも見える大きな文字。',
        iconsImage: greenCastle,
        src: src23,
        author: '水谷竜斗 (大同大学)',
        lat: 35.0727,
        long: 136.9115,
        binary: null,
        pts: null,
      },
      {
        name: '末広屋',
        url: 'http://www.kinsyachi.com/shop/detail/0002615',
        description: '靴のお店。下駄みたいな靴もあってびっくり!',
        iconsImage: greenCastle,
        src: src27,
        author: '水谷竜斗 (大同大学)',
        lat: 35.0739,
        long: 136.9110,
        binary: null,
        pts: null,
      },
      {
        name: '福井薬局',
        url: 'http://www.kinsyachi.com/shop/detail/0002623',
        description: '面白いイラストの飾ってある薬局。',
        iconsImage: greenCastle,
        src: src30,
        author: '水谷竜斗 (大同大学)',
        lat: 35.0746,
        long: 136.9111,
        binary: null,
        pts: null,
      },
      {
        name: 'ピアゴ',
        url: 'http://www.uny.co.jp/shop/237/index.html',
        description: 'みんな大好きピアゴ!',
        iconsImage: greenCastle,
        src: src11,
        author: '水谷竜斗 (大同大学)',
        lat: 35.0765,
        long: 136.9107,
        binary: null,
        pts: null,
      },
      {
        name: '小島印房',
        url: 'http://www.kinsyachi.com/shop/detail/0002612',
        description: 'タイルばりの壁と緑の屋根が目印。',
        iconsImage: greenCastle,
        src: src12,
        author: '水谷竜斗 (大同大学)',
        lat: 35.0749,
        long: 136.9105,
        binary: null,
        pts: null,
      },
      {
        name: 'デイサービスはくすい',
        url: 'http://kaigodb.com/jigyousho/2371202371-150/',
        description: 'きれいなベンチときれいなお花。',
        iconsImage: greenCastle,
        src: src16,
        author: '水谷竜斗 (大同大学)',
        lat: 35.0733,
        long: 136.9097,
        binary: null,
        pts: null,
      },
      {
        name: 'かわしま',
        url: 'http://www.kinsyachi.com/shop/detail/0002608',
        description: '時計・メガネ・宝石のお店。',
        iconsImage: greenCastle,
        src: src17,
        author: '水谷竜斗 (大同大学)',
        lat: 35.0736,
        long: 136.9098,
        binary: null,
        pts: null,
      },
      {
        name: 'まるきん',
        url: 'http://www.kinsyachi.com/shop/detail/0002626',
        description: '金色の看板のバラエティーショップ。',
        iconsImage: greenCastle,
        src: src18,
        author: '水谷竜斗 (大同大学)',
        lat: 35.0728,
        long: 136.9097,
        binary: null,
        pts: null,
      },
      {
        name: 'カネシゲ',
        url: 'http://www.kinsyachi.com/shop/detail/0002589',
        description: '野菜や食べ物のお店。看板がオシャレ!',
        iconsImage: greenCastle,
        src: src19,
        author: '水谷竜斗 (大同大学)',
        lat: 35.0722,
        long: 136.9095,
        binary: null,
        pts: null,
      },
      {
        name: '柴田郵便局',
        url: 'https://www.navitime.co.jp/poi?spt=01308.30012134200',
        description: 'オレンジの看板の郵便局。',
        iconsImage: greenCastle,
        src: src32,
        author: '水谷竜斗 (大同大学)',
        lat: 35.0722,
        long: 136.9098,
        binary: null,
        pts: null,
      },
      {
        name: 'せんたく屋さん',
        url: 'http://www.kinsyachi.com/shop/detail/0002634',
        description: '駅からギリギリ見える!せんたく屋さん。',
        iconsImage: greenCastle,
        src: src21,
        author: '水谷竜斗 (大同大学)',
        lat: 35.0722,
        long: 136.9101,
        binary: null,
        pts: null,
      },
    ]
}