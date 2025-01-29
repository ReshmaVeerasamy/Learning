// // Question-1: sum(1)(2)
// // Question-2: sum(1)(2)(3)(4)...(n)()
// // Question-3 sum(1,2,...,n)(3,4,...,n)...(n)()

// const sum1 = a =>  b =>  a + b;

// const sum2 = a => b => b ? sum2(a+b) : a;

// const sum3 = (...args1) => (...args2) => args2.length ? sum3(...args1 ,...args2)  : args1.reduce((a,b) => a+b)


// // console.log(sum1(2)(3))
// // console.log(sum2(2)(3)(4)(8)())
// // console.log(sum3(2,3,4,5)(6,8)(10,20,30)())



// console.log(x)
// console.log(y)
// var x = 10;
// // let y = 15;

// let instance;
// let counter = 0;
// // 1. Creating the `Counter` class, which contains a `constructor`, `getInstance`, `getCount`, `increment` and `decrement` method.
// // Within the constructor, we check to make sure the class hasn't already been instantiated.
// class Counter {
//     constructor() {
//         if (instance) {
//             throw new Error("You can only create one instance!");
//         }
//         instance = this;
//     }

//     getCount() {
//         return counter;
//     }

//     increment() {
//         return ++counter;
//     }

//     decrement() {
//         return --counter;
//     }
// }

// // 2. Setting a variable equal to the the frozen newly instantiated object, by using the built-in `Object.freeze` method.
// // This ensures that the newly created instance is not modifiable.
// const singletonCounter = Object.freeze(new Counter());
// console.log(singletonCounter.increment());
// console.log(singletonCounter.increment());
// console.log(singletonCounter.increment());
// console.log(singletonCounter.getCount());

// // 3. Exporting the variable as the `default` value within the file to make it globally accessible.
// export default singletonCounter;

// Array.prototype.myreduce = function (callBack, initialValue) {
//     let acc = initialValue;
//     for (let i = 0; i < this.length; i++) {
//         acc = callBack(acc, this[i]);
//     }
//     return acc;
// }


// var arr = [1, 2, 3, 4, 5];
// var sum = arr.myreduce((acc, curValue) => {
//     return acc + curValue;
// }, 0)
// console.log(sum)

function debounce(callback, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => callback.apply(this, args), delay)
    }();
}

const fetchData = () => {
    console.log("fetting data")
}

function throttle(callBack, limit) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            callBack.apply(this, args);
        } 
    };
}


let getData = throttle(fetchData, 500);

getData();
setTimeout(() => {
    return getData()
}, 500)
setTimeout(() => {
    return getData()
}, 200)

