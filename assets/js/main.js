  ;$(function()
{
   'use strict';


  var backButton=$('.back-to-top');

 backButton.on('click',function()
 {
   
    $('html,body').animate(
     {
      scrollTop:0
     },800)
 })

$(window).on('scroll',function()
{
    if($(window).scrollTop()>$(window).height())
        backButton.fadeIn();
    else 
      backButton.fadeOut();
})
$(window).trigger('scroll');
})

  window.onload=function(){

  for(var ii=0; ii<document.links.length; ii++)

    document.links[ii].onfocus=function(){this.blur()};

};