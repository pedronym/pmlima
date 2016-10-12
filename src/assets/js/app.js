'use strict';

(function (win, doc) {

  function onScroll (ev) {
    var scrollY = $(body).scrollTop();

    scrollY > fixedY ? $(header).addClass('fixed') : $(header).removeClass('fixed') ;
  }

  var body   = $(doc.body),
      header = $('header'),
      fixedY = 80;

  $(win).on('scroll', onScroll);

}(window, document));
