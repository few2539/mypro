const scrollbar = Scrollbar.init($('[data-scrollbar]')[0]);

var selector = '.js-animation';


// scrollbar.addListener((status) => {
//   var currentScroll = (status.offset.y);
//   currentScroll += (status.offset.y) * 0.5;
//   var boxScroll = $('.boxred').offset().top;


//   console.log($('.boxred').offset().top);

//   $(selector).each(function(){
//     var $target = $(this);
//     var offset = $target.offset().top;
//     if (offset <= (0 + $(window).height()*0.8)) {
//       $target.addClass('is-animate');
//     }else{
//       $target.removeClass('is-animate');
//     }
//   });
  
//   // if (boxScroll <= (0 + $(window).height()*0.5)) {
//   //   $('.content1').addClass('is-animate');
//   //   $('.boxred').addClass('is-animate');
//   //   $('.boxgreen').addClass('is-animate');


//   // } else {

//   //   $('.content1').removeClass('is-animate');
//   //   $('.boxred').removeClass('is-animate');
//   //   $('.boxgreen').removeClass('is-animate');
//   // }
//   // console.log([("x"),('y')]);
//   // console.log([(status.offset.x),(currentScroll)]);


// });