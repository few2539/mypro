window.mousemove = {
    onReady: function () {
        mousemove.initMouse();
    },

    initMouse: function () {

        $('.bigbox').mousemove(function (e) {
            //var $p = $(this).find('.text');
            var box = $(this).find('.box'); //ไม่แนะนำให้ตั้งชื่อตัวแปลแบบนี้นะ แปลก ๆ ใช้อันใดอันหนึ่งสวยกว่า
            
            //var x = (e.clientX - $(this).offset().left - $(this).width() * 0.5) *-1;
            //var y = (e.clientY - $(this).offset().top - $(this).height() * 0.5) *-1;
            var boxX = (e.clientX / 80);
            var boxY = (e.clientY / 80) ;
            console.log(boxX,boxY);

            /*$p.css({
                'transform': 'translate(' +( x *0.5)  +'px,'+ (y *0.5) +'px )'
            })*/
            box.css({
                'transform': 'translate(' + (boxX)  +'%,'+ (boxY) +'% )'
            })
        })

        /*$('.bigbox').mouseleave(function(e){
            var $p = $(this).find('.text');
            var x = 0;
            var y = 0;
            $p.css({
                'transform': 'translate(' + x +'px,'+ y +'px )',
               
            })
          
        })*/

    },

}
$(document).ready(mousemove.onReady);






















// $(window).on('scroll', function(){

//     var currentScroll = $(window).scrollTop();
//     currentScroll += $(window).height() * 0.5;
//     console.log(currentScroll);

//     var boxScroll = $('.boxred').offset().top;
//     // console.log(boxScroll);
//     if(currentScroll >=  boxScroll){
//         $('.boxred').addClass('is-animate');
//     }
//     else{
//         $('.boxred').removeClass('is-animate');
//     }
// })