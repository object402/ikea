$(document).ready(function() {
  hiddenNav();
})

function hiddenNav() {
  //subnav 숨기기
  $('.gnb>ul>li>dl').hide();
  //list의 사이즈 담는 변수
  var listLength = $('.gnb>ul>li').length;

  for(var i=0;i<listLength;i++){
    //li>a 의 width를 담는 변수
    var aWidth = $('.gnb>ul>li>a').eq(i).width();
    //aWidth를 반올림하기위해 +1한 값을 width에
    $('.gnb>ul>li').eq(i).css({
      'width': aWidth+1
    })
  }
  //li 를 클릭했을때 subnav가 펼쳐지도록
  $('.gnb>ul>li').hover(function () {
    $(this).children('dl').stop().slideDown();
  },function () {
      $(this).children('dl').stop().slideUp();
  });
}
