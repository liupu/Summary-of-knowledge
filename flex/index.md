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
#### flex弹性盒模型
`如果某个元素声明了`*display:flex;*`那么这个元素就成了弹性容器，具有flex弹性布局的特性`

`flexbox弹性盒模型`

`1.每个弹性容器都有两根轴：`*主轴和交叉轴*，`两轴之间成90度`，`需要注意的是：水平的不一定是主轴`

`2.每根轴都有起点和终点，这对于元素的对齐非常重要`

`3.弹性容器中的所有元素都称为`*弹性元素*，`弹性元素永远沿主轴排列`

`4.弹性元素也可以通过`*display:flex*`设置为一个弹性容器,因此一个元素既可以是弹性容器也可以是弹性元素`

#### 主轴
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

``
``

``


``


``


``


