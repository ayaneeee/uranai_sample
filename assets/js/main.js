//SVGアニメーションの描画
var stroke;
stroke = new Vivus('mask', {//アニメーションをするIDの指定
  start: 'manual',//自動再生をせずスタートをマニュアルに
  type: 'scenario-sync',// アニメーションのタイプを設定
  duration: 10,//アニメーションの時間設定。数字が小さくなるほど速い
  forceRender: false,//パスが更新された場合に再レンダリングさせない
  animTimingFunction: Vivus.EASE,//動きの加速減速設定
},
  function () {
    $("#mask").attr("class", "done");//描画が終わったらdoneというクラスを追加
  }
);

$(window).on('load', function () {
  $("#splash").delay(4000).fadeOut('slow');//ローディング画面を3秒（3000ms）待機してからフェイドアウト
  $("#splash_logo").delay(5000).fadeOut('slow');//ロゴを3秒（3000ms）待機してからフェイドアウト
  stroke.play();//SVGアニメーションの実行
  $(".splashbg").delay(4000).fadeOut('slow', function () {//ローディングエリア（splashbgエリア）を1.5秒でフェードアウトする記述
    $('body').addClass('appear');
  });
});
//ローディング画面
$(window).on('load', function () {
  $("#youtube-area").addClass('appear');
  $("#loading").addClass('disappear');
});
//youtube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var ytPlayer;
function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player('youtube', {//動画を表示させたいIDを指定
    videoId: 'uphWnXjDdSA',//動画のアドレスの指定
    playerVars: {
      playsinline: 1,// インライン再生を行う
      autoplay: 1,//自動再生を行う
      fs: 0,//全画面表示ボタンを表示しない    
      rel: 0,// 再生中の動画と同じチャンネルの関連動画を表示
      controls: 0,// プレーヤー コントロールを表示しない
      modestbranding: 1, // YouTubeロゴの非表示
      iv_load_policy: 3, // アノテーションの非表示
      start: 52,//50秒後から動画がスタート
    },
    events: {//　イベント
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

//ミュートにしてから再生する設定
function onPlayerReady(event) {
  event.target.mute();
  event.target.playVideo();
}


//ループ設定
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    event.target.playVideo();
  }
}

// 今日の名言
$(".btn").on('click', function () {
  let num = Math.random();
  if (num < 0.1) {
    $('.word').html("<p>「忘れないって約束して。君は自分で思うより勇敢だし、強いし、意外と頭がいい。」<br>byぷーさん</p>");
    $('.result').html('<img src="https://www.disney.co.jp/content/disney/jp/fc/pooh/_jcr_content/par/hero_panel_image/image1.img.jpg/1553737561951.jpg" alt="サンプル画像">');
  } else if (num < 0.2) {
    $('.word').html("<p>「Laughter is timeless. Imagination has no age. And dreams are forever.」<br>笑い声は時代を超え、想像力は年を取らない。そして、夢は永遠のものだ。<br>byWalt Disney</p>");
    $('.result').html('<img src="https://i2.wp.com/iyashitour.com/wp/wp-content/uploads/2013/03/wd2001.jpg?zoom=2&resize=200%2C136&ssl=1" alt="サンプル画像">');
  } else if (num < 0.3) {
    $('.word').html("<p>「The past can hurt. But the way I see it, you can either run from it, or learn from it.」<br>過去の出来事に傷つけられることもあるだろう。でも私が思うに、そこから逃げ出すことも出来るが、そこから学ぶことも出来る。<br>byWalt Disney</p>");
    $('.result').html('<img src="https://media2.tokyodisneyresort.jp/home/tdrblog/detail/2016/12/60dd41fe9671ac7ae3357bd4e9cca75f.jpg" alt="サンプル画像">');
  } else if (num < 0.4) {
    $('.word').html("<p>「How lucky I am to have something that makes saying goodbye so hard.」<br>さよならを言うのが辛い何かがあるなんて、ぼくはなんて幸せなんだろう。<br>byぷーさん</p>");
    $('.result').html('<img src="https://static.curazy.com/wp-content/uploads/2014/07/2981750_1.jpg" alt="サンプル画像">');
  } else if (num < 0.5) {
    $('.word').html("<p>「Now that you’ve hit bottom, you could start over.」<br>ドン底まで行ったんならまた新しく始められるわ。<br>byスヌーピー</p>");
    $('.result').html('<img src="https://www.snoopy.co.jp/pntswp/wp-content/uploads/2016/04/img_snoopy.png" alt="サンプル画像">');
  } else if (num < 0.6) {
    $('.word').html("<p>「You play with the cards you’re dealt..Whatever that means」<br>配られたカードで勝負するのさ。それがどういう意味であれ。<br>byスヌーピー</p>");
    $('.result').html('<img src="https://stat.ameba.jp/user_images/20181007/01/wolfguy-007/74/a3/j/o1007101514279370786.jpg?caw=800" alt="サンプル画像">');
  } else if (num < 0.7) {
    $('.word').html("<p>「Learn from yesterday. Live for today. Look tomorrow.」<br>昨日から学ぼう。今日を生きよう。明日を見つめよう。<br>byスヌーピー</p>");
    $('.result').html('<img src="https://stat.ameba.jp/user_images/20201201/13/wolfguy-007/e7/27/j/o1080102214859886114.jpg?caw=800" alt="サンプル画像">');
  } else if (num < 0.8) {
    $('.word').html("<p>「Once you’ve found your gems you have to polish them.」<br>自分の中に原石を見つけて、時間をかけて磨くことだよ　<br>by西司郎ｰ耳をすませば</p>");
    $('.result').html('<img src="https://urbanlife.tokyo/wp-content/uploads/2020/12/201205_tama_01.jpg" alt="サンプル画像">');
  } else if (num < 0.9) {
    $('.word').html("<p>「So please endure and wait for an opportunity to leave, even though it is tough!」<br>辛くても耐えて、機会を待つんだよ。　<br>byハクｰ千と千尋の神隠し</p>");
    $('.result').html('<img src="https://animeanime.jp/imgs/p/jtKDOVlKAvjRrNw8SXAVejagI61Nrq_oqaqr/373509.jpg" alt="サンプル画像">');
  }
});

