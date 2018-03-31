(function (win, doc) {
  'use strict';

  function onScroll (ev) {
    var scrollY = $(win).scrollTop();
    scrollY > fixedY ? header.addClass('fixed') : header.removeClass('fixed') ;
  }

  var header = $('header');
  var fixedY = 80;

  $(win).on('scroll', onScroll);

}(window, document));
