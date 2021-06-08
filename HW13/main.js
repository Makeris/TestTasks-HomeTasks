
let getId = x => document.getElementById(x);
let getSel = y => document.querySelector(y); 



getSel('.colors').onclick = function() {
    getSel('.color_selector').style.visibility = 'visible';
    getSel('.images_selector').style.visibility = 'hidden';
    
}
getSel('.images').onclick = function() {
    getSel('.color_selector').style.visibility = 'hidden';
    getSel('.images_selector').style.visibility = 'visible';
}




getSel('.selector_item_red').onclick = function() {
    document.body.style.backgroundColor = 'red';
    document.body.style.backgroundImage = 'none';
}
getSel('.selector_item_green').onclick = function() {
    document.body.style.backgroundColor = 'lime';
    document.body.style.backgroundImage = 'none';
}
getSel('.selector_item_blue').onclick = function() {
    document.body.style.backgroundColor = '#36DEE7';
    document.body.style.backgroundImage = 'none';
}
getSel('.selector_item_yellow').onclick = function() {
    document.body.style.backgroundColor = '#FFDD00';
    document.body.style.backgroundImage = 'none';
}
getSel('.selector_item_brown').onclick = function() {
    document.body.style.backgroundColor = '#B56D0E';
    document.body.style.backgroundImage = 'none';
}
getSel('.selector_item_purple').onclick = function() {
    document.body.style.backgroundColor = '#B520AE';
    document.body.style.backgroundImage = 'none';
}
getSel('.selector_item_orange').onclick = function() {
    document.body.style.backgroundColor = '#FF8800';
    document.body.style.backgroundImage = 'none';
}
getSel('.selector_item_white').onclick = function() {
    document.body.style.backgroundColor = 'white';
    document.body.style.backgroundImage = 'none';
}
getSel('.selector_item_gray').onclick = function() {
    document.body.style.backgroundColor = '#C7C7C7';
    document.body.style.backgroundImage = 'none';
}



// ///////////////////////////////////////////////////


getSel('.images_item_1').onclick = function() {
    document.body.style.backgroundImage = 'url(assets/images/1.jpg)';
}
getSel('.images_item_2').onclick = function() {
    document.body.style.backgroundImage = 'url(assets/images/2.jpg)';
}
getSel('.images_item_3').onclick = function() {
    document.body.style.backgroundImage = 'url(assets/images/3.jpg)';
}
getSel('.images_item_4').onclick = function() {
    document.body.style.backgroundImage = 'url(assets/images/4.jpg)';
}
getSel('.images_item_5').onclick = function() {
    document.body.style.backgroundImage = 'url(assets/images/5.jpg)';
}
getSel('.images_item_6').onclick = function() {
    document.body.style.backgroundImage = 'url(assets/images/6.jpg)';
}
getSel('.images_item_7').onclick = function() {
    document.body.style.backgroundImage = 'url(assets/images/7.jpg)';
}
getSel('.images_item_8').onclick = function() {
    document.body.style.backgroundImage = 'url(assets/images/8.jpg)';
}
getSel('.images_item_9').onclick = function() {
    document.body.style.backgroundImage = 'url(assets/images/9.jpg)';
}
