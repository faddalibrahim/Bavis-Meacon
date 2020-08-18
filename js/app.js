import BavisMeacon from './BavisMeacon.js';
import { $, $$, $id } from './binds.js';

if(!navigator.onLine){
    $('body').innerHTML = `<h1 style="color: white">oops seems like you are offline!!</h1>`;
    // return;
}


document.addEventListener('DOMContentLoaded', () => {
    let WORDS;

    fetch('https://api.quotable.io/quotes')
    .then(res => res.json())
    .then(({results}) => {
        WORDS = results.map(({content}) => content);
        console.log(WORDS)
        WORDS.sort(() => 0.5 - Math.random())
        console.log(WORDS)
        init()
    })

    function init(){
        const COUNT_DOWN = $('#controls .count-down'),
              CONTROLS   = $id('controls'),
              MARQUEE    = $('#word-stream marquee'),
              FORM       = $id('form'),
              SETTINGS_FORM       = $id('settings-form');
  
        
        const newGame = new BavisMeacon(COUNT_DOWN, CONTROLS, MARQUEE, FORM, WORDS, SETTINGS_FORM, $, $$);
        
        CONTROLS.addEventListener('click', newGame.action);
        SETTINGS_FORM.addEventListener('submit', newGame.applySettings);
        FORM.addEventListener('submit', newGame.nextWord);
    }

  

    
   


})