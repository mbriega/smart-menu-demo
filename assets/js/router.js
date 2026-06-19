(function () {
  'use strict';

  var currentUrl = location.pathname.split('/').pop() || 'dashboard.html';
  var loadedSrcs = [];
  var SHARED = ['vendor.bundle.base.js', 'sidebar.js', 'off-canvas.js', 'router.js'];

  function isShared(src) {
    return SHARED.some(function (name) { return src.indexOf(name) >= 0; });
  }

  function destroyCharts() {
    if (!window.Chart) return;
    document.querySelectorAll('canvas').forEach(function (canvas) {
      var c = window.Chart.getChart ? window.Chart.getChart(canvas) : null;
      if (c) c.destroy();
    });
  }

  function runScripts(doc) {
    Array.from(doc.querySelectorAll('body script')).forEach(function (s) {
      var newScript = document.createElement('script');
      if (s.src) {
        var src = s.getAttribute('src');
        if (isShared(src) || loadedSrcs.indexOf(src) >= 0) return;
        loadedSrcs.push(src);
        newScript.src = src;
        document.body.appendChild(newScript);
      } else if (s.textContent.trim()) {
        newScript.textContent = s.textContent;
        document.body.appendChild(newScript);
      }
    });
  }

  function updateNav(url) {
    document.querySelectorAll('.sidebar .nav-item').forEach(function (item) {
      item.classList.remove('active');
    });
    var link = document.querySelector('.sidebar a.nav-link[href="' + url + '"]');
    if (link) link.closest('.nav-item').classList.add('active');
  }

  function navigate(url) {
    if (url === currentUrl) return;

    fetch(url)
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.text();
      })
      .then(function (html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        var newContent = doc.querySelector('.content-wrapper');
        if (!newContent) return;

        destroyCharts();
        document.querySelector('.content-wrapper').innerHTML = newContent.innerHTML;

        updateNav(url);

        var newTitle = doc.querySelector('title');
        if (newTitle) document.title = newTitle.textContent;

        history.pushState({ url: url }, '', url);
        currentUrl = url;

        runScripts(doc);

        setTimeout(function(){
          if(typeof applyI18n==='function')applyI18n();
          if(typeof inicializarCharts==='function')inicializarCharts();
          if(typeof renderTabla==='function')renderTabla(1);
          if(typeof renderVariantes==='function'&&window.variantesGeneradas)renderVariantes();
        },150);

        if (window.$ && $.fn.tooltip) {
          $('[data-toggle="tooltip"]').tooltip();
        }

        var panel = document.querySelector('.main-panel');
        if (panel) panel.scrollTop = 0;
      })
      .catch(function () {
        window.location.href = url;
      });
  }

  function initRouter() {
    // Track already-loaded external scripts
    document.querySelectorAll('script[src]').forEach(function (s) {
      loadedSrcs.push(s.getAttribute('src'));
    });

    // Intercept sidebar nav clicks
    document.addEventListener('click', function (e) {
      var link = e.target.closest('.sidebar .nav-link');
      if (!link) return;
      var href = link.getAttribute('href');
      if (!href || href === '#' || /^(https?:|javascript:)/.test(href)) return;
      e.preventDefault();
      navigate(href);
    });

    // Browser back/forward
    window.addEventListener('popstate', function (e) {
      if (e.state && e.state.url) navigate(e.state.url);
    });

    history.replaceState({ url: currentUrl }, '', location.href);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRouter);
  } else {
    initRouter();
  }
})();
