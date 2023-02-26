import Observer from './observer'
function observe (data) {
    if (typeof data !== 'object' || typeof data === null){
        return;
    }

    new Observer(data);
}

export default observe;