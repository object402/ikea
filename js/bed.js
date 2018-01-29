$(document).ready(function() {
   $('.j_bedList ul li').on('mouseover',function(){
      var index = $(this).index()+1;
      $(this).find('img').css({'width':250}).attr('src','img/bed/'+index+'1.JPG');
   }).on('mouseleave',function(){
      var index = $(this).index()+1;
      $(this).find('img').css({'width':250}).attr('src','img/bed/'+index+'0.JPG');
   })


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
