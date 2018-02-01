$(document).ready(function() {
   //list img mouseover/mouseleave
   $('.j_bedList ul li').on('mouseover',function(){
      var index = $(this).index()+1;
      $(this).find('img').fadeTo('slow').css({'width':250}).attr('src','img/kitchen/'+index+'1.JPG');
   }).on('mouseleave',function(){
      var index = $(this).index()+1;
      $(this).find('img').css({'width':250}).attr('src','img/kitchen/'+index+'0.JPG');
   })

   //  pagination start
  $('.j_pagination li:first-child a').addClass('active');

  //  pagination
  $('.j_pagination li a').click(function() {
     $('.j_pagination li a').removeClass('active');
     $(this).addClass('active');
     return false;
  })
  // prev
  $('.j_select_left').on('click',function(){
     if($('.j_pagination li:first-child a').hasClass('active')){
       $(this).addClass('active');
     }else{
       $('.j_pagination').find('.active').removeClass('active').parent().prev().find('a').addClass('active');
     }
  })

  // next
  $('.j_select_right').on('click',function(){
     if($('.j_pagination li:last-child a').hasClass('active')){
       $(this).addClass('active');
     }else{
     $('.j_pagination').find('.active').removeClass('active').parent().next().find('a').addClass('active');
  }
  })

//list 정렬 Test
   var listLength = $('.j_bedList ul li').length;
   //console.log(listLength);
   var nameArray = new Array();
   for(var i = 0; i <listLength; i++ ){
      nameArray[i] = $('.j_bedList ul li:eq(' + i + ') a div:last-child p:first-child').text();
   }
   console.log(nameArray.sort());

   // $('select').on('change',function(){
   //    nameArray.sort();
   //    console.log(nameArray);
   // })
})
