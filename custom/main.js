function customRun(){
    customComponents();
    customContent();
}

function customComponents(){
    $(document).ready(function(){
        addcomponents();         // 目录按钮、主菜单及按钮等的添加
        componentsInit();
//        sidebar();               // 左侧文件树    //TODO 样式bug
//        slideMeunToggle();       // 主菜单
        extNav();                  // 右侧导航
//        componentsKeyBind();     // 快捷键操作绑定
    });
} 

function addcomponents(){
    let $customComponents = $(".custom-components");
    $customComponents.html(
         " <div id='loading' class='active'></div> "  //TODO 加载期间的遮盖              
        +" <div class='slide-nav'>    "
//        +"     <button class='slide-meun-button'> <i class='slide-meun-icon fa fa-navicon'></i> </button>    "
//        +"     <button class='theme-button'> <i class='theme-icon fa fa-font'></i> </button>              "
        +" </div>   "
//        +" <button class='sidebar-toggle-button'> <i class='sidebar-toggle-icon fa fa-angle-double-left'></i></button>              "
//        +" <div class='slide-meun'></div>     "
//        +" <div class='mask-window'><button class='close-meun'> <i class='fa fa-close'></i></button> </div>              "
          +" <div id='ext-btn'></div> "  // 右下脚拓展按钮                                    
          +" <div id='ext-nav'></div> "  // 右侧拓展导航                                    
        
    );
}

function componentsInit(){
    let $components =  $('.custom-components');
    $components.css({
        'position': 'fixed',
        'z-index': '40'
    }); 
    
    let $componentsButtons =  $('.custom-components button');
    $componentsButtons.css({
        'border': '0',
        'color': 'black',
        'margin-top': '0.5rem',
        'opacity': '0.3',
        'font-size': '1rem',
        'cursor': 'pointer'
    });

    $componentsButtons.hover(
        function () { $(this).css('opacity','1') },
        function () { $(this).css('opacity','0.3') },
    );

}

function sidebar(){
    $('.sidebar-toggle').css('display', 'none');     //隐藏原有按钮

    let $sidebar = $('.sidebar');
    let $sidebarToggle = $('.sidebar-toggle-button');

    $sidebarToggle.focus(function(){this.blur()});  //去除点击后虚线边框

    $sidebarToggle.css({
        'padding':'unset',
        'background-color': 'unset',
        'font-size': '1.3rem',
        'color': 'black',
        'cursor': 'pointer',
        'position': 'fixed',
        'width': 'unset',
        'bottom': 'unset',
        'opacity': '0.3',
        'top': $sidebar.height()/5 +'px',
        'left': $sidebar.width()-30 + 'px'
    });

    $('.sidebar').css({
       // 'box-shadow': '0px 0px 15px',
        'z-index': '30'
    });

    $sidebarToggle.hover(
        function () {
            $sidebarToggle.css('opacity','1');
        },
        function () {
            $sidebarToggle.css('opacity','0.3');
        }
    );

    _sidebarScreenResize(); 
    _sidebarBtnClick();
    $(window).resize(function(){
        _sidebarScreenResize(); 
    });

}

function _sidebarScreenResize(){    
    let $sidebar = $('.sidebar');
    let $sidebarToggle = $('.sidebar-toggle-button');
    let isLargeScreen = $(window).width() > 768;

    if(isLargeScreen){
        $sidebarToggle.html("<i class='sidebar-toggle-icon fa fa-angle-double-left'></i>");
        $sidebarToggle.css('left', $sidebar.width()-30 + 'px');
        $('.slide-nav').css({
            'margin-left': '2rem',
            'left': $sidebarToggle.css('left')
        });
        $('.sidebar').css({
            'margin-left': '0'
        });

    }else{
        $sidebarToggle.html("<i class='sidebar-toggle-icon fa fa-angle-double-right'></i>");
        $sidebarToggle.css('left', '0px');
        $('.slide-nav').css({
            'margin-left': '0.7rem',
            'left': '0px'
        });
        $('.sidebar').css({
            'margin-left': '0'
        });
    }
}

function _sidebarBtnClick(){
    let $sidebar = $('.sidebar');
    let $sidebarToggle = $('.sidebar-toggle-button');
    let sidebarIcon = document.querySelector(".sidebar-toggle-icon");

    $sidebarToggle.click( function () {

        let toClose = sidebarIcon.classList.contains('fa-angle-double-left');
        let isLargeScreen = $(window).width() > 768;
        if(toClose){
            sidebarIcon.classList.remove('fa-angle-double-left');
            sidebarIcon.classList.add('fa-angle-double-right');
            $sidebarToggle.css('left','0px');
            if(isLargeScreen){ 
                $('.sidebar-toggle').click();

            }else{
                $('.sidebar').css({
                    'margin-left': '0',
                 //   'box-shadow': '0  0  15px',
                    'z-index': '30'
                });

                $('.slide-nav').css({
                    'display': 'unset'
                });
            }

            $('.slide-nav').css({
                'margin-left': '0.7rem',
                'left': $sidebarToggle.css('left')
            });

        }else{
            sidebarIcon.classList.remove('fa-angle-double-right');
            sidebarIcon.classList.add('fa-angle-double-left');
            $sidebarToggle.css('left', $sidebar.width()-30 + 'px');

            if(isLargeScreen){
                $('.sidebar-toggle').click();
                $('.slide-nav').css({
                    'margin-left': '2rem',
                    'left': $sidebarToggle.css('left')
                });
            }else{
                $('.sidebar').css({
                    'margin-left': '300px'
                });
                $('.slide-nav').css({
                    'display': 'none'
                });
            }
        }
    });
}

function slideMeunToggle() {
    let $slideNav =  $('.slide-nav');
    $slideNav.css({
        'margin-top': '0.5rem',
        'position': 'fixed'
    });

    $('.mask-window').css({
        'position': 'fixed',
        'width':  document.body.clientWidth + 'px',
        'height': document.body.clientHeight + 'px',
        'background-color': 'black',
        'display': 'none',
        'opacity': '0.9'
    });

    $('.close-meun').css({
        'color': 'currentColor',
    });

    $('.close-meun').click(function(){
        $('.mask-window').fadeOut('slow');
        $('.slide-meun').slideUp('slow');
    });

    _slideMeun();

    let $sidebar = $('.sidebar');
    $('.slide-meun-button').click( function () {
        $('.mask-window').fadeIn('slow');
        $('.slide-meun').slideDown('slow');
    });



}

function _slideMeun(){
    let $slideMeun = $('.slide-meun');
    $slideMeun.html(
         "     <div class='slide-meun-bar'>                                                                                                         "
        +"                                                                                                                                        "
        +"     <label class='ma'>ღ~ღ~ღ~ღ~ღ~ღ~~</label>                                                                                              "
        +"     <label class='mb'>~~~ BE REAL ~~~</label>                                                                                            "
        +"     <label class='ma'>~~ღ~ღ~ღ~ღ~ღ~ღ</label>                                                                                              "
        +"                                                                                                                                        "
        +"     </div>                                                                                                                               "
        +"     <div class='slide-meun-content'>                                                                                                     "
        +"          <ul class='first-list'>                                                                                                         "
        +"              <li><label>0</label>&nbsp; ➣ &nbsp;<a href='https://ljq199612.github.io/Volume/'>Volume Home</a></li>                       "                                  
        +"              <li><label>1</label>&nbsp; ➣ &nbsp;<a href='https://ljq199612.github.io/Volume/#/Volume_I/welcome'>Volume I</a></li>        "                                  
        +"              <li><label>2</label>&nbsp; ➣ &nbsp;<a href='https://ljq199612.github.io/Volume/#/Volume_II/welcome'>Volume II </a></li>     "                                
      //  +"              <li><label>3</label>&nbsp; ➣ &nbsp;<a href='https://ljq199612.github.io/Volume/#/Volume_III/welcome'>Volume III </a></li>   "                               
      //  +"              <li><label>4</label>&nbsp; ➣ &nbsp;<a href='https://ljq199612.github.io/Volume/#/Volume_IV/welcome'>Volume IV </a></li>     "                              
        +"          </ul>                                                                                                                           "
        +"          <ul class='second-list'>                                                                                                        "
        +"              <li><label>t</label>&nbsp; ➣ &nbsp;<a href='#'>回到顶部</a></li>                       "                                  
        +"          </ul>                                                                                                                           "
        +"     </div>                                                                                                                               "
    );

    $slideMeun.css({
        'position': 'fixed',
        'bottom':'0',
        'width': $(document).width(),
        'height': '10rem',
       // 'box-shadow': '0 0 15px',
        'background-color': '#1e1c1c',
        'display': 'none',
        'z-index': '50'
    });

    $('.slide-meun-bar').css({
        'text-align': 'center',
        'font-size': 'bold',
        'width': '100%',
        'height': '1.5rem',
        'background-color': '#0f0b0b'
    });

    $('.slide-meun-bar .ma').css({
        'background-color': 'rgba(9, 14, 17, 0.93)'
    });

    $('.slide-meun-bar .mb').css({
        'color': 'rgb(19, 39, 39)',
        'background-color': '#606466ed'
    });

    $('.slide-meun-content ul').css({
        'float': 'left',
        'font-size': 'medium',
        'list-style': 'none'
        //'text-align': 'center',
        //'width': '100%',
        //'height': '1.5rem',
    });

    $('.slide-meun-content ul label').css({
        'color': 'blueviolet',
        'font-weight': 'bolder'
    });

    $('.slide-meun-content ul a').css({
        'color': 'mediumaquamarine',
        'text-decoration': 'none'
    });
}

function _gotoTop(){
    $('#goto-top-button').click(function(){
        window.scrollTo(0,0);
        $('#ss_toggle').click();
    });
}

function _foldAll(){
    $('.collapse button').each(function(){

        if($(this).hasClass('toShow')){
            return;
        }else{
            $(this).html('⊞');
            $(this).parent().nextAll().hide();
            $(this).addClass('toShow');
        }
    });
}

function _unfoldAll(){
    $('.collapse button').each(function(){

        if(!$(this).hasClass('toShow')){
            return;
        }else{
            $(this).html('⊟');
            $(this).parent().nextAll().show();
            $(this).removeClass('toShow');
        }
    });
}


function componentsKeyBind(){
    $(document).keydown(function(event){
        if($('.slide-meun').css('display') != "none"){
            //TODO    诡异bug, 点击主菜单按钮，再按<space>  // 按 <Esc> 或 <space> 关闭主菜单
           // if (event.keyCode === 27 || event.keyCode === 32){   
            if (event.keyCode === 27){          //  <space> 关闭主菜单
                $('.close-meun').click();
                    if (event.keyCode === 32){          // 按 <Esc> 或 <space> 关闭主菜单
                        return false;                     // 取消按<space>向下滚动
                }
            }
            if (event.keyCode === 96 || event.keyCode === 48){    // 按 0 跳到 Volume Home
                window.location.href = $('.first-list li:first a').attr('href');
            }
            if (event.keyCode === 97 || event.keyCode === 49){    // 按 1 跳到 Volume I
                window.location.href = $('.first-list li:eq(1) a').attr('href');
            }
            if (event.keyCode === 98 || event.keyCode === 50){    // 按 2 跳到 Volume II
                window.location.href = $('.first-list li:eq(2) a').attr('href');
            }
            if (event.keyCode === 84){    // 按 t 关闭窗口
                $('#goto-top-button').click();
                $('.close-meun').click(); 
            }
        }
        //else{
            if (document.activeElement.tagName != "INPUT" && event.keyCode === 32){    // 按 <space> 调出主菜单
              $('.slide-meun-button').click(); 
              return false;                     // 取消按<space>向下滚动
            }
        //}


    });
}


function extNav(){
    $('#ext-nav').html(

         "          <div class='nav'>                                                      "
        +"            <div class='contents-button nav-button' title='目录'>                "
        +"              <i class='nav-icon iconfont icon-contents'></i>                   "
        +"            </div>                                                               "

        +"            <div class='fold-button nav-button' title='全部折叠'>                "
        +"              <i class='nav-icon iconfont icon-fold'></i>                       "
        +"            </div>                                                               "

        +"            <div class='unfold-button nav-button' title='全部展开'>              "
        +"              <i class='nav-icon iconfont icon-unfold'></i>                     "
        +"            </div>                                                               "

        +"            <div class='top-button nav-button' title='回到顶部'>                 "
        +"              <i class='nav-icon iconfont icon-top' ></i>                        "
        +"            </div>                                                               "

        +"          </div>                                                                 "

        +"          <div id='js-getNav'                                                    "
        +"               style='position:fixed; width:2rem; z-index:-1;                     "
        +"                     height:80%; right:0; margin-top:2rem;' >                    "
        +"          </div>                                                                 "

        +"          <div class='contents'>                                                 "
        +"          </div>                                                                 "

        +"          <div class='right-bottom-button'>                                      "
        +"            <div class='circle-button' title='全部展开'>              "
        +"              <i class='iconfont icon-circle'></i>                     "
        +"            </div>                                                               "
        +"          </div>                                                                 "

        +"                                                                                 "
    );

    let oTimer = null;
    let $nav = $('#ext-nav .nav');
    $('#js-getNav').hover(
        function(){
            $nav.removeClass('nav-unhover'); 
            $nav.addClass('nav-hover'); 
        },
        function(){
            $nav.hover(
                function(){},
                function(){ 
                    let contentsIsNotActive = $('.contents').css('display') == 'none';
                    if(contentsIsNotActive) {      
                        $nav.addClass('nav-unhover');
                        $nav.removeClass('nav-hover');
                    } 
                }
            );
        }
    );

    $('.contents-button').click(function(){
        // 目录
        _contents();
        $('.contents').fadeToggle();

    });

    $('.fold-button').click(function(){
        _foldAll();
    });

    $('.unfold-button').click(function(){
        _unfoldAll();
    });

    $('.top-button').click(function(){
        window.scrollTo(0, 0);
    });

    $('.right-bottom-button').click(function(){
        if(! $nav.hasClass('nav-hover')){
            $nav.removeClass('nav-unhover'); 
            $nav.addClass('nav-hover'); 
        }else{
            $nav.removeClass('nav-hover'); 
            $nav.addClass('nav-unhover'); 
        }
        $('.contents').fadeOut();
    });

}

function _contents() {
    let contents = "<ul class='contents-list'>";

    $('h2, h3, h4, h5, h6').each(function(){
        let id = '_' + $(this).html().split(" ")[0].replace(/\./g, "_");
        let isH2 = $(this).prop('tagName') == 'H2';

        if($(this).attr('id') == undefined){
            if(isH2) id = '_' + Math.floor(Math.random()*1000000);
            $(this).attr('id', id);
        }


        let className = 'content-'+ $(this).prop('tagName')+' ';
        $(this).addClass(className);

        let temp = $(this).html();
        
        id = $(this).attr('id');
        let click = "scrollToThis( '#"+id +"' );";
        contents += '<li class=' + className + 'onClick="' + click + '">' + temp +'</li>';

    });

    contents += "</ul>";
    
    $('#ext-nav .contents').html(contents);

}

function scrollToThis(id){
    let isH2 = $(id).prop('tagName') == 'H2';
    let $collapse = $(id).parent().prev();
    let isCollapse = $collapse.hasClass('collapse');
    // 如果目录对应的内容被折叠了，需要先打开折叠
    if(!isH2 && isCollapse){
        $collapse.children('button.toShow').click();
    }

    $.scrollTo(id, 500);
}

//=======================================================
function customContent(){
    foldModule();
    myNote();
    myWarning();
    myTip();
    myProblem();
    myAnnotate();
    foldSide();
}

function foldModule(){

    // 添加模块底部折叠按钮
    $('.data-section').each(function(){
        $(this).html( $(this).html() + "<button class='toHide fa fa-angle-up'></button>");
    });
    
    // 模块显示头部设置
    $('.section-title').wrap("<div class='collapse'></div>");
    $('.collapse').each(function(){
        $(this).html(" <button class=''>⊟</button>" + $(this).html() + "");
    });

// ------------------------------
// 标题加序号
(function(){

    // 内容加序号,全局
    if(true){
        let number = 1;
        $('.auto-sort').each(function(){
            $(this).html(number++ + ".&nbsp;" + $(this).html());
        });
        subNumber($('.auto-sort'), 'auto-sort-sub-', 'auto-sort-sub1');
    }

    // 内容加序号,块级
    if(document.querySelector('.data-section') != null){
        $('.data-section').each(function(){
            let number = 1;

            let blockNumber = $(this).find('.block-number').text();
            if(blockNumber == null || blockNumber == ''){
                blockNumber = 1
            }
            let $Blocks = $(this).find('.auto-sort-sub');

            $Blocks.each(function(){
                $(this).html(blockNumber+"."+number++ + " &nbsp;&nbsp;" + $(this).html());
            });
            subNumber($Blocks, 'auto-sort-sub-', 'auto-sort-sub1');
        });

    }

    // 加序号，二级子级
    // subNumber($('.auto-sort-sub1'), 'auto-sort-sub1-', 'auto-sort-sub2');

    function subNumber($headerElements, elementData, subElementClass){
        let i = 0;
        let j = 1;
        let pattern = /^[1-9]\d*([.][1-9]\d*([.][1-9]\d*)?)?/;
        $headerElements.each(function(){
            $(this).attr('data', elementData+ ++i);
        });
        $headerElements.each(function(){
            let number = 1;
            let text = $(this).text();
            let baseNum = "";
            if (pattern.exec(text) != null){
                baseNum = pattern.exec(text)[0];
            }
            let $next = $(this).next();

            let nextElementData = elementData + ++j;

            if ($next.attr('data') === nextElementData){ return; }

            let isTrue = $next.hasClass(subElementClass);
            if (isTrue){
                $next.html(baseNum + "." + number++ + " &nbsp;&nbsp;" + $next.html());
            }
            for(let t=1;t<10000;t++){
                $next = $next.next();
                isTrue = $next.hasClass(subElementClass);
                if (isTrue){
                    $next.html(baseNum + "." + number++ + " &nbsp;&nbsp;" + $next.html());
                }
                let isBreak = ($next.attr('data')==nextElementData);
                if(isBreak){break;}

                if(t==10000){alert(" bug !")}
            }
        });
    }


})();
// ---------------------------------

    $('.collapse button').on('click', function(){
        if($(this).hasClass('toShow')){
            $(this).html('⊟');
        }else{
            $(this).html('⊞');
        }
        $(this).parent().nextAll().toggle();
        $(this).toggleClass('toShow');

    });

    $('button.toHide').on('click', function(){
        let $collapseButton = $(this).siblings('.collapse').children('button');
        $collapseButton.click();
    });

    // 默认折叠
    _foldAll();

}


// ----------------------------------------
function foldSide(){

    let $title = $('.side-title > ul > li > p');

    // 隐藏二级目录
    $title.siblings('ul').css({'display': 'none'});
    
    /*
    // 加序号
    let number = 1;
    $title.each(function(){
        $(this).html(number++ + ". " + $(this).html());
    });
    */

    // 折叠、显示目录树
    $title.each(function(){
        //$(this).html("<span>🍒 </span> " + $(this).html());

        let toggle = 0;
        $(this).on('click', function(){
            if(toggle == 0){
                //$(this).children('span').first().html('🌶 ');
                $(this).siblings('ul').css({'display': 'block'});
            }else{
                //$(this).children().first().html('🍒 ');
                $(this).children().first().html('');
                $(this).siblings('ul').css({'display': 'none'});
            }
            toggle = !toggle;
        });

        // 显示当前文件所在的目录
        let isActive = $(this).siblings('ul').children('li').hasClass('active');
        if(isActive){
            //$(this).children('span').first().html('🌶 ');
            $(this).siblings('ul').css({'display': 'block'});
            toggle = !toggle;
        }

    });
}

function myTip(){
    $('.myTip').each(function(){
        let $content = $(this).children().first();
        $content.html( "<span style='font-size:1.2rem'>📌&nbsp;&nbsp;[TIP]</span><p>" + $content.html() );
    });
}

function myNote(){
    $('.myNote').each(function(){
        let $content = $(this).children().first();
        $content.html( "<span style='font-size:1.2rem'>📝&nbsp;&nbsp;[NOTE]</span><p>" + $content.html() );
    });
}

function myWarning(){
    $('.myWarning').each(function(){
        let $content = $(this).children().first();
        $content.html( "<span style='font-size:1.2rem'>❗&nbsp;&nbsp;[WARNING]</span></p>" + $content.html() );
    });
}

/* 鼠标点击、悬停在关键字的时候，解释关键字*/
function myAnnotate(){
    $('.myAnnotate').each(function () {
        let $annotate;
        let flag = 1;
        
        $(this).hover(
            function () { 
                let flag = 1;
                $annotate = $(this).next();
                for(let t=1; t<1000; t++){
                    let isAnnotate = $annotate.hasClass('js-annotate');
                    if(isAnnotate){ break; }
                    $annotate = $annotate.next();
                } 
                // TODO 想用 fadeIn() fadeOut() 做淡入淡出效果，
                // 但是发现存在以下 bug：
                // 对于大的弹出框，会有显示 2 次的动作
                $annotate.show();

                $(this).mousemove(function(e){
                    let left = e.clientX + 25;
                    let top = e.clientY + 25;
                    let overScreenX = left+$annotate[0].clientWidth > document.body.clientWidth;
                    let overScreenY = top+$annotate[0].clientHeight > document.body.clientHeight;

                    //alert(left + " " + $annotate[0].clientWidth + " " + document.body.clientWidth);
                    if(flag == 1){
                        if(!overScreenX && !overScreenY){
                            top = top + 'px';
                            left = left + 'px';
                            $annotate.css({'left': left, 'top': top, 'right':'unset', 'bottom':'unset'});
                        }else if(overScreenX && !overScreenY){
                            top = top + 'px';
                            $annotate.css({'left': 'unset', 'top': top, 'right':'3rem', 'bottom':'unset'});
                        }else if(!overScreenX && overScreenY){
                            left = left + 'px';
                            $annotate.css({'left': left, 'top': 'unset', 'right':'unset', 'bottom':'3rem'});
                        }else if(overScreenX && overScreenY){
                            $annotate.css({'left': 'unset', 'top': 'unset', 'right':'3rem', 'bottom':'3rem'});
                        }

                    }
                    flag = 0;
                });

                $annotate.hover(
                    function(){ $annotate.show() }, 
                    function(){ $annotate.hide() } 
                );
            },
            function () { 
                $annotate.hide();

            }
        );

        $(this).click(
            function () { 
                if(flag==1){
                    $annotate = $(this).next();
                    for(let t=1; t<1000; t++){
                        let isAnnotate = $annotate.hasClass('js-annotate');
                        if(isAnnotate){ break; }
                        $annotate = $annotate.next();
                    } 
                    $annotate.show(); 
                    $(this).mousemove(function(e){
                        let left = e.clientX + 25;
                        let top = e.clientY + 25;
                        let overScreenX = left+$annotate[0].clientWidth > document.body.clientWidth;
                        let overScreenY = top+$annotate[0].clientHeight > document.body.clientHeight;

                        //alert(left + " " + $annotate[0].clientWidth + " " + document.body.clientWidth);
                        if(flag == 1){
                            if(!overScreenX && !overScreenY){
                                top = top + 'px';
                                left = left + 'px';
                                $annotate.css({'left': left, 'top': top, 'right':'unset', 'bottom':'unset'});
                            }else if(overScreenX && !overScreenY){
                                top = top + 'px';
                                $annotate.css({'left': 'unset', 'top': top, 'right':'3rem', 'bottom':'unset'});
                            }else if(!overScreenX && overScreenY){
                                left = left + 'px';
                                $annotate.css({'left': left, 'top': 'unset', 'right':'unset', 'bottom':'3rem'});
                            }else if(overScreenX && overScreenY){
                                $annotate.css({'left': 'unset', 'top': 'unset', 'right':'3rem', 'bottom':'3rem'});
                            }

                        }
                    });
                    flag = 0;
                }else{
                    $annotate.hide(); 
                    flag = 1;
                }
            });
    });

}

function myProblem(){
    $('.myProblem .toggleAnswer').each(function(){
        $(this).click(function(){
            $(this).next().slideToggle('slow');
        });
    });




}

