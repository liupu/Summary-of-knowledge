#### Array.prototype.map()
`map()方法创建一个新数组，该数组的元素是原数组中的每个元素调用map()方法中传入的函数的执行结果`
```
var arr = [1,3,3,5];
arr.map(x => 2*x);
//[2,6,6,10]
```
`语法`

```
var new_array = arr.map(function callback(currentValue[,index[,array]]){
    //Return element for new_array
}[,thisArg])
```
`参数：`

`callback: 生成新数组元素的函数，使用三个参数，currentValue、index、array`
   
`currentValue：callback函数正在处理的当前元素`

`index：（可选）callback函数正在处理的当前元素的索引`

`array：（可选）map方法中被调用的数组`

`thisArg：（可选）执行callback函数时使用的this值`

`返回值：一个新数组，每个元素都是回调函数的结果`
```
var arr = [1,8,{name:'Jay',age:32}];
var ar = arr.map(item => item);   //实现数组的拷贝(浅拷贝)
//[1,8,{name:'Jay',age:32}];
arr[2]===ar[2];
//true 
arr[2].name='Jay Chou';
ar;
//[1,8,{name:'Jay Chou',age:32}]
```
```
var kvArray = [
    {key:1,value:10},{key:2,value:20},{key:3,value:30}
];
var reformattedArray = kvArray.map(item =>{
	var rObj = {};
	rObj[item.key] = item.value;
	return rObj;
});
reformattedArray;
//[{1:10},{2:20},{3:30}];
```
```
function copy(item){
    return item
}
var arr = [1,'o','k'];
arr.map(copy);
//[1, "o", "k"]
copy.length;
//1
```
#### Array.prototype.filter()
`filter()方法创建一个新数组，新数组的元素满足filter()的函数参数执行的结果`
```
var arr = ['aere','jklil','jrett','sdfsf'];
const result = arr.filter(item => item.length>4);
result;
//["jklil", "jrett", "sdfsf"]
```
`语法`

`var newArray = arr.filter(callback(element[,index[,array]])[,thisArg])`

`参数`

`callback 用来设置filter的规则，返回true表示满足规则，保留该元素，放到新的数组中，返回false表示不满足规则，不保留该元素`

`element:数组中当前正在处理的元素`

`index:（可选）正在处理的元素在数组中的索引`

`array：（可选）调用了filter的数组本身`

`thisArg：（可选）执行callback时，用于this的值`

`返回值：一个新的、由通过测试的元素组成的数组，如果所有元素都没有通过测试，则返回空数组`
``
```
var arr = [{ id: 12 }, { id: 'ok' }, 
{ id: 123 }, { id: '' }, { id: 'undefined' }, { id: null },
{ id: NaN }, { id: undefined }, { id: true }, {}, { id: 0 }];
function isNumber(item) {
    return item !== undefined && typeof (item) === 'number' && !isNaN(item);
}
var feifa = 0;
function filterById(item) {
    if (isNumber(item.id) && item.id !== 0) {
        return true;
    }
    feifa++;
    return false;

}
arr.length;
//11
var arrById = arr.filter(filterById);
arrById;
//[{id: 12},{id: 123}]
feifa;
//9
```
`搜索功能实现`
```
var fruits = ['apple','banana','grapes','mango','orange'];
function filterItems(query){
	return fruits.filter(function(item){
		return item.toLowerCase().indexOf(query.toLowerCase()) > -1;
	})
}
filterItems('AN');
// ["banana", "mango", "orange"]
filterItems('a');
// ["apple", "banana", "grapes", "mango", "orange"]
```
