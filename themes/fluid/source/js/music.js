const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: true, //自动播放
  audio: [
    {
      name: "百变奶精",
      artist: 'Hanser',
      url: 'https://m704.music.126.net/20221123174740/79bd5c9ac2ed9f4e134d3ddceba2465c/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/4818442714/d4c6/8bf9/83c4/4030191753acfb370e861b065d6d6547.m4a?authSecret=00000184a3cbe9dc07400aaba60800d6',
      cover: 'https://p4.music.126.net/Mw7z4vn0EMrWlitsiYgzPQ==/109951163606870393.jpg?param=130y130'
    },
  ]
});
