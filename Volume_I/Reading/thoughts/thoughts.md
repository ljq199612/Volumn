

<script>

new Vue({
  el: '#articleList',
  data: {
    articleList:[
        {
            name: '复活',
            url: 'https://ljq199612.gitee.io/book/classics/复活.pdf',
            content: ' &nbsp;&nbsp;&nbsp;&nbsp; \
《复活》是托翁晚年所作的一部长篇小说，也是我接触到他的第一部小说。作品给我的直观印象是非常的正面,名副其实的文学高峰。在小说里，托尔斯泰描述了人的一种状态，人贪恋在罪中的时候，会突然的在某个时间点"觉醒", 对自己产生强烈的厌恶情绪，决定摒弃堕落的生活。可是，在多次的挣扎反复下，人的道德水平逐渐下降。最终，不再相信自己，随波逐流，使自己困入了牢笼，完全放弃挣扎。正如保罗在罗马书的一句话:「我也知道，在我里头，就是在我肉体之中，没有良善，因为立志行善由得我，行出来却由不得我」，我想每个人的一生也是这样苦苦挣扎。小说的主人公，在这样的时期，厌恶自己现有生活的肮脏，回想起年轻时那种对真善美的追求的快乐年华，通过一点一点的行动，一点一点的舍弃了自己，最后寻回了真的自我, 同时也使曾经因他堕落的卡萩莎，重新找回自己。无独有偶，陀翁在《卡拉玛佐夫兄弟》中描写的佐西玛长老，在年轻时殴打他的勤务员，因这件事佐西玛开始厌弃自己，一点点地舍弃了自己，成为他本该成为的人。\
<p class="article_date">2019-09-07</p><br>     \
            ',
            showbtn: '显示全部',
        },
        {
            name: '唐·吉诃德',
            url: '',
            content: ' &nbsp;&nbsp;&nbsp;&nbsp; \
塞万提斯的《唐·吉诃德》语调风趣幽默，比如，唐·吉诃德的善良邻居们在销毁唐·吉诃德收藏的骑士小说时，居然发现了一本塞万提斯写的骑士小说，「这个塞万提斯是我多年的至交。我知道他最有体会的不是诗，而是不幸。他的书有所创新，有所启示，却不做结论。不过，得等等第二部，他说过要续写的。也许修改以后，现在反对他的那些人能够谅解他。现在，你先把这本书锁在你家」。整本书读下来我感受不到讽刺的意味，即使是结尾处主人公临终前幡然醒悟恢复了理智，后悔过去的荒唐行为，还害苦了自己的侍从桑丘。唐·吉诃德善良、勇敢、保护弱小、有原则、有底线，作为正常人的你我又怎样呢，如果说这是部讽刺小说，我想它讽刺的不是以唐·吉诃德为代表的一些人，而是讽刺读这本小说的你我。 桑丘是唐·吉诃德的邻居，后来做了他的侍从，桑丘善良淳朴、忠诚友善。关于他是真傻还是假傻，我一直是抱有怀疑的，当贵族老爷们为了取乐，让他当总督去管理一个小岛时，桑丘的聪明才智展现的淋漓尽致，他完全有能力管理好这个小岛。为什么桑丘善良老实，就要被你们这些贵族玩弄呢？你们以为桑丘傻吗，不知道你们戏耍他吗？可是他是知道的，桑丘是个老实人，对不起，他将不再做总督了，他要骑着自己心爱的小毛驴回到他敬爱的主人那里。可留下来的人呢，你们这些合伙戏弄他的人，不会感到羞愧吗？桑丘有他简单而纯粹的快乐，因为他是一个简单而纯粹的人，可是你们呢？ \
<br>&nbsp;&nbsp;&nbsp;&nbsp; \
这部小说里，除了主人公这条主线以外，还穿插了许多小故事，这个写法类似于《一千零一夜》中的很多片段。而我认为这部小说最有价值的部分不是主人公各种有趣的历险，而是穿插在故事中的小故事。比如，「无谓的猜疑」，某位青年本拥有幸福的生活，可他偏偏要去试探人性，最终害死了自己和最亲近的人。\
<div style="font-size:small;margin-left:5rem">\
<br>\
我从死亡求生命\
<br>\
我从衰病求健康\
<br>\
牢狱里求自由解放\
<br>\
封锁的地区求通行\
<br>\
向叛徒求忠实坚强\
<br>\
可是我运蹇命穷\
<br>\
永远是劳而无功\
<br>\
这也是上天的旨意：\
<br>\
我追求不可能的事\
<br>\
可能的就因此落空\
</div>\
<br>\
<p class="article_date">2020-08-17</p><br>     \
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
            name: '战争与和平',
            url: 'https://ljq199612.github.io/book/classics/战争与和平.pdf',
            content: ' &nbsp;&nbsp;&nbsp;&nbsp; \
            ',
            showbtn: '显示全部',
        },


   // 在此行以上编辑 //
    ]
  },

});


</script>



<div id="articleList" class="articleList">
    <article class="article" v-for="article in articleList">
        <div class="article_head">
            <label class="article_name">{{ article.name }}</label>
            <a class="readOnline" v-if="article.url!=''" :href="article.url">阅读</a>
        </div>
        <div class="article_content hidden_article"><p class="article_line" v-html="article.content"></p></div>
        <div class="articleList showbtn" v-html="article.showbtn" onclick="articleList_isShow(this);"></div>
    </article>
</div>




