// 必修第二册 知识卡片数据
// 人教A版（2019）公开目录要点 · 自编学习笔记（非教材原文）
// 内容校对：2026-09-04
// 写法说明：content 一律用反引号 ` ` 包裹，LaTeX 用「单反斜杠」直接写
window.__CONTENT_META = Object.assign(window.__CONTENT_META || {}, {
  lastUpdated: "2026-09-04",
  edition: "人教A版（2019）",
  scope: "必修第一册、必修第二册公开目录要点",
  note: "自编学习笔记，非教材原文；选择性必修未收录；7.3 为教材选学"
});
window.__vol2 = {
  "第六章 平面向量及其应用": [
    {
      title: "6.1 平面向量的概念",
      content: String.raw`<h4>向量的定义</h4><p>既有<strong>大小</strong>又有<strong>方向</strong>的量叫做向量。向量常用有向线段表示，记作$\overrightarrow{AB}$或$\vec{a}$。</p><h4>特殊向量</h4><ul><li><strong>零向量</strong>：长度为$0$的向量，记作$\vec{0}$，方向不确定（约定与任一向量平行）。</li><li><strong>单位向量</strong>：长度等于$1$的向量。</li></ul><h4>向量的关系</h4><ul><li><strong>平行向量（共线向量）</strong>：方向相同或相反的非零向量。规定零向量与任何向量平行。</li><li><strong>相等向量</strong>：长度相等且方向相同的向量（可平移重合）。</li><li><strong>相反向量</strong>：长度相等、方向相反的向量，记作$-\vec{a}$。</li></ul>`,
      tags: ["向量", "零向量", "单位向量", "共线向量"]
    },
    {
      title: "6.2 平面向量的运算",
      content: String.raw`<h4>加法运算</h4><ul><li><strong>三角形法则</strong>：$\vec{a}+\vec{b}$，将$\vec{b}$的起点移至$\vec{a}$的终点，从$\vec{a}$的起点到$\vec{b}$的终点的向量即为和向量。</li><li><strong>平行四边形法则</strong>：以$\vec{a},\vec{b}$为邻边作平行四边形，对角线向量即为和向量。</li><li>运算律：$\vec{a}+\vec{b}=\vec{b}+\vec{a}$（交换律），$(\vec{a}+\vec{b})+\vec{c}=\vec{a}+(\vec{b}+\vec{c})$（结合律）。</li></ul><h4>减法运算</h4><p>$\vec{a}-\vec{b}=\vec{a}+(-\vec{b})$。几何意义：从$\vec{b}$的终点指向$\vec{a}$的终点的向量。</p><h4>数乘运算</h4><p>实数$\lambda$与向量$\vec{a}$的积是一个向量，记作$\lambda\vec{a}$。</p><ul><li>$|\lambda\vec{a}|=|\lambda||\vec{a}|$</li><li>方向：$\lambda>0$时与$\vec{a}$同向；$\lambda \\lt 0$时与$\vec{a}$反向；$\lambda=0$时为零向量。</li></ul><h4>数量积（点乘）</h4><p>$\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos\theta$，其中$\theta$是$\vec{a}$与$\vec{b}$的夹角（$0^\circ\leq\theta\leq180^\circ$）。</p><ul><li>$\vec{a}\perp\vec{b}\iff\vec{a}\cdot\vec{b}=0$（$\vec{a},\vec{b}$均非零时）</li><li>$\vec{a}\cdot\vec{a}=|\vec{a}|^2$</li><li>$|\vec{a}\cdot\vec{b}|\leq|\vec{a}||\vec{b}|$（由 $|\cos\theta|\le 1$）</li></ul>`,
      tags: ["向量加法", "向量减法", "数乘", "数量积"]
    },
    {
      title: "6.3 平面向量基本定理及坐标表示",
      content: String.raw`<h4>平面向量基本定理</h4><p>如果$\vec{e}_1,\vec{e}_2$是同一平面内的两个<strong>不共线</strong>向量，那么对于这一平面内的任一向量$\vec{a}$，有且只有一对实数$\lambda_1,\lambda_2$，使得</p><p>$$\vec{a}=\lambda_1\vec{e}_1+\lambda_2\vec{e}_2$$</p><p>其中$\{\vec{e}_1,\vec{e}_2\}$叫做表示这一平面内所有向量的一个<strong>基底</strong>。</p><h4>坐标运算</h4><p>设$\vec{a}=(x_1,y_1)$，$\vec{b}=(x_2,y_2)$，则：</p><ul><li>加法：$\vec{a}+\vec{b}=(x_1+x_2,y_1+y_2)$</li><li>减法：$\vec{a}-\vec{b}=(x_1-x_2,y_1-y_2)$</li><li>数乘：$\lambda\vec{a}=(\lambda x_1,\lambda y_1)$</li><li>数量积：$\vec{a}\cdot\vec{b}=x_1x_2+y_1y_2$</li></ul><h4>平行与垂直的坐标条件</h4><ul><li>$\vec{a}\parallel\vec{b}\iff x_1y_2-x_2y_1=0$</li><li>$\vec{a}\perp\vec{b}\iff x_1x_2+y_1y_2=0$</li></ul><h4>模与夹角</h4><ul><li>$|\vec{a}|=\sqrt{x_1^2+y_1^2}$</li><li>$\cos\theta=\dfrac{\vec{a}\cdot\vec{b}}{|\vec{a}||\vec{b}|}=\dfrac{x_1x_2+y_1y_2}{\sqrt{x_1^2+y_1^2}\sqrt{x_2^2+y_2^2}}$</li></ul>`,
      tags: ["基底", "坐标运算", "平行", "垂直"]
    },
    {
      title: "6.4 平面向量的应用",
      content: String.raw`<h4>余弦定理</h4><p>三角形中任意一边的平方等于其他两边平方的和减去这两边与它们夹角的余弦的积的两倍：</p><p>$$a^2=b^2+c^2-2bc\cos A$$$$b^2=a^2+c^2-2ac\cos B$$$$c^2=a^2+b^2-2ab\cos C$$</p><p>推论：$\cos A=\dfrac{b^2+c^2-a^2}{2bc}$</p><h4>正弦定理</h4><p>在一个三角形中，各边的长度与它所对角的正弦的比相等，比值为外接圆直径：</p><p>$$\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}=2R$$</p><p>其中$R$为三角形外接圆的半径。</p><h4>三角形面积公式</h4><p>$$S_{\triangle ABC}=\frac{1}{2}ab\sin C=\frac{1}{2}bc\sin A=\frac{1}{2}ac\sin B$$</p><p class="label-attention">【选用提示】</p><p>已知两边及其夹角用余弦定理或面积公式；已知两角夹一边或两边及其中一边的对角用正弦定理（注意可能有两解）。</p>`,
      tags: ["余弦定理", "正弦定理", "三角形面积", "向量应用"]
    }
  ],
  "第七章 复数": [
    {
      title: "7.1 复数的概念",
      content: String.raw`<h4>虚数单位</h4><p>规定$i^2=-1$，$i$叫做虚数单位。$i$的幂具有周期性：$i^{4k}=1,\;i^{4k+1}=i,\;i^{4k+2}=-1,\;i^{4k+3}=-i$（$k\in\mathbb{N}$）。</p><h4>复数的定义</h4><p>形如$a+bi$（$a,b\in\mathbb{R}$）的数叫做复数，记作$z=a+bi$。</p><ul><li><strong>实部</strong>：$a=\operatorname{Re}(z)$</li><li><strong>虚部</strong>：$b=\operatorname{Im}(z)$（虚部是实数$b$，不是$bi$）</li></ul><h4>复数的分类</h4><ul><li>$b=0$时，$z$为实数</li><li>$b\neq0$时，$z$为虚数</li><li>$a=0$且$b\neq0$时，$z$为纯虚数</li></ul><h4>共轭复数</h4><p>$z=a+bi$的共轭复数为$\bar{z}=a-bi$。</p><h4>复平面</h4><p>直角坐标系中，$x$轴为实轴，$y$轴为虚轴。复数$z=a+bi$对应点$Z(a,b)$，也可对应向量$\overrightarrow{OZ}$。</p><p>复数的模：$|z|=\sqrt{a^2+b^2}$，且$|z|^2=z\bar{z}$。</p>`,
      tags: ["复数", "虚数单位", "共轭复数", "复平面"]
    },
    {
      title: "7.2 复数的四则运算",
      content: String.raw`<h4>加法与减法</h4><p>设$z_1=a+bi$，$z_2=c+di$，则</p><p>$$z_1\pm z_2=(a\pm c)+(b\pm d)i$$</p><p>几何意义：对应向量的平行四边形法则或三角形法则。</p><h4>乘法</h4><p>$$z_1z_2=(a+bi)(c+di)=(ac-bd)+(ad+bc)i$$</p><p>特别地，$(a+bi)(a-bi)=a^2+b^2$（共轭乘积为实数）。</p><h4>除法（分母实数化）</h4><p>$$\frac{z_1}{z_2}=\frac{a+bi}{c+di}=\frac{(a+bi)(c-di)}{(c+di)(c-di)}=\frac{ac+bd}{c^2+d^2}+\frac{bc-ad}{c^2+d^2}i\quad(z_2\neq 0)$$</p><p>核心思路：分子分母同乘分母的共轭复数，将分母化为实数。</p><h4>运算律</h4><p>加法、乘法的交换律、结合律以及乘法对加法的分配律均成立。</p><p class="label-attention">【课标范围】</p><p>必修要求掌握代数形式的四则运算与几何意义；三角形式见下一张选学卡。</p>`,
      tags: ["复数运算", "加减乘除", "分母实数化", "共轭"]
    },
    {
      title: "7.3 * 复数的三角表示（选学）",
      content: String.raw`<p class="label-attention">【范围说明】</p><p>本节约为教材<strong>选学</strong>（目录常标 *）。学业水平考试与必修核心要求以代数形式为主，三角形式不作必考默认。</p><h4>三角形式</h4><p>非零复数$z=a+bi$可写成</p><p>$$z=r(\cos\theta+i\sin\theta)$$</p><p>其中$r=|z|=\sqrt{a^2+b^2}$为模，$\theta$为辐角（由点$(a,b)$所在象限确定，$\tan\theta=b/a$仅在相应象限成立）。</p><h4>辐角主值</h4><p>同一非零复数的辐角相差$2k\pi$（$k\in\mathbb{Z}$）。主值常用区间$(-\pi,\pi]$或$[0,2\pi)$，两种约定都合法，解题时须事先声明。记号上常把主值写作$\arg z$，全体辐角写作$\operatorname{Arg} z=\arg z+2k\pi$。</p><h4>乘除法的三角形式</h4><p>设$z_1=r_1(\cos\theta_1+i\sin\theta_1)$，$z_2=r_2(\cos\theta_2+i\sin\theta_2)$（$r_2\neq 0$），则</p><p>$$z_1z_2=r_1r_2[\cos(\theta_1+\theta_2)+i\sin(\theta_1+\theta_2)]$$</p><p>$$\frac{z_1}{z_2}=\frac{r_1}{r_2}[\cos(\theta_1-\theta_2)+i\sin(\theta_1-\theta_2)]$$</p><h4>棣莫弗公式</h4><p>$$[r(\cos\theta+i\sin\theta)]^n=r^n(\cos n\theta+i\sin n\theta)\quad(n\in\mathbb{N}^*)$$</p>`,
      tags: ["选学", "三角形式", "棣莫弗公式", "辐角", "模"]
    }
  ],
  "第八章 立体几何初步": [
    {
      title: "8.1 基本立体图形",
      content: String.raw`<h4>多面体</h4><ul><li><strong>棱柱</strong>：有两个面互相平行，其余各面都是四边形，且每相邻两个四边形的公共边互相平行。如三棱柱、四棱柱。</li><li><strong>棱锥</strong>：有一个面是多边形，其余各面都是有一个公共顶点的三角形。</li><li><strong>棱台</strong>：用平行于棱锥底面的平面去截棱锥，截面与底面之间的部分。</li></ul><h4>旋转体</h4><ul><li><strong>圆柱</strong>：以矩形的一边所在直线为轴，其余三边旋转形成的曲面所围成的几何体。</li><li><strong>圆锥</strong>：以直角三角形的一条直角边所在直线为轴，其余两边旋转形成的曲面所围成的几何体。</li><li><strong>圆台</strong>：以直角梯形垂直于底边的腰所在直线为轴旋转一周所得；也可用平行于圆锥底面的平面截圆锥得到。</li><li><strong>球</strong>：以半圆的直径所在直线为轴旋转一周形成的几何体；球心$O$，半径$R$。</li></ul>`,
      tags: ["棱柱", "棱锥", "棱台", "圆柱", "圆锥", "圆台", "球"]
    },
    {
      title: "8.2/8.3 直观图与表面积、体积",
      content: String.raw`<h4>斜二测画法</h4><p>画水平放置的平面图形的直观图时：</p><ul><li>$x$轴与$y$轴夹角为$45^\circ$（或$135^\circ$）</li><li>平行于$x$轴的线段长度不变，平行于$y$轴的线段长度变为原来的一半</li><li>原图形面积$S$与直观图面积$S'$的关系：$S'=\dfrac{\sqrt{2}}{4}S$</li></ul><h4>柱、锥、台的体积</h4><p>$$V_{\text{柱}}=Sh,\quad V_{\text{锥}}=\frac{1}{3}Sh,\quad V_{\text{台}}=\frac{1}{3}(S'+\sqrt{S'S}+S)h$$</p><p>其中$S$为（下）底面积，$S'$为台体上底面积，$h$为高。</p><h4>常见旋转体侧面积（$l$为母线）</h4><ul><li>圆柱侧面积 $2\pi rh$，全面积 $2\pi r(h+r)$</li><li>圆锥侧面积 $\pi rl$，全面积 $\pi r(l+r)$</li><li>圆台侧面积 $\pi(r+r')l$</li></ul><h4>球的表面积与体积</h4><p>$$S_{\text{球}}=4\pi R^2,\qquad V_{\text{球}}=\frac{4}{3}\pi R^3$$</p>`,
      tags: ["斜二测画法", "体积", "表面积", "球"]
    },
    {
      title: "8.4 空间点、直线、平面的位置关系",
      content: String.raw`<h4>四个公理</h4><ul><li><strong>公理1</strong>：如果一条直线上的两点在一个平面内，那么这条直线在此平面内。</li><li><strong>公理2</strong>：过不在同一直线上的三点，有且只有一个平面。</li><li><strong>公理3</strong>：如果两个不重合的平面有一个公共点，那么它们有且只有一条过该点的公共直线。</li><li><strong>公理4（平行公理）</strong>：平行于同一条直线的两条直线互相平行。</li></ul><h4>空间中直线与直线的位置关系</h4><ul><li><strong>平行</strong>：在同一平面内且无公共点</li><li><strong>相交</strong>：在同一平面内有且只有一个公共点</li><li><strong>异面</strong>：不同在任何一个平面内，无公共点</li></ul><h4>等角定理</h4><p>空间中如果两个角的两边分别对应平行，那么这两个角相等或互补。</p>`,
      tags: ["公理", "异面直线", "平行公理", "等角定理"]
    },
    {
      title: "8.5 空间直线、平面的平行",
      content: String.raw`<h4>直线与平面平行的判定</h4><p>如果平面外一条直线与此平面内的一条直线平行，则该直线与此平面平行。</p><p>符号：$a\not\subset\alpha,\;b\subset\alpha,\;a\parallel b\;\Rightarrow\;a\parallel\alpha$</p><h4>直线与平面平行的性质</h4><p>一条直线与一个平面平行，则过这条直线的任一平面与此平面的交线与该直线平行。</p><p>符号：$a\parallel\alpha,\;a\subset\beta,\;\alpha\cap\beta=b\;\Rightarrow\;a\parallel b$</p><h4>平面与平面平行的判定</h4><p>一个平面内的两条相交直线与另一个平面平行，则这两个平面平行。</p><p>符号：$a\subset\beta,\;b\subset\beta,\;a\cap b=P,\;a\parallel\alpha,\;b\parallel\alpha\;\Rightarrow\;\beta\parallel\alpha$</p><h4>平面与平面平行的性质</h4><ul><li>两个平面平行，则其中一个平面内的直线平行于另一个平面。</li><li>两个平行平面同时与第三个平面相交，交线平行。</li></ul>`,
      tags: ["线面平行", "面面平行", "判定定理", "性质定理"]
    },
    {
      title: "8.6 空间直线、平面的垂直",
      content: String.raw`<h4>直线与平面垂直的定义</h4><p>如果直线$l$与平面$\alpha$内的任意一条直线都垂直，就说$l\perp\alpha$。</p><h4>直线与平面垂直的判定</h4><p>一条直线与一个平面内的两条相交直线垂直，则该直线与此平面垂直。</p><p>符号：$l\perp a,\;l\perp b,\;a\subset\alpha,\;b\subset\alpha,\;a\cap b=P\;\Rightarrow\;l\perp\alpha$</p><h4>直线与平面垂直的性质</h4><p>垂直于同一个平面的两条直线平行。</p><h4>平面与平面垂直的判定</h4><p>一个平面过另一个平面的垂线，则这两个平面垂直。</p><p>符号：$l\perp\alpha,\;l\subset\beta\;\Rightarrow\;\beta\perp\alpha$</p><h4>平面与平面垂直的性质</h4><p>两个平面垂直，则一个平面内垂直于交线的直线与另一个平面垂直。</p><p>符号：$\alpha\perp\beta,\;\alpha\cap\beta=l,\;a\subset\alpha,\;a\perp l\;\Rightarrow\;a\perp\beta$</p><h4>斜线与射影（不必单记旧名）</h4><p>平面内一条直线若垂直于某斜线在该平面上的射影，则它也垂直于这条斜线。这是线面垂直定义的推论。<strong>2019 课标不单列「三垂线定理」这一名称</strong>，证明时请回到线面垂直的判定与定义。</p>`,
      tags: ["线面垂直", "面面垂直", "判定定理", "性质定理"]
    }
  ],
  "第九章 统计": [
    {
      title: "9.1/9.2 随机抽样与用样本估计总体",
      content: String.raw`<h4>简单随机抽样</h4><ul><li><strong>抽签法</strong>：编号、制签、搅拌、抽取。</li><li><strong>随机数法</strong>：利用随机数表或计算器产生随机数。</li><li>特点：每个个体被抽到的可能性相等。</li></ul><h4>分层随机抽样</h4><p>按某种特征将总体分成若干层，按比例在各层中抽取样本。</p><p>每层抽样数 = 该层个体数 $\times$ 样本容量 / 总体容量</p><p class="label-attention">【2019 目录提示】</p><p>必修抽样以简单随机抽样、分层随机抽样为主；旧教材中的系统抽样不再作为本册必学条目。</p><h4>频率分布直方图</h4><p>步骤：求极差 $\to$ 决定组距与组数 $\to$ 分组 $\to$ 列频率分布表 $\to$ 画直方图。</p><p>纵轴为频率/组距，各小矩形面积之和为$1$。</p><h4>样本数字特征</h4><ul><li><strong>众数</strong>：出现次数最多的数（直方图中最高矩形底边中点可作估计）。</li><li><strong>中位数</strong>：排序后中间位置的数（或中间两数的平均值）；直方图中使左右面积各为 $0.5$ 的横坐标。</li><li><strong>平均数</strong>：$\bar{x}=\dfrac{1}{n}\sum_{i=1}^n x_i$</li><li><strong>极差</strong>：最大值与最小值之差。</li><li><strong>方差</strong>（本册常用）：$s^2=\dfrac{1}{n}\sum_{i=1}^n (x_i-\bar{x})^2$</li><li><strong>标准差</strong>：$s=\sqrt{s^2}$</li></ul><h4>百分位数</h4><p>第 $p$ 百分位数大约把数据分成「约 $p\%$ 不超过它、约 $(100-p)\%$ 不小于它」两部分。常用四分位数：$Q_1=P_{25}$，$Q_2=P_{50}$（即中位数），$Q_3=P_{75}$。</p>`,
      tags: ["抽样", "分层抽样", "直方图", "平均数", "方差", "百分位数"]
    },
    {
      title: "9.3 统计调查的基本流程",
      content: String.raw`<p class="label-attention">【说明】</p><p>公开目录中本章有「统计分析案例」。下面只记<strong>可迁移的调查流程</strong>，不展开某一本教材中的具体案例与数据。</p><h4>统计调查流程</h4><ol><li><strong>明确问题</strong>：要估计什么总体特征？关心哪些变量？</li><li><strong>设计方案</strong>：确定总体与抽样框、抽样方法（简单随机 / 分层）、样本量、观测项目与记录方式。</li><li><strong>收集数据</strong>：按方案实施，注意缺失值与测量口径一致。必要时由原始量构造派生指标（例如由身高、体重得到 BMI）。</li><li><strong>整理与分析</strong>：分组、画频率分布直方图或条形图；计算平均数、中位数、百分位数、方差等；比较不同子群。</li><li><strong>得出结论并评估</strong>：用样本推断总体时说明抽样误差与可能偏差，再提出有数据支撑的建议。</li></ol><h4>报告时要交代的三件事</h4><ul><li>样本是否对总体有代表性；</li><li>数字特征与图形各说明了集中还是离散；</li><li>结论的适用范围（不能把样本结论无条件推广）。</li></ul>`,
      tags: ["统计案例", "调查流程", "用样本估计总体"]
    }
  ],
  "第十章 概率": [
    {
      title: "10.1 随机事件与概率",
      content: String.raw`<h4>基本概念</h4><ul><li><strong>样本空间$\Omega$</strong>：随机试验所有可能结果构成的集合。</li><li><strong>随机事件</strong>：样本空间的子集。</li><li><strong>基本事件</strong>：单个结果构成的事件。</li></ul><h4>概率的基本性质</h4><ul><li>$0\le P(A)\le 1$，$P(\Omega)=1$，$P(\varnothing)=0$</li><li>若 $A\subseteq B$，则 $P(A)\le P(B)$</li></ul><h4>古典概型</h4><p>满足：（1）有限个样本点；（2）每个样本点等可能。</p><p>$$P(A)=\frac{n(A)}{n(\Omega)}=\frac{\text{事件}A\text{包含的基本事件数}}{\text{基本事件总数}}$$</p><h4>互斥事件</h4><p>事件$A$与事件$B$不能同时发生（$A\cap B=\varnothing$），则</p><p>$$P(A\cup B)=P(A)+P(B)$$</p><p>一般加法公式（不必互斥）：$P(A\cup B)=P(A)+P(B)-P(A\cap B)$。</p><h4>对立事件</h4><p>$A$与$\bar{A}$是对立事件（有且仅有一个发生），则 $P(\bar{A})=1-P(A)$。</p>`,
      tags: ["古典概型", "样本空间", "互斥事件", "对立事件"]
    },
    {
      title: "10.2 事件的相互独立性",
      content: String.raw`<h4>相互独立事件的定义</h4><p>如果事件$A$的发生不影响事件$B$发生的概率，则称$A$与$B$相互独立。</p><p>数学定义：如果$P(A\cap B)=P(A)P(B)$，则$A$与$B$相互独立。</p><h4>独立事件的性质</h4><ul><li>若$A$与$B$独立，则$A$与$\bar{B}$、$\bar{A}$与$B$、$\bar{A}$与$\bar{B}$也相互独立。</li><li>独立时可把「同时发生」拆成概率相乘。</li></ul><h4>独立事件与互斥事件的区别</h4><ul><li><strong>互斥</strong>：$A$与$B$不能同时发生，$P(A\cap B)=0$；若再有 $P(A)>0,P(B)>0$，则二者<strong>不独立</strong>。</li><li><strong>独立</strong>：$A$与$B$可以同时发生，$P(A\cap B)=P(A)P(B)$。</li></ul><p class="label-attention">【课标范围】</p><p>条件概率 $P(B\mid A)$、全概率公式属于<strong>选择性必修</strong>（随机变量章），本册只用乘法定义独立性，不把条件概率当作必学工具。</p>`,
      tags: ["独立事件", "相互独立", "概率乘法", "互斥与独立"]
    },
    {
      title: "10.3 频率与概率",
      content: String.raw`<h4>频率的稳定性</h4><p>在相同条件下大量重复试验，事件$A$发生的频率$f_n(A)=\dfrac{n_A}{n}$会在某个常数附近波动，该常数就是事件$A$的概率$P(A)$。</p><ul><li><strong>频率</strong>：随试验次数变化的观测值。</li><li><strong>概率</strong>：刻画事件发生可能性大小的模型量；可用频率去估计，但不能把某几次试验的频率当成概率本身。</li></ul><h4>用频率估计概率</h4><p>古典概型不便直接计算时，可用大量重复试验或<strong>随机模拟</strong>（如随机数、计算机模拟）得到频率，作为概率的近似。试验（或模拟）次数越多，通常越稳定。</p><p class="label-attention">【范围说明】</p><p>必修只要求理解「频率稳定于概率」并会做简单模拟估计。带 $\varepsilon$ 的极限形式（大数定律的严格表述）超出本册公开要点，不必作为必记公式。</p>`,
      tags: ["频率", "概率", "频率稳定性", "随机模拟"]
    }
  ]
};
