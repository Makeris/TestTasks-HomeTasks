// console.log('Hello')
let getSel = x => document.querySelector(x);
let getAll = y => document.querySelectorAll(y);
let getALl = y => document.querySelectorAll(y);


// Завдання 1
// Необхідно реалізувати наступний функціонал як на відео color, а саме:
// при першому наведенні мишки на блок колір фону має ставати червоний
// при відведенні мишки блок має ставати знову фіолетовий
// при другому наведенні – блок стає жовтим
// при третьому – зеленим
// при наступному наведенні все починається спочатку: червоний, жовтий, зелений
// так має відбуватися безкінечно по колу
// ------------------------------------------------------------------------------------------




getSel('.square').onmouseout = function(){
    this.style.backgroundColor = '';
}

let a = ['red','yellow','lime'];
let index = 0;
getSel('.square').onmouseover = function(){
        
        this.style.backgroundColor = a[index];
  
        index++
        if(index === 3) {
            index = 0;
        }
    }




// Завдання 2
// Необхідно реалізувати наступний функціонал як на відео secret, а саме:
// по замовчуванню блок має певний стиль і наступний текст: “У мене є секрет!”
// при наведенні на блок його стиль змінюєть і текст стає наступним: “Хочеш знати який”
// при натисканні і утриманні клавіші мишки знову по блоку стиль змінюється і текст стає наступним: “А я тобі не скажу”
// при відпусканні клавіші мишки стиль і текст знову стає “Хочеш знати який”
// при відведенні мишки стиль стає як базовий і текст “У мене є секрет!”
// ------------------------------------------------------------------------------------------


getSel('.secret').onmouseover = function(){
    this.style.backgroundColor = 'Orange';
    getSel('.block_text').innerText = 'Pss..Do you want a secret? :)';
    getSel('.block_text').style.color = 'lime';
    
}

getSel('.secret').onmouseout = function(){
    this.style.backgroundColor = '';
    getSel('.block_text').innerText = 'I have a secret ^)';
    getSel('.block_text').style.color = 'yellow';
}
getSel('.secret').onmouseup = function(){
   
    this.style.backgroundColor = 'Orange';
    getSel('.block_text').innerText = 'Pss..Do you want a secret? :)';
    getSel('.block_text').style.color = 'lime';
}

getSel('.secret').onmousedown = function(){
    this.style.backgroundColor = 'black';
    // this.style.boderRadius = '10px';
    // this.style.boder = '2px solid red'; Чому не працюють??

    getSel('.block_text').innerText = "But, I don't tell you this :( ";
    getSel('.block_text').style.color = 'white';
}

















// Завдання 3
// Необхідно реалізувати наступний функціонал як на відео images, а саме:
// на сторінці знаходяться три пустих блоки div. 
// при кліку на блок виводить функція prompt() в яку ми вводи url адресу зображення
// це зображення стає фоном для цього конкретного блоку 
// ------------------------------------------------------------------------------------------


getSel('.main_item').onclick = function(){
    let url = prompt('Enter the url');
    this.style.backgroundImage = `url(${url})`;
}
getSel('.second').onclick = function(){
    let url = prompt('Enter the url');
    this.style.backgroundImage = `url(${url})`;
}
getSel('.third').onclick = function(){
    let url = prompt('Enter the url');
    this.style.backgroundImage = `url(${url})`;
}



// getALl('.main_item').style.backgroundColor = 'red';
// console.log(getALl('.main_item'));


















// Завдання 4
// Необхідно реалізувати наступний функціонал як на відео text, а саме:
// на сторінці знаходиться список ol з 6ма кольорами, написаними англійською мовою.
// потрібно щоб в при кліку на поточний пункт замалювався тим кольором, який в ньому записаний.
// постарайтесь зробити даний функціонал використовуючи тільки одну функцію




getSel('.color_red').onclick = function(){
    this.style.color = 'red';
}
getSel('.color_green').onclick = function(){
    this.style.color = 'green';
}
getSel('.color_blue').onclick = function(){
    this.style.color = 'blue';
}
getSel('.color_yellow').onclick = function(){
    this.style.color = 'yellow';
}
getSel('.color_orange').onclick = function(){
    this.style.color = 'orange';
}
getSel('.color_gray').onclick = function(){
    this.style.color = 'gray';
}