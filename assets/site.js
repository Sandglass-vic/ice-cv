/* 粟琬宁 —— 全站共享脚本：?static 标记、进入视口一次性淡入 */
(function () {
  var root = document.documentElement;
  var STATIC = /[?&]static\b/.test(location.search);
  var REDUCE = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (STATIC) root.classList.add('static');

  var io = 'IntersectionObserver' in window && !STATIC && !REDUCE
    ? new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add('in');
          io.unobserve(e.target);
        });
      }, { threshold: .1, rootMargin: '0px 0px -40px 0px' })
    : null;

  /* 给 scope 内尚未显示的 .reveal 元素绑定淡入；instant 为 true 时直接显示 */
  function reveal(scope, instant) {
    (scope || document).querySelectorAll('.reveal:not(.in)').forEach(function (el) {
      if (io && !instant) io.observe(el);
      else el.classList.add('in');
    });
  }

  window.SITE = { STATIC: STATIC, REDUCE: REDUCE, reveal: reveal };
  if (document.readyState !== 'loading') reveal();
  else document.addEventListener('DOMContentLoaded', function () { reveal(); });
})();
