// 必修第一册 知识卡片数据 v2 — 教材原话版
window.__vol1 = {
  "第一章 集合与常用逻辑用语": [
    {
      title: "1.1 集合的概念",
      content: `<p class="label-def">【定义】</p>
      <p>一般的，我们把研究对象统称为<strong>元素</strong>，把一些元素组成的总体叫做<strong>集合</strong>（简称集）。</p>
      <p><strong>集合中元素的特性：</strong>确定性、互异性、无序性。</p>
      <p class="label-def">【关系表示】</p>
      <ul>
      <li>$a\\in A$ — $a$是集合$A$的元素（$a$属于$A$）</li>
      <li>$a\\notin A$ — $a$不是集合$A$的元素（$a$不属于$A$）</li>
      </ul>
      <p class="label-def">【常用数集及其记法】</p>
      <ul>
      <li>$\\mathbb{N}$ — 自然数集（含0）</li>
      <li>$\\mathbb{N}^*$ 或 $\\mathbb{N}_+$ — 正整数集（不含0）</li>
      <li>$\\mathbb{Z}$ — 整数集</li>
      <li>$\\mathbb{Q}$ — 有理数集</li>
      <li>$\\mathbb{R}$ — 实数集</li>
      </ul>
      <p class="label-def">【集合的表示法】</p>
      <ul>
      <li><strong>列举法：</strong>把集合的所有元素一一列举出来，并用花括号"{}"括起来。如 $\\{1,2,3\\}$</li>
      <li><strong>描述法：</strong>用集合所含元素的共同特征表示集合，形式为 $\\{x\\in I\\mid p(x)\\}$。如 $\\{x\\in\\mathbb{R}\\mid x>0\\}$</li>
      </ul>
      <p class="label-attention">【注意】</p>
      <ul>
      <li>$\\{0\\}$ 与 $\\varnothing$ 不同：$\\{0\\}$ 是含一个元素0的集合，$\\varnothing$ 是空集</li>
      <li>描述法中竖线"|"前面是元素的一般形式，后面是元素的共同特征</li>
      </ul>`,
      tags: ["集合","元素","数集","列举法","描述法","★"]
    },
    {
      title: "1.2 集合间的基本关系",
      content: `<p class="label-def">【子集】</p>
      <p>一般地，对于两个集合$A$、$B$，如果集合$A$中<strong>任意一个元素</strong>都是集合$B$中的元素，就称集合$A$为集合$B$的子集，记作</p>
      <p>$$A\\subseteq B \\quad \\text{（或} \\; B\\supseteq A \\text{）}$$</p>
      <p>读作"$A$包含于$B$"（或"$B$包含$A$"）。</p>
      <p class="label-def">【真子集】</p>
      <p>如果$A\\subseteq B$，但存在元素$x\\in B$且$x\\notin A$，就称集合$A$是集合$B$的<strong>真子集</strong>，记作</p>
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
      <p>一般地，由所有属于集合$A$<strong>或</strong>属于集合$B$的元素组成的集合，称为$A$与$B$的并集，记作$A\\cup B$（读作"$A$并$B$"），即</p>
      <p>$$A\\cup B = \\{x\\mid x\\in A,\\text{或}x\\in B\\}$$</p>
      <p class="label-def">【交集】</p>
      <p>由所有属于集合$A$<strong>且</strong>属于集合$B$的元素组成的集合，称为$A$与$B$的交集，记作$A\\cap B$（读作"$A$交$B$"），即</p>
      <p>$$A\\cap B = \\{x\\mid x\\in A,\\text{且}x\\in B\\}$$</p>
      <p class="label-def">【补集】</p>
      <p>如果一个集合含有所研究问题中涉及的所有元素，则称这个集合为<strong>全集</strong>，记作$U$。</p>
      <p>由全集$U$中<strong>不属于</strong>集合$A$的所有元素组成的集合，称为$A$相对于$U$的补集，简称为$A$的补集，记作$\\complement_U A$，即</p>
      <p>$$\\complement_U A = \\{x\\mid x\\in U,\\text{且}x\\notin A\\}$$</p>
      <p class="label-def">【运算律】</p>
      <ul>
      <li>$A\\cap A = A$，$A\\cup A = A$</li>
      <li>$A\\cap \\varnothing = \\varnothing$，$A\\cup \\varnothing = A$</li>
      <li>$A\\cap B \\subseteq A \\subseteq A\\cup B$</li>
      <li><strong>德摩根律：</strong>$\\complement_U(A\\cap B) = (\\complement_U A)\\cup(\\complement_U B)$，$\\complement_U(A\\cup B) = (\\complement_U A)\\cap(\\complement_U B)$</li>
      </ul>
      <p class="label-attention">【注意】</p>
      <p>韦恩图（Venn图）是处理集合运算的直观工具，常用于含参数集合问题的分析。</p>`,
      tags: ["并集","交集","补集","全集","德摩根律","Venn图","★"]
    },
    {
      title: "1.4 充分条件与必要条件",
      content: `<p class="label-def">【定义】</p>
      <p>一般地，"若$p$，则$q$"为真命题，是指由$p$通过推理可以得出$q$。这时，我们就说，由$p$可推出$q$，记作$p\\Rightarrow q$。</p>
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
<p>用不等号（<, >, $\le$, $\ge$, $\neq$）连接两个代数式表示不等关系的式子，叫做<strong>不等式</strong>。</p>
<p>两个实数 a、b 之间的大小关系可以通过它们的差来确定：</p>
<ul>
<li>$a - b > 0 \iff a > b$</li>
<li>$a - b = 0 \iff a = b$</li>
<li>$a - b < 0 \iff a < b$</li>
</ul>
<p class="label-def">【性质】</p>
<p><strong>不等式的基本性质</strong>（$a, b, c \in \mathbb{R}$）：</p>
<ul>
<li><strong>性质1（对称性）</strong>：$a > b \iff b < a$</li>
<li><strong>性质2（传递性）</strong>：$a > b, b > c \Rightarrow a > c$</li>
<li><strong>性质3（可加性）</strong>：$a > b \Rightarrow a + c > b + c$</li>
<li><strong>性质4（可乘性）</strong>：$a > b, c > 0 \Rightarrow ac > bc$；$a > b, c < 0 \Rightarrow ac < bc$</li>
<li><strong>性质5（同向可加性）</strong>：$a > b, c > d \Rightarrow a + c > b + d$</li>
<li><strong>性质6（同向同正可乘性）</strong>：$a > b > 0, c > d > 0 \Rightarrow ac > bd$</li>
<li><strong>性质7（可乘方性）</strong>：$a > b > 0 \Rightarrow a^n > b^n$（$n \in \mathbb{N}, n \ge 2$）</li>
<li><strong>性质8（可开方性）</strong>：$a > b > 0 \Rightarrow \sqrt[n]{a} > \sqrt[n]{b}$（$n \in \mathbb{N}, n \ge 2$）</li>
</ul>
<p class="label-attention">【注意】</p>
<ul>
<li>不等式两边同乘一个负数时，不等号方向必须改变。</li>
<li>倒数性质：$a > b > 0 \Rightarrow \frac{1}{a} < \frac{1}{b}$。</li>
</ul>`,
      tags: ["不等关系", "不等式性质", "对称性", "传递性", "可加性", "可乘性", "★"]
    },
    {
      title: "2.2 基本不等式",
      content: `<p class="label-def">【重要不等式】</p>
<p>$\forall a, b \in \mathbb{R}$，有 $a^2 + b^2 \ge 2ab$，当且仅当 $a = b$ 时等号成立。</p>
<p class="label-def">【基本不等式】</p>
<p>$\forall a, b > 0$，有 $\sqrt{ab} \le \dfrac{a + b}{2}$，当且仅当 $a = b$ 时等号成立。</p>
<p>其中，$\dfrac{a + b}{2}$ 叫做正数 a, b 的<strong>算术平均数</strong>，$\sqrt{ab}$ 叫做正数 a, b 的<strong>几何平均数</strong>。</p>
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
<li>$a + b \ge 2\sqrt{ab}$（$a, b > 0$）</li>
<li>$ab \le \left(\dfrac{a + b}{2}\right)^2$（$a, b > 0$）</li>
<li>$\dfrac{b}{a} + \dfrac{a}{b} \ge 2$（$a, b$ 同号）</li>
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
<p>$ax^2 + bx + c > 0$（或 $< 0$，其中 $a \neq 0$）。</p>
<p class="label-def">【一元二次不等式的解法（$a > 0$）】</p>
<table class="mini-table">
<tr><th>$\Delta = b^2-4ac$</th><th>$\Delta > 0$</th><th>$\Delta = 0$</th><th>$\Delta < 0$</th></tr>
<tr><td>$ax^2+bx+c=0$ 的根</td><td>两不等实根 $x_1 < x_2$</td><td>两相等实根 $x_1=x_2=-\dfrac{b}{2a}$</td><td>无实根</td></tr>
<tr><td>$ax^2+bx+c>0$ 解集</td><td>$\{x\mid x<x_1\text{ 或 }x>x_2\}$</td><td>$\{x\mid x\neq -\dfrac{b}{2a}\}$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$ax^2+bx+c<0$ 解集</td><td>$\{x\mid x_1<x<x_2\}$</td><td>$\varnothing$</td><td>$\varnothing$</td></tr>
</table>
<p class="label-attention">【注意】</p>
<ul>
<li>若 $a < 0$，可先将二次项系数化为正数（不等式两边同乘 $-1$，不等号变向），再按上述方法求解。</li>
<li>口诀："大于取两边，小于取中间"。</li>
<li>对于含参数的一元二次不等式，需讨论二次项系数、判别式及根的大小关系。</li>
</ul>`,
      tags: ["一元二次不等式", "二次函数", "判别式", "Δ", "解法", "★"]
    },
    {
      title: "2.3 一元二次不等式的应用",
      content: `<p class="label-def">【分式不等式】</p>
<p>$\dfrac{f(x)}{g(x)} > 0$（或 $< 0$）可转化为整式不等式：</p>
<ul>
<li>$\dfrac{f(x)}{g(x)} > 0 \iff f(x) \cdot g(x) > 0$</li>
<li>$\dfrac{f(x)}{g(x)} \ge 0 \iff \begin{cases} f(x) \cdot g(x) \ge 0 \\ g(x) \neq 0 \end{cases}$</li>
</ul>
<p class="label-def">【穿根法（高次不等式）】</p>
<p>步骤：① 因式分解，化为 $(x-x_1)(x-x_2)\cdots(x-x_n) > 0$ 形式；② 在数轴上标出根（从右上方开始）；③ 奇穿偶不穿（奇次根穿过去，偶次根弹回来）；④ 根据符号写出解集。</p>
<p class="label-def">【恒成立问题】</p>
<p>$ax^2+bx+c > 0$ 在 $\mathbb{R}$ 上恒成立的条件：$a > 0$ 且 $\Delta < 0$（或 $a=b=0$ 且 $c > 0$）。</p>
<p>$ax^2+bx+c < 0$ 在 $\mathbb{R}$ 上恒成立的条件：$a < 0$ 且 $\Delta < 0$。</p>
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
<p>设 A、B 是非空的实数集，如果对于集合 A 中的<strong>任意一个数 x</strong>，按照某种确定的对应关系 f，在集合 B 中都有<strong>唯一确定</strong>的数 y 和它对应，那么就称 f : A → B 为从集合 A 到集合 B 的一个<strong>函数</strong>，记作：</p>
<p>y = f(x), x ∈ A</p>
<p>其中，x 叫做<strong>自变量</strong>，x 的取值范围 A 叫做函数的<strong>定义域</strong>；与 x 对应的 y 值叫做<strong>函数值</strong>，函数值的集合 { f(x) | x ∈ A } 叫做函数的<strong>值域</strong>。</p>
<p class="label-def">【函数的三要素】</p>
<ul>
<li><strong>定义域</strong>：自变量 x 的取值范围（集合 A）；</li>
<li><strong>对应关系</strong>：f，即自变量 x 到函数值 y 的对应法则；</li>
<li><strong>值域</strong>：函数值 y 的取值范围（集合 { f(x) | x ∈ A }）。</li>
</ul>
<p>两个函数相等当且仅当它们的<strong>定义域</strong>和<strong>对应关系</strong>完全相同（与用什么字母表示无关）。</p>
<p class="label-def">【函数的表示法】</p>
<ul>
<li><strong>解析法</strong>：用数学表达式表示两个变量之间的对应关系，如 y = x^2 + 1；</li>
<li><strong>图像法</strong>：用函数图像直观表示函数关系；</li>
<li><strong>列表法</strong>：通过列出自变量的值与对应函数值的表格来表示函数关系。</li>
</ul>
<p class="label-attention">【注意】</p>
<ul>
<li>定义域和值域均为<strong>非空数集</strong>，且值域是集合 B 的<strong>子集</strong>（不一定等于 B）。</li>
<li>函数符号 f(x) 中，f 表示对应关系，f(x) 表示自变量 x 对应的函数值，不是 f 乘以 x。</li>
<li>求定义域的基本原则：分母不为零、偶次根号下非负、零次幂底数不为零、对数真数大于零等。</li>
</ul>`,
    tags: ["函数", "函数三要素", "定义域", "值域", "对应关系", "解析法", "图像法", "列表法", "★"]
  },
  {
    title: "3.1 函数的定义域与值域",
    content: `<p class="label-def">【常见函数的定义域】</p>
<ul>
<li>一次函数 f(x) = kx + b（k ≠ 0）：定义域为 R；</li>
<li>二次函数 f(x) = ax^2 + bx + c（a ≠ 0）：定义域为 R；</li>
<li>反比例函数 f(x) = \frac{k}{x}（k ≠ 0）：定义域为 \{ x | x ≠ 0 \}；</li>
<li>幂函数 f(x) = x^\alpha：定义域与 \alpha 有关；</li>
<li>根式函数 f(x) = \sqrt[n]{x}：n 为偶数时 x ≥ 0，n 为奇数时 x ∈ R；</li>
<li>分式函数：分母 ≠ 0。</li>
</ul>
<p class="label-def">【求值域的常用方法】</p>
<ul>
<li><strong>观察法</strong>：适用于简单函数，直接观察函数解析式的取值范围；</li>
<li><strong>配方法</strong>：适用于二次函数或可化为二次函数的函数，通过配方求最值；</li>
<li><strong>换元法</strong>：通过引入新变量简化函数结构，化繁为简；</li>
<li><strong>分离常数法</strong>：适用于分式型函数，将分子化为常数与分母的线性组合；</li>
<li><strong>单调性法</strong>：利用函数的单调性求值域。</li>
</ul>
<p class="label-attention">【注意】</p>
<ul>
<li>定义域是函数的<strong>灵魂</strong>，研究函数必须优先明确其定义域。</li>
<li>求函数值域时，一定要先确定函数的定义域，值域依赖于定义域。</li>
<li>换元法中引入的新变量，必须明确其取值范围（新元的定义域）。</li>
</ul>`,
    tags: ["定义域", "值域", "配方法", "换元法", "分离常数法", "单调性法", "★"]
  },
  {
    title: "3.2 函数的单调性",
    content: `<p class="label-def">【单调性的定义】</p>
<p>设函数 f(x) 的定义域为 I，区间 D ⊆ I：</p>
<ul>
<li>如果 \forall x_1, x_2 \in D，当 x_1 < x_2 时，都有 f(x_1) < f(x_2)，那么称函数 f(x) 在区间 D 上<strong>单调递增</strong>（D 为<strong>单调递增区间</strong>）；</li>
<li>如果 \forall x_1, x_2 \in D，当 x_1 < x_2 时，都有 f(x_1) > f(x_2)，那么称函数 f(x) 在区间 D 上<strong>单调递减</strong>（D 为<strong>单调递减区间</strong>）。</li>
</ul>
<p>如果函数 y = f(x) 在某个区间上是单调递增或单调递减，那么就说函数 y = f(x) 在这一区间具有（严格的）<strong>单调性</strong>，该区间叫做 y = f(x) 的<strong>单调区间</strong>。</p>
<p class="label-def">【函数的最大（小）值】</p>
<p>设函数 y = f(x) 的定义域为 I，如果存在实数 M 满足：</p>
<ul>
<li><strong>最大值</strong>：\forall x \in I，都有 f(x) ≤ M，且 \exists x_0 \in I，使得 f(x_0) = M；</li>
<li><strong>最小值</strong>：\forall x \in I，都有 f(x) ≥ M，且 \exists x_0 \in I，使得 f(x_0) = M。</li>
</ul>
<p class="label-attention">【注意】</p>
<ul>
<li>单调性是函数的<strong>局部</strong>性质，函数在不同区间上可能有不同的单调性。</li>
<li>不能用特殊值验证来判断单调性，必须使用<strong>严格定义</strong>进行证明（作差法）。</li>
<li>函数的单调区间必须是定义域的<strong>子集</strong>，且不能将单调区间合并写成 \cup。</li>
<li>最值一定是函数值域中的<strong>端点值</strong>，但不一定存在（开区间可能无最值）。</li>
</ul>`,
    tags: ["单调性", "单调递增", "单调递减", "单调区间", "最大值", "最小值", "★"]
  },
  {
    title: "3.2 函数的奇偶性",
    content: `<p class="label-def">【奇偶性的定义】</p>
<p>设函数 f(x) 的定义域 I 关于原点对称（即 \forall x \in I，有 -x \in I）：</p>
<ul>
<li>如果 \forall x \in I，都有 f(-x) = -f(x)，那么称函数 f(x) 为<strong>奇函数</strong>；</li>
<li>如果 \forall x \in I，都有 f(-x) = f(x)，那么称函数 f(x) 为<strong>偶函数</strong>。</li>
</ul>
<p>如果一个函数是奇函数或偶函数，那么就说这个函数具有<strong>奇偶性</strong>。</p>
<p class="label-def">【奇偶函数的图像特征】</p>
<ul>
<li><strong>奇函数</strong>：图像关于<strong>原点对称</strong>（f(-x) = -f(x) ⇔ 图像关于原点中心对称）；</li>
<li><strong>偶函数</strong>：图像关于<strong>y 轴对称</strong>（f(-x) = f(x) ⇔ 图像关于 y 轴轴对称）。</li>
</ul>
<p class="label-def">【奇偶性的性质】</p>
<ul>
<li>奇函数在 x = 0 处有定义时，必有 f(0) = 0；</li>
<li>奇函数在对称区间上的单调性<strong>相同</strong>；偶函数在对称区间上的单调性<strong>相反</strong>；</li>
<li>奇 + 奇 = 奇，偶 + 偶 = 偶，奇 × 奇 = 偶，偶 × 偶 = 偶，奇 × 偶 = 奇。</li>
</ul>
<p class="label-attention">【注意】</p>
<ul>
<li>判断奇偶性的<strong>前提</strong>是定义域关于原点对称——若不对称，则函数为非奇非偶函数。</li>
<li>既是奇函数又是偶函数的函数：f(x) = 0（且定义域关于原点对称）。</li>
<li>对于分段函数，需验证每一段是否满足奇偶性条件。</li>
</ul>`,
    tags: ["奇偶性", "奇函数", "偶函数", "图像对称", "原点对称", "y轴对称", "★"]
  },
  {
    title: "3.3 幂函数",
    content: `<p class="label-def">【幂函数的定义】</p>
<p>一般地，形如 y = x^\alpha（\alpha 为常数）的函数称为<strong>幂函数</strong>。</p>
<p>幂函数的特征：</p>
<ul>
<li>系数为 1，底数为自变量 x，指数为常数 \alpha；</li>
<li>形式唯一：y = x^\alpha，前面不能有系数（如 y = 2x^3 不是幂函数）。</li>
</ul>
<p class="label-def">【五种常见幂函数的图像与性质】</p>
<table class="mini-table">
<thead>
<tr><th>函数</th><th>y = x</th><th>y = x^2</th><th>y = x^3</th><th>y = x^{\frac{1}{2}}</th><th>y = x^{-1}</th></tr>
</thead>
<tbody>
<tr><td>定义域</td><td>R</td><td>R</td><td>R</td><td>[0, +∞)</td><td>(-∞, 0) ∪ (0, +∞)</td></tr>
<tr><td>值域</td><td>R</td><td>[0, +∞)</td><td>R</td><td>[0, +∞)</td><td>(-∞, 0) ∪ (0, +∞)</td></tr>
<tr><td>奇偶性</td><td>奇函数</td><td>偶函数</td><td>奇函数</td><td>非奇非偶</td><td>奇函数</td></tr>
<tr><td>单调性</td><td>增</td><td>(-∞,0]减<br/>[0,+∞)增</td><td>增</td><td>增</td><td>(-∞,0)减<br/>(0,+∞)减</td></tr>
<tr><td>定点</td><td colspan="5">均过点 (1, 1)</td></tr>
</tbody>
</table>
<p class="label-attention">【注意】</p>
<ul>
<li>所有幂函数在 (0, +∞) 上都有定义，且都过点 (1, 1)。</li>
<li>当 \alpha > 0 时，幂函数在 (0, +∞) 上单调递增；当 \alpha < 0 时，幂函数在 (0, +∞) 上单调递减。</li>
<li>当 \alpha 为分数时，幂函数的定义域受根式影响，需根据根指数奇偶确定。</li>
</ul>`,
    tags: ["幂函数", "y=x^α", "图像性质", "定义域", "奇偶性", "单调性", "★"]
  },
  {
    title: "3.3 幂函数的图像特征与比较大小",
    content: `<p class="label-def">【幂函数图像的共同特征】</p>
<ul>
<li>所有幂函数在 (0, +∞) 上都有定义，图像都经过点 <strong>(1, 1)</strong>；</li>
<li>当 \alpha > 0 时，图像过原点 (0, 0)，且在 (0, +∞) 上单调递增；</li>
<li>当 \alpha < 0 时，图像不过原点，在 (0, +∞) 上单调递减，以 x 轴、y 轴为渐近线；</li>
<li>当 \alpha > 1 时，图像在 (0, 1) 上位于 y = x 下方，在 (1, +∞) 上位于 y = x 上方；</li>
<li>当 0 < \alpha < 1 时，图像在 (0, 1) 上位于 y = x 上方，在 (1, +∞) 上位于 y = x 下方。</li>
</ul>
<p class="label-def">【幂值比较大小的方法】</p>
<ul>
<li><strong>同指数不同底</strong>：利用幂函数的单调性比较（在 (0, +∞) 上，\alpha > 0 时增，\alpha < 0 时减）；</li>
<li><strong>同底不同指数</strong>：利用指数函数的单调性比较（需注意底数与 1 的大小关系）；</li>
<li><strong>底数和指数都不同</strong>：引入<strong>中间量</strong>（如 0、1）或找<strong>桥梁函数</strong>进行间接比较。</li>
</ul>
<p class="label-attention">【注意】</p>
<ul>
<li>幂函数与指数函数的区别：幂函数<strong>底为变量、指数为常数</strong>（y = x^\alpha），指数函数<strong>底为常数、指数为变量</strong>（y = a^x）。</li>
<li>比较大小前先明确自变量所在的区间，再根据单调性做出判断。</li>
</ul>`,
    tags: ["幂函数图像", "比较大小", "同指数", "同底", "中间量", "图像特征", "★"]
  },
  {
    title: "3.4 函数的应用(一)",
    content: `<p class="label-def">【实际问题建模的一般步骤】</p>
<ol>
<li><strong>审题</strong>：仔细阅读题目，理解题意，明确已知条件和所求问题；</li>
<li><strong>建模</strong>：将实际问题中的变量关系用数学语言表达，建立函数模型；</li>
<li><strong>求解</strong>：运用函数知识（单调性、最值等）求解数学模型；</li>
<li><strong>验证</strong>：将结果还原到实际问题中检验合理性。</li>
</ol>
<p class="label-def">【常见函数模型】</p>
<ul>
<li><strong>一次函数模型</strong>：y = kx + b（k ≠ 0），适用于均匀变化（匀速、等量增长/减少）的实际问题；</li>
<li><strong>二次函数模型</strong>：y = ax^2 + bx + c（a ≠ 0），适用于面积最值、利润最值、抛物线运动等；</li>
<li><strong>分段函数模型</strong>：在不同范围内用不同的解析式表示，适用于分段计费、阶梯收费等。</li>
</ul>
<p class="label-def">【如何选择函数模型】</p>
<ul>
<li>若变量间呈<strong>线性关系</strong>（均匀变化），选择一次函数模型；</li>
<li>若变量间存在<strong>先增后减或先减后增</strong>的变化趋势，考虑二次函数模型（需关注顶点与对称轴）；</li>
<li>若变量在不同范围内遵循<strong>不同规则</strong>，需建立分段函数模型（注意各段定义域的连续性）。</li>
</ul>
<p class="label-attention">【注意】</p>
<ul>
<li>实际问题中，函数定义域必须结合实际意义确定（如长度、时间、个数等一般取非负值）。</li>
<li>二次函数求最值时，需比较顶点横坐标与定义域区间的位置关系，不能直接套用顶点公式。</li>
<li>分段函数是一个函数，不是多个函数，处理时需注意各段之间的衔接点。</li>
</ul>`,
    tags: ["函数应用", "数学模型", "一次函数", "二次函数", "分段函数", "实际问题建模", "★"]
  },
  {
    title: "3.4 分段函数与函数模型的实际应用",
    content: `<p class="label-def">【分段函数的定义】</p>
<p>在定义域的不同部分，有不同的对应关系的函数叫做<strong>分段函数</strong>。</p>
<p>例如：</p>
<p>f(x) = \begin{cases} x + 1, & x \ge 0 \\ -x, & x < 0 \end{cases}</p>
<p class="label-def">【一次函数模型应用】</p>
<p>设一次函数为 y = kx + b（k ≠ 0），解决实际问题时通常：</p>
<ul>
<li>利用两组对应值确定 k, b（待定系数法）；</li>
<li>结合单调性（k > 0 递增，k < 0 递减）求最值；</li>
<li>注意问题的实际意义对自变量的限制。</li>
</ul>
<p class="label-def">【二次函数模型应用】</p>
<p>解决利润最大、面积最大等问题时：</p>
<ul>
<li>建立二次函数 y = ax^2 + bx + c（a < 0 有最大值，a > 0 有最小值）；</li>
<li>对称轴 x = -\frac{b}{2a} 是确定最值的关键；</li>
<li>注意定义域是否包含对称轴，若不包含，则在边界处取最值。</li>
</ul>
<p class="label-attention">【注意】</p>
<ul>
<li>分段函数在各段定义域的交接点处，需验证函数值是否连续，以及是否满足实际情况。</li>
<li>实际应用问题中，不仅要考虑函数的最大（小）值，还要注意结果的<strong>实际意义</strong>（如人数取整数、时间取非负等）。</li>
<li>对于分段函数，求最值要分别计算各段的最值，再取整体的最大（小）值。</li>
</ul>`,
    tags: ["分段函数", "一次函数模型", "二次函数模型", "实际应用", "最值问题", "待定系数法", "★"]
  }
    ],
    "第四章 指数函数与对数函数": [],
  "第五章 三角函数": []
};