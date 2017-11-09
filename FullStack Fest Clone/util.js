$(document).ready(function(){
  
      // set up hover panels
      // although this can be done without JavaScript, we've attached these events
      // because it causes the hover to be triggered when the element is tapped on a touch device
      $('.profile-hover').hover(function(){
        $(this).addClass('flip');
      },function(){
        $(this).removeClass('flip');
      });
  
      // set up click/tap panels
      $('.profile-click').toggle(function(){
        $(this).addClass('flip');
      },function(){
        $(this).removeClass('flip');
      });
  
    });