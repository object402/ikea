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

    //  pagination start

    $('.p_pagination li:first-child a').addClass('active');

    //  pagination

    $('.p_pagination li a').click(function() {

      $('.p_pagination li a').removeClass('active');

      $(this).addClass('active');

      return false;
    })
    // prev
    $('.p_select_left').on('click',function(){
      if($('.p_pagination li:first-child a').hasClass('active')){
        $(this).addClass('active');
      }else{
        $('.p_pagination').find('.active').removeClass('active').parent().prev().find('a').addClass('active');
      }
    })

    // next
    $('.p_select_right').on('click',function(){

      if($('.p_pagination li:last-child a').hasClass('active')){
        $(this).addClass('active');
      }else{

      $('.p_pagination').find('.active').removeClass('active').parent().next().find('a').addClass('active');
    }

    })


})
