const words = ['fola','salma','wahab','faddal','aziz','farida','bengal','zainab','khadija','sulaiman'];


document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('section button');
    const timer = document.querySelector('#controls p');
    const controls = document.querySelector('#controls');
    const marquee = document.querySelector('article marquee');

    controls.addEventListener('click',function(e){
        let buttonClicked = e.target.className;
        switch (buttonClicked) {
            case 'fas fa-play':
                e.target.className = 'fas fa-pause';
                marquee.style.visibility = "visible";
                startTimer();
                break;
            case 'fas fa-pause':
                e.target.className = 'fas fa-play';
                marquee.style.visibility = "hidden";
                pauseTimer();
                break;
            case 'fas fa-stop':
                if(this.querySelector('.fa-pause')){
                    this.querySelector('.fa-pause').className = 'fas fa-play';
                    stopTimer();
                    marquee.style.visibility = "hidden";
                }
                break;
            case 'fas fa-redo':
                alert("you hit the re-start button")
                break;
            default:
                break;
        }
    })

    let myTimer;


    let decumulator = ((limit = 30) => {
        return function(){
            timer.textContent = `${limit--}`;
        }  
    })()

    function startTimer(){
        myTimer = setInterval(decumulator,1000);
    }

    function pauseTimer(){
       clearInterval(myTimer);
    }

    function resetLimit(){
        decumulator = ((limit = 30) => {
            return function(){
                timer.textContent = `${limit--}`;
            }  
        })()
        timer.textContent = '30';
    }

    function stopTimer(){
        pauseTimer();
        resetLimit();
    }


    const form = document.querySelector('form');
    let next = 0;
    form.addEventListener('submit',function(e){
        e.preventDefault();
       

        if(this['typing-area'].value === words[next]){
            this['typing-area'].value = null;
            marquee.textContent = words[++next];
        }

       
        // alert("yhh it works")
    })

})