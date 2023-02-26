import Vue from '../vue'
const vm = new Vue({
    el: '#app',
    data () {
        return {
            name: '小野森森',
            age: 34,
            info: {
                job: 'teacher',
                students: [
                    {
                        id: 1,
                        name: '小张'
                    },
                    {
                        id: 2,
                        name: '小王'
                    },
                    {
                        id: 3,
                        name: '小李'
                    },
                ]
            },
        }
    }
});
vm.$data.info.job = {
    b: 1
}
console.log(vm.$data.info.job)

