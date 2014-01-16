jQuery('.logo_bg').mouseover(function()
{
jQuery('.logo_bg').css("background-image", "url(img/logo_black.png)");
}).mouseleave(function(){
jQuery('.logo_bg').css("background-image", "url(img/logo_white.png)"); 
});




jQuery('img.thumb').mouseover(function()
{
jQuery(this).css({opacity:1.0});
}).mouseleave(function(){
jQuery(this).css({opacity:0.75}); 
});