'use strict';

(function (win, doc) {
  console.log('App Running');

  function onScroll (ev) {
    var scrollY = $(body).scrollTop();

    scrollY > fixedY ? $(header).addClass('fixed') : $(header).removeClass('fixed') ;
  }

  var body   = $(doc.body),
      header = $('header'),
      fixedY = 200;

  $(win).on('scroll', onScroll);

})(window, document)
