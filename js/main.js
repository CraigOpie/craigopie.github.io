---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
  $('a.panel-button').click(function (e) {
    if ($('.content-wrapper').hasClass('showing')){
      $('.content-wrapper').removeClass('animated slideInRight')
      $('.panel-cover').removeClass('panel-cover--collapsed')
      $('.panel-cover').css('max-width', '100%')
      $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {})
      $('.content-wrapper').removeClass('showing')
      window.location.hash = '';
      parent.location.hash = '';
      return;
    }
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
    $('.content-wrapper').addClass('showing');
  })

  if (window.location.hash && window.location.hash == '#projects') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.hash && window.location.hash == '#essays') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.hash && window.location.hash == '#portfolio') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .projects-button').click(function () {
    document.getElementById("projects").style.display = contents;
    document.getElementById("essays").style.display = none;
    document.getElementById("portfolio").style.display = none;
    if (window.location.hash && window.location.hash == '#projects') {
      $('.navigation-wrapper').toggleClass('visible')
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    }
  })

  $('.navigation-wrapper .essays-button').click(function () {
    document.getElementById("projects").style.display = none;
    document.getElementById("essays").style.display = contents;
    document.getElementById("portfolio").style.display = none;
    if (window.location.hash && window.location.hash == '#essays') {
      $('.navigation-wrapper').toggleClass('visible')
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    }
  })

  $('.navigation-wrapper .portfolio-button').click(function () {
    document.getElementById("projects").style.display = none;
    document.getElementById("essays").style.display = none;
    document.getElementById("portfolio").style.display = contents;
    if (window.location.hash && window.location.hash == '#portfolio') {
      $('.navigation-wrapper').toggleClass('visible')
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    }
  })
})
