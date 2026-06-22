// 必修第一册 知识卡片数据
window.__vol1 = {
  "第一章 集合与常用逻辑用语": [
    {
      title: "1.1 集合的概念",
      content: `<p><strong>集合：</strong>把一些元素组成的总体叫做集合（简称集）。</p>
<p><strong>三要素：</strong>确定性、互异性、无序性</p>
<p><strong>元素与集合：</strong>$a\\in A$（属于），$a\\notin A$（不属于）</p>
<p><strong>常用数集：</strong>$\\mathbb{N}$（自然数集）、$\\mathbb{N}^*$或$\\mathbb{N}_+$（正整数集）、$\\mathbb{Z}$（整数集）、$\\mathbb{Q}$（有理数集）、$\\mathbb{R}$（实数集）</p>
<p><strong>表示法：</strong></p>
<ul>
<li>列举法：$\\{1,2,3\\}$</li>
<li>描述法：$\\{x\\in\\mathbb{R}\\mid x>0\\}$</li>
</ul>`,
      tags: ["集合","数集","列举法","描述法"]
    },
    {
      title: "1.2 集合间的基本关系",
      content: `<p><strong>子集：</strong>$A\\subseteq B$ — A中任意元素都属于B</p>
<p><strong>真子集：</strong>$A\\subsetneq B$ — $A\\subseteq B$且$A\\neq B$</p>
<p><strong>集合相等：</strong>$A=B$ — $A\\subseteq B$且$B\\subseteq A$</p>
<p><strong>空集：</strong>$\\varnothing$ — 不含任何元素，是任何集合的子集</p>
<p><strong>性质：</strong>若$A\\subseteq B$且$B\\subseteq C$，则$A\\subseteq C$（传递性）</p>`,
      tags: ["子集","真子集","空集"]
    },
    {
      title: "1.3 集合的基本运算",
      content: `<p><strong>并集：</strong>$A\\cup B = \\{x\\mid x\\in A\\text{或}x\\in B\\}$</p>
<p><strong>交集：</strong>$A\\cap B = \\{x\\mid x\\in A\\text{且}x\\in B\\}$</p>
<p><strong>补集：</strong>设全集为$U$，$\\complement_U A = \\{x\\mid x\\in U\\text{且}x\\notin A\\}$</p>
<p><strong>常用结论：</strong></p>
<ul>
<li>$A\\cap A=A,\\; A\\cup A=A$</li>
<li>$A\\cap \\varnothing = \\varnothing,\\; A\\cup \\varnothing = A$</li>
<li>$A\\cap B \\subseteq A \\subseteq A\\cup B$</li>
<li>$\\complement_U(A\\cap B) = (\\complement_U A)\\cup(\\complement_U B)$</li>
<li>$\\complement_U(A\\cup B) = (\\complement_U A)\\cap(\\complement_U B)$（德摩根律）</li>
</ul>`,
      tags: ["并集","交集","补集","德摩根律"]
    },
    {
      title: "1.4 充分条件与必要条件",
      content: `<p><strong>充分条件：</strong>若$p\\Rightarrow q$，则$p$是$q$的充分条件</p>
<p><strong>必要条件：</strong>若$p\\Rightarrow q$，则$q$是$p$的必要条件</p>
<p><strong>充要条件：</strong>若$p\\Leftrightarrow q$，则$p$是$q$的充要条件</p>
<p><strong>四种情况：</strong></p>
<ul>
<li>$p\\Rightarrow q$且$q\\nRightarrow p$ — 充分不必要</li>
<li>$p\\nRightarrow q$且$q\\Rightarrow p$ — 必要不充分</li>
<li>$p\\Leftrightarrow q$ — 充要</li>
<li>$p\\nRightarrow q$且$q\\nRightarrow p$ — 既不充分也不必要</li>
</ul>`,
      tags: ["充分条件","必要条件","充要条件"]
    },
    {
      title: "1.5 全称量词与存在量词",
      content: `<p><strong>全称量词：</strong>$\\forall$（任意），$\\forall x\\in M,\\;p(x)$</p>
<p><strong>存在量词：</strong>$\\exists$（存在），$\\exists x\\in M,\\;p(x)$</p>
<p><strong>命题的否定：</strong></p>
<ul>
<li>$\\neg(\\forall x\\in M,\\;p(x)) \\equiv \\exists x\\in M,\\;\\neg p(x)$</li>
<li>$\\neg(\\exists x\\in M,\\;p(x)) \\equiv \\forall x\\in M,\\;\\neg p(x)$</li>
</ul>`,
      tags: ["全称量词","存在量词","命题否定"]
    }
  ],
  "第二章 一元二次函数、方程和不等式": [
    {
      title: "2.1 等式性质与不等式性质",
      content: `<p><strong>基本性质：</strong>$a>b \\iff a-b>0$</p>
<ul>
<li><strong>对称性：</strong>$a>b \\iff b<a$</li>
<li><strong>传递性：</strong>$a>b$且$b>c \\Rightarrow a>c$</li>
<li><strong>可加性：</strong>$a>b \\Rightarrow a+c>b+c$</li>
<li><strong>可乘性：</strong>$a>b,\\;c>0 \\Rightarrow ac>bc$；$a>b,\\;c<0 \\Rightarrow ac<bc$</li>
</ul>`,
      tags: ["不等式","性质","传递性"]
    },
    {
      title: "2.2 基本不等式",
      content: `<p><strong>基本不等式：</strong>$$\\sqrt{ab} \\leq \\frac{a+b}{2} \\quad (a,b\\geq 0)$$</p>
<p>当且仅当$a=b$时取等号。</p>
<p><strong>常用变形：</strong></p>
<ul>
<li>$a+b\\geq 2\\sqrt{ab}$</li>
<li>$ab\\leq \\left(\\dfrac{a+b}{2}\\right)^2$</li>
<li>$a^2+b^2\\geq 2ab$</li>
</ul>
<p><strong>几何意义：</strong>半圆中半径不小于半弦长</p>`,
      tags: ["基本不等式","均值不等式","最值"]
    },
    {
      title: "2.3 二次函数与一元二次方程、不等式",
      content: `<p><strong>标准形式：</strong>$ax^2+bx+c>0$（或$<0$），$a\\neq 0$</p>
<p><strong>解法（$a>0$）：</strong></p>
<ol>
<li>计算$\\Delta = b^2-4ac$</li>
<li>$\\Delta>0$：求根$x_1,x_2$（$x_1<x_2$），大于取两边$x<x_1$或$x>x_2$，小于取中间$x_1<x<x_2$</li>
<li>$\\Delta=0$：$>0$时$x\\neq x_0$，$<0$时无解</li>
<li>$\\Delta<0$：$>0$时$\\mathbb{R}$，$<0$时$\\varnothing$</li>
</ol>
<p><strong>三个二次关系：</strong>函数$y=ax^2+bx+c$的零点$\\iff$方程$ax^2+bx+c=0$的根$\\iff$不等式解集的端点</p>`,
      tags: ["二次不等式","判别式","三个二次"]
    }
  ],
  "第三章 函数概念与性质": [
    {
      title: "3.1 函数的概念及其表示",
      content: `<p><strong>函数定义：</strong>设$A,B$是非空数集，$f:A\\to B$，对$A$中任意$x$，在$B$中都有唯一确定的$f(x)$与之对应，称$f:A\\to B$为从$A$到$B$的函数。</p>
<p><strong>三要素：</strong>定义域（$A$）、对应关系（$f$）、值域（$\\{f(x)\\mid x\\in A\\}$）</p>
<p><strong>表示法：</strong>解析法、图象法、列表法</p>
<p><strong>分段函数：</strong>在不同区间用不同解析式表示</p>`,
      tags: ["函数","定义域","值域","分段函数"]
    },
    {
      title: "3.2 函数的基本性质",
      content: `<p><strong>单调性：</strong></p>
<ul>
<li><strong>增函数：</strong>$\\forall x_1<x_2$，有$f(x_1)<f(x_2)$</li>
<li><strong>减函数：</strong>$\\forall x_1<x_2$，有$f(x_1)>f(x_2)$</li>
</ul>
<p><strong>最大（小）值：</strong>$\\exists x_0$，$\\forall x$有$f(x_0)\\geq f(x)$（或$\\leq$）</p>
<p><strong>奇偶性：</strong></p>
<ul>
<li><strong>偶函数：</strong>$f(-x)=f(x)$，图象关于$y$轴对称</li>
<li><strong>奇函数：</strong>$f(-x)=-f(x)$，图象关于原点对称</li>
</ul>
<p>定义域必须关于原点对称</p>`,
      tags: ["单调性","奇偶性","最值","对称性"]
    },
    {
      title: "3.3 幂函数",
      content: `<p><strong>定义：</strong>$y=x^\\alpha$（$\\alpha\\in\\mathbb{R}$）</p>
<p><strong>常见幂函数性质：</strong></p>
<ul>
<li>$y=x$：奇，$\\mathbb{R}$上增</li>
<li>$y=x^2$：偶，$(-\\infty,0]$减，$[0,+\\infty)$增</li>
<li>$y=x^3$：奇，$\\mathbb{R}$上增</li>
<li>$y=x^{\\frac12}=\\sqrt{x}$：非奇非偶，$[0,+\\infty)$增</li>
<li>$y=x^{-1}=\\dfrac1x$：奇，$(-\\infty,0)$和$(0,+\\infty)$减</li>
</ul>
<p>所有幂函数都过点$(1,1)$。$\\alpha>0$时过$(0,0)$和$(1,1)$，$\\alpha<0$时不过$(0,0)$。</p>`,
      tags: ["幂函数","图象","性质"]
    }
  ],
  "第四章 指数函数与对数函数": [
    {
      title: "4.1 指数",
      content: `<p><strong>整数指数：</strong>$a^n$（$n\\in\\mathbb{N}^*$），$a^0=1\\;(a\\neq0)$，$a^{-n}=\\dfrac1{a^n}\\;(a\\neq0)$</p>
<p><strong>分数指数幂：</strong>$a^{\\frac mn}=\\sqrt[n]{a^m}\\;(a>0,\\;m,n\\in\\mathbb{N}^*,\\;n>1)$</p>
<p><strong>运算性质：</strong></p>
<ul>
<li>$a^r a^s = a^{r+s}$</li>
<li>$(a^r)^s = a^{rs}$</li>
<li>$(ab)^r = a^r b^r$</li>
</ul>`,
      tags: ["指数","幂运算","分数指数幂"]
    },
    {
      title: "4.2 指数函数",
      content: `<p><strong>定义：</strong>$y=a^x$（$a>0$且$a\\neq1$）</p>
<p><strong>性质：</strong></p>
<ul>
<li>定义域$\\mathbb{R}$，值域$(0,+\\infty)$</li>
<li>恒过点$(0,1)$</li>
<li>$a>1$：在$\\mathbb{R}$上单调递增</li>
<li>$0<a<1$：在$\\mathbb{R}$上单调递减</li>
<li>以$x$轴为渐近线</li>
</ul>
<p><strong>底数比较：</strong>在第一象限，底数越大图象越高</p>`,
      tags: ["指数函数","单调性","图象"]
    },
    {
      title: "4.3 对数",
      content: `<p><strong>定义：</strong>$a^x=N \\iff x=\\log_a N$（$a>0,a\\neq1,N>0$）</p>
<p><strong>特殊对数：</strong>$\\lg N=\\log_{10}N$（常用对数），$\\ln N=\\log_e N$（自然对数，$e\\approx2.71828$）</p>
<p><strong>运算性质：</strong></p>
<ul>
<li>$\\log_a(MN)=\\log_a M+\\log_a N$</li>
<li>$\\log_a\\dfrac MN=\\log_a M-\\log_a N$</li>
<li>$\\log_a M^n=n\\log_a M$</li>
</ul>
<p><strong>换底公式：</strong>$\\log_a b=\\dfrac{\\log_c b}{\\log_c a}$</p>`,
      tags: ["对数","换底公式","自然对数"]
    },
    {
      title: "4.4 对数函数",
      content: `<p><strong>定义：</strong>$y=\\log_a x$（$a>0$且$a\\neq1$）</p>
<p><strong>性质：</strong></p>
<ul>
<li>定义域$(0,+\\infty)$，值域$\\mathbb{R}$</li>
<li>恒过点$(1,0)$</li>
<li>$a>1$：在$(0,+\\infty)$上单调递增</li>
<li>$0<a<1$：在$(0,+\\infty)$上单调递减</li>
<li>以$y$轴为渐近线</li>
</ul>
<p><strong>反函数：</strong>$y=a^x$与$y=\\log_a x$互为反函数，图象关于$y=x$对称</p>`,
      tags: ["对数函数","反函数","单调性"]
    },
    {
      title: "4.5 函数的应用（二）",
      content: `<p><strong>函数的零点：</strong>使$f(x)=0$的实数$x$叫做$f(x)$的零点</p>
<p><strong>零点存在定理：</strong>若$f(x)$在$[a,b]$上连续，且$f(a)f(b)<0$，则$\\exists c\\in(a,b)$使得$f(c)=0$</p>
<p><strong>二分法：</strong>求零点近似值的常用方法</p>
<ol>
<li>取中点$c=\\dfrac{a+b}{2}$</li>
<li>判断$f(c)$：若$f(c)=0$则$c$为零点；否则根据$f(a)f(c)<0$或$f(c)f(b)<0$缩小区间</li>
<li>重复，直到区间长度小于精度</li>
</ol>`,
      tags: ["零点","零点存在定理","二分法"]
    }
  ],
  "第五章 三角函数": [
    {
      title: "5.1 任意角和弧度制",
      content: `<p><strong>任意角：</strong>正角（逆时针旋转）、负角（顺时针旋转）、零角（不旋转）</p>
<p><strong>弧度制：</strong>$|\\alpha|=\\dfrac{l}{r}$（$l$为弧长，$r$为半径）</p>
<p><strong>互化：</strong>$180^\\circ = \\pi\\text{ rad}$</p>
<ul>
<li>$1^\\circ = \\dfrac{\\pi}{180}\\text{ rad}$</li>
<li>$1\\text{ rad} = \\left(\\dfrac{180}{\\pi}\\right)^\\circ \\approx 57.3^\\circ$</li>
</ul>
<p><strong>弧长公式：</strong>$l=|\\alpha|r$</p>
<p><strong>扇形面积公式：</strong>$S=\\dfrac12 lr = \\dfrac12 |\\alpha| r^2$</p>`,
      tags: ["弧度制","角度","弧长","扇形"]
    },
    {
      title: "5.2 三角函数的概念",
      content: `<p>设角$\\alpha$的终边与单位圆交于$P(x,y)$，$r=\\sqrt{x^2+y^2}$</p>
<p>$$\\sin\\alpha = \\frac{y}{r},\\quad \\cos\\alpha = \\frac{x}{r},\\quad \\tan\\alpha = \\frac{y}{x}\\;(x\\neq0)$$</p>
<p><strong>同角关系：</strong></p>
<ul>
<li>$\\sin^2\\alpha+\\cos^2\\alpha = 1$</li>
<li>$\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha}$</li>
</ul>
<p><strong>各象限符号：</strong>一全正，二正弦，三正切，四余弦</p>`,
      tags: ["三角函数","同角关系","象限符号"]
    },
    {
      title: "5.3 诱导公式",
      content: `<p><strong>口诀：</strong>奇变偶不变，符号看象限</p>
<p><strong>核心公式：</strong></p>
<ul>
<li>$\\sin(\\pi+\\alpha)=-\\sin\\alpha$，$\\cos(\\pi+\\alpha)=-\\cos\\alpha$</li>
<li>$\\sin(-\\alpha)=-\\sin\\alpha$，$\\cos(-\\alpha)=\\cos\\alpha$</li>
<li>$\\sin(\\pi-\\alpha)=\\sin\\alpha$，$\\cos(\\pi-\\alpha)=-\\cos\\alpha$</li>
<li>$\\sin(\\frac{\\pi}{2}-\\alpha)=\\cos\\alpha$，$\\cos(\\frac{\\pi}{2}-\\alpha)=\\sin\\alpha$</li>
<li>$\\sin(\\frac{\\pi}{2}+\\alpha)=\\cos\\alpha$，$\\cos(\\frac{\\pi}{2}+\\alpha)=-\\sin\\alpha$</li>
</ul>`,
      tags: ["诱导公式","奇变偶不变","符号看象限"]
    },
    {
      title: "5.4 三角函数的图象与性质",
      content: `<p><strong>$y=\\sin x$：</strong>周期$2\\pi$，奇函数，在$[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$增，值域$[-1,1]$</p>
<p><strong>$y=\\cos x$：</strong>周期$2\\pi$，偶函数，在$[0,\\pi]$减，值域$[-1,1]$</p>
<p><strong>$y=\\tan x$：</strong>周期$\\pi$，奇函数，在$(-\\frac{\\pi}{2},\\frac{\\pi}{2})$增，值域$\\mathbb{R}$，有垂直渐近线$x=\\frac{\\pi}{2}+k\\pi$</p>`,
      tags: ["正弦","余弦","正切","周期","图象"]
    },
    {
      title: "5.5 三角恒等变换",
      content: `<p><strong>两角和差：</strong></p>
<ul>
<li>$\\sin(\\alpha\\pm\\beta)=\\sin\\alpha\\cos\\beta\\pm\\cos\\alpha\\sin\\beta$</li>
<li>$\\cos(\\alpha\\pm\\beta)=\\cos\\alpha\\cos\\beta\\mp\\sin\\alpha\\sin\\beta$</li>
<li>$\\tan(\\alpha\\pm\\beta)=\\dfrac{\\tan\\alpha\\pm\\tan\\beta}{1\\mp\\tan\\alpha\\tan\\beta}$</li>
</ul>
<p><strong>二倍角公式：</strong></p>
<ul>
<li>$\\sin2\\alpha=2\\sin\\alpha\\cos\\alpha$</li>
<li>$\\cos2\\alpha=\\cos^2\\alpha-\\sin^2\\alpha=2\\cos^2\\alpha-1=1-2\\sin^2\\alpha$</li>
<li>$\\tan2\\alpha=\\dfrac{2\\tan\\alpha}{1-\\tan^2\\alpha}$</li>
</ul>`,
      tags: ["两角和差","二倍角","恒等变换"]
    },
    {
      title: "5.6 函数 y = Asin(ωx + φ)",
      content: `<p><strong>参数意义：</strong></p>
<ul>
<li>$A$ — <strong>振幅</strong>，最大值$|A|$</li>
<li>$\\omega$ — <strong>角频率</strong>，周期$T=\\dfrac{2\\pi}{\\omega}$</li>
<li>$\\varphi$ — <strong>初相</strong></li>
</ul>
<p><strong>由$y=\\sin x$到$y=A\\sin(\\omega x+\\varphi)$：</strong></p>
<ul>
<li>左右平移$|\\varphi|$个单位（$\\varphi>0$左移）</li>
<li>横坐标伸缩$\\frac1\\omega$倍</li>
<li>纵坐标伸缩$A$倍</li>
</ul>`,
      tags: ["振幅","周期","初相","图象变换"]
    },
    {
      title: "5.7 三角函数的应用",
      content: `<p><strong>简谐运动：</strong>$y=A\\sin(\\omega t+\\varphi)$</p>
<ul>
<li>$A$ — 振幅，$T=\\dfrac{2\\pi}{\\omega}$ — 周期</li>
<li>$f=\\dfrac1T=\\dfrac{\\omega}{2\\pi}$ — 频率</li>
<li>$\\omega t+\\varphi$ — 相位，$\\varphi$ — 初相</li>
</ul>
<p><strong>应用实例：</strong>交变电流$i=I_m\\sin\\omega t$、潮汐、单摆、音波等周期性现象</p>`,
      tags: ["简谐运动","频率","相位"]
    }
  ]
};
