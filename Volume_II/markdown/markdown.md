#### html 包裹 markdown 的规则
其中第2和第4点解释了上面所说的问题.

> 1. The only restrictions are that block-level HTML elements — e.g. \<div\>, \<table\>, \<pre\>, \<p\>, etc. — **must be separated from surrounding content by blank lines**, and the start and end tags of the block should not be indented with tabs or spaces. Markdown is smart enough not to add extra (unwanted) \<p\> tags around HTML block-level tags.
> 2. Note that Markdown formatting syntax is not processed within block-level HTML tags. E.g., you can’t use Markdown-style /*emphasis/* inside an HTML block.
> 3. Span-level HTML tags — e.g. \<span\>, \<cite\>, or \<del\> — can be used anywhere in a Markdown paragraph, list item, or header. If you want, you can even use HTML tags instead of Markdown formatting; e.g. if you’d prefer to use HTML \<a\> or \<img\> tags instead of Markdown’s link or image syntax, go right ahead.
> 4. Unlike block-level HTML tags, Markdown syntax is processed within span-level tags.

#### markdown文本换行
> 文本末尾加两空格，再回车
