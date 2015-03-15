
# slick slider - the last carousel you'll ever need

Fully responsive. Scales with its container.
Separate settings per breakpoint
Uses CSS3 when available. Fully functional when not.
Swipe enabled. Or disabled, if you prefer.
Desktop mouse dragging
Infinite looping.
Fully accessible with arrow key navigation
Add, remove, filter & unfilter slides
Autoplay, dots, arrows, callbacks, etc...



## Usage:
````

Template.my_slider.rendered = function () {

        $('section#blog .cards').fadeIn().slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            swipeToSlide: true,
            touchThreshold: 8,
            centerMode: false,
            responsive: [
                {
                    breakpoint: 980,
                    settings: {
                        arrows: false,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                    }
                }
            ]
        });
};

````
