$(document).ready(function() {
  hiddenNav();
  bestitemslide();
  thirdblock();
  addedblock()
  mnb();
})

$(window).resize(function() {
  hiddenNav();
})

function mnb() {
  var bodyH = $('body').height();
  $('.mnb').css({
    'height': bodyH
  });
  console.log('전체높이:', bodyH);

  $('.mnb_btn').click(function() {
    $('.mnb').toggleClass('menuOn');
    $('body').toggleClass('menuOn2');

    if($('body').hasClass('menuOn2')){
      $('.mnb_btn').css({
        'background-image':'url(../ikea/img/main/X.png)'
      })
    } else {
      $('.mnb_btn').css({
        'background-image':'url(../ikea/img/main/hamburger.png)'
      })
    }

  })

}

function hiddenNav() {
  var bodyW = $('body').width();
  console.log(bodyW);
  if (bodyW > 768) {
    //subnav 숨기기
    $('.subnav-wrapper').hide();
    //list의 사이즈 담는 변수
    var listLength = $('.gnb>ul>li').length;
    for (var i = 0; i < listLength; i++) {
      //li>a 의 width를 담는 변수
      var aWidth = $('.gnb>ul>li>a').eq(i).width();
      var liWidth = $('.gnb>ul>li').eq(i + 1).width() + 1;
      //aWidth를 반올림하기위해 +1한 값을 width에
      $('.gnb>ul>li').eq(i).css({
        'width': aWidth + 2
      })
      $('.subnav').eq(i).css({
        'width': liWidth
      })
      console.log(liWidth = $('.gnb>ul>li').eq(3).width() + 1);
    }
    //li 를 mouseenter했을때 subnav가 펼쳐지도록

    $('.gnb>ul>li').mouseenter(function() {
      $('.subnav-wrapper').stop().slideDown(500);
    })
    $('.subnav-wrapper').mouseleave(function() {
      $('.subnav-wrapper').stop().slideUp(500);
    })
    $('.btn-close').click(function() {
      $('.subnav-wrapper').stop().slideUp(500);
    })




    //Cabinet 152.992 151.586
    var firstdlW = $('.subnav-inner > dl:first-child').width();
    console.log('dlW', firstdlW);
    if (firstdlW > 152) {
      $('.subnav').css({
        'margin-right': 112
      })
    } else if (firstdlW < 152) {
      $('.subnav').css({
        'margin-right': 114
      })
    }

  }
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

  //좌,우 버튼으로 제어할때
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

  //pagenation으로 제어할떄
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

function thirdblock() {
  var click = 0;
  $('.mainprev2, .mainnext2').click(function() {
    var click2 = click % 2;
    click++;
    console.log(click2);
    if (click2 == 0) {
      $('.longbanner-inner>img:first-child').stop().fadeOut(0);
      $('.longbanner-inner>img:last-child').stop().fadeIn(800);
    } else if (click2 == 1) {
      $('.longbanner-inner>img:last-child').stop().fadeOut(0);
      $('.longbanner-inner>img:first-child').stop().fadeIn(800);
    }

    return false;
  })
}

function addedblock() {
  var click = 0;
  var imgWidth = $('.bottomslide>ul>li').width() * -1;
  $('.mainprev3, .mainnext3').click(function() {
    click++;
    var click2 = click % 2;
    if (click2 == 0) {
      $('.bottomslide>ul').animate({
        'margin-left': 0
      }, 1000)

    } else if (click2 == 1) {
      $('.bottomslide>ul').animate({
        'margin-left': imgWidth
      }, 1000)
    }
    return false;
  })

}
