console.log('eeeww');

window.SlickCarousel = {

    onReady: function () {
        SlickCarousel.initation();
    },

    initation: function () {
      
        $(document).ready(function () {
            
        
            $('.myslick').slick({
                infinite: true,
                // slidesToShow: 3,
                // slidesToScroll: 3,
                dots:true,
                arrows:true,
                autoplay:true,
                autoplaySpeed:2000,

            });
        });

    }


}
$(document).ready(SlickCarousel.onReady);