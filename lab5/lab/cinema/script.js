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
    let animationSpeed = 1250;  
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
    let animationSpeed = 1250; 
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
        console.log(getPrevPosterNumber());
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

function changePosterInterval() {
    const delay = 20000;
    let timerId = setInterval(function() {
        scrollPosterRight();
    }, delay);
}

$(function() {
    changePosterInterval();
});