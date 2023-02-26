import proxyData from './proxy/proxy'
import observe from './observe/observe'

function initState (vm) {
    var options = vm.$option;

    if (options.data){
        initData(vm);
    }

    if (options.computed){

    }
}

function initData (vm) {
    var data = vm.$option.data;

     vm.$data = data = (typeof data === 'function' ? data.call(vm) : data) || {};

    for (var key in data) {
        proxyData(vm, key, '$data');
    }

    observe(vm.$data);
}

export {
    initState
}