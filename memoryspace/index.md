### JavaScript的内存空间
`在JavaScript中，每一个数据都需要一个内存空间。内存空间分为两种，栈内存（stock）与堆内存（heap）`

`栈是系统自动分配的内存空间，由系统自动释放，堆则是动态分配的内存，大小不定不会自动释放。`
#### 基础数据类型
`JavaScript中的基础数据类型，这些值都有固定的大小，保存在`*栈*`内存中，由系统自动分配存储空间`*在栈内存空间的值，我们可以直接进行操作，因此基础数据类型都是按照值访问*

`在栈内存中的数据发生复制的行为时，系统会自动为新变量开辟一个新的内存空间，当复制执行后，两个内存空间的值就互不影响，改变其中一个不会影响另一个`
```
栈内存空间数据复制示例
var a = `I am variable a`;
var b = a; 
console.log(b); //`I am variable a`
b = `I am variable b`;
console.log(a); //`I am variable a`
console.log(b); //`I am variable b`
```
#### 引用数据类型
`引用类型的值是保存在`*堆*`内存中的对象，在JavaScript中我们不能直接操作对象的堆内存空间。因为引用类型的值都是按引用访问的，所以在操作对象时，实际上是操作对象的引用而不是实际的对象。`*引用可以理解为保存在栈内存中的一个地址，该地址指向堆内存中的一个实际对象*

`引用类型值的复制，系统会为新的变量自动分配一个新的`*栈内存空间*`这个`*栈内存空间*`保存着与被复制变量相同的指针，尽管他们在`*栈内存中的内存空间的位置互相独立*`但是在`*堆内存中*`访问到的对象实际上是同一个，因此，当我们改变其中一个对象的值时，实际上就是改变原来的对象`

*栈内存空间保存指针（地址），堆内存空间保存实际的对象，我们通过变量访问对象时，实际上访问的是对象的引用（地址）*

*内存中的栈区域存放变量（基本类型的变量包括变量声明和值）以及指向堆区域存储位置的指针（引用类型的变量包括变量声明和指向内容的指针）*

```
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
#### 基本类型总结
`基本数据类型`：

`包括：null、undefined、number、string、boolean、symbol(es6)`

`存放位置：内存中的栈区域中`

`比较：值的比较，判断是否相等，如果值相等，就相等。一般使用===进行比较，因为==会进行类型的转换`

`拷贝：赋值（通过（=）赋值操作符 赋值），两个变量的值之间相互没有影响`

#### 引用类型总结
`引用数据类型`：

`包括：数组、对象、函数`

`存放位置：内存的栈区域中存放变量和指针，堆区域存储实际的对象`

`比较：是引用的比较（就是地址的比较，变量在栈内存中对应的指针地址相等就指向同一个对象）判断是否为同一个对象，示例如下`
```
变量a和变量b的引用不同，对象就不是同一个对象
var a = {name:'Jay'};
var b = {name:'Jay'};
a===b //false
```

`我们对JavaScript中引用类型进行操作的时候，都是操作其对象的引用（保存在栈内存中的指针）`

#### 赋值、深拷贝和浅拷贝 (Assignment, deep copy and shallow copy)

`赋值：两个变量的都指向同一个对象，改变其中一个，另一个也会受到影响`

`所谓拷贝就是复制，通过复制原对象生成一个新的对象`

`浅拷贝`：重新在堆内存中开辟一个空间，拷贝后新对象获得一个独立的`基本数据类型`数据，和原对象共用一个原对象内的`引用类型`数据，改变`基本类型`数据，两个对象互不影响，改变其中一个对象内的`引用类型`数据，另一个对象会受到影响
```
var obj = {
    name: 'Jay Chou',
    age: 32,
    song:{
        name:'发如雪',
        year:2007
    }
}
var obj1 = obj;
function shallowCopy(obj){
    var scObj = {};
    for(var prop in obj){
        if(obj.hasOwnProperty(prop)){
            scObj[prop] = obj[prop]
        }
    }
    return scObj;
}
var obj2 = shallowCopy(obj);
console.log(obj === obj1,'obj === obj1','赋值');
console.log(obj === obj2,'obj === obj2','浅拷贝');
// true "obj === obj1" "赋值"
// false "obj === obj2" "浅拷贝"
console.log(obj.song === obj2.song);
//true
obj2.song.name='双截棍';
obj2.name='Jay';
console.log(obj)
// {name: "Jay Chou", age: 32, song: {name:'双截棍',year:2007}}
console.log(obj1);
// {name: "Jay Chou", age: 32, song: {name:'双截棍',year:2007}}
console.log(obj2);
{name: "Jay", age: 32, song: {name:'双截棍',year:2007}}
console.log(obj===obj1)
//true
console.log(obj===obj2)
//false
```
`深拷贝`：不论是对象内的`基本类型还是引用类型`都被完全拷贝,拷贝后两个对象互不影响

`一种比较简单实现方法是使用var dcObj = JSON.parse(JSON.stringify(obj))`
```
var obj = {
    name: 'Jay Chou',
    age: 32,
    song:{
        name:'发如雪',
        year:2007
    }
}

var dcObj=JSON.parse(JSON.stringify(obj));

console.log(dcObj);
// {name: "Jay Chou", age: 32, song: {name:'发如雪',year:2007}}
console.log(dcObj.song === obj.song);
//false
dcObj.name='Jay';
dcObj.song.name='双截棍';
console.log(obj);
// {name: "Jay Chou", age: 32, song: {name:'发如雪',year:2007}}
console.log(dcObj);
//{name: "Jay", age: 32, song: {name:'双截棍',year:2007}}
```
*比较：赋值、深拷贝、浅拷贝*

赋值:新对象仍然指向原对象，改变新对象的`基本类型`和`引用类型`的值`都会`使原对象对应的值一同改变

浅拷贝:改变新对象`基本类型`的值`不会`使原对象对应的值一起改变，但是改变新对象`引用类型`的值`会`使原对象对应的值一同改变

深拷贝:改变新对象`基本类型`和`引用类型`的值，都不会影响原对象，两者互相独立，互不影响


