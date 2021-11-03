'use strict';

let $posters = $(".poster");
let $postersSlider = $('.posters');
let currentPosterNumber = 0;
let posterLock = false;

function getPrevPosterNumber() {
    return currentPosterNumber < 1 ? $posters.length - 1 : currentPosterNumber - 1;
}

function getNextPosterNumber() {
    return currentPosterNumber > $posters.length - 2 ? 0 : currentPosterNumber + 1;
}

function scrollPosterRight() {
    if (posterLock)
        return;
    posterLock = true;
    let animationSpeed = 1000;  
    if (currentPosterNumber == $posters.length - 1)  
    {
        let $clone = $posters.eq(0).clone();
        $clone.appendTo($postersSlider);
        $clone.addClass('active');
        $postersSlider.animate({'margin-left': '-=100vw'}, animationSpeed, function() {
            $postersSlider.css({'margin-left': '0'});
            $posters.eq(currentPosterNumber).removeClass('active');
            $posters.eq(getNextPosterNumber()).addClass('active');
            $clone.removeClass('active');
            $clone.remove();
            currentPosterNumber = getNextPosterNumber();
            posterLock = false;
        });
    }
    else {
        $posters.eq(getNextPosterNumber()).addClass('active');
        $postersSlider.animate({'margin-left': '-=100vw'}, animationSpeed, function() {
            $postersSlider.css({'margin-left': '0'});
            $posters.eq(currentPosterNumber).removeClass('active');
            currentPosterNumber = getNextPosterNumber();
            posterLock = false;
        });
    }
}

function scrollPosterLeft() {
    if (posterLock)
        return;
    posterLock = true;
    let animationSpeed = 1000; 
    if (currentPosterNumber == 0)   
    {
        let $clone = $posters.eq($posters.length - 1).clone();
        $clone.prependTo($postersSlider);
        $clone.addClass('active');
        $postersSlider.css({'margin-left': '-=100vw'});
        $postersSlider.animate({'margin-left': '+=100vw'}, animationSpeed, function() {
            $postersSlider.css({'margin-left': '0'});
            $posters.eq(currentPosterNumber).removeClass('active');
            $posters.eq(getPrevPosterNumber()).addClass('active');
            $clone.removeClass('active');
            $clone.remove();
            currentPosterNumber = getPrevPosterNumber();
            posterLock = false;
        });
    }
    else
    {
        $posters.eq(getPrevPosterNumber()).addClass('active');
        $postersSlider.css({'margin-left': '-=100vw'});
        $postersSlider.animate({'margin-left': '+=100vw'}, animationSpeed, function() {
            $postersSlider.css({'margin-left': '0'});
            $posters.eq(currentPosterNumber).removeClass('active');
            currentPosterNumber = getPrevPosterNumber();
            posterLock = false;
        });
    }
}

function isMoreThanAHalfOfPosterInViewport() {
    const rect = $postersSlider.get(0).getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    let isInViewport = (rect.bottom > windowHeight / 2);
    return isInViewport;
}

function changePosterOnInterval() {
    const delay = 20000;
    var timerId = setInterval(function() {
        if (isMoreThanAHalfOfPosterInViewport())
            scrollPosterRight();     
    }, delay);
}

let lastSegmentsNumber;
let carouselGapSize = 4;

let $newMoviesSlider = $('#carousel-1');
let $newMovies = $('#carousel-1 .filmBlock');
let currentNewMovieNumber = 0;
let newMovieLock = false;
let $newMoviesArrowLeft = $('#triangleLeft2');
let $newMoviesArrowRight = $('#triangleRight2');
let newMoviesCarousel = {slider: $newMoviesSlider, elements: $newMovies, arrowLeft: $newMoviesArrowLeft, 
    arrowRight: $newMoviesArrowRight, current: currentNewMovieNumber, lock: newMovieLock};

let $shortsSlider = $('#carousel-2');
let $shorts = $('#carousel-2 .filmBlock');
let currentShortNumber = 0;
let shortLock = false;
let $shortsArrowLeft = $('#triangleLeft3');
let $shortsArrowRight = $('#triangleRight3');
let shortsCarousel = {slider: $shortsSlider, elements: $shorts, arrowLeft: $shortsArrowLeft,
     arrowRight: $shortsArrowRight, current: currentShortNumber, lock: shortLock};

var isPhone = window.matchMedia("(max-width: 650px)");
var isTablet = window.matchMedia("(max-width: 1200px)");
var isNotWide = window.matchMedia("(max-width: 1400px)");
var isUltrawide = window.matchMedia("(min-width: 1801px)");

function getCarouselSegmentsNumber() {
    let number = 6;
    if (isPhone.matches)
        number = 1;
    else if (isTablet.matches)
        number = 3;
    else if (isNotWide.matches)
        number = 5;
    else if (isUltrawide.matches)
        number = 8;
    return number;
}

function changeCarousels() {
    if (lastSegmentsNumber != getCarouselSegmentsNumber())
    {
        lastSegmentsNumber = getCarouselSegmentsNumber();
        let carousels = [newMoviesCarousel, shortsCarousel];
        for (let carousel of carousels)
        {
            carousel.arrowRight.removeClass('disabled');
            carousel.current = 0;
            carousel.arrowLeft.addClass('disabled');
            if (carousel.elements.length <= lastSegmentsNumber)
            {
                carousel.slider.css({'justify-content' : 'center'});
                carousel.arrowRight.addClass('disabled');
            }
            else 
            {
                carousel.slider.css({'justify-content' : 'start'});
            }
            carousel.slider.css({'margin-left' : '0'});
        }
    }
}

function getPrevCarouselNumber(current, length) {
    return current < 1 ? length - 1 : current - 1;
}

function scrollCarouselRight(carousel) {
    if (carousel.lock)
        return;
    else if (carousel.current + getCarouselSegmentsNumber() > carousel.elements.length - 1)
        return;
    carousel.lock = true;
    if (carousel.current == 0)
        carousel.arrowLeft.removeClass('disabled');
    if (carousel.current + getCarouselSegmentsNumber() == carousel.elements.length - 1)
        carousel.arrowRight.addClass('disabled');
    let animationSpeed = 1000;  
    carousel.slider.animate({'margin-left': '-=' + (carousel.elements.eq(carousel.current).width() + carouselGapSize) + 'px'}, animationSpeed, function() {
        carousel.current++;
        carousel.lock = false;
    });
}

function scrollCarouselLeft(carousel) {
    if (carousel.lock)
        return;
    else if (carousel.current < 1)
        return;
    carousel.lock = true;
    if (carousel.current + getCarouselSegmentsNumber() == carousel.elements.length)
        carousel.arrowRight.removeClass('disabled');
    if (carousel.current == 1)
        carousel.arrowLeft.addClass('disabled');
    let animationSpeed = 1000;  
    carousel.slider.animate({'margin-left': '+=' + (carousel.elements.eq(carousel.current).width() + carouselGapSize) + 'px'}, animationSpeed, function() {
        carousel.current--;
        carousel.lock = false;
    });
}

$(function() {
    changePosterOnInterval();
    window.addEventListener('resize', changeCarousels);
    window.addEventListener("orientationchange", changeCarousels);
    changeCarousels();
    $newMoviesArrowLeft.click(() => {scrollCarouselLeft(newMoviesCarousel)});
    $newMoviesArrowRight.click(() => {scrollCarouselRight(newMoviesCarousel)});
    $shortsArrowLeft.click(() => {scrollCarouselLeft(shortsCarousel)});
    $shortsArrowRight.click(() => {scrollCarouselRight(shortsCarousel)});
});
