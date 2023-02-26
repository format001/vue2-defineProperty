function proxyData (vm, key, target) {
    Object.defineProperty(vm, key, {
        get () {
            console.log('get proxyData', key)
            return vm[target][key];
        },
        set (newValue) {
            console.log('set proxyData')
            vm[target][key] = newValue;
        }
    })
}

export default proxyData;