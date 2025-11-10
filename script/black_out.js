hexo.extend.injector.register("body_end", function () {
  return `
    <style>
      .blackout {
        background-color: #000;
        color: #000;
        transition: color 0.25s ease, text-shadow 0.25s ease;
        -webkit-transition: color 0.25s ease, text-shadow 0.25s ease;
        text-shadow: 0 0 0 rgba(0,0,0,0);
        cursor: pointer;
      }
      .blackout:hover {
        color: inherit;
        text-shadow: none;
      }
    </style>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        const blackoutElements = document.querySelectorAll('.blackout');
        blackoutElements.forEach(el => {
          // 只在元素内部文字加遮罩，如果你想整个元素被遮罩可以注释掉
          el.innerHTML = el.textContent.split('').map(char => '<span class="blackout-char">'+char+'</span>').join('');
        });
      });
    </script>
  `;
});
