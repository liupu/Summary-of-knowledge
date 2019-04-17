var obj = {
    name: 'Jay Chou',
    age: 32,
    song:{
        name:'发如雪',
        year:2007
    }
}
var obj1 = obj;
浅拷贝
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
obj2.song.name='双截棍';
obj2.name='Jay';
console.log(obj)
console.log(obj1);
console.log(obj2);
console.log(obj===obj1)
//深拷贝
var dcObj=JSON.parse(JSON.stringify(obj));
console.log("dcObj: \n",dcObj);
dcObj.name='Jay';
dcObj.song.name='双截棍';
console.log('obj: \n',obj);
console.log('dcObj: \n',dcObj);



//浅拷贝添加拷贝数组功能
function shallowClone(date){
    if(!date || typeof date !=='object'){
        throw new Error('error argument');
    }
    var targetObj = date.constructor === Array ? [] : {};
    for(var key in date){
        if(date.hasOwnProperty(key)){
            targetObj[key] = date[key];
        }
    }
    return targetObj;
}

//递归实现深拷贝

function deepCopy(date){
    if(!date || typeof date !== 'object'){
        throw new Error('error argument')
    }
    var targetObj = date.constructor === Array ? [] : {};
    for(var key in date){
        if(date.hasOwnProperty(key)){
            if(date[key] && typeof date[key] === 'object'){
                targetObj[key] = date[key].constructor === Array ? [] : {};
                targetObj[key] = deepCopy(date[key])
            }
            targetObj[key]=date[key];
        }
    }
    return targetObj;
}


