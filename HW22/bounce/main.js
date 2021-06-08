// Завдання 1
// Необхідно реалізувати наступний функціонал як на відео ClickBox, а саме:
// потрібно щоб кожен раз при кліку на елемент йому рандомно задавалася ширина, висота та колір фону, а також позицію елемента
// використовуйте jQuery easing для плавності анімації
// ------------------------------------------------------------------------------------------

$(function(){



    

    let inW = $('body').innerWidth()
    let inH = $('body').innerHeight()
    
    
    // let h = `${Math.floor(Math.random() * Math.floor(inH - 100))}`;
    // let w = `${Math.floor(Math.random() * Math.floor(inW - 100))}`;
    
    
    let h = `${Math.floor(Math.random() * Math.floor(inH - 100))}`;
    let w = `${Math.floor(Math.random() * Math.floor(inW - 100))}`;

    let ballH = `${Math.floor(Math.random() * Math.floor(100))}`;
    let ballW = `${Math.floor(Math.random() * Math.floor(100))}`;

    let r = Math.floor(Math.random() * Math.floor(255));
    let g = Math.floor(Math.random() * Math.floor(255));
    let b = Math.floor(Math.random() * Math.floor(255));

   

    let c = 'rgb('+ r + ',' + g + "," + b +')';
    let bC = 'rgb('+ r + ',' + b + "," + g +')';

    
    // $('#show').click(function(){
    //     //     $('.box').fadeIn().animate({
    //     //         width: '200px',
    //     //         height: '300px'
    //     //     }, 1000).animate({
    //     //         opacity: '.5'
    //     //     }, 2000, function(){
    //     //         // $(this).hide()
    //     //         $(this).click(function(){
    //     //             console.log('work')
    //     //         })
    //     //     })
    //     // })
   

    $('.ball').css({

        width: ballH + 'px',
        height: ballW + 'px',
        // marginLeft: w + 'px',
        // marginTop: h + 'px',
        backgroundColor: c,
        borderColor: bC,
        

        
       

    })  




    $('.ball').click(function(){
        h = `${Math.floor(Math.random() * Math.floor(100))}`;
        w = `${Math.floor(Math.random() * Math.floor(100))}`;
        // h = `${Math.floor(Math.random() * Math.floor(inH - 100))}`;
        // w = `${Math.floor(Math.random() * Math.floor(inW - 100))}`;
        let r = Math.floor(Math.random() * Math.floor(255));
        let g = Math.floor(Math.random() * Math.floor(255));
        let b = Math.floor(Math.random() * Math.floor(255));
        let ballH = `${Math.floor(Math.random() * Math.floor(300))}`;
        let ballW = `${Math.floor(Math.random() * Math.floor(300))}`;
        
        let c = 'rgb('+ g + ',' + r + "," + b +')';
        console.log(c);
        $('.ball').css({
            backgroundColor: c,
            transition: 'background-color linear 1.5s'
        });

        $('.ball').animate({
            left: w + '%',
            top: h + '%',
            // marginLeft: w + 'px',
            // marginTop: h + 'px',
            height: ballH,
            width: ballW
            
        }, 1500);

        



    })

 


  

    // setInterval(() => {
    //     inW = $('body').innerWidth()
    //     inH = $('body').innerHeight()

    //     let h = `${Math.floor(Math.random() * Math.floor(inH - 100))}`;
    //     let w = `${Math.floor(Math.random() * Math.floor(inW - 100))}`;
    
    //     let r = Math.floor(Math.random() * Math.floor(255));
    //     let g = Math.floor(Math.random() * Math.floor(255));
    //     let b = Math.floor(Math.random() * Math.floor(255));
    
    //     // let ballH = Math.floor(Math.random() * Math.floor(150));
    //     // let ballW = Math.floor(Math.random() * Math.floor(150));
    
    //     let c = 'rgb('+ r + ',' + g + "," + b +')';
    //     let ballBg = 'rgb('+ b + ',' + g + "," + r +')';
    //     let bC = 'rgb('+ r + ',' + b + "," + g +')';
    //     let shadow = 'rgb('+ b + ',' + r + "," + g +')';
    

    // $('.ball').css({
        
    //     marginLeft: w + 'px',
    //     marginTop: h + 'px',
    //     backgroundColor: ballBg,
    //     borderColor: bC,boxShadow: 10+'px' + ' ' + 5 + 'px' + ' ' + 100 + 'px' + ' ' + 20 + 'px' + ' ' + shadow
        
       

    // })
        
        
    //     // $('body').css('background-color', c);
    //     $('body').css('background-color', 'black');
    // }, 1000);

   

    // console.log(inW, inH)
    

})