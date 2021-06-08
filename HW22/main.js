// Завдання 1
// Необхідно реалізувати наступний функціонал як на відео ClickBox, а саме:
// потрібно щоб кожен раз при кліку на елемент йому рандомно задавалася ширина, висота та колір фону, а також позицію елемента
// використовуйте jQuery easing для плавності анімації
// ------------------------------------------------------------------------------------------




// Завдання 2
// Необхідно реалізувати наступний функціонал як на відео DiscoBall, а саме:
// потрібно при загрузці сторінки елементу йому рандомно задавалася ширина, висота, колір фону, колір бордера та тінь, а також позицію елемента
// використовуйте jQuery easing для плавності анімації
// використовуйте SetInterval для того щоб анімацію зробити безкінеченою


$(function(){


    let inW = $('body').innerWidth()
    let inH = $('body').innerHeight()
    
    
    let h = `${Math.floor(Math.random() * Math.floor(inH - 100))}`;
    let w = `${Math.floor(Math.random() * Math.floor(inW - 100))}`;

    let ballH = `${Math.floor(Math.random() * Math.floor(100))}`;
    let ballW = `${Math.floor(Math.random() * Math.floor(100))}`;

    let r = Math.floor(Math.random() * Math.floor(255));
    let g = Math.floor(Math.random() * Math.floor(255));
    let b = Math.floor(Math.random() * Math.floor(255));

   

    let c = 'rgb('+ r + ',' + g + "," + b +')';
    let bC = 'rgb('+ r + ',' + b + "," + g +')';

    

   

    $('.ball').css({

        // width: ballH + 'px',
        // height: ballW + 'px',
        marginLeft: w + 'px',
        marginTop: h + 'px',
        backgroundColor: c,
        borderColor: bC,
        

        
       

    })


  

    setInterval(() => {
        inW = $('body').innerWidth()
        inH = $('body').innerHeight()

        let h = `${Math.floor(Math.random() * Math.floor(inH - 100))}`;
        let w = `${Math.floor(Math.random() * Math.floor(inW - 100))}`;
    
        let r = Math.floor(Math.random() * Math.floor(255));
        let g = Math.floor(Math.random() * Math.floor(255));
        let b = Math.floor(Math.random() * Math.floor(255));
    
        // let ballH = Math.floor(Math.random() * Math.floor(150));
        // let ballW = Math.floor(Math.random() * Math.floor(150));
    
        let c = 'rgb('+ r + ',' + g + "," + b +')';
        let ballBg = 'rgb('+ b + ',' + g + "," + r +')';
        let bC = 'rgb('+ r + ',' + b + "," + g +')';
        let shadow = 'rgb('+ b + ',' + r + "," + g +')';
    

    $('.ball').css({
        
        marginLeft: w + 'px',
        marginTop: h + 'px',
        backgroundColor: ballBg,
        borderColor: bC,boxShadow: 10+'px' + ' ' + 5 + 'px' + ' ' + 100 + 'px' + ' ' + 20 + 'px' + ' ' + shadow
        
       

    })
        
        
        // $('body').css('background-color', c);
        $('body').css('background-color', 'black');
    }, 1000);

   

    console.log(inW, inH)
    

})