/*!
 * docsify-tabs
 * v1.5.2
 * https://jhildenbiddle.github.io/docsify-tabs/
 * (c) 2018-2021 John Hildenbiddle
 * MIT license
 */

(function() {
  "use strict";
  var version = "1.5.2";
  
  /* 在 <head> 标签开始位置里加 css 演示 */
  function styleInject(css, ref) {
      if (ref === void 0) ref = {};
      var insertAt = ref.insertAt;
      if (!css || typeof document === "undefined") {
          return;
      }
      var head = document.head || document.getElementsByTagName("head")[0];
      var style = document.createElement("style");
      style.type = "text/css";
      if (insertAt === "top") {
          if (head.firstChild) {
              head.insertBefore(style, head.firstChild);
          } else {
              head.appendChild(style);
          }
      } else {
          head.appendChild(style);
      }
      if (style.styleSheet) {
          style.styleSheet.cssText = css;
      } else {
          style.appendChild(document.createTextNode(css));
      }
  }

  /* [TIP] 原本想把这个 css 单独抽离到一个 js 文件， 但由于不是被顶层文件引用而报错 */
  var css_248z = 
    `:root{
        --docsifytabs-border-color: #ededed;
        --docsifytabs-border-px:1px;
        --docsifytabs-border-radius-px: ;
        --docsifytabs-margin:1.5em 0;
        --docsifytabs-tab-background:#f8f8f8;
        --docsifytabs-tab-background--active:var(--docsifytabs-content-background);
        --docsifytabs-tab-color:#999;
        --docsifytabs-tab-color--active:inherit;
        --docsifytabs-tab-highlight-px:3px;
        --docsifytabs-tab-highlight-color:var(--theme-color,currentColor);
        --docsifytabs-tab-padding:0.6em 1em;
        --docsifytabs-content-background:inherit;
        --docsifytabs-content-padding:1.5rem
    }
    
    .docsify-tabs:before, .docsify-tabs__tab { z-index:1 }
    
    .docsify-tabs__tab--active,.docsify-tabs__tab:focus{ z-index: 2 }
    
    .docsify-tabs { 
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap:wrap;
        position: relative
    }
    
    .docsify-tabs:before {
        -ms-flex-order: 0;
        content: "";
        -ms-flex: 1 1;
        flex: 1 1;
        order:0
    }

    .docsify-tabs__tab {
        -ms-flex-order: -1;
        appearance: none;
        font-size: inherit;
        margin: 0;
        order: -1;
        position: relative
    }

    .docsify-tabs__content {
        height: 0;
        overflow: hidden;
        position: absolute;
        visibility: hidden;
        width: 100%
    }

    .docsify-tabs__content :first-child {
        margin-top: 0
    }

    .docsify-tabs__content :first-child~:last-child,.docsify-tabs__content :last-child {
        margin-bottom:0
    }

    .docsify-tabs__tab--active+.docsify-tabs__content {
        height: auto; 
        overflow: auto;
        position: relative;
        visibility: visible
    }

    [class*=docsify-tabs--] {
        margin: 1.5em 0;
        margin: var(--docsifytabs-margin)
    }

    [class*=docsify-tabs--] .docsify-tabs__tab {
        background: #f8f8f8; 
        background: var(--docsifytabs-tab-background);
        color: #999; 
        color: var(--docsifytabs-tab-color);
        padding:.6em 1em;
        padding: var(--docsifytabs-tab-padding)
    }

    [class*=docsify-tabs--] .docsify-tabs__tab--active {
        background: inherit;
        background: var(--docsifytabs-tab-background--active);
        color: inherit;
        color: var(--docsifytabs-tab-color--active)
    }

    [class*=docsify-tabs--] .docsify-tabs__content {
        background: inherit;
        background: var(--docsifytabs-content-background);
        padding: 1.5rem;
        padding: var(--docsifytabs-content-padding)
    }

    .docsify-tabs--classic .docsify-tabs__content, .docsify-tabs--classic .docsify-tabs__tab,.docsify-tabs--classic:before {
        border-color: #ededed; 
        border-width: 1px;
        border: var(--docsifytabs-border-px) solid var(--docsifytabs-border-color)
    }

    .docsify-tabs--classic:before {
        border-left-width: 0;
        border-right-width: 0;
        border-top-width: 0;
        margin-right: 1px;
        margin-right: var(--docsifytabs-border-px)
    }

    .docsify-tabs--classic .docsify-tabs__tab:first-of-type {
        border-top-left-radius: var(--docsifytabs-border-radius-px)
    }

    .docsify-tabs--classic .docsify-tabs__tab:last-of-type {
        border-top-right-radius: var(--docsifytabs-border-radius-px)
    }

    .docsify-tabs--classic .docsify-tabs__tab~.docsify-tabs__tab {
        margin-left: -1px;
        margin-left: calc(0px - var(--docsifytabs-border-px))
    }

    .docsify-tabs--classic .docsify-tabs__tab--active {
        border-bottom-width: 0;
        box-shadow: inset 0 3px 0 0 var(--theme-color,currentColor);
        box-shadow: inset 0 var(--docsifytabs-tab-highlight-px) 0 0 var(--docsifytabs-tab-highlight-color)
    }

    .docsify-tabs--classic .docsify-tabs__content {
        border-radius: 0;
        border-radius: 0 var(--docsifytabs-border-radius-px) var(--docsifytabs-border-radius-px) var(--docsifytabs-border-radius-px);
        border-top: 0;
        margin-top: -1px;
        margin-top: calc(0px - var(--docsifytabs-border-px))
    }

    .docsify-tabs--material .docsify-tabs__tab {
        background: transparent;
        border: 0;
        margin-bottom: 2px;
        margin-bottom: calc(var(--docsifytabs-tab-highlight-px) - var(--docsifytabs-border-px))
    }

    .docsify-tabs--material .docsify-tabs__tab--active {
        background: transparent;
        box-shadow: 0 3px 0 0 var(--theme-color,currentColor);
        box-shadow: 0 var(--docsifytabs-tab-highlight-px) 0 0 var(--docsifytabs-tab-highlight-color)
    }

    .docsify-tabs--material .docsify-tabs__content {
        border-color: #ededed; border-width: 1px 0;
        border-bottom: var(--docsifytabs-border-px) solid var(--docsifytabs-border-color);
        border-left: 0 solid var(--docsifytabs-border-color);
        border-right: 0 solid var(--docsifytabs-border-color);
        border-top: var(--docsifytabs-border-px) solid var(--docsifytabs-border-color)
    }

    `;


    let $tabs_1 = {
        regex: {
                        // <!-- [[  {这里是换行后的内容} ]] -->  
            codeMarkup: /(<!-+\s*?\[\[\s*?)[\r\n]+([\s|\S]*?)[\r\n\s]+(\s+\]\]\s*?-+>)/gm,
        }
    

    }



    var $tabs = {
        regex: {
                                  //  ```[这里的多行内容] ```
            codeMarkup: /(```[\s\S]*?```)/gm,
                                 // <!-- tabs: replace (.*) -->
                                 // [TODO] 这里要用 [commentReplaceMark] 中的值， 但不会写所以写死
            commentReplaceMarkup: new RegExp("\x3c!-- ".concat("tabs: replace", " (.*) --\x3e")),
                                 // <!-- tabs: start -->[这里的多行内容]<!-- tabs: end --> 
            tabBlockMarkup: /[\r\n]*(\s*)(<!-+\s+tabs:\s*?start\s+-+>)[\r\n]+([\s|\S]*?)[\r\n\s]+(<!-+\s+tabs:\s*?end\s+-+>)/m,
            tabCommentMarkup: /[\r\n]*(\s*)<!-+\s+tab:\s*(.*)\s+-+>[\r\n]+([\s\S]*?)[\r\n]*\s*(?=<!-+\s+tabs?:(?!replace))/m,
            tabHeadingMarkup: /[\r\n]*(\s*)#{1,6}\s*[*_]{2}\s*(.*[^\s])\s*[*_]{2}[\r\n]+([\s\S]*?)(?=#{1,6}\s*[*_]{2}|<!-+\s+tabs:\s*?end\s+-+>)/m
        },

        classNames: {
            tabsContainer: "content",
            tabBlock: "docsify-tabs",
            tabButton: "docsify-tabs__tab",
            tabButtonActive: "docsify-tabs__tab--active",
            tabContent: "docsify-tabs__content"
        },

        settings: {
            persist: true,
            sync: true,
            theme: "classic",   //  "classic", "material",
            tabComments: true,
            tabHeadings: true
        },

        commentReplaceMark: "tabs: replace",


    }


/***************************** [Strat] : 人口 *******************************/
    styleInject(css_248z, {
        insertAt: "top"
    });

    if (window) {
        window.$docsify = window.$docsify || {};
        window.$docsify.tabs = window.$docsify.tabs || {};
        Object.keys(window.$docsify.tabs).forEach((function(key) {
            if (Object.prototype.hasOwnProperty.call($tabs.settings, key)) {
                $tabs.settings[key] = window.$docsify.tabs[key];
            }
        }));
        if ($tabs.settings.tabComments || $tabs.settings.tabHeadings) {
            //window.$docsify.plugins = [].concat(docsifyTabs, window.$docsify.plugins || []);
            window.$docsify.plugins = [].concat(docsifyTabs_1, window.$docsify.plugins || []);
            

        }
    }

    // TODO 这里是要实验的地方
    function docsifyTabs_1(hook, vm) {
        var hasTabs = false;
        hook.beforeEach((function(content) {
            hasTabs = $tabs.regex.tabBlockMarkup.test(content);
            if (hasTabs) {
                content = renderTabsStage_1(content, vm);
            }
            return content;
        }));
        hook.afterEach((function(html, next) {
            if (hasTabs) {
                html = renderTabsStage2(html);
            }
            next(html);
        }));
        hook.doneEach((function() {
            if (hasTabs) {
                setDefaultTabs();
            }
        }));
        hook.mounted((function() {
            var tabsContainer = document.querySelector(".".concat($tabs.classNames.tabsContainer));
            tabsContainer && tabsContainer.addEventListener("click", (function handleTabClick(evt) {
                setActiveTab(evt.target);
            }));
            window.addEventListener("hashchange", setActiveTabFromAnchor, false);
        }));
    }

    
    /**
     * @param  content -> 页面没有被渲染时的内容
     */
    function renderTabsStage_1(content, vm) {

        // 匹配在 [codeMarkup] 标记中的数据, 即 ``` ``` 中的数据
        let codeBlockMatch = content.match($tabs.regex.codeMarkup) || [];
        var codeBlockMarkers = codeBlockMatch.map(
            (item, i) =>  {
                                                                    // <!-- tabs: replac CODEBLOCK0 -->
                let codeMarker = "\x3c!-- ".concat($tabs.commentReplaceMark, " CODEBLOCK").concat(i, " --\x3e");
                // 把 contnet 里的 数据内容替换成 [codeMarker]
                content = content.replace(item, codeMarker);
                return codeMarker;
            }

        );
        
        // 主题相关 css, 如 docsify-tabs--classic 
        var tabTheme = $tabs.settings.theme ? "".concat($tabs.classNames.tabBlock, "--").concat($tabs.settings.theme) : "";


        return content;
    }


///////////////////////////////



    
    function docsifyTabs(hook, vm) {
        var hasTabs = false;
        hook.beforeEach((function(content) {
            hasTabs = $tabs.regex.tabBlockMarkup.test(content);
            if (hasTabs) {
                content = renderTabsStage1(content, vm);
            }
            return content;
        }));
        hook.afterEach((function(html, next) {
            if (hasTabs) {
                html = renderTabsStage2(html);
            }
            next(html);
        }));
        hook.doneEach((function() {
            if (hasTabs) {
                setDefaultTabs();
            }
        }));
        hook.mounted((function() {
            var tabsContainer = document.querySelector(".".concat($tabs.classNames.tabsContainer));
            tabsContainer && tabsContainer.addEventListener("click", (function handleTabClick(evt) {
                setActiveTab(evt.target);
            }));
            window.addEventListener("hashchange", setActiveTabFromAnchor, false);
        }));
    }
/****************************** [END] : 人口 ********************************/


    function getClosest(elm, closestSelectorString) {
        if (Element.prototype.closest) {
            return elm.closest(closestSelectorString);
        }
        while (elm) {
            var isMatch = matchSelector(elm, closestSelectorString);
            if (isMatch) {
                return elm;
            }
            elm = elm.parentNode || null;
        }
        return elm;
    }

    function matchSelector(elm, selectorString) {
        var matches = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        return matches.call(elm, selectorString);
    }
    
    
    /**
     * @param  content -> 页面没有被渲染时的内容
     */
    function renderTabsStage1(content, vm) {

        // 匹配在 [codeMarkup] 标记中的数据, 即 ``` ``` 中的数据
        var codeBlockMatch = content.match($tabs.regex.codeMarkup) || [];
        var codeBlockMarkers = codeBlockMatch.map(
            (item, i) =>  {
                                                                    // <!-- tabs: replac CODEBLOCK0 -->
                let codeMarker = "\x3c!-- ".concat($tabs.commentReplaceMark, " CODEBLOCK").concat(i, " --\x3e");
                // 把 contnet 里的 数据内容替换成 [codeMarker]
                content = content.replace(item, codeMarker);
                return codeMarker;
            }

        );
        
        // 主题相关 css, 如 docsify-tabs--classic 
        var tabTheme = $tabs.settings.theme ? "".concat($tabs.classNames.tabBlock, "--").concat($tabs.settings.theme) : "";
        var tempElm = document.createElement("div");
        var tabIndex = 1;
        var tabBlockMatch;

        var tabMatch;
        
        var _loop = () => {
            var tabBlock = tabBlockMatch[0];
            var tabStartReplacement = "";
            var tabEndReplacement = "";
            var hasTabComments = $tabs.settings.tabComments && $tabs.regex.tabCommentMarkup.test(tabBlock);
            var hasTabHeadings = $tabs.settings.tabHeadings && $tabs.regex.tabHeadingMarkup.test(tabBlock);
            var tabBlockIndent = tabBlockMatch[1];
            var tabBlockStart = tabBlockMatch[2];
            var tabBlockEnd = tabBlockMatch[4];
            if (hasTabComments || hasTabHeadings) {
                tabStartReplacement = "\x3c!-- ".concat($tabs.commentReplaceMark, ' <div class="').concat([ $tabs.classNames.tabBlock, tabTheme ].join(" "), '"> --\x3e');
                tabEndReplacement = "\n".concat(tabBlockIndent, "\x3c!-- ").concat($tabs.commentReplaceMark, " </div> --\x3e");
                var _loop2 = function _loop2() {
                    tempElm.innerHTML = tabMatch[2].trim() ? vm.compiler.compile(tabMatch[2]).replace(/<\/?p>/g, "") : "Tab ".concat(tabIndex);
                    var tabTitle = tempElm.innerHTML;
                    var tabContent = (tabMatch[3] || "").trim();
                    var tabData = (tempElm.textContent || tempElm.firstChild.getAttribute("alt") || tempElm.firstChild.getAttribute("src")).trim().toLowerCase();
                    tabBlock = tabBlock.replace(tabMatch[0], (function() {
                        return [ "\n".concat(tabBlockIndent, "\x3c!-- ").concat($tabs.commentReplaceMark, ' <button class="').concat($tabs.classNames.tabButton, '" data-tab="').concat(tabData, '">').concat(tabTitle, "</button> --\x3e"), "\n".concat(tabBlockIndent, "\x3c!-- ").concat($tabs.commentReplaceMark, ' <div class="').concat($tabs.classNames.tabContent, '" data-tab-content="').concat(tabData, '"> --\x3e'), "\n\n".concat(tabBlockIndent).concat(tabContent), "\n\n".concat(tabBlockIndent, "\x3c!-- ").concat($tabs.commentReplaceMark, " </div> --\x3e") ].join("");
                    }));
                    tabIndex++;
                };
                while ((tabMatch = ($tabs.settings.tabComments ? $tabs.regex.tabCommentMarkup.exec(tabBlock) : null) || ($tabs.settings.tabHeadings ? $tabs.regex.tabHeadingMarkup.exec(tabBlock) : null)) !== null) {
                    _loop2();
                }
            }
            tabBlock = tabBlock
                 .replace(tabBlockStart,  tabStartReplacement)
                 .replace(tabBlockEnd,    tabEndReplacement);

            content = content.replace(tabBlockMatch[0], tabBlock);
        };

        while ((tabBlockMatch = $tabs.regex.tabBlockMarkup.exec(content)) !== null) {
            _loop();
        }

        codeBlockMarkers.forEach((function(item, i) {
            content = content.replace(item, (function() {
                return codeBlockMatch[i];
            }));
        }));
        return content;
    }

    function renderTabsStage2(html) {
        var tabReplaceMatch;
        var _loop3 = function _loop3() {
            var tabComment = tabReplaceMatch[0];
            var tabReplacement = tabReplaceMatch[1] || "";
            html = html.replace(tabComment, (function() {
                return tabReplacement;
            }));
        };
        while ((tabReplaceMatch = $tabs.regex.commentReplaceMarkup.exec(html)) !== null) {
            _loop3();
        }
        return html;
    }
    
    function setDefaultTabs() {
        var tabsContainer = document.querySelector(".".concat($tabs.classNames.tabsContainer));
        var tabBlocks = tabsContainer ? Array.apply(null, tabsContainer.querySelectorAll(".".concat($tabs.classNames.tabBlock))) : [];
        var tabStoragePersist = JSON.parse(sessionStorage.getItem(window.location.href)) || {};
        var tabStorageSync = JSON.parse(sessionStorage.getItem("*")) || [];
        setActiveTabFromAnchor();
        tabBlocks.forEach((function(tabBlock, index) {
            var activeButton = tabBlock.querySelector(".".concat($tabs.classNames.tabButtonActive));
            if (!activeButton) {
                if ($tabs.settings.sync && tabStorageSync.length) {
                    activeButton = tabStorageSync.map((function(label) {
                        return tabBlock.querySelector(".".concat($tabs.classNames.tabButton, '[data-tab="').concat(label, '"]'));
                    })).filter((function(elm) {
                        return elm;
                    }))[0];
                }
                if (!activeButton && $tabs.settings.persist) {
                    activeButton = tabBlock.querySelector(".".concat($tabs.classNames.tabButton, '[data-tab="').concat(tabStoragePersist[index], '"]'));
                }
                activeButton = activeButton || tabBlock.querySelector(".".concat($tabs.classNames.tabButton));
                activeButton && activeButton.classList.add($tabs.classNames.tabButtonActive);
            }
        }));
    }
    
    function setActiveTab(elm) {
        var _isMatchingTabSync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var activeButton = getClosest(elm, ".".concat($tabs.classNames.tabButton));
        if (activeButton) {
            var activeButtonLabel = activeButton.getAttribute("data-tab");
            var tabsContainer = document.querySelector(".".concat($tabs.classNames.tabsContainer));
            var tabBlock = activeButton.parentNode;
            var tabButtons = Array.apply(null, tabBlock.querySelectorAll(".".concat($tabs.classNames.tabButton)));
            var tabBlockOffset = tabBlock.offsetTop;
            tabButtons.forEach((function(buttonElm) {
                return buttonElm.classList.remove($tabs.classNames.tabButtonActive);
            }));
            activeButton.classList.add($tabs.classNames.tabButtonActive);
            if (!_isMatchingTabSync) {
                if ($tabs.settings.persist) {
                    var tabBlocks = tabsContainer ? Array.apply(null, tabsContainer.querySelectorAll(".".concat($tabs.classNames.tabBlock))) : [];
                    var tabBlockIndex = tabBlocks.indexOf(tabBlock);
                    var tabStorage = JSON.parse(sessionStorage.getItem(window.location.href)) || {};
                    tabStorage[tabBlockIndex] = activeButtonLabel;
                    sessionStorage.setItem(window.location.href, JSON.stringify(tabStorage));
                }
                if ($tabs.settings.sync) {
                    var tabButtonMatches = tabsContainer ? Array.apply(null, tabsContainer.querySelectorAll(".".concat($tabs.classNames.tabButton, '[data-tab="').concat(activeButtonLabel, '"]'))) : [];
                    var _tabStorage = JSON.parse(sessionStorage.getItem("*")) || [];
                    tabButtonMatches.forEach((function(tabButtonMatch) {
                        setActiveTab(tabButtonMatch, true);
                    }));
                    window.scrollBy(0, 0 - (tabBlockOffset - tabBlock.offsetTop));
                    if (_tabStorage.indexOf(activeButtonLabel) > 0) {
                        _tabStorage.splice(_tabStorage.indexOf(activeButtonLabel), 1);
                    }
                    if (_tabStorage.indexOf(activeButtonLabel) !== 0) {
                        _tabStorage.unshift(activeButtonLabel);
                        sessionStorage.setItem("*", JSON.stringify(_tabStorage));
                    }
                }
            }
        }
    }
    
    function setActiveTabFromAnchor() {
        var anchorID = decodeURIComponent((window.location.hash.match(/(?:id=)([^&]+)/) || [])[1]);
        var anchorSelector = anchorID && ".".concat($tabs.classNames.tabBlock, " #").concat(anchorID);
        var isAnchorElmInTabBlock = anchorID && document.querySelector(anchorSelector);
        if (isAnchorElmInTabBlock) {
            var anchorElm = document.querySelector("#".concat(anchorID));
            var tabContent;
            if (anchorElm.closest) {
                tabContent = anchorElm.closest(".".concat($tabs.classNames.tabContent));
            } else {
                tabContent = anchorElm.parentNode;
                while (tabContent !== document.body && !tabContent.classList.contains("".concat($tabs.classNames.tabContent))) {
                    tabContent = tabContent.parentNode;
                }
            }
            setActiveTab(tabContent.previousElementSibling);
        }
    }


    
})();
//# sourceMappingURL=docsify-tabs.js.map
