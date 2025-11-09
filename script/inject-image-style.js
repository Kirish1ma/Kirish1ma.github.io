hexo.extend.injector.register(
  "head_end",
  () => {
    return css(
      "<link rel='stylesheet' href='Hexo-blog/source/script/css/inject-image-style.html'>"
    );
  },
  "post"
);
