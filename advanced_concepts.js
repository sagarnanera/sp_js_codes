// // Arrow Functions

    // // example
    const arrowFunction = (...args) => {
      return args.reduce((acc, curr) => (acc += curr), 0); // return is implied so no need to write return (if there is only one statement in body)
    };
    console.log(arrowFunction(1,2,3,46)); //52

    // // don't have their own 'this' -> refer to the global object
    // // if used inside the class then 'this' refer to class (auto-bounded)
    // // don't have 'arguments' object (unlike normal function expressions)
    // // can't use as a constructor, don't have prototype
    
    // // call, apply and bind on normal function expressions

    const obj = {
        x:308
    }

    const getX = function(){
        return this.x
    }

    // if used directly then this will refer to global object (globalThis in case of node and window in case of browser)
    getX(); // 'undefined' as global object does'nt have any x

    // after binding with obj : will return new function whose this refer to obj
    const getXFromObj = getX.bind(obj);
    getXFromObj(); // 308

    // can use call to call the method/function on the specific object
    getX.call(obj,1,2); // 308

    // can use apply to call the method/function on the specific object (similar to call, difference if the way we pass the args)
    getX.apply(obj,[1,2]); // 308


    // bind does'nt have any effect on arrow function



// // Default Parameter Values

    const defParams = (a1=10) => {
        console.log(a1);  // logs 10 by default if arguments is not passed, or undefined
    }

    defParams(); // 10
    defParams(20); // 20

    const defParams2 = (a1=10,a2 = a1) => {
        console.log(a1+a2);  // logs 10 by default if arguments is not passed, or undefined
    }

    defParams2(); // 20
    defParams2(20); // 40
    defParams2(20,20); // 40

    // can be useful if pass


// // Rest Parameter

    const restParams = (a,b,...args) => {
        return a+b+args.reduce((acc, curr) => (acc += curr), 0);
    }
    restParams(1,2) // 3
    restParams(1,2,5,6,7) // 21


// // Spread Operator

    const [a,b,...rest] = [1,2,3,4,5,6]
    console.log(a); // 1
    console.log(b); // 2
    console.log(rest); // [3,4,5,6]

    // combine two arrays 
    const arr1 = [1,2,3,4,5,6]
    const arr2 = [7,8,9]

    console.log([...arr1,...arr2]);



// // Template Strings

    const templateStr = `Length of arr1 is ${arr1.length}.`
    console.log(templateStr);


// // Destructuring

    const user = {name : 'sk', age:21, job:'Developer'}
    const {name, age, hasOwnProperty} = user;
    console.log(name); // 'sk'
    console.log(age); // 21
    console.log(hasOwnProperty); // hasOwnProperty() { [native code] }s
    // if the property is not found in the object itself then it will lookup to prototype chain


// // Modules Export/Import

    // in CommonJS have to use this syntax 

    // default exports/imports
    const importedFunc = require('./test');
    importedFunc();

    // named export/imports
    const {greet, wish} = require('./named_export')
    greet('sk')
    wish();

    // in ES6 we can use import and export syntax --see the import_export_browser folder


// // Set

    const newSet = new Set();

    newSet.add(1) // [1]
    newSet.add(5) // [1,5]
    newSet.add(1) // [1,5]
    newSet.has(1) // true
    newSet.has(0) // false
    newSet.size // 2
    newSet.delete(1)
    newSet.forEach((val)=>console.log(val))
    newSet.clear()

    const nonUniqueArr = [1,1,2,5,7,9,9]
    const uniqueArr = [...new Set(nonUniqueArr)]
    console.log(uniqueArr); // [1, 2, 5, 7, 9]

// // Promises

    const promiseFunc = (res) => {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if (res) {
                    resolve(`resolved --${res}`)
                }
                reject(`reject --${res}`)
            },2000)
        })
    }

    promiseFunc(0).then((val)=>console.log(val)).catch((err)=>console.log(err));
    promiseFunc(1).then((val)=>console.log(val)).catch((err)=>console.log(err));
    promiseFunc(1).then((val)=>console.log(val)).catch((err)=>console.log(err)).finally(()=>console.log("finally"));


    Promise.all([promiseFunc(4),promiseFunc(1),promiseFunc(5)])
            .then((val)=>console.log(val)).catch((err)=>console.log(err))
            // returns promise which resolves into array of values or reject if any one of 
            // promise get rejected returns reason of first rejected promise

    Promise.allSettled([promiseFunc(4),promiseFunc(1),promiseFunc(0)])
            .then((val)=>console.log(val)).catch((err)=>console.log(err))
            // returns array which contains state and value (resolved value / rejected reason) of all the promises

    Promise.race([promiseFunc(4),promiseFunc(0),promiseFunc(5)])
            .then((val)=>console.log(val)).catch((err)=>console.log(err))
            // return value or reason of first fulfilled promise

    Promise.any([promiseFunc(4),promiseFunc(1),promiseFunc(0)])
            .then((val)=>console.log(val)).catch((err)=>console.log(err))
            // return value of first resolved promise

// // async/await

    const asyncFunc = async (arg) => {
        try {
            const res = await promiseFunc(arg);
            return res;
        } catch (error) {
            console.log("error --");
        }
    }

    console.log(asyncFunc(1).then(val => console.log(val))) // async function returns a promise
    console.log(asyncFunc(0))