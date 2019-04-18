#### flex学习
`flex的属性`

`容器属性`
* flex-flow
* flex-direction
* flex-wrap
* justify-content
* align-items (对齐项)
* align-content

`元素属性`
* order
* flex-grow       (增长)
* flex-shrink     (收缩、缩小、变小)
* flex-basis
* flex
* align-self
#### 一、flex弹性盒模型
`如果某个元素声明了`*display:flex;*`那么这个元素就成了弹性容器，具有flex弹性布局的特性`

`flexbox弹性盒模型`

`1.每个弹性容器都有两根轴：`*主轴和交叉轴*，`两轴之间成90度`，`需要注意的是：水平的不一定是主轴`

`2.每根轴都有起点和终点，这对于元素的对齐非常重要`

`3.弹性容器中的所有元素都称为`*弹性元素*，`弹性元素永远沿主轴排列`

`4.弹性元素也可以通过`*display:flex*`设置为一个弹性容器,因此一个元素既可以是弹性容器也可以是弹性元素`

#### 二、主轴
`flex布局是一种一维布局模型，一次只能处理一个维度（一行或一列）上的元素布局，也就是说，flex布局大部分的属性都是作用于主轴的，在交叉轴上很多时候只能被动地变化`
##### 1.主轴的方向
`我们可以在弹性容器上通过`flex-direction`修改主轴的方向，如果主轴方向修改了，那么：`

`1.交叉轴就会相应地旋转90度`


`2.弹性元素的排列方式也会发生改变，因为弹性元素永远眼主轴排列`
```
row           左---->右(默认)
flex-direction:row;

column        上---->下
flex-direction:column;

row-reverse   右---->左
flex-direction:row-reverse;

column-reverse 下---->上
flex-direction:column-reverse;

```
##### 2.沿主轴的排列处理
`弹性元素永远沿主轴排列，那么如果主轴排不下，会怎样处理？答案就是`flex-wrap
```
nowrap    不折行（默认）
flex-wrap:nowrap;

wrap      折行
flex-wrap:wrap; 

wrap-reverse 反向折行
flex-wrap:wrap-reverse;
```
##### 3.一个复合属性
`flex-flow = flex-direction + flex-wrap;`

`flex-flow 相当于规定了flex布局的‘工作流(flow)’`
```
flex-flow:row nowrap;

flex-flow:column nowrap;

flex-flow:row-reverse nowrap;
...
```
#### 三、元素如何弹性伸缩应对
`当flex-wrap:nowrap;不折行时，容器宽度有剩余或不够分，弹性元素怎么弹性伸缩应对`

`这里针对上面两种场景，引入两个属性（应用在弹性元素上）`
`1.flex-shrink:缩小比例（容器宽度<元素总宽度时如何收缩）`

`2.flex-grow:放大比例（容器宽度>元素总宽度时如何伸展）`
##### 1.flex-shrink：缩小比例
`flex-shrink 默认为1，也就是说当不够分时，元素都将等比例缩小，占满整个宽度`

`flex-shrink:1; 并非严格等比例缩小，它会考虑弹性元素本身的大小`
```
#container{
    display:flex;
    flex-wrap:nowrap;
}
```
##### 2.flex-grow: 放大比例
`1.在flex布局中，容器剩余宽度默认是不进行分配的，也就是所有弹性元素的flex-grow都为0`

`2.通过flex-grow为大于零的值，实现容器剩余宽度的分配比例设置`

*当弹性容器的宽度正好等于元素宽度总和，无多余宽度，此时flex-grow设置什么值都不会生效*

*对于flex-shrink,在容器宽度有剩余时也是不会生效*
#### 四、弹性处理与刚性尺寸
`在进行弹性处理之余，其实有些场景我们更希望元素尺寸固定，不需要进行弹性调整。设置元素尺寸除了width和height以外，flex还提供了一个flex-basis属性`

`flex-basis设置的是元素在主轴上的初始尺寸，所谓的初始尺寸就是元素在flex-grow和flex-shrink生效前的尺寸`

##### 1.flex-basis与width/height的区别
`首先以width为例进行比较。`

`(1)两者都为0`
* width:0; ----完全没有显示
* flex-basis:0; ----根据内容撑开宽度
```
<div id="container">
    <div>1111<div>
    <div>2222</div>
</div>

#container{
    display:flex;
}
div > div:first-child{
    width: 0;
}
div > div:nth-child(2){
    flex-basis: 0;
}
```
`(2)两者非0`
* width:!0;
* flex-basis:!0;
`数值相同时两者等效`

`同时设置，flex-basis优先级高`

`(3)flex-basis:auto;`

`flex-basis为auto时，如设置了width则元素尺寸由width决定；没有设置则由内容决定`

`(4)flex-basis === 主轴上的尺寸!==width`
* 将主轴方向改为：上--->下
* 此时主轴的尺寸是元素的height
* flex-basis===height
``
##### 2.常用的复合属性flex
`最容易迷糊的一个`

`flex=flex-grow + flex-shrink + flex-basis`

```
flex:1;
===>
flex-grow:1;
flex-shrink:1;
flex-basis:0%;

flex:2;
===>
flex-grow:2;
flex-shrink:1;
flex-basis:0%;

flex:auto;
===>
flex-grow:1;
flex-shrink:1;
flex-basis:auto;

flex:none;
===>
flex-grow:0;
flex-shrink:0;
flex-basis:auto;//用于固定尺寸 不伸缩
```
`flex:1;和flex:auto;的区别`

`其实这两者之间的区别归结为flex-basis:0;和flex-basis:auto;的区别`

`flex-basis是指定初始尺寸，当设置为0时，相当于告诉flex-grow和flex-shrink在伸缩的时候不需要考虑我的尺寸；相反当设置为auto时，此时需要在伸缩时将元素尺寸纳入考虑`
#### 五、容器内如何对齐
`元素如何对齐，元素的大小是根据围绕主轴进行设置的，元素的对齐则需要作用于交叉轴上，对齐属性都是作用于`*容器上*

##### 1.主轴上的对齐方式
`justify-content`

```
//元素在主轴开始方向对齐
#container{
    justify-content:flex-start; 
}
//元素在主轴结束方向对齐
#container{
    justify-content:flex-end;
}
//元素在主轴中间
#container{
    justify-content:center;
}
//空格在元素之间
#container{
    justify-content:space-between;
}
//元素在空格之间
#container{
    juetify-content:space-around;
}
```
##### 2.交叉轴上的对齐方式
* 交叉轴上的单行对齐方式
`默认值是stretch，当元素没有设置具体尺寸时会将容器在交叉轴方向撑满。`
```
//默认值stretch，元素没有设置具体尺寸时，会将容器在交叉轴方向撑满
#container{
    align-items:stretch;
}

//沿交叉轴起点对齐
#container{
    align-items:flex-start;
}

//沿交叉轴终点对齐
#container{
    align-items:flex-end;
}

//沿交叉轴中点对齐
#container{
    align-items:center;
}

//沿第一行文字的基线对齐
#container{
    align-items:baseline;
}
```
* 交叉轴上的多行对齐
`通过flex-wrap:wrap;使得元素在一行放不下时进行换行。在这种场景下，就会在交叉轴上出现多行，多行情况下，flex布局提供了align-content属性设置对齐`

`align-content与align-items比较类似`

`align-content只对多行元素有效，会以多行为整体进行对齐，容器必须开启换行`
```
align-content:stretch | flex-start | flex-end | center | space-between | space-around 

align-items:stretch | flex-start | flex-end | center | baseline
```

``


