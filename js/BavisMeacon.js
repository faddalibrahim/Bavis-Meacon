export default class BavisMeacon {
    constructor(COUNT_DOWN, CONTROLS, MARQUEE, FORM, WORDS, SETTINGS_FORM, $,$$){
        this.WORDS = WORDS;
        this.COUNT_DOWN = COUNT_DOWN;
        this.CONTROLS   = CONTROLS;
        this.MARQUEE    = MARQUEE;
        this.FORM       = FORM;
        this.SETTINGS_FORM = SETTINGS_FORM;
        this.$ = $;
        this.$$ = $$;

        this.MARQUEE.textContent = this.WORDS[0];

        this.wordIndex = 0;

        this.settingsLimit = 30;

        this.timeKeeper;
        this.limit = this.settingsLimit ?? 60;

        this.decumulator = (() => {
            return () => {
                if(this.limit < 1){
                    this.stopGame();
                    return
                }
                this.COUNT_DOWN.textContent = this.limit--;
            }
        })()
    }

    applySettings = (e) => {
        e.preventDefault();
        let [wordCount, settingsLimit, speed] = Array.from(this.$$('#settings-form select')).map(({value}) => +value);
        this.WORDS.length = wordCount;
        this.settingsLimit = settingsLimit;
        this.resetCountDown = settingsLimit;
        this.MARQUEE.scrollAmount = speed;
    }

    startTimer() {
        this.timeKeeper = setInterval(() => this.decumulator(),1000)
    }

    pauseTimer(){
        clearInterval(this.timeKeeper)
    }

    changeToPause = () => {
        if(this.$('#controls .fa-play')){
            this.$('#controls .fa-play').classList.replace('fa-play', 'fa-pause');
        }
    }

    changeToPlay = () => {
        if(this.$('#controls .fa-pause')){
            this.$('#controls .fa-pause').classList.replace('fa-pause', 'fa-play');
        }
    }

    showMarquee = () => {
        this.MARQUEE.classList.add('show');
    }

    hideMarquee = () => {
        this.MARQUEE.classList.remove('show');
   }

    set resetCountDown(value){
        this.limit = value;
        this.COUNT_DOWN.textContent = this.settingsLimit ?? this.limit;
    }

    stopGame(){
        this.resetCountDown = this.settingsLimit;
        this.pauseTimer();
        this.hideMarquee();
        this.changeToPlay();
        this.wordIndex = 0;
    }

    startGame(){
        this.changeToPause();
        this.showMarquee();
        this.startTimer();
    }

    pauseGame(){
        this.changeToPlay();
        this.hideMarquee();
        this.pauseTimer();
    }

    reStartOver(){
        this.resetCountDown = this.settingsLimit;
        this.changeToPause();
        this.showMarquee();
        this.wordIndex = 0;
    }


    action = (e) => {
        let buttonClicked = e.target.className;
        switch (buttonClicked) {
            case 'fas fa-play':
               this.startGame();
               break;
            case 'fas fa-pause':
               this.pauseGame()
               break;
            case 'fas fa-stop':
               this.stopGame();
               break;
            case 'fas fa-redo':
               this.reStartOver()
                break;
            default:
                break;
        }
    }

    nextWord = (e) => {
        e.preventDefault();
        if(this.wordIndex === this.WORDS.length - 1){
            alert('Game Over')
            this.stopGame();
            this.FORM['typing-area'].value = null;
            return
        }

        if(this.FORM['typing-area'].value === this.WORDS[this.wordIndex]){
            this.FORM['typing-area'].value = null;
            this.wordIndex++;
            this.MARQUEE.textContent = this.WORDS[this.wordIndex];
            return
        }

        this.FORM['typing-area'].style.animation = "error 0.25s linear 1 alternate";
        setTimeout(() => this.FORM['typing-area'].style.animation = null, 1000);
    }

  
}