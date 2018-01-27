$(document).ready(function() {
  hiddenNav();
  bestitemslide();
})

function hiddenNav() {
  //subnav 숨기기
  $('.gnb>ul>li>dl').hide();
  //list의 사이즈 담는 변수
  var listLength = $('.gnb>ul>li').length;
  for (var i = 0; i < listLength; i++) {
    //li>a 의 width를 담는 변수
    var aWidth = $('.gnb>ul>li>a').eq(i).width();
    //aWidth를 반올림하기위해 +1한 값을 width에
    $('.gnb>ul>li').eq(i).css({
      'width': aWidth + 1
    })
  }
  //li 를 클릭했을때 subnav가 펼쳐지도록
  $('.gnb>ul>li').hover(function() {
    $(this).children('dl').stop().slideDown(800);
  }, function() {
    $(this).children('dl').stop().slideUp();
  });
}

function bestitemslide() {
  $('.slidenav > ul > li').click(function() {
    $('.slidenav > ul > li').removeClass('mainOn');
    $(this).toggleClass('mainOn');
    if ($(this).hasClass('monthly')) {
      $('.secondbestitem').css({
        'display': 'none'
      });
      $('.firstbestitem').css({
        'display': 'block'
      });
    } else if ($(this).hasClass('brandnew')) {
      $('.firstbestitem').css({
        'display': 'none'
      });
      $('.secondbestitem').css({
        'display': 'block'
      });
    }
    return false;
  })

  //현재페이지의 상태를 나타내는 변수
  var pageNum = 0;
  $('.mainnext').click(function mainnext() {
    pageNum++;
    if (pageNum >= 1) {
      $('.main-pagenation span').removeClass('pageOn');
      $('.main-pagenation span:last-child').addClass('pageOn');
      pageNum = 1;
    }
    $('.bestitem-slide').stop().animate({
      'margin-left': -1158 + 'px'
    }, 800)
    console.log(pageNum);
    return false;
  })

  $('.mainprev').click(function mainprev() {
    pageNum--;
    if (pageNum <= 0) {
      $('.main-pagenation span').removeClass('pageOn');
      $('.main-pagenation span:first-child').addClass('pageOn');
      pageNum = 0;
    }
    $('.bestitem-slide').stop().animate({
      'margin-left': 0 + 'px'
    }, 800)
    console.log(pageNum);
    return false;
  })

  $('.main-pagenation>span:last-child').click(function() {
    $('.main-pagenation span').removeClass('pageOn');
    $(this).addClass('pageOn');
    $('.bestitem-slide').stop().animate({
      'margin-left': -1158 + 'px'
    }, 800)
    pageNum = 1;
  })
  $('.main-pagenation span:first-child').click(function() {
    $('.main-pagenation span').removeClass('pageOn');
    $(this).addClass('pageOn');
    $(this).addClass('pageOn');
    $('.bestitem-slide').stop().animate({
      'margin-left': 0 + 'px'
    }, 800)
    pageNum = 0;
  })
}
