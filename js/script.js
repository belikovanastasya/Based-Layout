
$(function(){


var marker = true;
var startProc = $("#skills").scrollTop();
function count(){

$('#indicatorContainer-1').radialIndicator({
        barColor: '#e74c3c',
        barWidth:6,
        initValue: 0,
        roundCorner : true,
        percentage: true
    });

var radialObj = $('#indicatorContainer-1').data('radialIndicator');
//now you can use instance to call different method on the radial progress.
//like
radialObj.animate(97);


$('#indicatorContainer-2').radialIndicator({
        barColor: '#e74c3c',
        barWidth: 6,
        initValue: 0,
        roundCorner : true,
        percentage: true
    });

var radialObj = $('#indicatorContainer-2').data('radialIndicator');
//now you can use instance to call different method on the radial progress.
//like
radialObj.animate(98);

$('#indicatorContainer-3').radialIndicator({
        barColor: '#e74c3c',
        barWidth: 6,
        initValue: 0,
        roundCorner : true,
        percentage: true
    });

var radialObj = $('#indicatorContainer-3').data('radialIndicator');
//now you can use instance to call different method on the radial progress.
//like
radialObj.animate(93);


$('#indicatorContainer-4').radialIndicator({
        barColor: '#e74c3c',
        barWidth: 6,
        initValue: 0,
        roundCorner : true,
        percentage: true
    });

var radialObj = $('#indicatorContainer-4').data('radialIndicator');
//now you can use instance to call different method on the radial progress.
//like
radialObj.animate(89);
marker = false;
}



$(window).on('scroll', function(){
    if ($(window).scrollTop()> startProc){
        if(marker){
            count();
        }
    }


})
$("#all").click(function(e){
    e.preventDefault();
    $(".item li").hide(200);
    $(".item li").show(3000);
  
    
})


$("#app").click(function(e){
    e.preventDefault();
    $(".app").siblings().hide(200);
    $(".app").show(2000);
    
})
$("#illustr").click(function(e){
    e.preventDefault();
    $(".illustr").siblings().hide(200);
    $(".illustr").show(2000);
    
    
    
})

$("#logowork").click(function(e){
    e.preventDefault();
    $(".logowork").siblings().hide(200);
    $(".logowork").show(2000);
    
    
    
})
$("#photowork").click(function(e){
    e.preventDefault();
    $(".photowork").siblings().hide(200);
    $(".photowork").show(2000);
    
    
    
})

$("#navmenubtn").click(function(){
    $("nav ul").toggleClass("active-menu");
   $("nav").toggleClass("active-nav");
   $(".smallbtn").toggleClass("active-btn")

})






})