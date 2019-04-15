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