### js的内存空间
`在JS中，每一个数据都需要一个内存空间。内存空间分为两种，栈内存（stock）与堆内存（heap）`
#### 基础数据类型与栈内存
`JS中的基础数据类型，这些值都有固定的大小，保存在`*栈*`内存中，由系统自动分配存储空间`*在栈内存空间的值，我们可以直接进行操作，因此基础数据类型都是按照值访问*

`在栈内存中的数据发生复制的行为时，系统会自动为新变量`*开辟*`一个新的内存空间，当复制执行后，两个内存空间的值就互不影响，改变其中一个不会影响另一个`
```
栈内存空间数据复制示例
var a = `I am variable a`;
var b = a; 
console.log(b); //`I am variable a`
b = `I am variable b`;
console.log(a); //`I am variable a`
console.log(b); //`I am variable b`
```

*基础数据类型:Number、String、Null、Undefined、Boolean、Symbol(es6)*
#### 引用数据类型与堆内存
`引用类型的值是保存在堆内存中的对象，在JavaScript中我们不能直接操作对象的堆内存空间。在操作对象时实际上是操作对象的引用而不是实际的对象，因此引用类型的值都是按引用访问的。`*引用可以理解为保存在栈内存中的一个地址，该地址与堆内存的实际值相关联*

`引用类型值的复制，系统会为新的变量自动分配一个新的`*栈内存空间*`这个`*栈内存空间*`保存着与被复制变量相同的指针，地址的指针相同，尽管他们在`*栈内存中的内存空间位置互相独立*`但是在`*堆内存中*`访问到的具体对象实际上是同一个，因此，当我们改变其中一个对象的值时，另一个也同样改变`

*栈内存空间保存指针（地址），堆内存空间保存实际的对象，我们通过变量访问对象时，实际上访问的是对象的引用（地址）*

```
栈内存（地址）中引用类型值（在堆内存）的复制

var a = {
    name : `I am object a`,
    type : 'object'
}

var b = a;
console.log(b);
// {name: "I am object a", type: "object"}

b.name = `I am object b`;

console.log(a);
// {name: "I am object b", type: "object"}

console.log(b);

// {name: "I am object b", type: "object"}

```
