//////////////////// 入口函数 /////////////////////////////
function customRun(){
    $(document).ready(function(){
        // checkFont();
        
        ////////// 主题设置 ////////////
        customSkin();


        customComponents();
        
        
        customContent();

    });

}
//////////////////////////////////////////////////////////

function customSkin(){
    let usedSkin = localStorage.getItem("volumn-main-style");
    if(undefined != usedSkin){
        loadStyle(usedSkin);
    }
}

function loadStyle(url){
    let $head = document.querySelector("head");
    let $link = document.createElement("link");
    $link.href = url;
    $link.rel = 'stylesheet';
    $link.type = 'text/css';
    $head.appendChild($link);

}





/**
 * 判断操作系统, 用来去除不同平台字体渲染效果的不同
 */
function checkFont(){
    let agent = window.navigator.userAgent;
    agent.indexOf('Windows') >= 0 ? 
        $('body').addClass('windows')
        : agent.indexOf('Macintosh') >= 0 ?
            $('body').addClass('mac')
            :
            $('body').addClass('linux')
        ;

}


function customComponents(){
        addcomponents();         // 目录按钮、主菜单及按钮等的添加
        componentsInit();
        extNav();                  // 右侧导航
        //topNav.call();                  // 顶部导航
//        componentsKeyBind();     // 快捷键操作绑定
} 


/** 页面上额外添加的挂载点 */
function addcomponents(){
    let $customComponents = $(".custom-components");
    $customComponents.html(
         " <div class='slide-nav'>    "
//        +"     <button class='slide-meun-button'> <i class='slide-meun-icon fa fa-navicon'></i> </button>    "
//        +"     <button class='theme-button'> <i class='theme-icon fa fa-font'></i> </button>              "
        +" </div>   "
//        +" <button class='sidebar-toggle-button'> <i class='sidebar-toggle-icon fa fa-angle-double-left'></i></button>              "
//        +" <div class='slide-meun'></div>     "
//        +" <div class='mask-window'><button class='close-meun'> <i class='fa fa-close'></i></button> </div>              "
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
    window.scrollTo(0,0);
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
            if (event.keyCode === 96 || event.keyCode === 48){    // 按 0 跳到 Volumn Home
                window.location.href = $('.first-list li:first a').attr('href');
            }
            if (event.keyCode === 97 || event.keyCode === 49){    // 按 1 跳到 Volumn I
                window.location.href = $('.first-list li:eq(1) a').attr('href');
            }
            if (event.keyCode === 98 || event.keyCode === 50){    // 按 2 跳到 Volumn II
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



// 顶部导航栏                                    
topNav = {
    call: function(){
        this.hook();
        this.topNav();
        this.event();
    },
    hook: function() {
        let $customComponents = $(".custom-components");
        $customComponents.append(
              "<div id='top-nav'></div> "  
        );
    },
    topNav: function() {
        let navData =  $('.sidebar-nav').html();
        let $topNav = $('#top-nav');


        let root = this.data.filter(item => item.parentId == -1);

        let content = "<div class='volumn'><select class=''>";

        root.forEach(item => {
            content += `<option value='${item.id}' class=''>${item.name}</option>`
        });

        content += `</select></div>`;

        root.forEach(item => {
            content += `<div class='list-book' id='volumn${item.id}'>`
            let sub1 = this.data.filter(k => k.parentId == item.id);
            sub1.forEach(item1 => {
                content += `<div class='list-book1'><span><i class='${item1.icon}'></i>${item1.name}</span>`
                let sub2 = this.data.filter(j => j.parentId == item1.id);
                sub2.forEach(item2 => {
                    content += `<div class='list-book2'><span><i class='${item2.icon}'></i>${item2.name}</span>`
                    let sub3 = this.data.filter(m => m.parentId == item2.id);
                    sub3.forEach(item3 => {
                        content += `<div class='list-book3'><a href='${item3.link}'><i class='${item3.icon}'></i>${item3.name}`

                        content += `</a></div>`;
                    });

                    content += `</a></div>`;
                });
                

                content += `</div>`;
            });
            
            content += `</div>`;

        });

        console.log("->>>>> ", content);

        $topNav.append(content);

    },
    event: function(){
        $('option').on('click', function(){
            let volumnId = "#volumn" + $(this).val();
            $(volumnId).siblings('.list-book').hide();
            $(volumnId).show();
        
        });
        
        //$('#top-nav .list-book1').hover( function(){
               // $(this).children('span').first().siblings().toggle();
        //});
    },
    data: [
        { parentId: -1,    id: 1,        name: "Volumn I",        link: "#",  icon: "",    },
        { parentId: -1,    id: 2,        name: "Volumn II",       link: "#",  icon: "",    },
        { parentId: 1,     id: 101,      name: "读书",            link: "#",  icon: "iconfont icon-dir",    },
        { parentId: 2,     id: 201,      name: "数学",            link: "#",  icon: "iconfont icon-dir",    },
        { parentId: 2,     id: 202,      name: "计算机",          link: "#",  icon: "iconfont icon-dir",    },
        { parentId: 2,     id: 203,      name: "化学",            link: "#",  icon: "iconfont icon-dir",    },
        { parentId: 202,   id: 20201,    name: "C/C++",           link: "#",  icon: "iconfont icon-book-open",    },
        { parentId: 202,   id: 20202,    name: "数据库",          link: "#",  icon: "iconfont icon-book-open",    },
        { parentId: 20201, id: 2020101,  name: "C 语言程序设计",  link: "#",  icon: "",    },


    ]


}



function extNav(){
    $('#ext-nav').html(

         "          <div class='nav'>                                                      "
        +"            <div class='skin-items'>                                                 "
        +"                <div class='skin default' title='默认主题'></div>                           "
        +"                <div class='skin skin-1' title='主题1'></div>                           "
        +"            </div>                                                                 "

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

    // 设置主题
    $("#ext-nav .nav  .skin").click(function(){
        if($(this).hasClass("default")){
            localStorage.setItem("volumn-main-style", "custom/skin_default.css");
        }
        if($(this).hasClass("skin-1")){
            localStorage.setItem("volumn-main-style", "custom/skin_1.css");
        }
        let useSkinUrl = localStorage.getItem("volumn-main-style");
        if(undefined != useSkinUrl){
            // 先去除已有主题
            $("link").remove("[href^='custom/skin_']");
            // 设置主题
            loadStyle(useSkinUrl);
        }
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
        let click = "scrollToThis( '#"+id +"' );$('.right-bottom-button').click()";
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
    //myNote();
    //myWarning();
    //myTip();
    myProblem();
    myAnnotate();
    foldSide();
}

function foldModule(){
    // 添加模块底部折叠按钮
    $('.data-section').each(function(){
        $(this).html( $(this).html() + "<button class='toHide iconfont icon-up'></button>");
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
                $(this).html(number++ + ". &nbsp;" + $(this).html());
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

    // 折叠完成，显示页面
    $('section').show();

}


// ------------ 左侧菜单栏折叠和点击效果 --------------------

function foldSide(){
    
    $('.sidebar-nav  > .icon-books1').click(function(){
        $(this).siblings('.book-list-sub1').slideToggle();
    });

    $('.sidebar-nav .icon-dir').click(function(){
        $(this).siblings('.book-list-sub2').slideToggle();
    });

    $('.sidebar-nav .icon-book-open').click(function(){
        $(this).siblings('.book-list-sub3').slideToggle();
    });


    let isFold = true;
    $('.sidebar-nav > .js-name').click(function(){
        if(isFold){
            $('.sidebar-nav > .icon-book-open').siblings('.book-list-sub3').slideUp();
            $('.sidebar-nav > .icon-dir').siblings('.book-list-sub2').slideUp();
            $('.sidebar-nav > .icon-books1').siblings('.book-list-sub1').slideUp();
            isFold = false;
        }else{
            $('.sidebar-nav > .icon-book-open').siblings('.book-list-sub3').slideDown();
            $('.sidebar-nav > .icon-dir').siblings('.book-list-sub2').slideDown();
            $('.sidebar-nav > .icon-books1').siblings('.book-list-sub1').slideDown();
            isFold = true;
        }
    });
    

    let thisHash = window.location.hash;
    // 需要解码获得的URI，不然非字母无法比较
    thisHash = decodeURI(thisHash);
    
    let $getPage = $("a[href='"+thisHash+"']").parent();
    let isTarget = $getPage.hasClass("book-list-sub3") || $getPage.hasClass("book-list-sub2");
    if(isTarget){
        $getPage.addClass("to-active");
        $getPage.parent('.book-list-sub2').children('.book-list-sub3').removeClass('hidden');
    }
    $('.book-list-sub2 a, .book-list-sub3 a').click(function(){
        let isThisPage = thisHash == $(this).attr('href');
        if(isThisPage){
            _foldAll();
        }else{
            // 跳到其他页面时，先把页面内容隐藏，
            // 待折叠操作 foldModule() 完成后，再显示
            $('section').hide();
        }
    });
    

}

// -------------------------------------------------
/*
function myTip(){
    $('.myTip').each(function(){
        let $content = $(this).children().first();
        let temp = "<div class='tip'><i class='iconfont icon-tips'></i>&nbsp;Tip</div>";  
        $content.html( temp + $content.html() );
    });
}

function myNote(){
    $('.myNote').each(function(){
        let $content = $(this).children().first();
        let temp = "<div class='note'><i class='iconfont icon-note'></i>&nbsp;Note</div>";  
        $content.html( temp + $content.html() );
    });
}

function myWarning(){
    $('.myWarning').each(function(){
        let $content = $(this).children().first();
        let temp = "<div class='warning'><i class='iconfont icon-warning'></i>&nbsp;Warning</div>";  
        $content.html( temp + $content.html() );
    });
}
*/
/* 鼠标点击、悬停在关键字的时候，弹出解释框*/

function myAnnotate(){
        let $annotate;
        let flag = 1;
        
        $('.myAnnotate').hover(
            function () { 
                let flag = 1;
                // ? 是否有更好的写法

                $annotate = $(this).next(".js-annotate");
                if($annotate[0] == undefined){
                    $annotate = $(this).nextUntil('.js-annotate').last().next();
                    if($annotate[0] == undefined){
                        $annotate = $(this).parent().next(".js-annotate");
                    }
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

        $('.myAnnotate').click(
            function () { 
                if(flag==1){
                    $annotate = $(this).next(".js-annotate");
                    if($annotate[0] == undefined){
                        $annotate = $(this).nextUntil('.js-annotate').last().next();
                        if($annotate[0] == undefined){
                            $annotate = $(this).parent().next(".js-annotate");
                        }
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

}

function myProblem(){
    $('.toggleAnswer').each(function(){
        $(this).click(function(){
            $(this).next().slideToggle('slow');
        });
    });
}





/* [Start] thought.md 专用 */
function articleList_isShow(element){
      if(element.innerHTML=='显示全部'){
        element.previousElementSibling.className = 'article_content';
        element.innerHTML='隐藏';
      }
      else{
        element.previousElementSibling.classList.add('hidden_article');
        element.innerHTML='显示全部';
      }
}

// 是否显示「阅读」
function articleList_readOnline(){
    let reads = document.querySelectorAll(".readOnline");
    let url = "";
    for(let i=0 ;i < reads.length; i++ ){
        if( reads[i].attributes["href"].value == '#'){
           reads[i].style.display='none';
        }
    }
}


window.onload = function(){articleList_readOnline();}

/* [End] thought.md */









