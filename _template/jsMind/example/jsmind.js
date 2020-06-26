$(document).ready(function() {
    
    var mind = {}
    var $mind = {}
    var PI = 3.14;
    var e = event || window.event; 
    
    // WARNING: 利用 js getBoundingClientRect() 方法貌似有问题;
    let navXY = $('.jsmind-container').position();

    $('.jsmind-nav').css({
        'left': navXY.left+'px',
        'top': navXY.top+'px'
    });
    
    init_tips();
    
    $mind.meun = $('#js-meun');
    
    $mind.meun.on('click', function() {
        let list = $mind.meun.parent().next();
        let isList =  list.hasClass('jsmind-list');
        if(isList) {
            list.slideToggle();
            
        }
        
    });

    $('#jsmind-zoom-in, #jsmind-zoom-out').on('mouseenter', function() {
        $('[class^=div-jsmind-]').removeClass('list-hover');
    });
    
    

    mindListTagAll = ['edit', 'style', 'theme', 'other', 'save'];
    
    for(let i = 0; i < mindListTagAll.length; i++) {

        listHover(mindListTagAll[i]);
    
    }

    
    function listHover(_list) {
        
        let mindListTag = document.querySelector('#jsmind-'+_list);
        let mindListDiv = document.querySelector('.div-jsmind-'+_list);
        let mindList = mindListDiv.querySelectorAll('.circle-list');
        
        let mindTimer = null;
        
        let mindSetTimer = function() {
            $(mindListDiv).removeClass('list-hover');
        }
        
        $(mindList).hover(
            function() {
                clearTimeout(mindTimer);
            },
            function() {
                mindTimer = setTimeout(mindSetTimer,2000);
            }
        );
                
        $(mindListTag).hover(
            function(){
                
                clearTimeout(mindTimer);
                
                $('[class^=div-jsmind-]').removeClass('list-hover');
                
                let parts = $(mindList).length;
                
                let unit = PI/parts;
                let count = 0;
                let step = 4;
                let reg = 0;
                let left = 0;
                let top = 0;
                
                // WARNING: 利用 js getBoundingClientRect() 方法貌似有问题;
                let clientRect = $(mindListTag).position();
                let originX = clientRect.left;
                let originY = clientRect.top;
                
                
                $(mindList).each(function() {
                    
                    reg = unit/2 + unit*count++;
            
                    left = 'calc('+originX+'px + '+(step*Math.sin(reg)+1.5)+'rem)';
                    top = 'calc('+originY+'px + '+(step*Math.cos(reg+PI)+0.3)+'rem)';
                
                    $(this).css({'left':left, 'top':top});
                    
                });
                
                $(mindListDiv).addClass('list-hover');
            },
            function(){
                mindTimer = setTimeout(mindSetTimer, 2000);
            
            }
        );
    }
     

     
     
     
   
    $(document).keydown(function(e){
        
        if (e.keyCode === 46) remove_node();    //  <Delete> // 先取消了jsmind.js 里默认的事件，这个方法才会执行  
        if (e.keyCode === 9)  add_node();        // <Tab>
        if (e.keyCode === 115) add_tips();        // <F4>
    });     
     
    
    
    
}); 


function init_tips() {

    let navXY = $('.jsmind-container').position();    
    let editHeight = $('.jsmind-container').innerHeight();
    $('.edit-tips').css({
          'right': navXY.left+'px',
          'top': navXY.top+'px',
          'height': editHeight+'px'
    });
    
    let editSaveLeft = $('.edit-tips').width();
    
    $('.edit-save').css({
          'right': editSaveLeft + 'px'
    });
    
    $('.edit-save').click(function() {
        $('.edit-tips').slideUp('slow');
    });
    
    $('.edit-tips').click(function() {
       $(this).css({
          'right': navXY.left+'px',
          'top': navXY.top+'px'
        })
    });
    
}







