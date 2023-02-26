import defineReactiveObjData from '../reactive/index'
import { arrMethods } from './array'
import observeArr from './observeArr'

function Observer (data) {
    if (Array.isArray(data)){
        data.__proto__ = arrMethods;
        observeArr(data)
    }else {
        this.walk(data);
    }
}

Observer.prototype.walk = function (data) {
    var keys = Object.keys(data),
        len = keys.length,
        key,
        value;

    for (var i = 0; i < len; i++) {
        key = keys[i];
        value = data[key];

        defineReactiveObjData(data, key, value);
    }
}

export default Observer;