 
new Vue({
  el: '.articleList',
  data: {
    articleList:[
        {
            name: '复活',
            url: 'https://ljq199612.github.io/book/classics/复活.pdf',
            content: ' &nbsp;&nbsp;&nbsp;&nbsp; \
《复活》是托翁晚年的一部长篇小说，也是目前我接触到他的第一部小说。作品给我的总体印象非常的正面,名副其实的文学高峰。在这部小说里，托尔斯泰描述了人的这样一种状态，人贪恋在罪中的时候，总会有一段时间突然的"觉醒", 会对自己产生强烈的厌恶情绪，决定摒弃堕落的生活，可是均以失败告终，在这种反复中，人的道德水平逐渐下降。最终，放弃挣扎，不再相信自己，随波逐流，这样就使自己"轻松"了，从而困入了牢笼。正如保罗在罗马书的一句话:"我也知道，在我里头，就是在我肉体之中，没有良善，因为立志行善由得我，行出来却由不得我"，我想托翁一生之中也是这样苦苦挣扎。小说的主人公，在这样的觉醒时期，深刻感受到自己现有生活的肮脏，回想起年轻时那种对真善美的追求的快乐年华，通过一点一点的行动，一点一点的舍弃了自己，最后寻回了真的自我，再一次的活了过来。同时也使曾经因他堕落的卡萩莎，重新找回自己。无独有偶，陀翁在《卡拉玛佐夫兄弟》中描写的佐西玛长老，在年轻时殴打他的勤务员，而他的勤务员却默默服从，因这件事 佐西玛开始厌弃自己，一点点地舍弃了自己，人生的道路也开始向上螺旋上升。\
<p class="article_date">2019-09-07</p>     \
            ',
            showbtn: '显示全部',
        },
        {
            name: '我是猫',
            url: 'https://ljq199612.github.io/book/classics/我是猫.pdf',
            content: ' &nbsp;&nbsp;&nbsp;&nbsp; \
            ',
            showbtn: '显示全部',
        },
        {
            name: '爱弥儿',
            url: 'https://ljq199612.github.io/book/classics/爱弥儿.pdf',
            content: ' &nbsp;&nbsp;&nbsp;&nbsp; \
            ',
            showbtn: '显示全部',
        },
        {
            name: '战争与和平',
            url: 'https://ljq199612.github.io/book/classics/战争与和平.pdf',
            content: ' &nbsp;&nbsp;&nbsp;&nbsp; \
            ',
            showbtn: '显示全部',
        },


   // 在此行以上编辑 //
    ]
  }
});

 function isShow(element){
      if(element.innerHTML=='显示全部'){
        element.previousElementSibling.className = 'article_content';
        element.innerHTML='隐藏';
      }
      else{
        element.previousElementSibling.classList.add('hidden_article');
        element.innerHTML='显示全部';
      }
    }

function readOnline(){
    let reads = document.querySelectorAll(".readOnline");
    let url = "";
    for(let i=0 ;i < reads.length; i++ ){
        if( reads[i].attributes["href"].value == '#'){
           reads[i].style.display='none';
        }
    }
}

function hasShowBtn(){
    let contents = document.querySelectorAll(".article_content");
    let contentHeight = contents[0].offsetHeight;  // 根据屏幕，值为 48 或 56
    let showBtn = "";
    let linesHeight = "";
    // 文章折叠后能见区域的高度，默认2行，每行显示的高度是24
    for(let i=0 ;i < contents.length; i++ ){
        showBtn = contents[i].nextElementSibling;
        linesHeight = contents[i].firstChild.offsetHeight;
        if( linesHeight > contentHeight ){
           showBtn.style.display ='block';
        }else{
           showBtn.style.display ='none';
        }
    }
}

readOnline();
hasShowBtn();
window.onresize = function(){ hasShowBtn();}

