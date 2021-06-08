console.log('Keyboard');

let getSel = x => document.querySelector(x);





window.addEventListener('keydown', function (event) {
    event.preventDefault();

    if (event.keyCode == 32) {
        getSel('.space_button').style.backgroundColor = '#808080';

        getSel('.text_area').innerHTML += '&nbsp;';

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 32) {
        getSel('.space_button').style.backgroundColor = 'black';
        // console.log('pressed');
    }
})





// /////////////////////////////////////
window.addEventListener('keydown', function (event) {
    if (event.code == "Backquote") {
        getSel('.keys_row1_button_a').style.backgroundColor = '#808080';

        getSel('.text_area').innerText += '`';
    }
})
window.addEventListener('keyup', function (event) {
    if (event.code == "Backquote") {
        getSel('.keys_row1_button_a').style.backgroundColor = 'black';

    }
})







// /////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 48) {
        getSel('.keys_row1_button_0').style.backgroundColor = '#808080';
        // console.log('pressed');
        getSel('.text_area').innerText += '0';
    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 48) {
        getSel('.keys_row1_button_0').style.backgroundColor = 'black';
        // console.log('pressed');
    }
})




// ////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 49) {
        getSel('.keys_row1_button_1').style.backgroundColor = '#808080';

        getSel('.text_area').innerText += '1';
    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 49) {
        getSel('.keys_row1_button_1').style.backgroundColor = 'black';

    }
})




// ////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 50) {
        getSel('.keys_row1_button_2').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += '2';

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 50) {
        getSel('.keys_row1_button_2').style.backgroundColor = 'black';

    }
})




// ////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 51) {
        getSel('.keys_row1_button_3').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += '3';
    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 51) {
        getSel('.keys_row1_button_3').style.backgroundColor = 'black';

    }
})




// ////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 52) {
        getSel('.keys_row1_button_4').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += '4';
    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 52) {
        getSel('.keys_row1_button_4').style.backgroundColor = 'black';

    }
})




// ////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 53) {
        getSel('.keys_row1_button_5').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += '5';
    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 53) {
        getSel('.keys_row1_button_5').style.backgroundColor = 'black';

    }
})




// ////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 54) {
        getSel('.keys_row1_button_6').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += '6';
    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 54) {
        getSel('.keys_row1_button_6').style.backgroundColor = 'black';

    }
})




// ////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 55) {
        getSel('.keys_row1_button_7').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += '7';
    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 55) {
        getSel('.keys_row1_button_7').style.backgroundColor = 'black';

    }
})




// ////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 56) {
        getSel('.keys_row1_button_8').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += '8';
    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 56) {
        getSel('.keys_row1_button_8').style.backgroundColor = 'black';

    }
})




// ////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 57) {
        getSel('.keys_row1_button_9').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += '9';
    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 57) {
        getSel('.keys_row1_button_9').style.backgroundColor = 'black';

    }
})




// //////////////////











window.addEventListener('keydown', function (event) {
    if (event.code == "Minus") {
        getSel('.keys_row1_button_45').style.backgroundColor = '#808080';

        getSel('.text_area').innerText += '-';
    }

})
window.addEventListener('keyup', function (event) {
    if (event.code == "Minus") {
        getSel('.keys_row1_button_45').style.backgroundColor = 'black';

    }
})








// //////////////////

window.addEventListener('keydown', function (event) {
    if (event.code == "Equal") {
        getSel('.keys_row1_button_61').style.backgroundColor = '#808080';
        //////////////////////////////////////////////////////////   // 
        //  console.log('a')
        getSel('.text_area').innerText += '=';
    }
})
window.addEventListener('keyup', function (event) {
    if (event.code == "Equal") {
        getSel('.keys_row1_button_61').style.backgroundColor = 'black';

    }
})


// /
// /
// /
// /                            /////////////////////////   

// //



// //////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 8) {
        getSel('.keys_row1_button_Backspace').style.backgroundColor = '#808080';

        let a = getSel('.text_area').innerText;


        getSel('.text_area').innerText = a.substring(0, a.length - 1);

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 8) {
        getSel('.keys_row1_button_Backspace').style.backgroundColor = 'black';

    }
})







///////////////////////////////////////////////////////////////////////////////////////////////






// //////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 9) {
     
        getSel('.keys_row2_button_Tab').style.backgroundColor = '#808080';
        getSel('.text_area').innerHTML += "&emsp;";
    }

    
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 9) {
        getSel('.keys_row2_button_Tab').style.backgroundColor = 'black';

    }
})


// /////////////////////////////////






window.addEventListener('keydown', function (event) {
    if (event.keyCode == 81) {
        getSel('.keys_row2_button_q').style.backgroundColor = '#808080';
        // if (event.shiftKey) {
        //     getSel('.text_area').innerText += 'Q';
        // } else {
        //     getSel('.text_area').innerText += 'q';
        // }

        getSel('.text_area').innerText += event.key;





    }






  
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 81) {
        getSel('.keys_row2_button_q').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 87) {
        getSel('.keys_row2_button_w').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 87) {
        getSel('.keys_row2_button_w').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 69) {
        getSel('.keys_row2_button_e').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 69) {
        getSel('.keys_row2_button_e').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 82) {
        getSel('.keys_row2_button_r').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 82) {
        getSel('.keys_row2_button_r').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 84) {
        getSel('.keys_row2_button_t').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 84) {
        getSel('.keys_row2_button_t').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 89) {
        getSel('.keys_row2_button_y').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 89) {
        getSel('.keys_row2_button_y').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 85) {
        getSel('.keys_row2_button_u').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 85) {
        getSel('.keys_row2_button_u').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 73) {
        getSel('.keys_row2_button_i').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 73) {
        getSel('.keys_row2_button_i').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 79) {
        getSel('.keys_row2_button_o').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 79) {
        getSel('.keys_row2_button_o').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 80) {
        getSel('.keys_row2_button_p').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 80) {
        getSel('.keys_row2_button_p').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 219) {
        getSel('.keys_row2_button_219').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += '[';

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 219) {
        getSel('.keys_row2_button_219').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 221) {
        getSel('.keys_row2_button_221').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += ']';

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 221) {
        getSel('.keys_row2_button_221').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 220) {
        // let bb = '/';
        getSel('.keys_row2_button_220').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += '\\';

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 220) {
        getSel('.keys_row2_button_220').style.backgroundColor = 'black';

    }
})




















///////////////////////////////////////////////////////////////////////////////////////////////////




let toggle = [ 'black','#808080'];
let check = 0;

window.addEventListener('keydown', function (event) {
    
    
    if (event.keyCode == 20) {
        check++

        if(check == 2) {
            check = 0;
        }

        getSel('.keys_row3_button_Capslock').style.backgroundColor = toggle[check];
            
    }
})



///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 65) {
        getSel('.keys_row3_button_a').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 65) {
        getSel('.keys_row3_button_a').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 83) {
        getSel('.keys_row3_button_s').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 83) {
        getSel('.keys_row3_button_s').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 68) {
        getSel('.keys_row3_button_d').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 68) {
        getSel('.keys_row3_button_d').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 70) {
        getSel('.keys_row3_button_f').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 70) {
        getSel('.keys_row3_button_f').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 71) {
        getSel('.keys_row3_button_g').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 71) {
        getSel('.keys_row3_button_g').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 72) {
        getSel('.keys_row3_button_h').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 72) {
        getSel('.keys_row3_button_h').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 74) {
        getSel('.keys_row3_button_j').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 74) {
        getSel('.keys_row3_button_j').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 75) {
        getSel('.keys_row3_button_k').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 75) {
        getSel('.keys_row3_button_k').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 76) {
        getSel('.keys_row3_button_l').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 76) {
        getSel('.keys_row3_button_l').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 186) {
        getSel('.keys_row3_button_186').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += ';';

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 186) {
        getSel('.keys_row3_button_186').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 222) {
        getSel('.keys_row3_button_222').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += "'";

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 222) {
        getSel('.keys_row3_button_222').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        getSel('.keys_row3_button_Enter').style.backgroundColor = '#808080';
        getSel('.text_area').innerHTML += '<br>';
        console.log(getSel('.text_area').innerHTML);

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 13) {
        getSel('.keys_row3_button_Enter').style.backgroundColor = 'black';

    }
})



// //// HZ









// //////////////////////////////////////////////////////////////////////////////



///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT){
        getSel('.keys_row4_button_LeftShift').style.backgroundColor = '#808080';
    } else if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT){
        getSel('.keys_row4_button_Right_Shift').style.backgroundColor = '#808080';
    }
})
window.addEventListener('keyup', function (event) {
    if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT){
        getSel('.keys_row4_button_LeftShift').style.backgroundColor = 'black';
    } else if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT){
        getSel('.keys_row4_button_Right_Shift').style.backgroundColor = 'black';
    }


})


///// HZ



///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 90) {
        getSel('.keys_row4_button_z').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 90) {
        getSel('.keys_row4_button_z').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 88) {
        getSel('.keys_row4_button_x').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 88) {
        getSel('.keys_row4_button_x').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 67) {
        getSel('.keys_row4_button_c').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;


    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 67) {
        getSel('.keys_row4_button_c').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 86) {
        getSel('.keys_row4_button_v').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;


    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 86) {
        getSel('.keys_row4_button_v').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 66) {
        getSel('.keys_row4_button_b').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 66) {
        getSel('.keys_row4_button_b').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 78) {
        getSel('.keys_row4_button_n').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 78) {
        getSel('.keys_row4_button_n').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 77) {
        getSel('.keys_row4_button_m').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += event.key;
        // getSel('.text_area').innerText += 'm';
        console.log(event.keyCode);

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 77) {
        getSel('.keys_row4_button_m').style.backgroundColor = 'black';

    }
})









///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 188) {
        getSel('.keys_row4_button_188').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += ',';

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 188) {
        getSel('.keys_row4_button_188').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 190) {
        getSel('.keys_row4_button_190').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += '.';

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 190) {
        getSel('.keys_row4_button_190').style.backgroundColor = 'black';

    }
})






///////////////////////
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 191) {
        getSel('.keys_row4_button_191').style.backgroundColor = '#808080';
        getSel('.text_area').innerText += '/';

    }
})
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 191) {
        getSel('.keys_row4_button_191').style.backgroundColor = 'black';

    }
})


window.addEventListener('keydown', function (event) {

    if (event.keyCode == '161') {
        getSel('.keys_row4_button_Right_Shift').style.backgroundColor = '#808080'; 
        console.log('ffff'); 

    }
    

})
window.addEventListener('keyup', function (event) {
    if (event.code == 'RShiftKey') {
        getSel('.keys_row4_button_Right_Shift').style.backgroundColor = 'black';

    }
})


document.addEventListener("keydown", function(event) {
    console.log(event.which);
})


