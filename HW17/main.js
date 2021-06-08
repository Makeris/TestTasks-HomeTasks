// Завдання
// Необхідно реалізувати наступний функціонал як на відео, а саме:
// повернути поточну дату в форматі: день.місяць.рік
// повернути поточний час в форматі: година:хвилина:секунда
// розробити секундомір в якого є можливість запуску, паузи, запам’ятовування поточного часу та скидування часу(мілісекунди не обов’язково реалізовувати)
// розробити таймер в якого є можливість визначення часового проміжку, а також запуск, пауза ти скидування часу


let getSel = (x) => document.querySelector(x);


let a = new Date();
// console.log(a);




function dateTimer() {
    let d = new Date();

    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear()

    if(month < 10 ) {
        month = '0' + month;
    }
    if(day < 10) {
        day = '0' + day;
    }
    


    getSel('.date_item_day').innerText = day;
    getSel('.date_item_month').innerText = month;
    getSel('.date_item_year').innerText = year;


    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    if(hours < 10 ) {
        hours = '0' + hours;
        
    }
    if(minutes < 10 ) {
        minutes = '0' + minutes;
        
    }
    if(seconds < 10 ) {
        seconds = '0' + seconds;
        
    }


    getSel('.time_item_hours').innerText = hours;
    getSel('.time_item_minutes').innerText = minutes;
    getSel('.time_item_seconds').innerText = seconds;



}

setInterval(dateTimer,100);

// DATE


///////////////////////////////////////////////////////////////////////////
















// SECUNDOMIR

let h = +getSel('.time_counter_item_hours').innerText;
let m = +getSel('.time_counter_item_minutes').innerText;
let s = +getSel('.time_counter_item_seconds').innerText;
let ms = +getSel('.time_counter_item_miliseconds').innerText;
let intervalTimer;



getSel('.stop').disabled = true;

getSel('.start').addEventListener('click', function(){ //// КНОПКА ЗАПУСКУ ТАЙМЕРА
    // startTimer();
    timer();
    getSel('.start').disabled = true;
    if(getSel('.start').disabled) {
        getSel('.start').style.outline = '1px solid white';
        getSel('.stop').style.outline = 'none';
    }
    getSel('.stop').disabled = false;

    console.log('start');
    intervalTimer = setInterval(timer,10);
    
    
});

getSel('.loop').addEventListener('click', function(){ ///// ЗБЕРIГАННЯ РЕЗУЛЬТАТУ
    
    loopResult();
});

getSel('.stop').addEventListener('click', function(){ //// КНОПКА ПРИЗУПИНЕННЯ
    clearInterval(intervalTimer);
    getSel('.stop').disabled = true;
    getSel('.start').disabled = false;
    if(getSel('.stop').disabled) {
        getSel('.stop').style.outline = '1px solid white';
        getSel('.start').style.outline = 'none';

    }
   
});

getSel('.reset').addEventListener('click', function(){ //// КНОПКА ОБНУЛЯЦIЙ
    clearInterval(intervalTimer);
    resetTimer();
});



function resetTimer(){ //// ОБНУЛЯЕ ТАЙМЕР Ф-ция

h = 0;
m = 0;
s = 0;
ms = 0;


getSel('.time_counter_item_miliseconds').innerText = ms;
getSel('.time_counter_item_seconds').innerText = s;
getSel('.time_counter_item_minutes').innerText = m;
getSel('.time_counter_item_hours').innerText = h;
getSel('.zero_miliseconds').innerText = '00';
getSel('.stop').style.outline = 'none';
getSel('.start').style.outline = 'none';

};


function timer(){  // ФУНКЦИЯ НАГРОМАЖДЕННЯ ЯКА СПРАЦЬОВУЕ БАГАТО РАЗ  ПРИ "START

     
   
    getSel('.time_counter_item_miliseconds').innerText = ms;
    getSel('.time_counter_item_seconds').innerText = s;
    getSel('.time_counter_item_minutes').innerText = m;
    getSel('.time_counter_item_hours').innerText = h;

    
   if(getSel('.stop').disabled == false){ ////// НАКОПИЧЕННЯ ЗАЛЕЖИТЬ ВIД ТОГО ЧИ ВКЛЮЧЕНА КНОПКА "STOP"
        ms = ms + 10;
        if(ms > 99) {
            getSel('.zero_miliseconds').innerText = '';
        } else {
            getSel('.zero_miliseconds').innerText = '0';
        }
        if(ms == 1000) {
            s++
            ms = 0;
            if(s > 9) {
                getSel('.zero_seconds').innerText = '';
            } else {
                getSel('.zero_seconds').innerText = '0';
            }
            if(s == 60) {
                s = 0;
                m++
                if(m > 9) {
                    getSel('.zero_minutes').innerText = '';
                } else {
                    getSel('.zero_minutes').innerText = '0';
                }
                if(m == 60) {
                    m = 0;
                    h++
                    if(h > 9) {
                        getSel('.zero_hours').innerText = '';
                    } else {
                        getSel('.zero_hours').innerText = '0';
                    }
                    if(h == 24) {
                        h = 0;
                    }
                }
            }
        }
   }


  };







function loopResult(){ //// ЗБЕРЕЖЕННЯ РЕЗУЛЬТАТУ Ф-я
    let zeroH = getSel('.zero_hours').innerText;
    let zeroM = getSel('.zero_minutes').innerText;
    let zeroS = getSel('.zero_seconds').innerText;
    let zeroMs = getSel('.zero_miliseconds').innerText;
    let countH = getSel('.time_counter_item_hours').innerText;
    let countM = getSel('.time_counter_item_minutes').innerText;
    let countS = getSel('.time_counter_item_seconds').innerText;
    let countMs = getSel('.time_counter_item_miliseconds').innerText;
    let result = zeroH + countH + ':' + zeroM + countM + ':'+ zeroS + countS + ':' + zeroMs + countMs;

    getSel('.result_area').innerHTML +=  `<p>${result}</p>`;
    
};



/////////////////////////////////////////////////////////////////////










// TIMER REVERSE START

let reverseTimerInterval;
let reverseTimerOn = false;
let IsTimerStart = false;

let min = 0;
let sec = 0;

let countOf = +getSel('.count_number').innerText;
min = countOf;
sec = 60;


getSel('.reverse_timer_start').disabled = true;


getSel('.reverse_timer_start').addEventListener('click', function(){
    getSel('.reverse_timer_start').style.outline = '1px solid white';'none';
    getSel('.reverse_timer_stop').style.outline = 'none';
    clearInterval(reverseTimerInterval);

    if(IsTimerStart) {
        getSel('.second_num').innerText = min;
        getSel('.fourth_num').innerText = sec;
    } else if (IsTimerStart == false) {
        getSel('.second_num').innerText = countOf - 1;
        getSel('.fourth_num').innerText = 60;
    }

    reverseTimerOn = true;
        if(reverseTimerOn = true) {
            
            reverseTimerInterval = setInterval(reverseTimer,1000);
        }
        
        getSel('.reverse_timer_stop').disabled = false;
        
        IsTimerStart = true;
    if (getSel('.second_num').innerText < 10) {
        getSel('.first_num').style.display = 'block';
    } else {
        getSel('.first_num').style.display = 'none';
    }
    if (getSel('.fourth_num').innerText < 10) {
        getSel('.third_num').style.display = 'block';
    } else {
        getSel('.third_num').style.display = 'none';
    }    
});

getSel('.reverse_timer_stop').disabled = true;
getSel('.reverse_timer_stop').addEventListener('click', function(){
    
    reverseTimerOn = true;
    clearInterval(reverseTimerInterval);
    getSel('.reverse_timer_start').disabled = false;
    getSel('.reverse_timer_start').style.outline = 'none';
    getSel('.reverse_timer_stop').style.outline = '1px solid white';
    
    
});
    


function reverseTimer(){

    
    min = +getSel('.second_num').innerText;
    sec = +getSel('.fourth_num').innerText;

    if (min < 10) {
        getSel('.first_num').style.display = 'block';
    } else {
        getSel('.first_num').style.display = 'none';
    }
    if (sec < 10) {
        getSel('.third_num').style.display = 'block';
    } else {
        getSel('.third_num').style.display = 'none';
    }
    
   
    if(min <= 0 && sec <= 0){
        
        IsTimerStart = false;
        clearInterval(reverseTimerInterval); 
    } else {
        if(reverseTimerOn == true) {
            sec--
            getSel('.fourth_num').innerText = sec;
            getSel('.second_num').innerText = min;
            if(sec == 0) {
                if(min != 0){
                    sec = 60;
                    getSel('.fourth_num').innerText = sec;
                    min --
                    getSel('.second_num').innerText = min;
                } else {
                    IsTimerStart = false;
                    getSel('.reverse_timer_start').disabled = false;
                    getSel('.reverse_timer_stop').disabled = true;
                    getSel('.reverse_timer_start').style.outline = 'none';
                    getSel('.reverse_timer_stop').style.outline = 'none';
                    clearInterval(reverseTimerInterval);
                }
                
            }
        }
    }

}







getSel('.count_increase').addEventListener('click', function(){ //// КНОПКА "+" ДОДАЕ ХВИЛИНИ
   
    countOf++
    if(countOf > 9) {
        getSel('.zero_count').style.display = 'none';
    } else {
        getSel('.zero_count').style.display = 'block';
        
    }
    
    getSel('.count_number').innerText = countOf;

    if(getSel('.count_number').innerText > 0) {
        getSel('.reverse_timer_start').disabled = false;
    }



   
});
getSel('.count_decrease').addEventListener('click', function(){ //// КНОПКА "-" ЗАБИРАЕ ХВИЛИНИ
    


    if(countOf > 0) {

        countOf--
    }
    if(countOf > 9) {
        getSel('.zero_count').style.display = 'none';
    } else {
        getSel('.zero_count').style.display = 'block';
        
    }
    
    getSel('.count_number').innerText = countOf;
    if(getSel('.count_number').innerText > 0) {
        getSel('.reverse_timer_start').disabled = false;
    } else {
        getSel('.reverse_timer_start').disabled = true;
    }
    
});











getSel('.reverse_timer_reset').addEventListener('click', function(){ ////// ОБНУЛЯЦIЯ ТАЙМЕРА
    IsTimerStart == false;
    getSel('.second_num').innerText = 0;
    getSel('.fourth_num').innerText = 0;
    getSel('.third_num').style.display = 'block';
    getSel('.first_num').style.display = 'block';
    getSel('.reverse_timer_start').style.outline = 'none';
    getSel('.reverse_timer_stop').style.outline = 'none';
});














/////////////// TIMER REVERSE END




