
let getSel = (x) => document.querySelector(x);

getSel('.box').style.border = '2px solid gray';

let percent = 0;

let progressInterval = setInterval(progressCount,10);

function progressCount(){
    percent++
    getSel('.current').innerHTML = percent + `<span>%</span>`;
    getSel('svg').children[1].style.strokeDashoffset = `calc(440 - (440*${percent}/100))`;
    if(percent == 100) {
        clearInterval(progressInterval);
        getSel('.box').style.border = '2px solid lime';
        getSel('h2').style.color = 'lime';
        getSel('.text').style.color = 'lime';      
    }
}