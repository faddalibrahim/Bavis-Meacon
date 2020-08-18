import BavisMeacon from './BavisMeacon.js';
import { $, $$, $id } from './binds.js';


document.addEventListener('DOMContentLoaded', () => {

    const COUNT_DOWN = $('#controls .count-down'),
          CONTROLS   = $id('controls'),
          MARQUEE    = $('#word-stream marquee'),
          FORM       = $id('form'),
          SETTINGS_FORM       = $id('settings-form'),
          WORDS      = ['This', 'is', 'the', 'beta', 'version', 'alpha', 'on', 'its', 'way', 'soon'];
    
          
    const newGame = new BavisMeacon(COUNT_DOWN, CONTROLS, MARQUEE, FORM, WORDS, SETTINGS_FORM, $, $$);
          
    CONTROLS.addEventListener('click', newGame.action);
    SETTINGS_FORM.addEventListener('submit', newGame.applySettings);
    FORM.addEventListener('submit', newGame.nextWord);

    
   


})