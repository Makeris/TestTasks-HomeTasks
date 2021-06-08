$(function(){
    $('.puzzle_item').draggable({
        containment: '.main',
        // containment: [0,0,600,200]
        // axis: 'x'
        grid: [100,67] // x,y
        // cursor: 'move'
        // handle: '#move'
        // revert: isRevert,
        // revertDuration: 2000 
        // start: function(event, ui){
        //     // console.log(event);
        //     // console.log(ui);
        //     $('body').css('background-color', 'gray')
        // },
        // stop: function(event, ui){
        //     $('body').css('background-color', '#fff')
        // }
    });
    $('.puzzle_item').droppable();
});