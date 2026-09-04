// 必修第一册 知识卡片数据
// 人教A版（2019）公开目录要点 · 自编学习笔记（非教材原文）
// 内容校对：2026-09-04
window.__CONTENT_META = Object.assign(window.__CONTENT_META || {}, {
  lastUpdated: "2026-09-04",
  edition: "人教A版（2019）",
  scope: "必修第一册、必修第二册公开目录要点",
  note: "自编学习笔记，非教材原文；选择性必修未收录"
});
window.__vol1 = {
  "第一章 集合与常用逻辑用语": [
    {
      title: "1.1 集合的概念",
      content: `<p class="label-def">【定义】</p>
      <p>把一些确定的对象看作一个整体，这个整体叫做<strong>集合</strong>（集）；其中的对象叫做<strong>元素</strong>。</p>
      <p><strong>集合中元素的特性：</strong>确定性、互异性、无序性。</p>
      <p class="label-def">【关系表示】</p>
      <ul>
      <li>$a\\in A$ — $a$是集合$A$的元素（$a$属于$A$）</li>
      <li>$a\\notin A$ — $a$不是集合$A$的元素（$a$不属于$A$）</li>
      </ul>
      <p class="label-def">【常用数集及其记法】</p>
      <ul>
      <li>$\\mathbb{N}$ — 自然数集（本册约定含 $0$）</li>
      <li>$\\mathbb{N}^*$ 或 $\\mathbb{N}_+$ — 正整数集（不含 $0$）</li>
      <li>$\\mathbb{Z}$ — 整数集</li>
      <li>$\\mathbb{Q}$ — 有理数集</li>
      <li>$\\mathbb{R}$ — 实数集</li>
      </ul>
      <p class="label-def">【集合的表示法】</p>
      <ul>
      <li><strong>列举法：</strong>把集合的所有元素一一列举出来，并用花括号括起来。如 $\\{1,2,3\\}$</li>
      <li><strong>描述法：</strong>用元素的共同特征表示集合，形式为 $\\{x\\in I\\mid p(x)\\}$。如 $\\{x\\in\\mathbb{R}\\mid x>0\\}$</li>
      </ul>
      <p class="label-attention">【注意】</p>
      <ul>
      <li>$\\{0\\}$ 与 $\\varnothing$ 不同：$\\{0\\}$ 含一个元素 $0$，$\\varnothing$ 不含任何元素</li>
      <li>描述法中竖线前面写元素的代表形式，后面写该元素应满足的条件</li>
      </ul>`,
      tags: ["集合","元素","数集","列举法","描述法","★"]
    },
    {
      title: "1.2 集合间的基本关系",
      content: `<p class="label-def">【子集】</p>
      <p>对于集合$A$、$B$，若$A$中<strong>任意一个元素</strong>都属于$B$，就称$A$是$B$的子集，记作</p>
      <p>$$A\\subseteq B \\quad \\text{（或} \\; B\\supseteq A \\text{）}$$</p>
      <p>读作"$A$包含于$B$"（或"$B$包含$A$"）。</p>
      <p class="label-def">【真子集】</p>
      <p>如果$A\\subseteq B$，但存在元素$x\\in B$且$x\\notin A$，就称$A$是$B$的<strong>真子集</strong>，记作</p>
      <p>$$A\\subsetneq B \\quad \\text{（或} \\; B\\supsetneq A \\text{）}$$</p>
      <p class="label-def">【集合相等】</p>
      <p>如果$A\\subseteq B$且$B\\subseteq A$，则$A=B$。</p>
      <p class="label-def">【空集】</p>
      <p>不含任何元素的集合叫做<strong>空集</strong>，记作$\\varnothing$。</p>
      <p><strong>规定：</strong>空集是任何集合的子集，即$\\varnothing\\subseteq A$。</p>
      <p class="label-attention">【注意】</p>
      <p>$\\varnothing$、$\\{0\\}$、$\\{\\varnothing\\}$的区别：$\\varnothing$不含元素；$\\{0\\}$含一个元素0；$\\{\\varnothing\\}$含一个元素$\\varnothing$。</p>`,
      tags: ["子集","真子集","集合相等","空集","★"]
    },
    {
      title: "1.3 集合的基本运算",
      content: `<p class="label-def">【并集】</p>
      <p>由所有属于$A$<strong>或</strong>属于$B$的元素组成的集合，称为$A$与$B$的并集，记作$A\\cup B$，即</p>
      <p>$$A\\cup B = \\{x\\mid x\\in A,\\text{或}x\\in B\\}$$</p>
      <p class="label-def">【交集】</p>
      <p>由所有属于$A$<strong>且</strong>属于$B$的元素组成的集合，称为$A$与$B$的交集，记作$A\\cap B$，即</p>
      <p>$$A\\cap B = \\{x\\mid x\\in A,\\text{且}x\\in B\\}$$</p>
      <p class="label-def">【补集】</p>
      <p>所研究问题中涉及的全部对象构成<strong>全集</strong>，记作$U$。</p>
      <p>由$U$中<strong>不属于</strong>$A$的元素组成的集合，称为$A$相对于$U$的补集，记作$\\complement_U A$，即</p>
      <p>$$\\complement_U A = \\{x\\mid x\\in U,\\text{且}x\\notin A\\}$$</p>
      <p class="label-def">【运算律】</p>
      <ul>
      <li>$A\\cap A = A$，$A\\cup A = A$</li>
      <li>$A\\cap \\varnothing = \\varnothing$，$A\\cup \\varnothing = A$</li>
      <li>$A\\cap B \\subseteq A \\subseteq A\\cup B$</li>
      <li><strong>对偶公式（常用）：</strong>$\\complement_U(A\\cap B) = (\\complement_U A)\\cup(\\complement_U B)$，$\\complement_U(A\\cup B) = (\\complement_U A)\\cap(\\complement_U B)$</li>
      </ul>
      <p class="label-attention">【注意】</p>
      <p>韦恩图（Venn图）是处理集合运算的直观工具，常用于含参数集合问题的分析。</p>`,
      tags: ["并集","交集","补集","全集","德摩根律","Venn图","★"]
    },
    {
      title: "1.4 充分条件与必要条件",
      content: `<p class="label-def">【定义】</p>
      <p>若命题「若$p$，则$q$」为真，即由$p$可推出$q$，记作$p\\Rightarrow q$。</p>
      <ul>
      <li>$p\\Rightarrow q$ ⟹ $p$是$q$的<strong>充分条件</strong>，$q$是$p$的<strong>必要条件</strong></li>
      <li>$p\\Leftrightarrow q$ ⟹ $p$是$q$的<strong>充要条件</strong>（$p$等价于$q$）</li>
      </ul>
      <p class="label-def">【四种条件的判定】</p>
      <table class="mini-table">
      <tr><th>条件关系</th><th>符号表示</th><th>含义</th></tr>
      <tr><td>充分不必要</td><td>$p\\Rightarrow q$且$q\\nRightarrow p$</td><td>有p足够，但p不是必须</td></tr>
      <tr><td>必要不充分</td><td>$p\\nRightarrow q$且$q\\Rightarrow p$</td><td>没有p不行，但有p不够</td></tr>
      <tr><td>充要</td><td>$p\\Leftrightarrow q$</td><td>p和q等价</td></tr>
      <tr><td>既不充分也不必要</td><td>$p\\nRightarrow q$且$q\\nRightarrow p$</td><td>无关</td></tr>
      </table>
      <p class="label-def">【集合观点下的充要条件】</p>
      <p>设$p$对应的集合为$A$，$q$对应的集合为$B$：</p>
      <ul>
      <li>$A\\subseteq B$ ⟺ $p$是$q$的充分条件</li>
      <li>$A\\subsetneq B$ ⟺ $p$是$q$的充分不必要条件</li>
      <li>$A\\supseteq B$ ⟺ $p$是$q$的必要条件</li>
      <li>$A = B$ ⟺ $p$是$q$的充要条件</li>
      </ul>`,
      tags: ["充分条件","必要条件","充要条件","集合观点","★"]
    },
    {
      title: "1.5 全称量词与存在量词",
      content: `<p class="label-def">【全称量词】</p>
      <p>短语"所有的""任意一个"在逻辑中通常叫做<strong>全称量词</strong>，用符号"$\\forall$"表示。</p>
      <p><strong>全称量词命题：</strong>含有全称量词的命题，形式为"对$M$中任意一个$x$，$p(x)$成立"，记作$\\forall x\\in M,\\;p(x)$。</p>
      <p class="label-def">【存在量词】</p>
      <p>短语"存在一个""至少有一个"在逻辑中通常叫做<strong>存在量词</strong>，用符号"$\\exists$"表示。</p>
      <p><strong>存在量词命题：</strong>含有存在量词的命题，形式为"存在$M$中的元素$x$，$p(x)$成立"，记作$\\exists x\\in M,\\;p(x)$。</p>
      <p class="label-def">【含有一个量词的命题的否定】</p>
      <ul>
      <li><strong>全称量词命题的否定：</strong>$\\neg(\\forall x\\in M,\\;p(x)) \\equiv \\exists x\\in M,\\;\\neg p(x)$</li>
      <li><strong>存在量词命题的否定：</strong>$\\neg(\\exists x\\in M,\\;p(x)) \\equiv \\forall x\\in M,\\;\\neg p(x)$</li>
      </ul>
      <p class="label-attention">【口诀】</p>
      <p>改量词，否结论——全称变存在，存在变全称，再把结论否定。</p>`,
      tags: ["全称量词","存在量词","命题否定","∀","∃","★"]
    }
  ],
  // 后续章节将在确认格式后续写
    "第二章 一元二次函数、方程和不等式": [
    {
      title: "2.1 等式性质与不等式性质",
      content: `<p class="label-def">【定义】</p>
<p>用不等号（<, >, $\\le$, $\\ge$, $\\neq$）连接两个代数式表示不等关系的式子，叫做<strong>不等式</strong>。</p>
<p>两个实数 a、b 之间的大小关系可以通过它们的差来确定：</p>
<ul>
<li>$a - b > 0 \\iff a > b$</li>
<li>$a - b = 0 \\iff a = b$</li>
<li>$a - b  \\lt  0 \\iff a  \\lt  b$</li>
</ul>
<p class="label-def">【性质】</p>
<p><strong>不等式的基本性质</strong>（$a, b, c \\in \\mathbb{R}$）：</p>
<ul>
<li><strong>性质1（对称性）</strong>：$a > b \\iff b  \\lt  a$</li>
<li><strong>性质2（传递性）</strong>：$a > b, b > c \\Rightarrow a > c$</li>
<li><strong>性质3（可加性）</strong>：$a > b \\Rightarrow a + c > b + c$</li>
<li><strong>性质4（可乘性）</strong>：$a > b, c > 0 \\Rightarrow ac > bc$；$a > b, c  \\lt  0 \\Rightarrow ac  \\lt  bc$</li>
<li><strong>性质5（同向可加性）</strong>：$a > b, c > d \\Rightarrow a + c > b + d$</li>
<li><strong>性质6（同向同正可乘性）</strong>：$a > b > 0, c > d > 0 \\Rightarrow ac > bd$</li>
<li><strong>性质7（可乘方性）</strong>：$a > b > 0 \\Rightarrow a^n > b^n$（$n \\in \\mathbb{N}, n \\ge 2$）</li>
<li><strong>性质8（可开方性）</strong>：$a > b > 0 \\Rightarrow \\sqrt[n]{a} > \\sqrt[n]{b}$（$n \\in \\mathbb{N}, n \\ge 2$）</li>
</ul>
<p class="label-attention">【注意】</p>
<ul>
<li>不等式两边同乘一个负数时，不等号方向必须改变。</li>
<li>倒数性质：$a > b > 0 \\Rightarrow \\frac{1}{a}  \\lt  \\frac{1}{b}$。</li>
</ul>`,
      tags: ["不等关系", "不等式性质", "对称性", "传递性", "可加性", "可乘性", "★"]
    },
    {
      title: "2.2 基本不等式",
      content: `<p class="label-def">【重要不等式】</p>
<p>$\\forall a, b \\in \\mathbb{R}$，有 $a^2 + b^2 \\ge 2ab$，当且仅当 $a = b$ 时等号成立。</p>
<p class="label-def">【基本不等式】</p>
<p>$\\forall a, b > 0$，有 $\\sqrt{ab} \\le \\dfrac{a + b}{2}$，当且仅当 $a = b$ 时等号成立。</p>
<p>其中，$\\dfrac{a + b}{2}$ 叫做正数 a, b 的<strong>算术平均数</strong>，$\\sqrt{ab}$ 叫做正数 a, b 的<strong>几何平均数</strong>。</p>
<p>基本不等式表明：两个正数的算术平均数不小于它们的几何平均数。</p>
<p class="label-def">【一正二定三相等】</p>
<p>使用基本不等式求最值时，必须满足：</p>
<ul>
<li><strong>一正</strong>：a, b 或各项必须为正数；</li>
<li><strong>二定</strong>：和或积必须为定值（和为定值则积有最大值，积为定值则和有最小值）；</li>
<li><strong>三相等</strong>：当且仅当 $a = b$ 时等号成立。</li>
</ul>
<p class="label-def">【常用变形】</p>
<ul>
<li>$a + b \\ge 2\\sqrt{ab}$（$a, b > 0$）</li>
<li>$ab \\le \\left(\\dfrac{a + b}{2}\\right)^2$（$a, b > 0$）</li>
<li>$\\dfrac{b}{a} + \\dfrac{a}{b} \\ge 2$（$a, b$ 同号）</li>
</ul>
<p class="label-attention">【注意】</p>
<ul>
<li>若多次使用基本不等式，必须保证每次取等条件一致（"同时取等"）。</li>
<li>当条件不满足"一正"时，可通过配符号转化为正数情形。</li>
</ul>`,
      tags: ["基本不等式", "算术平均数", "几何平均数", "一正二定三相等", "最值", "★"]
    },
    {
      title: "2.3 二次函数与一元二次方程、不等式",
      content: `<p class="label-def">【定义】</p>
<p>一般地，我们把只含有一个未知数，并且未知数的最高次数是 2 的不等式，称为<strong>一元二次不等式</strong>。它的一般形式为：</p>
<p>$ax^2 + bx + c > 0$（或 $ \\lt  0$，其中 $a \\neq 0$）。</p>
<p class="label-def">【一元二次不等式的解法（$a > 0$）】</p>
<table class="mini-table">
<tr><th>$\\Delta = b^2-4ac$</th><th>$\\Delta > 0$</th><th>$\\Delta = 0$</th><th>$\\Delta  \\lt  0$</th></tr>
<tr><td>$ax^2+bx+c=0$ 的根</td><td>两不等实根 $x_1  \\lt  x_2$</td><td>两相等实根 $x_1=x_2=-\\dfrac{b}{2a}$</td><td>无实根</td></tr>
<tr><td>$ax^2+bx+c>0$ 解集</td><td>$\\{x\\mid x&lt;x_1\\text{ 或 }x>x_2\\}$</td><td>$\\{x\\mid x\\neq -\\dfrac{b}{2a}\\}$</td><td>$\\mathbb{R}$</td></tr>
<tr><td>$ax^2+bx+c \\lt 0$ 解集</td><td>$\\{x\\mid x_1&lt;x&lt;x_2\\}$</td><td>$\\varnothing$</td><td>$\\varnothing$</td></tr>
</table>
<p class="label-attention">【注意】</p>
<ul>
<li>若 $a  \\lt  0$，可先将二次项系数化为正数（不等式两边同乘 $-1$，不等号变向），再按上述方法求解。</li>
<li>口诀："大于取两边，小于取中间"。</li>
<li>对于含参数的一元二次不等式，需讨论二次项系数、判别式及根的大小关系。</li>
</ul>`,
      tags: ["一元二次不等式", "二次函数", "判别式", "Δ", "解法", "★"]
    },
    {
      title: "2.3 续 一元二次不等式的应用",
      content: `<p class="label-def">【分式不等式】</p>
<p>$\\dfrac{f(x)}{g(x)} > 0$（或 $ \\lt  0$）可转化为整式不等式：</p>
<ul>
<li>$\\dfrac{f(x)}{g(x)} > 0 \\iff f(x) \\cdot g(x) > 0$</li>
<li>$\\dfrac{f(x)}{g(x)} \\ge 0 \\iff \\begin{cases} f(x) \\cdot g(x) \\ge 0 \\\\ g(x) \\neq 0 \\end{cases}$</li>
</ul>
<p class="label-def">【穿根法（高次不等式）】</p>
<p>步骤：① 因式分解，化为 $(x-x_1)(x-x_2)\\cdots(x-x_n) > 0$ 形式；② 在数轴上标出根（从右上方开始）；③ 奇穿偶不穿（奇次根穿过去，偶次根弹回来）；④ 根据符号写出解集。</p>
<p class="label-def">【恒成立问题】</p>
<p>$ax^2+bx+c > 0$ 在 $\\mathbb{R}$ 上恒成立的条件：$a > 0$ 且 $\\Delta  \\lt  0$（或 $a=b=0$ 且 $c > 0$）。</p>
<p>$ax^2+bx+c  \\lt  0$ 在 $\\mathbb{R}$ 上恒成立的条件：$a  \\lt  0$ 且 $\\Delta  \\lt  0$（退化：$a=b=0$ 且 $c  \\lt  0$）。</p>
<p>若要 $\\ge 0$ 恒成立：需 $a>0$ 且 $\\Delta\\le 0$，或退化为非负常数。</p>
<p class="label-attention">【注意】</p>
<ul>
<li>解分式不等式时，不能直接去分母（分母正负未知），应移项通分后再转化。</li>
<li>恒成立问题中，若二次项系数含有参数，需先讨论 $a = 0$ 的情况。</li>
</ul>`,
      tags: ["分式不等式", "穿根法", "恒成立", "高次不等式", "应用", "★"]
    }
  ],
  "第三章 函数概念与性质": [
  {
    title: "3.1 函数的概念及其表示",
    content: `<p class="label-def">【定义】</p>
<p>设 $A$、$B$ 是非空实数集。若对 $A$ 中<strong>任意</strong>一个数 $x$，按确定对应关系 $f$，在 $B$ 中都有<strong>唯一</strong>的数 $y$ 与之对应，则称 $f:A\\to B$ 为从 $A$ 到 $B$ 的一个<strong>函数</strong>，记作</p>
<p>$$y=f(x),\\quad x\\in A$$</p>
<p>其中 $x$ 是<strong>自变量</strong>，$A$ 是<strong>定义域</strong>；对应的 $y$ 是<strong>函数值</strong>，集合 $\\{f(x)\\mid x\\in A\\}$ 是<strong>值域</strong>。</p>
<p class="label-def">【函数的三要素】</p>
<ul>
<li><strong>定义域</strong>：自变量的取值范围（集合 $A$）；</li>
<li><strong>对应关系</strong>：$f$；</li>
<li><strong>值域</strong>：$\\{f(x)\\mid x\\in A\\}$。</li>
</ul>
<p>两个函数相等当且仅当<strong>定义域</strong>与<strong>对应关系</strong>相同（与用什么字母无关）。</p>
<p class="label-def">【函数的表示法】</p>
<ul>
<li><strong>解析法</strong>：如 $y=x^2+1$；</li>
<li><strong>图像法</strong>：用平面上的点集表示对应；</li>
<li><strong>列表法</strong>：列出部分自变量与函数值。</li>
</ul>
<p class="label-attention">【注意】</p>
<ul>
<li>值域是 $B$ 的子集，不必等于 $B$。</li>
<li>$f(x)$ 表示函数值，不是 $f$ 乘以 $x$。</li>
<li>求定义域：分母不为 $0$、偶次根号下非负、对数真数大于 $0$ 且底数合法、$0^0$ 不定义等。</li>
</ul>`,
    tags: ["函数", "函数三要素", "定义域", "值域", "对应关系", "解析法", "图像法", "列表法", "★"]
  },
  {
    title: "3.1 函数的定义域与值域",
    content: `<p class="label-def">【常见函数的定义域】</p>
<ul>
<li>一次函数 $f(x)=kx+b$（$k\\neq 0$）：$\\mathbb{R}$；</li>
<li>二次函数 $f(x)=ax^2+bx+c$（$a\\neq 0$）：$\\mathbb{R}$；</li>
<li>反比例函数 $f(x)=\\dfrac{k}{x}$（$k\\neq 0$）：$\\{x\\mid x\\neq 0\\}$；</li>
<li>幂函数 $f(x)=x^{\\alpha}$：定义域随 $\\alpha$ 而定；</li>
<li>根式 $f(x)=\\sqrt[n]{x}$：$n$ 为偶数时 $x\\ge 0$，$n$ 为奇数时 $x\\in\\mathbb{R}$；</li>
<li>分式：分母 $\\neq 0$。</li>
</ul>
<p class="label-def">【求值域的常用方法】</p>
<ul>
<li><strong>观察法</strong>：直接看出取值范围；</li>
<li><strong>配方法</strong>：二次型配方求最值；</li>
<li><strong>换元法</strong>：设新元并确定新元范围；</li>
<li><strong>分离常数法</strong>：分式型把分子凑成分母的倍数；</li>
<li><strong>单调性法</strong>：先定单调区间再看端点。</li>
</ul>
<p class="label-attention">【注意】</p>
<ul>
<li>先定义域，后值域。</li>
<li>换元后必须写出新元的取值范围。</li>
</ul>`,
    tags: ["定义域", "值域", "配方法", "换元法", "分离常数法", "单调性法", "★"]
  },
  {
    title: "3.2 函数的单调性",
    content: `<p class="label-def">【单调性的定义】</p>
<p>设函数 $f(x)$ 的定义域为 $I$，区间 $D\\subseteq I$：</p>
<ul>
<li>若 $\\forall x_1,x_2\\in D$，当 $x_1 \\lt x_2$ 时都有 $f(x_1) \\lt f(x_2)$，则称 $f$ 在 $D$ 上<strong>单调递增</strong>；</li>
<li>若 $\\forall x_1,x_2\\in D$，当 $x_1 \\lt x_2$ 时都有 $f(x_1)>f(x_2)$，则称 $f$ 在 $D$ 上<strong>单调递减</strong>。</li>
</ul>
<p>具有单调性的区间叫做<strong>单调区间</strong>。</p>
<p class="label-def">【函数的最大（小）值】</p>
<p>设定义域为 $I$，若存在实数 $M$ 满足：</p>
<ul>
<li><strong>最大值</strong>：$\\forall x\\in I$ 有 $f(x)\\le M$，且 $\\exists x_0\\in I$ 使 $f(x_0)=M$；</li>
<li><strong>最小值</strong>：$\\forall x\\in I$ 有 $f(x)\\ge M$，且 $\\exists x_0\\in I$ 使 $f(x_0)=M$。</li>
</ul>
<p class="label-attention">【注意】</p>
<ul>
<li>单调性是<strong>区间上</strong>的性质，不同区间可以不同。</li>
<li>用定义证明常用作差（或作商）；不能只代入几个特殊值。</li>
<li>不要把递增区间与递减区间用 $\\cup$ 写成「一个」单调区间。</li>
<li>开区间上连续函数可以有值域端点却取不到最值。</li>
</ul>`,
    tags: ["单调性", "单调递增", "单调递减", "单调区间", "最大值", "最小值", "★"]
  },
  {
    title: "3.2 函数的奇偶性",
    content: `<p class="label-def">【奇偶性的定义】</p>
<p>设 $f$ 的定义域 $I$ 关于原点对称（$\\forall x\\in I$ 有 $-x\\in I$）：</p>
<ul>
<li>若 $\\forall x\\in I$ 有 $f(-x)=-f(x)$，则 $f$ 为<strong>奇函数</strong>；</li>
<li>若 $\\forall x\\in I$ 有 $f(-x)=f(x)$，则 $f$ 为<strong>偶函数</strong>。</li>
</ul>
<p class="label-def">【图像特征】</p>
<ul>
<li>奇函数：关于<strong>原点</strong>对称；</li>
<li>偶函数：关于 <strong>$y$ 轴</strong>对称。</li>
</ul>
<p class="label-def">【常用性质】</p>
<ul>
<li>奇函数若在 $x=0$ 有定义，则 $f(0)=0$；</li>
<li>奇函数在对称区间上单调性相同；偶函数在对称区间上单调性相反；</li>
<li>奇+奇=奇，偶+偶=偶，奇×奇=偶，偶×偶=偶，奇×偶=奇。</li>
</ul>
<p class="label-attention">【注意】</p>
<ul>
<li>定义域不关于原点对称 ⇒ 非奇非偶。</li>
<li>既奇又偶 ⇒ $f(x)=0$（定义域仍须关于原点对称）。</li>
</ul>`,
    tags: ["奇偶性", "奇函数", "偶函数", "图像对称", "原点对称", "y轴对称", "★"]
  },
  {
    title: "3.3 幂函数",
    content: `<p class="label-def">【幂函数的定义】</p>
<p>形如 $y=x^{\\alpha}$（$\\alpha$ 为常数）的函数称为<strong>幂函数</strong>。系数为 $1$，底是自变量，指数是常数。例如 $y=2x^3$ 不是幂函数。</p>
<p class="label-def">【五种常见幂函数】</p>
<table class="mini-table">
<thead>
<tr><th>函数</th><th>$y=x$</th><th>$y=x^2$</th><th>$y=x^3$</th><th>$y=x^{1/2}$</th><th>$y=x^{-1}$</th></tr>
</thead>
<tbody>
<tr><td>定义域</td><td>$\\mathbb{R}$</td><td>$\\mathbb{R}$</td><td>$\\mathbb{R}$</td><td>$[0,+\\infty)$</td><td>$(-\\infty,0)\\cup(0,+\\infty)$</td></tr>
<tr><td>值域</td><td>$\\mathbb{R}$</td><td>$[0,+\\infty)$</td><td>$\\mathbb{R}$</td><td>$[0,+\\infty)$</td><td>$(-\\infty,0)\\cup(0,+\\infty)$</td></tr>
<tr><td>奇偶性</td><td>奇</td><td>偶</td><td>奇</td><td>非奇非偶</td><td>奇</td></tr>
<tr><td>单调性</td><td>增</td><td>$(-\\infty,0]$ 减<br/>$[0,+\\infty)$ 增</td><td>增</td><td>增</td><td>各区间内减</td></tr>
<tr><td>定点</td><td colspan="5">都过 $(1,1)$</td></tr>
</tbody>
</table>
<p class="label-attention">【注意】</p>
<ul>
<li>任意幂函数在 $(0,+\\infty)$ 上都有定义，且过 $(1,1)$。</li>
<li>$\\alpha>0$ 时在 $(0,+\\infty)$ 递增；$\\alpha \\lt 0$ 时在 $(0,+\\infty)$ 递减。</li>
<li>分数指数要先化为根式再定定义域。</li>
</ul>`,
    tags: ["幂函数", "y=x^α", "图像性质", "定义域", "奇偶性", "单调性", "★"]
  },
  {
    title: "3.3 幂函数的图像特征与比较大小",
    content: `<p class="label-def">【在 $(0,+\\infty)$ 上的图像】</p>
<ul>
<li>都过 <strong>$(1,1)$</strong>；</li>
<li>$\\alpha>0$：在 $(0,+\\infty)$ 递增；若 $0$ 属于定义域（如 $y=x,x^2,x^3,\\sqrt{x}$），则过原点；</li>
<li>无理指数时定义域常取 $(0,+\\infty)$，此时<strong>不过</strong>原点；</li>
<li>$\\alpha \\lt 0$：不过原点，递减，以两轴为渐近线；</li>
<li>$\\alpha>1$：在 $(0,1)$ 位于 $y=x$ 下方，在 $(1,+\\infty)$ 位于 $y=x$ 上方；</li>
<li>$0 \\lt \\alpha \\lt 1$：与上条相反。</li>
</ul>
<p class="label-def">【比较大小】</p>
<ul>
<li>同指数不同底：用幂函数单调性（底为正）；</li>
<li>同底不同指数：用指数函数单调性（先看底与 $1$ 的大小）；</li>
<li>底、指数都不同：插入中间量（$0$、$1$ 或已知幂值）。</li>
</ul>
<p class="label-attention">【注意】</p>
<p>幂函数是「底变指数不变」$y=x^{\\alpha}$；指数函数是「底不变指数变」$y=a^x$。</p>`,
    tags: ["幂函数图像", "比较大小", "同指数", "同底", "中间量", "图像特征", "★"]
  },
  {
    title: "3.4 函数的应用（一）",
    content: `<p class="label-def">【建模步骤】</p>
<ol>
<li><strong>审题</strong>：分清已知、所求与实际限制；</li>
<li><strong>建模</strong>：选定变量，写出函数关系与定义域；</li>
<li><strong>求解</strong>：用单调性、最值等方法计算；</li>
<li><strong>验证</strong>：把结果放回实际情境检查是否合理。</li>
</ol>
<p class="label-def">【常见模型】</p>
<ul>
<li>一次函数 $y=kx+b$（$k\\neq 0$）：均匀变化；</li>
<li>二次函数 $y=ax^2+bx+c$（$a\\neq 0$）：面积、利润等最值；</li>
<li>分段函数：计费、阶梯规则等。</li>
</ul>
<p class="label-attention">【注意】</p>
<ul>
<li>定义域必须符合实际（长度、时间、件数等通常非负，件数还常取整数）。</li>
<li>二次函数最值要看对称轴是否落在定义域内。</li>
<li>分段函数是<strong>一个</strong>函数，衔接点要单独检查。</li>
</ul>`,
    tags: ["函数应用", "数学模型", "一次函数", "二次函数", "分段函数", "实际问题建模", "★"]
  },
  {
    title: "3.4 分段函数与函数模型",
    content: `<p class="label-def">【分段函数】</p>
<p>在定义域的不同部分用不同对应关系给出的函数。例如</p>
<p>$$f(x)=\\begin{cases} x+1, & x\\ge 0 \\\\ -x, & x \\lt 0 \\end{cases}$$</p>
<p class="label-def">【一次 / 二次模型】</p>
<ul>
<li>一次：待定系数求 $k,b$；$k>0$ 递增，$k \\lt 0$ 递减；</li>
<li>二次：对称轴 $x=-\\dfrac{b}{2a}$；$a \\lt 0$ 有最大值，$a>0$ 有最小值；轴不在定义域内则在端点取最值。</li>
</ul>
<p class="label-attention">【注意】</p>
<p>分段求最值时先各段分别求，再比较；人数、件数等要取符合题意的整数。</p>`,
    tags: ["分段函数", "一次函数模型", "二次函数模型", "实际应用", "最值问题", "待定系数法", "★"]
  }
    ],
    "第四章 指数函数与对数函数": [
    {
      title: "4.1 指数与指数幂的运算",
      content: `<p class="label-def">【n次方根】</p>
<p>如果 $x^n = a$（$n>1$ 且 $n\\in\\mathbb{N}^*$），那么 $x$ 叫做 $a$ 的 <strong>n次方根</strong>。</p>
<p>式子 $\\sqrt[n]{a}$ 叫做<strong>根式</strong>，其中 $n$ 叫做根指数，$a$ 叫做被开方数。</p>
<p class="label-def">【根式的性质】</p>
<ul>
<li>$(\\sqrt[n]{a})^n = a$（$n$ 为奇数时 $a\\in\\mathbb{R}$；$n$ 为偶数时 $a\\ge 0$）</li>
<li>当 $n$ 为奇数时，$\\sqrt[n]{a^n} = a$</li>
<li>当 $n$ 为偶数时，$\\sqrt[n]{a^n} = |a| = \\begin{cases} a, & a\\ge 0 \\\\ -a, & a \\lt 0 \\end{cases}$</li>
</ul>
<p class="label-def">【分数指数幂】</p>
<p>正数的正分数指数幂：$a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$（$a>0, m,n\\in\\mathbb{N}^*, n>1$）</p>
<p>正数的负分数指数幂：$a^{-\\frac{m}{n}} = \\dfrac{1}{a^{\\frac{m}{n}}} = \\dfrac{1}{\\sqrt[n]{a^m}}$（$a>0$）</p>
<p><strong>0的正分数指数幂等于0，0的负分数指数幂没有意义。</strong></p>
<p class="label-def">【有理数指数幂的运算性质】</p>
<ul>
<li>$a^r a^s = a^{r+s}$（$a>0, r,s\\in\\mathbb{Q}$）</li>
<li>$(a^r)^s = a^{rs}$（$a>0, r,s\\in\\mathbb{Q}$）</li>
<li>$(ab)^r = a^r b^r$（$a>0, b>0, r\\in\\mathbb{Q}$）</li>
</ul>
<p class="label-attention">【注意】</p>
<ul>
<li>分数指数幂不能随意约分，如 $(-2)^{\\frac{2}{4}} \\neq (-2)^{\\frac{1}{2}}$（负数开偶次方无意义）。</li>
<li>无理数指数幂 $a^\\alpha$（$a>0$，$\\alpha$ 为无理数）是一个确定的实数，有理数指数幂的运算性质同样适用。</li>
</ul>`,
      tags: ["n次方根", "根式", "分数指数幂", "指数运算", "★"]
    },
    {
      title: "4.2 指数函数",
      content: `<p class="label-def">【定义】</p>
<p>一般地，形如 $y = a^x$（$a>0$ 且 $a\\neq 1$）的函数叫做<strong>指数函数</strong>，其中 $x$ 是自变量，定义域为 $\\mathbb{R}$。</p>
<p class="label-def">【指数函数的图像与性质】</p>
<table class="mini-table">
<tr><th></th><th>$a>1$</th><th>$0 \\lt a \\lt 1$</th></tr>
<tr><td>图像</td><td>单调递增，过点 $(0,1)$</td><td>单调递减，过点 $(0,1)$</td></tr>
<tr><td>定义域</td><td colspan="2">$\\mathbb{R}$</td></tr>
<tr><td>值域</td><td colspan="2">$(0, +\\infty)$</td></tr>
<tr><td>奇偶性</td><td colspan="2">非奇非偶</td></tr>
<tr><td>单调性</td><td>在 $\\mathbb{R}$ 上单调递增</td><td>在 $\\mathbb{R}$ 上单调递减</td></tr>
<tr><td>定点</td><td colspan="2">恒过点 $(0,1)$ 和 $(1,a)$</td></tr>
<tr><td>底数关系</td><td colspan="2">$a^x$ 与 $a^{-x}$ 的图像关于 $y$ 轴对称</td></tr>
</table>
<p class="label-attention">【注意】</p>
<ul>
<li>指数函数的<strong>特征</strong>：系数为1，指数位置只有 $x$（不能是 $2x$ 或 $x+1$），底数 $a>0$ 且 $a\\neq 1$。</li>
<li>比较幂值大小：同底用单调性，同指数用函数图像位置（底大图高<strong>右侧</strong>），不同底不同指找中间量。</li>
</ul>`,
      tags: ["指数函数", "y=a^x", "单调性", "定义域", "值域", "★"]
    },
    {
      title: "4.3 对数",
      content: `<p class="label-def">【定义】</p>
<p>如果 $a^x = N$（$a>0$ 且 $a\\neq 1$），那么 $x$ 叫做以 $a$ 为底 $N$ 的<strong>对数</strong>，记作 $x = \\log_a N$。</p>
<p>其中 $a$ 叫做对数的底数，$N$ 叫做真数。</p>
<p class="label-def">【常用对数与自然对数】</p>
<ul>
<li><strong>常用对数</strong>：以10为底的对数，$\\lg N = \\log_{10} N$</li>
<li><strong>自然对数</strong>：以 $e$（$e\\approx 2.71828$）为底的对数，$\\ln N = \\log_e N$</li>
</ul>
<p class="label-def">【对数的基本性质】</p>
<ul>
<li>$\\log_a 1 = 0$，$\\log_a a = 1$</li>
<li>$a^{\\log_a N} = N$（对数恒等式）</li>
<li>负数和零没有对数（真数 $N>0$）</li>
</ul>
<p class="label-def">【对数的运算性质】</p>
<p>若 $a>0$ 且 $a\\neq 1$，$M>0,N>0$，则：</p>
<ul>
<li>$\\log_a(MN) = \\log_a M + \\log_a N$</li>
<li>$\\log_a\\dfrac{M}{N} = \\log_a M - \\log_a N$</li>
<li>$\\log_a M^n = n\\log_a M$（$n\\in\\mathbb{R}$）</li>
</ul>
<p class="label-def">【换底公式】</p>
<p>$\\log_a b = \\dfrac{\\log_c b}{\\log_c a}$（$a>0,a\\neq 1,c>0,c\\neq 1,b>0$）</p>
<p>常用推论：$\\log_a b = \\dfrac{1}{\\log_b a}$，$\\log_{a^n} b^m = \\dfrac{m}{n}\\log_a b$。</p>`,
      tags: ["对数", "lg", "ln", "换底公式", "对数运算", "★"]
    },
    {
      title: "4.4 对数函数",
      content: `<p class="label-def">【定义】</p>
<p>一般地，形如 $y = \\log_a x$（$a>0$ 且 $a\\neq 1$）的函数叫做<strong>对数函数</strong>，定义域为 $(0, +\\infty)$。</p>
<p class="label-def">【对数函数的图像与性质】</p>
<table class="mini-table">
<tr><th></th><th>$a>1$</th><th>$0 \\lt a \\lt 1$</th></tr>
<tr><td>图像</td><td>单调递增，过点 $(1,0)$</td><td>单调递减，过点 $(1,0)$</td></tr>
<tr><td>定义域</td><td colspan="2">$(0, +\\infty)$</td></tr>
<tr><td>值域</td><td colspan="2">$\\mathbb{R}$</td></tr>
<tr><td>单调性</td><td>在 $(0,+\\infty)$ 上单调递增</td><td>在 $(0,+\\infty)$ 上单调递减</td></tr>
<tr><td>定点</td><td colspan="2">恒过点 $(1,0)$ 和 $(a,1)$</td></tr>
<tr><td>关系</td><td colspan="2">$y=a^x$ 与 $y=\\log_a x$ 互为反函数，图像关于 $y=x$ 对称</td></tr>
</table>
<p class="label-attention">【反函数】</p>
<p>指数函数 $y=a^x$ 和对数函数 $y=\\log_a x$ 互为<strong>反函数</strong>。</p>
<p><strong>性质：</strong>原函数的定义域是反函数的值域，原函数的值域是反函数的定义域；互为反函数的两个函数图像关于直线 $y=x$ 对称。</p>`,
      tags: ["对数函数", "y=log_a x", "反函数", "图像性质", "★"]
    },
    {
      title: "4.5 函数的应用(二) — 函数模型与二分法",
      content: `<p class="label-def">【三种增长模型的比较】</p>
<table class="mini-table">
<tr><th>函数模型</th><th>表达式</th><th>增长特点</th><th>应用场景</th></tr>
<tr><td>线性函数</td><td>$y=kx+b$</td><td>均匀增长</td><td>匀速运动、等量变化</td></tr>
<tr><td>指数函数</td><td>$y=a^x$（$a>1$）</td><td>爆炸式增长（越来越快）</td><td>人口增长、复利、细菌繁殖</td></tr>
<tr><td>对数函数</td><td>$y=\\log_a x$（$a>1$）</td><td>增长越来越慢</td><td>地震震级、声音分贝</td></tr>
</table>
<p>在 $(0,+\\infty)$ 上，总会存在一个 $x_0$，使得当 $x>x_0$ 时，有 $a^x > x^k > \\log_a x$（$a>1, k>0$）。</p>
<p class="label-def">【二分法求方程近似解】</p>
<p>对于在区间 $[a,b]$ 上连续且 $f(a)\\cdot f(b) \\lt 0$ 的函数 $y=f(x)$，通过不断将零点区间一分为二，使区间端点逐渐逼近零点，得到方程近似解的方法称为<strong>二分法</strong>。</p>
<p><strong>步骤：</strong></p>
<ol>
<li>确定区间 $[a,b]$，验证 $f(a)\\cdot f(b) \\lt 0$</li>
<li>求中点 $c=\\dfrac{a+b}{2}$</li>
<li>计算 $f(c)$：若 $f(c)=0$ 则 $c$ 为根；若 $f(a)\\cdot f(c) \\lt 0$ 则零点在 $[a,c]$；否则在 $[c,b]$</li>
<li>重复步骤2-3，直到达到所需精度</li>
</ol>`,
      tags: ["函数模型", "指数增长", "对数增长", "二分法", "方程近似解", "★"]
    }
  ],
  "第五章 三角函数": [
    {
      title: "5.1 任意角与弧度制",
      content: `<p class="label-def">【任意角】</p>
<p>一条射线绕其端点旋转形成的图形：逆时针旋转为<strong>正角</strong>，顺时针旋转为<strong>负角</strong>，没有旋转为<strong>零角</strong>。</p>
<p>所有与角 $\\alpha$ 终边相同的角（含 $\\alpha$ 自身）的集合：</p>
<p>$$\\{\\beta\\mid\\beta = \\alpha + 2k\\pi,\\; k\\in\\mathbb{Z}\\}$$</p>
<p class="label-def">【角度制与弧度制】</p>
<p>$180^\\circ = \\pi$ rad，互化公式：$1^\\circ = \\dfrac{\\pi}{180}$ rad，$1$ rad $= \\left(\\dfrac{180}{\\pi}\\right)^\\circ$。</p>
<p class="label-def">【特殊角的弧度】</p>
<p>$0^\\circ=0$，$30^\\circ=\\dfrac{\\pi}{6}$，$45^\\circ=\\dfrac{\\pi}{4}$，$60^\\circ=\\dfrac{\\pi}{3}$，$90^\\circ=\\dfrac{\\pi}{2}$，</p>
<p>$120^\\circ=\\dfrac{2\\pi}{3}$，$135^\\circ=\\dfrac{3\\pi}{4}$，$150^\\circ=\\dfrac{5\\pi}{6}$，$180^\\circ=\\pi$，</p>
<p>$210^\\circ=\\dfrac{7\\pi}{6}$，$225^\\circ=\\dfrac{5\\pi}{4}$，$240^\\circ=\\dfrac{4\\pi}{3}$，$270^\\circ=\\dfrac{3\\pi}{2}$，$300^\\circ=\\dfrac{5\\pi}{3}$，$315^\\circ=\\dfrac{7\\pi}{4}$，$330^\\circ=\\dfrac{11\\pi}{6}$，$360^\\circ=2\\pi$。</p>
<p class="label-def">【扇形弧长与面积】</p>
<p>弧长公式：$l = |\\alpha| r$（$\\alpha$ 为圆心角的弧度数）。</p>
<p>面积公式：$S = \\dfrac{1}{2} lr = \\dfrac{1}{2}|\\alpha| r^2$。</p>
<p class="label-attention">【注意】</p>
<ul>
<li>扇形的弧长公式和面积公式中的角度必须用<strong>弧度制</strong>。</li>
<li>终边相同的角不一定相等，但相差 $2\\pi$ 的整数倍。</li>
</ul>`,
      tags: ["任意角", "弧度制", "终边相同的角", "扇形", "弧长", "面积", "★"]
    },
    {
      title: "5.2 三角函数的概念",
      content: `<p class="label-def">【三角函数的定义】</p>
<p>设角 $\\alpha$ 的终边与单位圆交于点 $P(x,y)$，则：</p>
<ul>
<li>$\\sin\\alpha = y$（正弦函数），定义域 $\\mathbb{R}$</li>
<li>$\\cos\\alpha = x$（余弦函数），定义域 $\\mathbb{R}$</li>
<li>$\\tan\\alpha = \\dfrac{y}{x}$（$x\\neq 0$）（正切函数），定义域 $\\{x\\mid x\\neq \\dfrac{\\pi}{2}+k\\pi,\\; k\\in\\mathbb{Z}\\}$</li>
</ul>
<p class="label-def">【三角函数值在各象限的符号】</p>
<p><strong>口诀：一全正，二正弦，三正切，四余弦。</strong></p>
<ul>
<li>第一象限：$\\sin\\alpha>0,\\;\\cos\\alpha>0,\\;\\tan\\alpha>0$</li>
<li>第二象限：$\\sin\\alpha>0,\\;\\cos\\alpha \\lt 0,\\;\\tan\\alpha \\lt 0$</li>
<li>第三象限：$\\sin\\alpha \\lt 0,\\;\\cos\\alpha \\lt 0,\\;\\tan\\alpha>0$</li>
<li>第四象限：$\\sin\\alpha \\lt 0,\\;\\cos\\alpha>0,\\;\\tan\\alpha \\lt 0$</li>
</ul>
<p class="label-def">【同角三角函数基本关系】</p>
<ul>
<li><strong>平方关系</strong>：$\\sin^2\\alpha + \\cos^2\\alpha = 1$</li>
<li><strong>商数关系</strong>：$\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha}$（$\\cos\\alpha\\neq 0$）</li>
</ul>`,
      tags: ["正弦", "余弦", "正切", "单位圆", "同角三角函数", "符号", "★"]
    },
    {
      title: "5.3 诱导公式",
      content: `<p class="label-def">【公式一~六】</p>
<p><strong>公式一：</strong>$\\sin(\\alpha+2k\\pi) = \\sin\\alpha$，$\\cos(\\alpha+2k\\pi) = \\cos\\alpha$（$k\\in\\mathbb{Z}$）</p>
<p><strong>公式二：</strong>$\\sin(\\pi+\\alpha) = -\\sin\\alpha$，$\\cos(\\pi+\\alpha) = -\\cos\\alpha$</p>
<p><strong>公式三：</strong>$\\sin(-\\alpha) = -\\sin\\alpha$，$\\cos(-\\alpha) = \\cos\\alpha$</p>
<p><strong>公式四：</strong>$\\sin(\\pi-\\alpha) = \\sin\\alpha$，$\\cos(\\pi-\\alpha) = -\\cos\\alpha$</p>
<p><strong>公式五：</strong>$\\sin\\left(\\dfrac{\\pi}{2}-\\alpha\\right) = \\cos\\alpha$，$\\cos\\left(\\dfrac{\\pi}{2}-\\alpha\\right) = \\sin\\alpha$</p>
<p><strong>公式六：</strong>$\\sin\\left(\\dfrac{\\pi}{2}+\\alpha\\right) = \\cos\\alpha$，$\\cos\\left(\\dfrac{\\pi}{2}+\\alpha\\right) = -\\sin\\alpha$</p>
<p class="label-attention">【记忆口诀】</p>
<p><strong>"奇变偶不变，符号看象限"</strong></p>
<ul>
<li>"奇变偶不变"：$\\dfrac{\\pi}{2}$ 的奇数倍，函数名变为余函数（正弦 $\\leftrightarrow$ 余弦，正切 $\\leftrightarrow$ 余切）；偶数倍，函数名不变。</li>
<li>"符号看象限"：将 $\\alpha$ 视为锐角，看原角所在象限的<strong>原函数</strong>符号，决定结果的正负。</li>
</ul>`,
      tags: ["诱导公式", "奇变偶不变", "符号看象限", "★"]
    },
    {
      title: "5.4 三角函数的图像与性质",
      content: `<p class="label-def">【正弦、余弦、正切函数的性质】</p>
<table class="mini-table">
<tr><th>函数</th><th>$y=\\sin x$</th><th>$y=\\cos x$</th><th>$y=\\tan x$</th></tr>
<tr><td>定义域</td><td>$\\mathbb{R}$</td><td>$\\mathbb{R}$</td><td>$\\{x\\mid x\\neq \\dfrac{\\pi}{2}+k\\pi\\}$</td></tr>
<tr><td>值域</td><td>$[-1,1]$</td><td>$[-1,1]$</td><td>$\\mathbb{R}$</td></tr>
<tr><td>周期</td><td>$2\\pi$</td><td>$2\\pi$</td><td>$\\pi$</td></tr>
<tr><td>奇偶性</td><td>奇函数</td><td>偶函数</td><td>奇函数</td></tr>
<tr><td>单调递增</td><td>$[-\\dfrac{\\pi}{2}+2k\\pi,\\;\\dfrac{\\pi}{2}+2k\\pi]$</td><td>$[-\\pi+2k\\pi,\\;2k\\pi]$</td><td>$(-\\dfrac{\\pi}{2}+k\\pi,\\;\\dfrac{\\pi}{2}+k\\pi)$</td></tr>
<tr><td>单调递减</td><td>$[\\dfrac{\\pi}{2}+2k\\pi,\\;\\dfrac{3\\pi}{2}+2k\\pi]$</td><td>$[2k\\pi,\\;\\pi+2k\\pi]$</td><td>无</td></tr>
<tr><td>最大值</td><td>$x=\\dfrac{\\pi}{2}+2k\\pi$ 时 $y_{\\max}=1$</td><td>$x=2k\\pi$ 时 $y_{\\max}=1$</td><td>无</td></tr>
<tr><td>最小值</td><td>$x=-\\dfrac{\\pi}{2}+2k\\pi$ 时 $y_{\\min}=-1$</td><td>$x=\\pi+2k\\pi$ 时 $y_{\\min}=-1$</td><td>无</td></tr>
<tr><td>对称轴</td><td>$x=\\dfrac{\\pi}{2}+k\\pi$</td><td>$x=k\\pi$</td><td>无</td></tr>
<tr><td>对称中心</td><td>$(k\\pi,0)$</td><td>$(\\dfrac{\\pi}{2}+k\\pi,0)$</td><td>$(\\dfrac{k\\pi}{2},0)$</td></tr>
</table>`,
      tags: ["正弦函数", "余弦函数", "正切函数", "周期性", "奇偶性", "单调性", "★"]
    },
    {
      title: "5.5 三角恒等变换",
      content: `<p class="label-attention">【目录位置】</p>
<p>人教A版（2019）必修第一册第 5.5 节为「三角恒等变换」。下面只列公开常用公式，不抄教材例题。</p>
<p class="label-def">【两角和与差】</p>
<ul>
<li>$\\sin(\\alpha\\pm\\beta)=\\sin\\alpha\\cos\\beta\\pm\\cos\\alpha\\sin\\beta$</li>
<li>$\\cos(\\alpha\\pm\\beta)=\\cos\\alpha\\cos\\beta\\mp\\sin\\alpha\\sin\\beta$</li>
<li>$\\tan(\\alpha\\pm\\beta)=\\dfrac{\\tan\\alpha\\pm\\tan\\beta}{1\\mp\\tan\\alpha\\tan\\beta}$（分母 $\\neq 0$）</li>
</ul>
<p class="label-def">【二倍角】</p>
<ul>
<li>$\\sin 2\\alpha=2\\sin\\alpha\\cos\\alpha$</li>
<li>$\\cos 2\\alpha=\\cos^2\\alpha-\\sin^2\\alpha=2\\cos^2\\alpha-1=1-2\\sin^2\\alpha$</li>
<li>$\\tan 2\\alpha=\\dfrac{2\\tan\\alpha}{1-\\tan^2\\alpha}$（分母 $\\neq 0$）</li>
</ul>
<p class="label-def">【辅助角（化一）】</p>
<p>$a\\sin x+b\\cos x=\\sqrt{a^2+b^2}\\sin(x+\\varphi)$，其中 $\\cos\\varphi=\\dfrac{a}{\\sqrt{a^2+b^2}}$，$\\sin\\varphi=\\dfrac{b}{\\sqrt{a^2+b^2}}$（$a,b$ 不同时为 $0$）。</p>
<p class="label-attention">【注意】</p>
<ul>
<li>和差公式可由单位圆或向量数量积推出；倍角令 $\\beta=\\alpha$ 即得。</li>
<li>积化和差、和差化积<strong>不是</strong>本册必记公式，需要时由和差公式临时推导即可。</li>
</ul>`,
      tags: ["三角恒等变换", "和角公式", "差角公式", "二倍角", "辅助角", "★"]
    },
    {
      title: "5.6 函数 $y=A\\sin(\\omega x+\\varphi)$",
      content: `<p class="label-def">【参数含义】</p>
<table class="mini-table">
<tr><th>参数</th><th>名称</th><th>含义</th><th>关系</th></tr>
<tr><td>$A$</td><td>振幅</td><td>$|A|$ 为偏离平衡位置的最大距离</td><td>—</td></tr>
<tr><td>$\\omega$</td><td>角频率</td><td>自变量每增加 $1$，相位增加 $\\omega$</td><td>$\\omega = \\dfrac{2\\pi}{T}$（常取 $\\omega>0$）</td></tr>
<tr><td>$T$</td><td>周期</td><td>完成一次循环所需的自变量增量</td><td>$T = \\dfrac{2\\pi}{|\\omega|}$</td></tr>
<tr><td>$f$</td><td>频率</td><td>单位自变量内的循环次数</td><td>$f = \\dfrac{1}{T}$</td></tr>
<tr><td>$\\varphi$</td><td>初相</td><td>$x=0$ 时的相位</td><td>—</td></tr>
<tr><td>$\\omega x+\\varphi$</td><td>相位</td><td>决定当前处于周期中的位置</td><td>—</td></tr>
</table>
<p class="label-def">【图像变换】（以下默认 $\\omega>0$，$\\varphi>0$，$A>0$）</p>
<ul>
<li><strong>先平移后伸缩：</strong>$\\sin x \\xrightarrow{\\text{左移}\\varphi} \\sin(x+\\varphi) \\xrightarrow{\\text{横坐标变为}\\frac{1}{\\omega}} \\sin(\\omega x+\\varphi) \\xrightarrow{\\text{纵伸}A} A\\sin(\\omega x+\\varphi)$</li>
<li><strong>先伸缩后平移：</strong>$\\sin x \\xrightarrow{\\text{横坐标变为}\\frac{1}{\\omega}} \\sin(\\omega x) \\xrightarrow{\\text{左移}\\frac{\\varphi}{\\omega}} \\sin(\\omega x+\\varphi) \\xrightarrow{\\text{纵伸}A} A\\sin(\\omega x+\\varphi)$</li>
</ul>
<p class="label-attention">【注意】</p>
<ul>
<li>「左加右减」作用在 $x$ 上：$\\sin(\\omega x+\\varphi)=\\sin\\omega\\!\\left(x+\\dfrac{\\varphi}{\\omega}\\right)$，平移量是 $\\varphi/\\omega$ 而不是 $\\varphi$。</li>
<li>$\\varphi \\lt 0$ 时改为向右平移 $|\\varphi|/\\omega$。</li>
<li>五点法：令 $\\omega x+\\varphi$ 依次取 $0,\\dfrac{\\pi}{2},\\pi,\\dfrac{3\\pi}{2},2\\pi$。</li>
</ul>`,
      tags: ["y=Asin(ωx+φ)", "振幅", "周期", "相位", "图像变换", "五点法", "★"]
    },
    {
      title: "5.7 三角函数的应用",
      content: `<p class="label-def">【课标要点】</p>
<p>用正弦型函数刻画周期现象，并会求周期、最值、对称轴等。</p>
<p class="label-def">【建模套路】</p>
<ol>
<li>确认现象可近似看成周期变化（简谐运动、交变电流、潮汐、温度日变化等）；</li>
<li>设 $y=A\\sin(\\omega x+\\varphi)+b$，由振幅、周期、初相、平衡位置定参数；</li>
<li>按实际意义限制 $x$ 的范围，再求指定时刻的值或最值。</li>
</ol>
<p class="label-attention">【注意】</p>
<ul>
<li>$A$、$\\omega$、$\\varphi$、$b$ 都要带单位意识：例如 $x$ 是时间则 $T$ 的单位与 $x$ 一致。</li>
<li>本册应用停留在「识别模型 + 读图求参」，不把物理定律本身当作数学新课。</li>
</ul>`,
      tags: ["三角函数应用", "周期现象", "正弦型函数", "建模", "★"]
    }
  ],
};
