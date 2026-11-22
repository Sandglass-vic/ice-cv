/* 粟琬宁 · Portfolio —— 全站共享脚本：?static、滚动渐显、卡片鼠标跟随发光、顶部滚动进度 */
(function () {
  var root = document.documentElement;
  var STATIC = /[?&]static\b/.test(location.search);
  var REDUCE = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (STATIC) root.classList.add('static');

  var io = 'IntersectionObserver' in window && !STATIC
    ? new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add('in');
          e.target.dispatchEvent(new CustomEvent('reveal'));
          io.unobserve(e.target);
        });
      }, { threshold: .12 })
    : null;

  function reveal(scope, instant) {
    (scope || document).querySelectorAll('.reveal:not(.in)').forEach(function (el) {
      el.addEventListener('reveal', function () {
        setTimeout(function () { el.classList.add('done'); }, instant || STATIC ? 0 : 850);
      }, { once: true });
      if (io && !instant) io.observe(el);
      else { el.classList.add('in'); el.dispatchEvent(new CustomEvent('reveal')); }
    });
  }

  document.addEventListener('pointermove', function (e) {
    var el = e.target.closest && e.target.closest('.glow');
    if (!el) return;
    var r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    el.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }, { passive: true });

  var bar = document.querySelector('.s-progress');
  if (bar) {
    var onScroll = function () {
      var h = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, scrollY / h) : 0) + ')';
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  window.SITE = { STATIC: STATIC, REDUCE: REDUCE, reveal: reveal };
})();
