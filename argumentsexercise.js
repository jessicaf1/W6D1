function sum(arguments) {
    let counter = 0  
    arguments.forEach(element => {
        counter += element; 
    });
    return counter; 
} 

function sum(...arguments) {
    let counter = 0
    arguments.forEach(element => {
        counter += element;
    });
    return counter;
} 

Function.prototype.myBind = function(context) {
    let that = this;
    const bindArgs = Array.from(arguments).slice(1);
    return function () {
        const callArgs = Array.from(arguments)
        return that.apply(context, bindArgs.concat(callArgs));
    }
} 

Function.prototype.myBind = function (context, ...bindArgs){
    let that = this;
    return function (...callArgs) {
        return that.call(context, ...bindArgs, ...callArgs);
        //return that.call(context, ...bindArgs.concat(callArgs));
        //return that.apply(context, bindArgs.concat(callArgs));
    }
} 

function curriedSum(numArgs){
    let numbers = [];

    return function _curriedSum(num) {
        numbers.push(num);
        if ((numbers.length) === numArgs) {
            console.log(numbers.reduce((a,b) => a+b));
        } 
        else { 
            return _curriedSum;
            }  
        }
    }

function addThreeNumbers(a, b, c) {
    return a + b + c;
}

Function.prototype.curry = function(numArgs) {
    let args = [];
    let that = this;
    return function _curry(arg) {
        args.push(arg)
        if (args.length === numArgs) {
             return that(...args)
        } else {
            return _curry; 
        }
    }

} 

const curriedSum2 = addThreeNumbers.curry(3)


Function.prototype.curry = function (numArgs) {
    let args = [];
    let that = this; 
    return function _curry(arg) {
        args.push(arg)
        if (args.length === numArgs) {
            return that.apply(null, args);
        } else {
            return _curry;
        }
    }

} 