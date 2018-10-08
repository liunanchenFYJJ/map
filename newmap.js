var map = L.map('mapid', {
    minZoom: 1,
    maxZoom: 5,
    center: [0, 0],
    zoom: 3,
    crs: L.CRS.Simple
});
var w = 3000,
    h = 3000,
    url = 'http://173.82.212.76:88/map/static/map.jpg';
var southWest = map.unproject([0, h], map.getMaxZoom() - 1);
var northEast = map.unproject([w, 0], map.getMaxZoom() - 1);
var bounds = new L.LatLngBounds(southWest, northEast);
L.imageOverlay(url, bounds).addTo(map);
map.setMaxBounds(bounds);
// $('.leaflet-control-zoom').hide();
$('.leaflet-control-attribution').hide();
// var ahtml = `<a style="background-color: red;" href="http://leafletjs.com" title="A JS library for interactive maps">back</a>` 
// console.log($('.leaflet-control-attribution').html(ahtml));
// $('.leaflet-control-attribution').html(ahtml)

var circle = L.circle([-48.5, 16.5], {
    color: 'red',
    fillOpacity: 0,
    radius: 1,
    opacity: 0
}).addTo(map);

circle.on('click', onMapClick);

var circle1 = L.polygon([
    [-150.25, 51],
    [-150, 62.75],
    [-164, 62.25],
    [-164, 51.25]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle1.on('click', onMapClick1);

var circle2 = L.polygon([
    [-161, 113],
    [-161, 124],
    [-174, 124],
    [-174, 113]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle2.on('click', onMapClick2);

var circle3 = L.polygon([
    [-121, 77],
    [-121, 89],
    [-134, 89],
    [-134, 77]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle3.on('click', onMapClick3);

var circle4 = L.polygon([
    [-125, 98],
    [-125, 109],
    [-138, 109],
    [-138, 98]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle4.on('click', onMapClick4);

var circle5 = L.polygon([
    [-106, 73],
    [-106, 84],
    [-119, 84],
    [-119, 73]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle5.on('click', onMapClick5);

var circle6 = L.polygon([
    [-91, 86],
    [-91, 97],
    [-104, 97],
    [-104, 86]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle6.on('click', onMapClick6);

var circle7 = L.polygon([
    [-112, 97],
    [-112, 111],
    [-120, 111],
    [-120, 97]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle7.on('click', onMapClick7);

var circle8 = L.polygon([
    [-85, 111],
    [-85, 122],
    [-98, 122],
    [-98, 111]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle8.on('click', onMapClick8);

var circle9 = L.polygon([
    [-106, 120],
    [-106, 134],
    [-114, 134],
    [-114, 120]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle9.on('click', onMapClick9);

var circle10 = L.polygon([
    [-120, 127],
    [-120, 141],
    [-127, 141],
    [-127, 127]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle10.on('click', onMapClick10);

var circle11 = L.polygon([
    [-130, 112],
    [-130, 124],
    [-143, 124],
    [-143, 112]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle11.on('click', onMapClick11);

var circle12 = L.polygon([
    [-106, 137],
    [-106, 151],
    [-114, 151],
    [-114, 137]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle12.on('click', onMapClick12);

var circle13 = L.polygon([
    [-111, 154],
    [-111, 167],
    [-118, 167],
    [-118, 154]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle13.on('click', onMapClick13);

var circle14 = L.polygon([
    [-122, 155],
    [-122, 166],
    [-135, 166],
    [-135, 155]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle14.on('click', onMapClick14);

var circle15 = L.polygon([
    [-151, 145],
    [-151, 156],
    [-165, 156],
    [-165, 145]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle15.on('click', onMapClick15);

var circle16 = L.polygon([
    [-72, 96],
    [-72, 107],
    [-85, 107],
    [-85, 96]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle16.on('click', onMapClick16);

var circle17 = L.polygon([
    [-78, 137],
    [-78, 148],
    [-91, 148],
    [-91, 137]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle17.on('click', onMapClick17);

var circle18 = L.polygon([
    [-56, 127],
    [-56, 138],
    [-69, 138],
    [-69, 127]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle18.on('click', onMapClick18);

var circle19 = L.polygon([
    [-38, 114],
    [-38, 126],
    [-51, 126],
    [-51, 114]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle19.on('click', onMapClick19);

var circle20 = L.polygon([
    [-17, 116],
    [-17, 116],
    [-31, 128],
    [-31, 116]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle20.on('click', onMapClick20);

var circle21 = L.polygon([
    [-41, 174],
    [-41, 185],
    [-55, 185],
    [-55, 174]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle21.on('click', onMapClick21);

var circle22 = L.polygon([
    [-65, 159],
    [-65, 171],
    [-78, 171],
    [-78, 159]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle22.on('click', onMapClick22);

var circle23 = L.polygon([
    [-20, 152],
    [-20, 164],
    [-33, 164],
    [-33, 152]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle23.on('click', onMapClick23);

var circle24 = L.polygon([
    [-144, 72],
    [-144, 91],
    [-148, 91],
    [-148, 72]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle24.on('click', onMapClick24);

var circle25 = L.polygon([
    [-78, 110],
    [-78, 133],
    [-82, 133],
    [-82, 110]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle25.on('click', onMapClick25);

var circle26 = L.polygon([
    [-80, 70],
    [-80, 94],
    [-84, 94],
    [-84, 70]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle26.on('click', onMapClick26);

var circle27 = L.polygon([
    [-30, 130],
    [-30, 151],
    [-34, 151],
    [-34, 130]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle27.on('click', onMapClick27);

var circle28 = L.polygon([
    [-54, 141],
    [-54, 162],
    [-58, 162],
    [-58, 141]
], {
    fillColor: '#fff',
    fillOpacity: 0,
    opacity: 0
}).addTo(map);
circle28.on('click', onMapClick28);

const data = [
    {
        name: '云梦山',
        url: './static/1云梦山.jpeg',
        text: '云梦山景区，是国家AAAA级旅游景区、全国重点文物保护单位、中国鬼谷子文化圣地、国家级森林公园、河南研学旅游示范基地、美丽河南百佳旅游摄影创作基地，位于淇县西南十五公里处，游览面积38平方公里，主峰高584.5米，这里峰峦叠嶂，飞瀑流泉，素有“云梦仙境”之称。历代志书及碑刻都记载这里是鬼谷子先生隐居处，并在此创建了“中华第一古军校”。'
    },
    {
        name: '鬼谷清溪',
        url: './static/27鬼谷清溪.jpg',
        text: '鬼谷清溪，是一条自然形成的大峡谷，是当年鬼谷子送徒下山的一条必经之路，在第五里处还有一口五里井，每次送徒下山，鬼谷子都会在那里以水代酒，和徒弟举行一个简单的告别仪式。鬼谷清溪绵延五里，沿途有石门峡、清溪、天书崖、天坑、魔壁等景点。'
    },
    {
        name: '天坑',
        url: './static/21天坑.jpg',
        text: '溶洞冬暖夏凉，长约300余米，洞内一步一景，溶洞尽头还有地下河，长约４公里，水质良好，常年流淌。'
    },
    {
        name: '军坛',
        url: './static/2军坛.jpeg',
        text: '智圣鬼谷子在这里教徒授艺、著书立说，写出了《鬼谷子》兵书十四篇，并培养出了一大批将相之才，如著名的军事家孙膑、庞涓，纵横家苏秦、张仪，外交家毛遂，仙道家茅濛等。云梦山因此被誉为“中华第一古军校”。'
    },
    {
        name: '算壁',
        url: './static/3算壁.jpeg',
        text: '算壁是又称鬼谷算。算壁上的内容是个提问，明代万历年间的珠算家程大位以一首对答诗的形式对这道题做出了解答，“三人同行七十稀，五树梅花廿（niàn）一枝，七子团圆整半月，除百零五便得知。” 这一问一答，可谓珠联璧合，妙趣横生！感兴趣的话，您也可以算一下，看看这个数究竟是多少？'
    },
    {
        name: '将坛',
        url: './static/4将坛.jpeg',
        text: '英雄出少林，将相出云梦。将坛，是云梦山景区的标志性建筑之一。智圣鬼谷子在这里曾经培养出了一大批将相之才，将坛也表达了后人对鬼谷子先生的纪念之情。'
    },
    {
        name: '映瑞门',
        url: './static/5映瑞门.JPEG',
        text: '映瑞门，门上刻有“迎霞聚瑞”四个字，暗嵌了鬼谷子母亲“王霞瑞”的名字。 两侧对联内容，是指云梦山九龙聚汇、藏龙卧虎。'
    },
    {
        name: '鬼谷井',
        url: './static/6鬼谷井.JPEG',
        text: '鬼谷井又名“井中洞天”。相传，鬼谷井是鬼谷子为了怀念其母亲而率众弟子挖凿的，每当来到鬼谷井打水时，便能从井水中看到母亲的容颜，并且是“朝观母亲十八九，暮观老母鬓如霜”，日久天长，鬼谷子根据井水的升降，还能洞察天气的变化。'
    },
    {
        name: '上圣庙',
        url: './static/17上胜庙.jpeg',
        text: '上圣庙是道教文化活动场所。三清殿屋顶是重檐歇山顶建筑结构，里边供奉有道教神仙谱系中地位最高的三位尊神：玉清元始天尊、上清灵宝天尊、太清道德天尊。灵宵宝殿是单檐式歇山顶建筑结构，前面是卷棚顶，里边供奉的是四御之一“玉皇大帝”。'
    },
    {
        name: '张仪洞',
        url: './static/9张仪洞.jpeg',
        text: '张仪，战国时期魏国人，当年拜鬼谷子为师学习纵横术中的连横之术，曾任秦国宰相多年，主张“事一强而攻众弱”。'
    },
    {
        name: '毛遂洞',
        url: './static/11毛遂洞.jpeg',
        text: '毛遂洞是一个天然洞窟，洞内面积约20平方米，洞顶是由钟乳石构成。毛遂是我国历史上著名的外交家。成语典故“毛遂自荐”使得毛遂有“三寸不烂之舌强于百万雄师”的说法。'
    },
    {
        name: '青牛洞',
        url: './static/13青牛洞.jpeg',
        text: '青牛是当年鬼谷子的坐骑，青牛洞就是当年鬼谷子饲养青牛的地方。'
    },
    {
        name: '茅濛洞',
        url: './static/8茅濛洞.JPEG',
        text: '茅濛出生于战国时期一个非常富裕的家庭，因当时天下动荡，战祸连绵，所以他随鬼谷子隐居在云梦山学习养生之术，并根据龙、龟、蛇、熊、鸷五种动物自创了仿生功。'
    },
    {
        name: '苏秦洞',
        url: './static/7苏秦洞.JPEG',
        text: '苏秦洞是一个天然洞窟，是当年苏秦在云梦山求学时的宿舍。“头悬梁 锥刺股”，其中“锥刺股”指的就是苏秦。'
    },
    {
        name: '孙膑洞',
        url: './static/15孙膑洞.jpeg',
        text: '孙膑洞又名洗尘洞，是一个天然洞窟，洞内石门、石柱、楹联都是明代所留。洞内石刻共41幅画，19个剧目，经研究鉴定是明代中期所刻。'
    },
    {
        name: '水帘洞',
        url: './static/14水帘洞.jpeg',
        text: '水帘洞又名鬼谷洞，是当年鬼谷子讲课的教室。走进洞内，我们可以看到有一处泉眼，每年夏天汛期，泉水就会溢出，在洞外形成一道飞瀑，这便是水帘洞名字的由来。'
    },
    {
        name: '庞涓洞',
        url: './static/10庞涓洞.jpeg',
        text: '庞涓因为心胸狭窄，嫉妒孙膑的才能，设计加害孙膑，后被孙膑用计万箭射死在马陵道。'
    },
    {
        name: '舍身台',
        url: './static/18舍身台.jpeg',
        text: '舍身台台高13米，宽3米，是鬼谷子收徒考试的场所。当年鬼谷子在云梦山聚徒讲学，凡是来到这里投师学艺的，都必须从这个台顶跳下去，从而测试来者的武功、勇气和诚心。'
    },
    {
        name: '云峰寺',
        url: './static/16云峰寺.jpeg',
        text: '云峰寺是佛教文化活动场所，由正殿和东西厢房组合而成。正殿供奉的是横三世佛，也就是东方净琉璃世界药师佛、裟婆suō pó世界释迦牟尼佛和西方极乐世界阿弥陀佛。在两座厢房里，还供奉有四大菩萨，分别是观音菩萨、文殊菩萨、普贤菩萨和地藏王菩萨。'
    },
    {
        name: '八卦城',
        url: './static/22八卦城.jpeg',
        text: '大殿里供奉的是鬼谷子仙师——王禅老祖。鬼谷子塑像总高8米，重12吨，他面容慈祥，和蔼和亲，眼睛也在对着大家微微笑，眯成了一条缝，但是，从门口一步一步走近他的时候，您却还可以发现，他的眼神在发生着微妙的变化。是的，他的眼睛在一点儿一点儿变大，走到他跟前的时候，他已经不再是笑容可掬的老者，而是非常睿智的一种神态了。'
    },
    {
        name: '南天门',
        url: './static/23南天门.jpeg',
        text: '南天门坐落在十里峭壁的制高点，集传统文化、易经风水、工艺设计融合在一起，堪称国际一流的建筑奇观，已经使之成为淇县的著名地标之一。'
    },
    {
        name: '太阳洞',
        url: './static/25太阳洞.jpeg',
        text: '太阳洞和月亮洞是当年鬼谷子观日望月、研究天文地理的场所。太阳洞的洞顶有一只自然形成的太阳鸟，栩栩如生。传说后弈射日射掉了九个太阳，剩下的一个太阳躲到洞内才幸免遇难，后来太阳为了感谢此洞的救命之恩，从早到晚透过石门石窗把光线射到洞中，所以得名太阳洞。'
    },
    {
        name: '兵书石刻',
        url: './static/28兵书石刻.jpg',
        text: '《鬼谷子》兵书是鬼谷子晚年所著，这部书阐述的智谋与技巧在当今社会被广泛运用到政治、外交、军事等领域，并收到了奇效，对当今社会的经贸、公关等领域也具有参考和借鉴价值。'
    },
    {
        name: '月亮洞',
        url: './static/26月亮洞.jpeg',
        text: '月亮洞，因站在洞内回望洞口特别像一弯新月而得名。有一幅对联“石洞无灯凭月照、山门不锁待云封”，真切形象地描述了月亮洞的景致和云梦山的如画仙境。'
    },
    {
        name: '喊泉',
        url: './static/0喊泉.jpg',
        text: '云梦山喊泉位于主景区半月潭，您的嗓门有多高，喊泉就能喊多高，最高可达69米，是挑战肺活量、大嗓门，解压、排浊、郁清、放飞心情的绝佳体验项目之一。'
    },
    {
        name: '玻璃天桥',
        url: './static/4玻璃天桥.jpg',
        text: '云梦山玻璃天桥全长58米，是连接云梦山主景区南山与北山的主要通道。漫步玻璃天桥，脚下是山谷悬崖，既可体验惊险刺激，又可步移景迁欣赏风景如画。'
    },
    {
        name: '玻璃滑道',
        url: './static/3玻璃滑道.jpg',
        text: '云梦山滑道全长518米，垂直落差147米，是华北地区第一条玻璃滑道。乘坐滑道，既可减轻下山行走时的劳累，又可享受欢乐刺激。'
    },
    {
        name: '跑马场',
        url: './static/29跑马场.jpg',
        text: '跑马场位于海拔580余米的空中草原。在这里，您不仅可以纵马驰骋，体验激情的马背之旅，同时还可以弯弓射箭，品奶茶、祭敖包、参观蒙古包，欣赏蒙古歌舞表演，感受浓郁的异域风情。'
    },
    {
        name: '滑草场',
        url: './static/2滑草场.jpg',
        text: '滑草场位于海拔600余米的空中草原，采用轨道式滑车装置，全长260米。乘坐滑车，可一览草原美景，放飞心情，拥抱自然，体验速度与激情的完美碰撞。'
    }
]

function onMapClick(e) {
    $('#btn').click();
    $('.myh3').html(data[0].name);
    $('.img').attr('src', data[0].url); 
    $('.alertContent').html(data[0].text);
}
function onMapClick1(e) {
    $('.myh3').html(data[1].name);
    $('.img').attr('src', data[1].url); 
    $('.alertContent').html(data[1].text);
    $('#btn').click();
}
function onMapClick2(e) {
    $('.myh3').html(data[2].name);
    $('.img').attr('src', data[2].url); 
    $('.alertContent').html(data[2].text);
    $('#btn').click();
}
function onMapClick3(e) {
    $('.myh3').html(data[3].name);
    $('.img').attr('src', data[3].url); 
    $('.alertContent').html(data[3].text);
    $('#btn').click();
}
function onMapClick4(e) {
    $('.myh3').html(data[4].name);
    $('.img').attr('src', data[4].url); 
    $('.alertContent').html(data[4].text);
    $('#btn').click();
}
function onMapClick5(e) {
    $('.myh3').html(data[5].name);
    $('.img').attr('src', data[5].url); 
    $('.alertContent').html(data[5].text);
    $('#btn').click();
}
function onMapClick6(e) {
    $('.myh3').html(data[6].name);
    $('.img').attr('src', data[6].url); 
    $('.alertContent').html(data[6].text);
    $('#btn').click();
}

function onMapClick7(e) {
    $('.myh3').html(data[7].name);
    $('.img').attr('src', data[7].url); 
    $('.alertContent').html(data[7].text);
    $('#btn').click();
}
function onMapClick8(e) {
    $('.myh3').html(data[8].name);
    $('.img').attr('src', data[8].url); 
    $('.alertContent').html(data[8].text);
    $('#btn').click();
}
function onMapClick9(e) {
    $('.myh3').html(data[9].name);
    $('.img').attr('src', data[9].url); 
    $('.alertContent').html(data[9].text);
    $('#btn').click();
}

function onMapClick10(e) {
    $('.myh3').html(data[10].name);
    $('.img').attr('src', data[10].url); 
    $('.alertContent').html(data[10].text);
    $('#btn').click();
}
function onMapClick11(e) {
    $('.myh3').html(data[11].name);
    $('.img').attr('src', data[11].url); 
    $('.alertContent').html(data[11].text);
    $('#btn').click();
}
function onMapClick12(e) {
    $('.myh3').html(data[12].name);
    $('.img').attr('src', data[12].url); 
    $('.alertContent').html(data[12].text);
    $('#btn').click();
}
function onMapClick13(e) {
    $('.myh3').html(data[13].name);
    $('.img').attr('src', data[13].url); 
    $('.alertContent').html(data[13].text);
    $('#btn').click();
}
function onMapClick14(e) {
    $('.myh3').html(data[14].name);
    $('.img').attr('src', data[14].url); 
    $('.alertContent').html(data[14].text);
    $('#btn').click();
}
function onMapClick15(e) {
    $('.myh3').html(data[15].name);
    $('.img').attr('src', data[15].url); 
    $('.alertContent').html(data[15].text);
    $('#btn').click();
}
function onMapClick16(e) {
    $('.myh3').html(data[16].name);
    $('.img').attr('src', data[16].url); 
    $('.alertContent').html(data[16].text);
    $('#btn').click();
}
function onMapClick17(e) {
    $('.myh3').html(data[17].name);
    $('.img').attr('src', data[17].url); 
    $('.alertContent').html(data[17].text);
    $('#btn').click();
}
function onMapClick18(e) {
    $('.myh3').html(data[18].name);
    $('.img').attr('src', data[18].url); 
    $('.alertContent').html(data[18].text);
    $('#btn').click();
}
function onMapClick19(e) {
    $('.myh3').html(data[19].name);
    $('.img').attr('src', data[19].url); 
    $('.alertContent').html(data[19].text);
    $('#btn').click();
}
function onMapClick20(e) {
    $('.myh3').html(data[20].name);
    $('.img').attr('src', data[20].url); 
    $('.alertContent').html(data[20].text);
    $('#btn').click();
}
function onMapClick21(e) {
    $('.myh3').html(data[21].name);
    $('.img').attr('src', data[21].url); 
    $('.alertContent').html(data[21].text);
    $('#btn').click();
}
function onMapClick22(e) {
    $('.myh3').html(data[22].name);
    $('.img').attr('src', data[22].url); 
    $('.alertContent').html(data[22].text);
    $('#btn').click();
}
function onMapClick23(e) {
    $('.myh3').html(data[23].name);
    $('.img').attr('src', data[23].url); 
    $('.alertContent').html(data[23].text);
    $('#btn').click();
}
function onMapClick24(e) {
    $('.myh3').html(data[24].name);
    $('.img').attr('src', data[24].url); 
    $('.alertContent').html(data[24].text);
    $('#btn').click();
}
function onMapClick25(e) {
    $('.myh3').html(data[25].name);
    $('.img').attr('src', data[25].url); 
    $('.alertContent').html(data[25].text);
    $('#btn').click();
}
function onMapClick26(e) {
    $('.myh3').html(data[26].name);
    $('.img').attr('src', data[26].url); 
    $('.alertContent').html(data[26].text);
    $('#btn').click();
}
function onMapClick27(e) {
    $('.myh3').html(data[27].name);
    $('.img').attr('src', data[27].url); 
    $('.alertContent').html(data[27].text);
    $('#btn').click();
}
function onMapClick28(e) {
    $('.myh3').html(data[28].name);
    $('.img').attr('src', data[28].url); 
    $('.alertContent').html(data[28].text);
    $('#btn').click();
}
// function onMapClickx(e) {
//     console.log(e.latlng)
// }

// map.on('click', onMapClickx);