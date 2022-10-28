(function () {
  function $(selector) {
    return document.querySelectorAll(selector);
  }

  function rand(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  function checkAnimation() {
    const blocks = [
      '.hero:not(.animated)',
      '.trade:not(.animated)',
      '.cross-swap:not(.animated)',
      '.why-us:not(.animated)',
      '.exchange:not(.animated)',
      '.performance:not(.animated)',
      '.info:not(.animated)',
      '.footer:not(.animated)',
    ];

    function check(elements) {
      if (!elements.length) {
        return;
      }
      const short = .3;
      const top = window.scrollY + window.outerHeight * short;
      const bottom = window.scrollY + window.outerHeight - window.outerHeight * short;

      elements.forEach(function(element) {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.clientHeight;

        if (
            (elementTop >= top && elementTop <= bottom) ||
            (elementBottom >= top && elementBottom <= bottom) ||
            (elementTop < top && elementBottom > bottom)
        ) {
          element.classList.add('animated');
        }
      });
    }

    const elements = $(blocks.join(','));

    check(elements);

    window.addEventListener('scroll', function () {
      check(elements);
    });
  }

  function checkPanel() {
    const heroEl = $('.hero')[0];
    const panelEl = $('.panel')[0];

    function check() {
      if (window.scrollY > heroEl.offsetTop + heroEl.clientHeight) {
        if (!panelEl.classList.contains('panel_sticky')) {
          panelEl.classList.add('panel_sticky');
        }
      } else {
        if (panelEl.classList.contains('panel_sticky')) {
          panelEl.classList.remove('panel_sticky');
        }
      }
    }

    check();

    window.addEventListener('scroll', function () {
      check();
    });
  }

  window.addEventListener("load", function () {
    checkAnimation();
    checkPanel();

    $('.scroll-top')[0].addEventListener('click', function () {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    });
  });

})()
