import { $ } from './binds.js';
// let wordIndex = 0;
// const words = ['fola','salma','zainab','khadija','sulaiman'];


function changeToPause(e){
    e.target.classList.replace('fa-play','fa-pause');
}

function changeToPlay(e = $('.fa-stop')){
    if(e.target){
        e.target.classList.replace('fa-pause','fa-play');
        return
    }

    // if(e.classList.contains('fa-stop')){
        $('.fa-pause').classList.replace('fa-pause','fa-play');
        // return;
    // }
}

function showMarquee(marquee){
    marquee.classList.toggle('show');
}

function hideMarquee(marquee){
    marquee.classList.toggle('show');
}

let timeKeeper;

let decumulator = (() => {
    let limit = 30;
    return function(timeDisplay,marquee){
        if(limit < 0){
            stopGame(marquee);
            return;
        }
        timeDisplay.textContent = `${limit--}`;
    }  
})()

function startTimer(timeDisplay,marquee){
    timeKeeper = setInterval(() => decumulator(timeDisplay,marquee),1000);
}

function pauseTimer(){
    clearInterval(timeKeeper);
}

function stopGame(marquee){
    let [,,,timeDisplay] = controls.children; 
    marquee = $('#word-display marquee');

    if(timeDisplay.textContent == '30'){
        console.log('i am not even in play mode saf')
        return;
    }

    console.log('i will stop right now')

    changeToPlay();


    stopTimer(timeDisplay);


    console.log(marquee)

    hideMarquee(marquee);


    
    wordIndex = 0;

}

function replayGame(){
    controls.children[0].className = 'fas fa-pause';
    startTimer();
    showMarquee()
}






function resetLimit(timeDisplay,marquee){
    timeDisplay.textContent = '30';
    decumulator = (() => {
        let limit = 30
        return function(timeDisplay,marquee){
            if(limit < 0){
                stopGame(marquee);
                return;
                }
            timeDisplay.textContent = `${limit--}`;
        }  
    })()
}

function stopTimer(timeDisplay){
    pauseTimer();
    resetLimit(timeDisplay);
}

export {
    changeToPause,
    changeToPlay,
    showMarquee,
    hideMarquee,
    pauseTimer,
    resetLimit,
    stopTimer,
    startTimer,
    replayGame,
    stopGame,
    decumulator
}