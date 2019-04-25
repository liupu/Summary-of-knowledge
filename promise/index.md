#### Promise
`Promise就是一个对象，代表一个异步操作的最终成功或失败`
`本质上，Promise是一个绑定了回调的对象，而不是将回调传进函数内部`
`不使用Promise时,根据一个setting文件，生成结果的函数(createResult())表示如下`
```
//成功时的回调函数
function successCallback(result) {
    console.log(`成功时：` + result);
}
//失败时的回调函数
function failureCallback(error) {
    console.log(`失败时：` + error);
}
createResult(setting, successCallback, failureCallback)
```
`使用Promise时`
```
const promise = createResult(setting);
promise.then(successCallback, failureCallback);

```
`简写` *被称为异步函数调用*
```
createResult(setting).then(successCallback, failureCallback);
```
`promise的好处是链式调用`


#### JavaScript异步执行
`在JavaScript中，所有的代码都是单线程执行的，由于这个原因，导致JavaScript的所有网络操作，浏览器事件，都是异步执行的，异步执行可以使用回调函数实现`
```
function callback(){
    console.log('Done');
}
console.log(`before setTimeout()`);
setTimeout(callback,1000);
console.log(`after setTimeout()`)
//before setTimeout()
//after setTimeout()
//Done
```
#### 一个简单的Promise例子
`promise.then(resolve)`

`promise.catch(reject)`
```
function test(resolve,reject){
    var timeOut = Math.random()*2;
    console.log(`set timeout to: `+ timeOut + ` seconds.`);
    setTimeout(function(){
        if(timeOut < 1){
            console.log(`call resolve()`);
            resolve(`200 ok`);
        }else{
            console.log(`call reject()...`);
            reject(`timeout in `+ timeOut + ` seconds.`)
        }
    },timeOut*1000);
}
function resolve(str){console.log(str)};
function reject(str){console.log(str)};

//使用一个Promise对象来执行test函数，并在将来某个时刻获得成功或失败时的结果
var p1 = new Promise(test);
var p2 = p1.then(function(result){//result是resolve执行的结果
    console.log(`success：`+result)
});
var p3 = p2.catch(function(reason){//reason是reject执行的结果
    console.log(`failed：` + reason)
})
//变量p1是一个Promise对象，它负责执行test函数，由于test含糊在内部是异步执行的，当test函数执行成功时，我们告诉Promise对象：
// 如果成功，执行这个函数：
p1.then(function (result) {
    console.log('成功：' + result);
});
//如果test函数执行失败时，我们告诉Promise对象：
p2.catch(function (reason) {
    console.log('失败：' + reason);
});
//Promise对象可以串联起来
new Promise(test).then(function(result){
    console.log(`success: ` + result);
}).catch(function(reason){
    console.log(`failed: `+ reason);
})
```
```
示例：
'use strict';

var logging = document.getElementById('test-promise2-log');
while (logging.children.length > 1) {
    logging.removeChild(logging.children[logging.children.length - 1]);
}

function log(s) {
    var p = document.createElement('p');
    p.innerHTML = s;
    logging.appendChild(p);
}
var logging = document.querySelector('#test-promise-log');
while (logging.children.length > 1) {
    logging.removeChild(logging.children[logging.children.length - 1]);
}
function log(s) {
    var p = document.createElement('p');
    p.innerHTML = s;
    logging.appendChild(p);
};
new Promise(function (resolve, reject) {
    //执行代码
    log('start new Promise...');
    var timeOut = Math.random() * 2;
    log(`set timeOut to: ` + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            log('call resolve()...')
            resolve('200 ok') 
        } else {
            log(`call reject()...`)
            reject(`timeout in` + timeOut + ` seconds.`)
        }
    }, timeOut * 1000)
}).then(function (result) {//resolve函数
    //处理结果
    log(`done: ` + result)
}).catch(function (reason) {//reject函数
    log(`failed: ` + reason)
})
```
`Promise的最大好处是在异步执行的流程中，把执行代码和处理结果的代码分离开了.resolve和reject负责将参数传到then或catch函数中的回调函数`

```
// 0.5秒后返回input*input的计算结果:
function multiply(input) {
    return new Promise(function (resolve, reject) {
        log('calculating ' + input + ' x ' + input + '...');
        setTimeout(resolve, 500, input * input);
    });
}

// 0.5秒后返回input+input的计算结果:
function add(input) {
    return new Promise(function (resolve, reject) {
        log('calculating ' + input + ' + ' + input + '...');
        setTimeout(resolve, 500, input + input);
    });
}

var p = new Promise(function (resolve, reject) {
    log('start new Promise...');
    resolve(123);
});

p.then(multiply)
 .then(add)
 .then(multiply)
 .then(add)
 .then(function (result) {
    log('Got value: ' + result);
});

```
`除了串行执行若干异步任务外，Promise还可以并行执行异步任务`

`Promise.all()`

```
var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 600, 'P2');
});
// 同时执行p1和p2，并在它们都完成后执行then:
Promise.all([p1, p2]).then(function (results) {
    console.log(results); // 获得一个Array: ['P1', 'P2']
});
```
`Promise.race()`

`有时候，多个异步操作为了容错，进行多个操作，只需要获得先返回的结果就可以，这种情况下，用Promise.race()实现：`

```
var p1 = new Promise(function(resolve,reject){
    setTimeout(resolve,500,'p1');
});
var p2 = new Promise(function(resolve,reject){
    setTimeout(resolve,600,'p2');
})
Promise.race([p1,p2]).then(function(result){
    console.log(result)
})
```
