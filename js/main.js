$(document).ready(function() {
  hiddenNav();
})

function hiddenNav() {
  $('.gnb>ul>li>dl').hide();
  $('.gnb>ul>li').click(function () {
    $(this).children('dl').show();
  });
}
