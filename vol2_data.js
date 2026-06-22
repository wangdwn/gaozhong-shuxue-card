// 必修第二册 知识卡片数据
// 人教A版（2019）
// 共5章，17张卡

window.__vol2 = {
  "第六章 平面向量及其应用": [
    {
      title: "6.1 平面向量的概念",
      content: "<h4>向量的定义</h4><p>既有<strong>大小</strong>又有<strong>方向</strong>的量叫做向量。向量常用有向线段表示，记作$\\overrightarrow{AB}$或$\\vec{a}$。</p><h4>特殊向量</h4><ul><li><strong>零向量</strong>：长度为$0$的向量，记作$\\vec{0}$，方向任意。</li><li><strong>单位向量</strong>：长度等于$1$个单位的向量。</li></ul><h4>向量的关系</h4><ul><li><strong>平行向量（共线向量）</strong>：方向相同或相反的非零向量。规定零向量与任何向量平行。</li><li><strong>相等向量</strong>：长度相等且方向相同的向量。</li><li><strong>相反向量</strong>：长度相等、方向相反的向量，记作$-\\vec{a}$。</li></ul>",
      tags: ["向量", "零向量", "单位向量", "共线向量"]
    },
    {
      title: "6.2 平面向量的运算",
      content: "<h4>加法运算</h4><ul><li><strong>三角形法则</strong>：$\\vec{a}+\\vec{b}$，将$\\vec{b}$的起点移至$\\vec{a}$的终点，从$\\vec{a}$的起点到$\\vec{b}$的终点的向量即为和向量。</li><li><strong>平行四边形法则</strong>：以$\\vec{a},\\vec{b}$为邻边作平行四边形，对角线向量即为和向量。</li><li>运算律：$\\vec{a}+\\vec{b}=\\vec{b}+\\vec{a}$（交换律），$(\\vec{a}+\\vec{b})+\\vec{c}=\\vec{a}+(\\vec{b}+\\vec{c})$（结合律）。</li></ul><h4>减法运算</h4><p>$\\vec{a}-\\vec{b}=\\vec{a}+(-\\vec{b})$。几何意义：从$\\vec{b}$的终点指向$\\vec{a}$的终点的向量。</p><h4>数乘运算</h4><p>实数$\\lambda$与向量$\\vec{a}$的积是一个向量，记作$\\lambda\\vec{a}$。</p><ul><li>$|\\lambda\\vec{a}|=|\\lambda||\\vec{a}|$</li><li>方向：$\\lambda>0$时与$\\vec{a}$同向；$\\lambda<0$时与$\\vec{a}$反向；$\\lambda=0$时为零向量。</li></ul><h4>数量积（点乘）</h4><p>$\\vec{a}\\cdot\\vec{b}=|\\vec{a}||\\vec{b}|\\cos\\theta$，其中$\\theta$是$\\vec{a}$与$\\vec{b}$的夹角（$0^\\circ\\leq\\theta\\leq180^\\circ$）。</p><ul><li>$\\vec{a}\\perp\\vec{b}\\iff\\vec{a}\\cdot\\vec{b}=0$</li><li>$\\vec{a}\\cdot\\vec{a}=|\\vec{a}|^2$</li><li>$\\vec{a}\\cdot\\vec{b}\\leq|\\vec{a}||\\vec{b}|$（柯西不等式）</li></ul>",
      tags: ["向量加法", "向量减法", "数乘", "数量积"]
    },
    {
      title: "6.3 平面向量基本定理及坐标表示",
      content: "<h4>平面向量基本定理</h4><p>如果$\\vec{e}_1,\\vec{e}_2$是同一平面内的两个<strong>不共线</strong>向量，那么对于这一平面内的任一向量$\\vec{a}$，有且只有一对实数$\\lambda_1,\\lambda_2$，使得</p><p>$$\\vec{a}=\\lambda_1\\vec{e}_1+\\lambda_2\\vec{e}_2$$</p><p>其中$\{\\vec{e}_1,\\vec{e}_2\}$叫做表示这一平面内所有向量的一个<strong>基底</strong>。</p><h4>坐标运算</h4><p>设$\\vec{a}=(x_1,y_1)$，$\\vec{b}=(x_2,y_2)$，则：</p><ul><li>加法：$\\vec{a}+\\vec{b}=(x_1+x_2,y_1+y_2)$</li><li>减法：$\\vec{a}-\\vec{b}=(x_1-x_2,y_1-y_2)$</li><li>数乘：$\\lambda\\vec{a}=(\\lambda x_1,\\lambda y_1)$</li><li>数量积：$\\vec{a}\\cdot\\vec{b}=x_1x_2+y_1y_2$</li></ul><h4>平行与垂直的坐标条件</h4><ul><li>$\\vec{a}\\parallel\\vec{b}\\iff x_1y_2-x_2y_1=0$</li><li>$\\vec{a}\\perp\\vec{b}\\iff x_1x_2+y_1y_2=0$</li></ul><h4>模与夹角</h4><ul><li>$|\\vec{a}|=\\sqrt{x_1^2+y_1^2}$</li><li>$\\cos\\theta=\dfrac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}||\\vec{b}|}=\dfrac{x_1x_2+y_1y_2}{\\sqrt{x_1^2+y_1^2}\\sqrt{x_2^2+y_2^2}}$</li></ul>",
      tags: ["基底", "坐标运算", "平行", "垂直"]
    },
    {
      title: "6.4 平面向量的应用",
      content: "<h4>余弦定理</h4><p>三角形中任意一边的平方等于其他两边平方的和减去这两边与它们夹角的余弦的积的两倍：</p><p>$$a^2=b^2+c^2-2bc\\cos A$$$$b^2=a^2+c^2-2ac\\cos B$$$$c^2=a^2+b^2-2ab\\cos C$$</p><p>推论：$\\cos A=\dfrac{b^2+c^2-a^2}{2bc}$</p><h4>正弦定理</h4><p>在一个三角形中，各边的长度与它所对角的正弦的比相等，比值为外接圆直径：</p><p>$$\dfrac{a}{\\sin A}=\dfrac{b}{\\sin B}=\dfrac{c}{\\sin C}=2R$$</p><p>其中$R$为三角形外接圆的半径。</p><h4>三角形面积公式</h4><p>$$S_{\\triangle ABC}=\\frac{1}{2}ab\\sin C=\\frac{1}{2}bc\\sin A=\\frac{1}{2}ac\\sin B$$</p>",
      tags: ["余弦定理", "正弦定理", "三角形面积", "向量应用"]
    }
  ],

  "第七章 复数": [
    {
      title: "7.1 复数的概念",
      content: "<h4>虚数单位</h4><p>规定$i^2=-1$，$i$叫做虚数单位。$i$的幂具有周期性：$i^{4k}=1,\;i^{4k+1}=i,\;i^{4k+2}=-1,\;i^{4k+3}=-i$。</p><h4>复数的定义</h4><p>形如$a+bi$（$a,b\in\\mathbb{R}$）的数叫做复数，记作$z=a+bi$。</p><ul><li><strong>实部</strong>：$a=\\operatorname{Re}(z)$</li><li><strong>虚部</strong>：$b=\\operatorname{Im}(z)$</li></ul><h4>复数的分类</h4><ul><li>$b=0$时，$z$为实数</li><li>$b\neq0$时，$z$为虚数</li><li>$a=0$且$b\neq0$时，$z$为纯虚数</li></ul><h4>共轭复数</h4><p>$z=a+bi$的共轭复数为$\\bar{z}=a-bi$。</p><h4>复平面</h4><p>直角坐标系中，$x$轴为实轴，$y$轴为虚轴。复数$z=a+bi$对应点$Z(a,b)$，向量$\\overrightarrow{OZ}$。</p><p>复数的模：$|z|=\\sqrt{a^2+b^2}$。</p>",
      tags: ["复数", "虚数单位", "共轭复数", "复平面"]
    },
    {
      title: "7.2 复数的四则运算",
      content: "<h4>加法与减法</h4><p>设$z_1=a+bi$，$z_2=c+di$，则</p><p>$$z_1\pm z_2=(a\pm c)+(b\pm d)i$$</p><p>几何意义：对应向量的平行四边形法则或三角形法则。</p><h4>乘法</h4><p>$$z_1z_2=(a+bi)(c+di)=(ac-bd)+(ad+bc)i$$</p><p>特别地，$(a+bi)(a-bi)=a^2+b^2$（共轭乘积为实数）。</p><h4>除法（分母实数化）</h4><p>$$\\frac{z_1}{z_2}=\\frac{a+bi}{c+di}=\\frac{(a+bi)(c-di)}{(c+di)(c-di)}=\\frac{ac+bd}{c^2+d^2}+\\frac{bc-ad}{c^2+d^2}i$$</p><p>核心思路：分子分母同乘分母的共轭复数$c-di$，将分母化为实数。</p><h4>运算律</h4><p>交换律、结合律、分配律均成立。</p>",
      tags: ["复数运算", "加减乘除", "分母实数化", "共轭"]
    },
    {
      title: "7.3 复数的三角表示（选学）",
      content: "<h4>三角形式</h4><p>复数$z=a+bi$的三角形式为</p><p>$$z=r(\\cos\\theta+i\\sin\\theta)$$</p><p>其中$r=|z|=\\sqrt{a^2+b^2}$为模，$\\theta$为辐角（$\\tan\\theta=\\frac{b}{a}$，由点$(a,b)$所在象限决定）。</p><h4>辐角主值</h4><p>$\\theta$在$[0,2\\pi)$内的值称为辐角主值，记作$\\operatorname{Arg}(z)$。</p><h4>乘除法的三角形式</h4><p>设$z_1=r_1(\\cos\\theta_1+i\\sin\\theta_1)$，$z_2=r_2(\\cos\\theta_2+i\\sin\\theta_2)$，则</p><p>$$z_1z_2=r_1r_2[\\cos(\\theta_1+\\theta_2)+i\\sin(\\theta_1+\\theta_2)]$$</p><p>$$\\frac{z_1}{z_2}=\\frac{r_1}{r_2}[\\cos(\\theta_1-\\theta_2)+i\\sin(\\theta_1-\\theta_2)]$$</p><h4>棣莫弗定理</h4><p>$$[r(\\cos\\theta+i\\sin\\theta)]^n=r^n(\\cos n\\theta+i\\sin n\\theta)\\quad(n\in\\mathbb{N}^*)$$</p>",
      tags: ["三角形式", "棣莫弗定理", "辐角", "模"]
    }
  ],

  "第八章 立体几何初步": [
    {
      title: "8.1 基本立体图形",
      content: "<h4>多面体</h4><ul><li><strong>棱柱</strong>：有两个面互相平行，其余各面都是四边形，且相邻两个四边形的公共边互相平行。如三棱柱、四棱柱。</li><li><strong>棱锥</strong>：有一个面是多边形，其余各面都是有一个公共顶点的三角形。</li><li><strong>棱台</strong>：用一个平行于棱锥底面的平面去截棱锥，截面与底面之间的部分。</li></ul><h4>旋转体</h4><ul><li><strong>圆柱</strong>：以矩形的一边为轴旋转一周形成的曲面。</li><li><strong>圆锥</strong>：以直角三角形的一条直角边为轴旋转一周。</li><li><strong>圆台</strong>：以直角梯形的直角腰为轴旋转一周，或用平行于圆锥底面的截面截得。</li><li><strong>球</strong>：以半圆的直径为轴旋转一周，球心$O$，半径$R$。</li></ul>",
      tags: ["棱柱", "棱锥", "棱台", "圆柱", "圆锥", "圆台", "球"]
    },
    {
      title: "8.2/8.3 直观图与表面积、体积",
      content: "<h4>斜二测画法</h4><p>画水平放置的平面图形的直观图时：</p><ul><li>$x$轴与$y$轴夹角为$45^\\circ$（或$135^\\circ$）</li><li>平行于$x$轴的线段长度不变，平行于$y$轴的线段长度变为原来的一半</li><li>原图形面积$S$与直观图面积$S'$的关系：$S'=\dfrac{\\sqrt{2}}{4}S$</li></ul><h4>柱体体积</h4><p>$$V_{\\text{柱}}=Sh$$</p><p>其中$S$为底面积，$h$为高。</p><h4>锥体体积</h4><p>$$V_{\\text{锥}}=\\frac{1}{3}Sh$$</p><h4>台体体积</h4><p>$$V_{\\text{台}}=\\frac{1}{3}(S'+\\sqrt{S'S}+S)h$$</p><p>其中$S',S$分别为上、下底面积。</p><h4>球的表面积与体积</h4><p>$$S_{\\text{球}}=4\\pi R^2$$$$V_{\\text{球}}=\\frac{4}{3}\\pi R^3$$</p>",
      tags: ["斜二测画法", "体积", "表面积", "球"]
    },
    {
      title: "8.4 空间点、直线、平面的位置关系",
      content: "<h4>四个公理</h4><ul><li><strong>公理1</strong>：如果一条直线上的两点在一个平面内，那么这条直线在此平面内。</li><li><strong>公理2</strong>：过不在同一直线上的三点，有且只有一个平面。</li><li><strong>公理3</strong>：如果两个不重合的平面有一个公共点，那么它们有且只有一条过该点的公共直线。</li><li><strong>公理4（平行公理）</strong>：平行于同一条直线的两条直线互相平行。</li></ul><h4>空间中直线与直线的位置关系</h4><ul><li><strong>平行</strong>：在同一平面内且无公共点</li><li><strong>相交</strong>：在同一平面内有且只有一个公共点</li><li><strong>异面</strong>：不同在任何一个平面内，无公共点</li></ul><h4>等角定理</h4><p>空间中如果两个角的两边分别对应平行，那么这两个角相等或互补。</p>",
      tags: ["公理", "异面直线", "平行公理", "等角定理"]
    },
    {
      title: "8.5 空间直线、平面的平行",
      content: "<h4>直线与平面平行的判定</h4><p>如果平面外一条直线与此平面内的一条直线平行，则该直线与此平面平行。</p><p>符号：$a\\not\\subset\\alpha,\;b\\subset\\alpha,\;a\\parallel b\;\\Rightarrow\;a\\parallel\\alpha$</p><h4>直线与平面平行的性质</h4><p>一条直线与一个平面平行，则过这条直线的任一平面与此平面的交线与该直线平行。</p><p>符号：$a\\parallel\\alpha,\;a\\subset\\beta,\;\\alpha\\cap\\beta=b\;\\Rightarrow\;a\\parallel b$</p><h4>平面与平面平行的判定</h4><p>一个平面内的两条相交直线与另一个平面平行，则这两个平面平行。</p><p>符号：$a\\subset\\beta,\;b\\subset\\beta,\;a\\cap b=P,\;a\\parallel\\alpha,\;b\\parallel\\alpha\;\\Rightarrow\;\\beta\\parallel\\alpha$</p><h4>平面与平面平行的性质</h4><ul><li>两个平面平行，则其中一个平面内的直线平行于另一个平面。</li><li>两个平行平面同时与第三个平面相交，交线平行。</li></ul>",
      tags: ["线面平行", "面面平行", "判定定理", "性质定理"]
    },
    {
      title: "8.6 空间直线、平面的垂直",
      content: "<h4>直线与平面垂直的定义</h4><p>如果直线$l$与平面$\\alpha$内的任意一条直线都垂直，就说$l\\perp\\alpha$。</p><h4>直线与平面垂直的判定</h4><p>一条直线与一个平面内的两条相交直线垂直，则该直线与此平面垂直。</p><p>符号：$l\\perp a,\;l\\perp b,\;a\\subset\\alpha,\;b\\subset\\alpha,\;a\\cap b=P\;\\Rightarrow\;l\\perp\\alpha$</p><h4>直线与平面垂直的性质</h4><p>垂直于同一个平面的两条直线平行。</p><h4>平面与平面垂直的判定</h4><p>一个平面过另一个平面的垂线，则这两个平面垂直。</p><p>符号：$l\\perp\\alpha,\;l\\subset\\beta\;\\Rightarrow\;\\beta\\perp\\alpha$</p><h4>平面与平面垂直的性质</h4><p>两个平面垂直，则一个平面内垂直于交线的直线与另一个平面垂直。</p><p>符号：$\\alpha\\perp\\beta,\;\\alpha\\cap\\beta=l,\;a\\subset\\alpha,\;a\\perp l\;\\Rightarrow\;a\\perp\\beta$</p><h4>三垂线定理</h4><p>平面内的一条直线，如果和这个平面的一条斜线的射影垂直，那么它也和这条斜线垂直。</p>",
      tags: ["线面垂直", "面面垂直", "判定定理", "性质定理", "三垂线定理"]
    }
  ],

  "第九章 统计": [
    {
      title: "9.1/9.2 随机抽样与用样本估计总体",
      content: "<h4>简单随机抽样</h4><ul><li><strong>抽签法</strong>：编号、制签、搅拌、抽取。</li><li><strong>随机数法</strong>：利用随机数表或计算器产生随机数。</li><li>特点：每个个体被抽到的可能性相等。</li></ul><h4>分层随机抽样</h4><p>按某种特征将总体分成若干层，按比例在各层中抽取样本。</p><p>每层抽样数 = 该层个体数 $\times$ 样本容量 / 总体容量</p><h4>频率分布直方图</h4><p>步骤：求极差 $\to$ 决定组距与组数 $\to$ 分组 $\to$ 列频率分布表 $\to$ 画直方图。</p><p>纵轴为频率/组距，各小矩形面积之和为$1$。</p><h4>样本数字特征</h4><ul><li><strong>众数</strong>：出现次数最多的数。</li><li><strong>中位数</strong>：排序后中间位置的数（或中间两数的平均值）。</li><li><strong>平均数</strong>：$\\bar{x}=\\frac{1}{n}\\sum_{i=1}^n x_i$</li><li><strong>方差</strong>：$s^2=\\frac{1}{n}\\sum_{i=1}^n (x_i-\\bar{x})^2$</li><li><strong>标准差</strong>：$s=\\sqrt{s^2}$</li></ul>",
      tags: ["抽样", "分层抽样", "直方图", "平均数", "方差"]
    },
    {
      title: "9.3 统计案例 — 公司员工肥胖情况调查分析",
      content: "<h4>统计调查流程</h4><ol><li><strong>明确问题</strong>：调查公司员工的肥胖情况及其影响因素。</li><li><strong>设计调查方案</strong>：确定调查对象、调查方法（如分层抽样）、调查项目（身高、体重、年龄、生活习惯等）。</li><li><strong>收集数据</strong>：按方案实施调查，记录数据。BMI = 体重(kg) / 身高(m)$^2$。</li><li><strong>整理与分析数据</strong>：<ul><li>计算BMI，按标准分类（偏瘦、正常、超重、肥胖）</li><li>绘制频率分布直方图、条形图、折线图</li><li>计算各组平均数和方差，比较不同群体差异</li></ul></li><li><strong>得出结论并决策</strong>：分析肥胖原因，提出健康建议。</li></ol><h4>BMI参考标准</h4><ul><li>偏瘦：BMI < 18.5</li><li>正常：18.5 $\\leq$ BMI < 24</li><li>超重：24 $\\leq$ BMI < 28</li><li>肥胖：BMI $\\geq$ 28</li></ul>",
      tags: ["统计案例", "BMI", "数据分析", "分层抽样"]
    }
  ],

  "第十章 概率": [
    {
      title: "10.1 随机事件与概率",
      content: "<h4>基本概念</h4><ul><li><strong>样本空间$\\Omega$</strong>：随机试验所有可能结果构成的集合。</li><li><strong>随机事件</strong>：样本空间的子集。</li><li><strong>基本事件</strong>：单个结果构成的事件。</li></ul><h4>古典概型</h4><p>满足：（1）有限个样本点；（2）每个样本点等可能。</p><p>$$P(A)=\\frac{n(A)}{n(\\Omega)}=\\frac{\\text{事件}A\\text{包含的基本事件数}}{\\text{基本事件总数}}$$</p><h4>互斥事件</h4><p>事件$A$与事件$B$不能同时发生，则$A\\cup B$表示\"$A$或$B$发生\"。</p><p>$$P(A\\cup B)=P(A)+P(B)$$</p><p>推广到多个互斥事件：$P(A_1\\cup A_2\\cup\\cdots\\cup A_n)=P(A_1)+P(A_2)+\\cdots+P(A_n)$</p><h4>对立事件</h4><p>$A$与$\\bar{A}$是对立事件（有且仅有一个发生），则</p><p>$$P(\\bar{A})=1-P(A)$$</p>",
      tags: ["古典概型", "样本空间", "互斥事件", "对立事件"]
    },
    {
      title: "10.2 事件的相互独立性",
      content: "<h4>相互独立事件的定义</h4><p>如果事件$A$的发生不影响事件$B$发生的概率，则称$A$与$B$相互独立。</p><p>数学定义：如果$P(AB)=P(A)P(B)$，则$A$与$B$相互独立。</p><h4>独立事件的性质</h4><ul><li>若$A$与$B$独立，则$A$与$\\bar{B}$、$\\bar{A}$与$B$、$\\bar{A}$与$\\bar{B}$也相互独立。</li><li>若$A$与$B$相互独立，则$P(B|A)=P(B)$。</li></ul><h4>独立事件与互斥事件的区别</h4><ul><li><strong>互斥</strong>：$A$与$B$不能同时发生，$P(AB)=0$，通常$P(A\\cup B)=P(A)+P(B)$。</li><li><strong>独立</strong>：$A$与$B$可同时发生，$P(AB)=P(A)P(B)$。</li></ul><h4>求概率的一般步骤</h4><p>判断事件的类型（互斥/独立）$\to$ 选择合适的概率公式 $\to$ 计算。</p>",
      tags: ["独立事件", "相互独立", "概率乘法", "互斥与独立"]
    },
    {
      title: "10.3 频率与概率",
      content: "<h4>频率与概率的关系</h4><p>在大量重复试验中，事件$A$发生的频率$f_n(A)=\dfrac{n_A}{n}$会逐渐稳定于某个常数，这个常数就是事件$A$的概率$P(A)$。</p><ul><li><strong>频率</strong>：随试验次数变化的波动值。</li><li><strong>概率</strong>：客观存在的确定值，反映事件发生的可能性大小。</li></ul><h4>大数定律</h4><p>当试验次数$n$足够大时，频率$f_n(A)$趋近于概率$P(A)$。即对任意$\varepsilon>0$，</p><p>$$\lim_{n\to\\infty}P\left(\left|\\frac{n_A}{n}-P(A)\right|<\varepsilon\right)=1$$</p><h4>用频率估计概率</h4><p>在实际应用中，当无法直接计算概率时，常用大量试验的频率来估计概率（如掷硬币、人口统计等）。试验次数越多，估计越精确。</p>",
      tags: ["频率", "概率", "大数定律", "统计概率"]
    }
  ]
};
