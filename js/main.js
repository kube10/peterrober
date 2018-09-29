//VARIABLES
var isIE = handleBrowserSupport();
var menuBtn = $('.shapeshifter');
var nav = $("#nav");
var navbar = $('.navbar-collapse');
var navbarItem = $('.nav-item');
var navbarBrand = $('.navbar-brand');
var vpLayout = $(".vp-player-layout");
var downArrow = $('#down-arrow');
var discoverBtn = $('#discover-btn');
var contactBtn = $('#contactBtn');
var section1 = $('#section-1');
var section2 = $('#section-2');
var section3 = $('#section-3');
var section3B = $('#section-3B');
var section4 = $('#section-4');
var section5 = $('#section-5');
var section6 = $('#section-6');
var aboutImg = $('.about-img');
var cover = $('#cover');
var bookImg = $('.book-img');

$(document).ready(function (){
  handleBrowserSupport();
  setSection3B();
  setColors();
  setActiveLink();
  setEnterView();
  $.scrollify({
            section : ".section",
            scrollbars: false,
            scrollSpeed: 1000,
            before: function(i, sections) {
              height = $(window).height();
              console.log('going to section id: ' + i);
              currentUrl = getSectionFromUrl();
              next = i;
              if (currentUrl > next) {
                //UP
                if (next === 0) {
                  aboutImg.css('transform', 'translateY(0px)');
                  cover.css('transform', 'translateY(0px)');
                } else if (next === 1) {
                  aboutImg.css('transform', 'translateY(0px)');
                  cover.css('transform', 'translateY(-150px)');
                  console.log('section-2 scrolled');
                  $.scrollify.setOptions({scrollSpeed: 1500});
                } else if (next === 2 || next === 4) {
                  aboutImg.css('transform', 'translateY(-200px)');
                  bookImg.css('transform', 'translateY(0px)');
                  $.scrollify.setOptions({scrollSpeed: 1500});
                } else if (next === 3) {
                  aboutImg.css('transform', 'translateY(0px)');
                  bookImg.css('transform', 'translateY('+height+'px)');
                }
                else {
                  $.scrollify.setOptions({scrollSpeed: 1000});
                  aboutImg.css('transform', 'translateY(0px)');
                  bookImg.css('transform', 'translate(0px)');
                  cover.css('transform', 'translateY(0px)');
                }

              } else {
                //DOWN
                if (next == 1) {
                  aboutImg.css('transform', 'translateY(0px)');
                  cover.css('transform', 'translateY(-150px)');
                } else if (next === 2) {
                  aboutImg.css('transform', 'translateY(-200px)');
                  $.scrollify.setOptions({scrollSpeed: 1500});
                  console.log('section-2 scrolled');
                } else if (next === 3) {
                  aboutImg.css('transform', 'translateY(0px)');
                  bookImg.css('transform', 'translateY('+height+'px)');
                  $.scrollify.setOptions({scrollSpeed: 1500});
                }
                else {
                  $.scrollify.setOptions({scrollSpeed: 1000});
                  aboutImg.css('transform', 'translateY(0px)');
                  bookImg.css('transform', 'translateY(0px)');
                  cover.css('transform', 'translateY(0px)');
                }

              }

            }
          });
  nav.find("a").click(function(e) {
    e.preventDefault();
    section = $(this).attr("href");
    index = section.split('#')[1];
    indexInteger = parseInt(index, 10);
      if ($(window).width() < 992) {
        if (indexInteger == 3 || indexInteger == 4 || indexInteger == 5 || indexInteger == 6) {
          indexInteger = indexInteger + 1;
        }
      }
      toSection = '#' + indexInteger;
    if ($(window).width() >= 992) {
      $.scrollify.move(toSection);
    } else {
      navbar.collapse('hide');
      setTimeout(function(){
        closeMenu();
        $.scrollify.move(toSection);
      }, 450);
    }
  });
  var lastScrollTop = 0;
  $(window).scroll(function(e){
    setTimeout(function(){
      setColors();
    }, 500);
    setActiveLink();
  });
  $(window).resize(function(){
    location.reload();
  });
  menuBtn.click(function(e){
    if (menuBtn.hasClass('play')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
  vpLayout.css('height', '100%');
  vpLayout.css('width', '100%');
  downArrow.click(function(e){
      $.scrollify.next();
  });
  discoverBtn.click(function(e){
    $.scrollify.move(2);
  });
  contactBtn.click(function(e){
    i = 5;
    if ($(window).width() < 992) {
      i = 6;
    }
    $.scrollify.move(i);
  })
});

function setSection3B() {
  if ($(window).width() > 991) {
    section3B.removeClass('section');
  } else {
    section3B.addClass('section');
  }
}

function setActiveLink() {
  $("#nav .nav-item").removeClass('active');
  index = getSectionFromUrl();
  $("#nav .nav-item[href='#"+index+"']").addClass('active');
}

function handleBrowserSupport() {
  var isIE = false || !!document.documentMode;
  if (Modernizr.cssmask) {
  } else {
    menuBtn.remove();
    $('#button').append("<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'><span class='navbar-toggler-icon'></span></button>");
  }
  return isIE;
}

function openMenu() {
  menuBtn.removeClass('play-r');
  menuBtn.addClass('play');
  navbar.collapse('show');
}

function closeMenu() {
  menuBtn.removeClass('play');
  menuBtn.addClass('play-r');
  navbar.collapse('hide');
}

function getSectionFromUrl() {
  string = window.location.href;
  index = string.split('#')[1];
  indexInt = parseInt(index, 10);

  if ($(window).width() < 992) {
    if (indexInt == 4 || indexInt == 5 || indexInt == 6 || indexInt == 7) {
      indexInt = indexInt - 1;
    }
  }

  return indexInt;
}

function setColors() {
  string = window.location.href;
  index = string.split('#')[1];
  color = "";
  bg = "";
  switch (index) {
    case '2':
      color = "white";
      bg = "#516F63";
    break;
    case '3':
      color = "white";
      bg = "#8D484D";
    break;
    case '4':
      color = "#516F63";
      bg = "#2C2A38";
    break;
    case '6':
      if ($(window).width() < 992) {
        color = "#516F63";
        bg = "white";
      } else {
        color = "white";
        bg = "#516F63";
      }
    break;
    case '7':
      color = "white";
      bg = "#2C2A38";
    break;
    default:
      color = "#516F63";
      bg = "white";
  }

  if ($(window).width() < 992) {
    navbar.css("background-color", color);
    navbarItem.css("color", bg);
  } else {
    navbar.css("background-color", "transparent");
    navbarItem.css("color", color);
  }


  navbarBrand.css("color", color);
  if (Modernizr.cssmask) {
    menuBtn.css("background-color", color);
  }


}

function setEnterView() {
  enterView({
    selector: '.enter-view',
    enter: function(el){
      el.classList.add('entered');
    },
    offset: 0.5,
    exit: function(el) {
      el.classList.remove('entered');
    }
  });

  enterView({
    selector: '.enter-view-low',
    enter: function(el){
      el.classList.add('entered');
    },
    exit: function(el) {
      el.classList.remove('entered');
    }
  })

  enterView({
    selector: '.enter-view-opacity',
    enter: function(el){
      el.classList.add('entered');
    },
    exit: function(el) {
      el.classList.remove('entered');
    }
  })
}
