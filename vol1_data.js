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
  "第二章 一元二次函数、方程和不等式": [],
  "第三章 函数概念与性质": [],
  "第四章 指数函数与对数函数": [],
  "第五章 三角函数": []
};
