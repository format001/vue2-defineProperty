import observe from '../observe/observe'

function defineReactiveObjData (data, key, value) {
    observe(value)  //有可能是对象  递归

    Object.defineProperty(data, key, {
        get () {
            console.log('响应式数据获取：', value);
            return value;
        },
        set (newValue) {
            console.log('响应式数据设置：', value);
            if (newValue === value) return;
            value = newValue;
            observe(value)
        }
    })
}

export default defineReactiveObjData



