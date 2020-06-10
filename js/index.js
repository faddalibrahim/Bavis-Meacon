import { $ } from './binds.js';
import { changeToPause, changeToPlay, showMarquee, hideMarquee, startTimer, pauseTimer, stopGame} from './functions.js';

const words = ['This','is','the','beta','version','Adnaced','version','on','its','way'];


document.addEventListener('DOMContentLoaded', () => {
    // const startBtn = $('#controls .fa-play');
    const timeDisplay = $('#controls .count-down');
    const controls = $('#controls');
    const marquee = $('#word-display marquee');
    const form = $('#form');
    let wordIndex = 0;


    controls.addEventListener('click',function(e){
        let buttonClicked = e.target.className;
        switch (buttonClicked) {
            case 'fas fa-play':
                changeToPause(e);
                showMarquee(marquee);
                startTimer(timeDisplay);
                break;
            case 'fas fa-pause':
                changeToPlay(e);
                hideMarquee(marquee);
                pauseTimer();
                break;
            case 'fas fa-stop':
               stopGame(marquee);
                break;
            case 'fas fa-redo':
                // replayGame()
                break;
            default:
                break;
        }
    })

   
    
    form.addEventListener('submit',function(e){
        e.preventDefault();
       
        if(wordIndex === words.length - 1){
            stopGame(marquee)
            this['typing-area'].value = null;
            wordIndex = 0;
            marquee.textContent = words[wordIndex];
            return;
        }

        if(this['typing-area'].value === words[wordIndex]){
            this['typing-area'].value = null;
            marquee.textContent = words[++wordIndex];
        }

       
    })

})