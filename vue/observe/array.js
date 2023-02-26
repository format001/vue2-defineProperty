import { ARR_METHODS } from '../config'
import observeArr from './observeArr'

var originArrMethods = Array.prototype,
    arrMethods = Object.create(originArrMethods);

ARR_METHODS.forEach(function (m) {
   arrMethods[m] = function () {
       var args = Array.prototype.slice.call(arguments),
           result = originArrMethods[m].apply(this, args),
           newArr;

       switch (m) {
           case 'push':
           case "unshift":
               newArr = args;
               break;
           case 'splice':
               newArr = args.slice(2);
               break;
           default:
               break
       }
       console.log(newArr)
       newArr && observeArr(newArr);
   }
});

export {
    arrMethods
}
