let getSel = (x) => document.querySelector(x);


let percent = 0;
let count = 2;
let checker = false;
getSel('.phone_item').style.height = percent + '%'; 
let intervalTimer = setInterval(timer,10);
function timer() {
    getSel('.phone_title').innerText = count;


    if(count > 0 ) {
        if(checker == false) {
            percent++
            getSel('.phone_item').style.height = percent + '%';
            
            if(percent == 100) {
                count--
                checker = true
                getSel('.phone_item').style.borderBottomRightRadius = '8px';
                getSel('.phone_item').style.borderBottomLeftRadius = '8px';
            }
        } 
        if(checker == true) {
            
            percent--
            getSel('.phone_item').style.height = percent + '%';
            getSel('.phone_item').style.borderBottomRightRadius = '0px';
                getSel('.phone_item').style.borderBottomLeftRadius = '0px';
            
            
            if(percent == 0) {
                
                checker = false;
                count--
            } 
        }
    } else if( count == 0) {
        console.log('count is 0');
        clearInterval(intervalTimer);
    }

}


