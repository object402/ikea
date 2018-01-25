$(document).ready(function(){

    $('.p_goods_list li').mouseover(function(){

      var img_index = $(this).index()+1;
      console.log(img_index);
      $(this).find('img').attr({"src":"./img/new/"+img_index+"1.jpg"});
      // $(this).find('img').stop().animate({
      //   'width':'240px'
      // },'slow');
    })

    $('.p_goods_list li').mouseleave(function(){

      var img_index = $(this).index()+1;
      console.log(img_index);
      $(this).find('img').attr({"src":"./img/new/"+img_index+"0.jpg"});
      // $(this).find('img').stop().animate({
      //   'width':'230px'
      // },'slow');

    })




})
