// // variable type

// const sp = "sp"; // can't mutate this afterwords, function scoped, block scoped
// var sp1 = "sp1"; // will be declared in global scope
// let sp2 = "sp2"; // able to mutate ,function scoped, block scoped

// // operators
//     // arithmetic opts
//     let a = 5, b = 1;
//     console.log(a+b);
//     console.log(a-b);
//     console.log(a*b);
//     console.log(a/b);
//     console.log(a%b);
//     console.log(a++);
//     console.log(a--);
//     console.log(++a);
//     console.log(--a);
//     console.log(a**b);

//     // comparison opts
//     console.log(a==b); // checks only values, convert types
//     console.log(a>=b); 
//     console.log(a<=b); 
//     console.log(a==b);
//     console.log(a!=b);
//     console.log(a===b); // checks both value and type
//     console.log(a!==b);
    
//     // relational opts
//     let x="x",y="y";
//     console.log(x>y); 
//     console.log(x<y);

//     // assignment opts
//     let z = 2;
//     z +=2;
//     z -=2;
//     z *=2;
//     z /=2;
//     z %=2;
//     z **=2;

//     // ternary opts 
//     let w = a > b ? a : b;


// // if ..... else

// if(a > b) console.log("a is greater then b");
// else console.log("a is lesser then b");

// // switch case 
// let splitted = ["image", "gif"];

// switch (splitted[0]) {
//   case "video":
//     console.log("video");
//     break;

//   case "image":
//     if (splitted[1] === "gif") {
//       console.log("gif");
//       break;
//     }
//     console.log("image");
//     break;

//   default:
//     console.log(null);
// }

// loops

    // let arr = [
    //     "test1",
    //     "test2",
    //     "test3",
    //     "test4",
    // ]

    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    // }

    // let i=0;
    // while (arr[i]) {
    //     console.log(arr[i]);
    //     i++;
    // }

    // arr.forEach(el => {
    //     console.log(el);
    // });

    // for (const item of arr) {
    //     console.log(item);
    // }

    // const object = {
    //     fname:"sk",
    //     lname:"nanera"
    // }

    // for (const key in arr) {
    //     console.log(arr[key]);
    // }

    // for (const [key,value] of Object.entries(object)) {
    //     console.log(`${key}--->${value}`);
    // }
    // for (const value of Object.values(object)) {
    //     console.log(`${value}`);
    // }
    // for (const key of Object.keys(object)) {
    //     console.log(`${key}`);
    // }

// // functions

    // 1. function declarations 
    // function func1(){
    //     console.log("func1");
    // }

    // // 2. function expressions
    // const func2 = function(){
    //     console.log("func2");
    // }

    // // 3. arrow functions 
    // const func3 = () =>{
    //     console.log("func3");
    // }

    // // default params
    // const greet = (name = "user") => {
    //     console.log(`Hey, ${name}`);
    // }

    // greet(); // Hey, user
    // greet("sk"); // Hey, sk

    // rest operator
    // const add = (...arr) => {
    //     console.log(typeof arr);
    //     let sum = arr.reduce((acc,current)=>acc+=current,0);
    //     console.log(sum);
    // }

    // add(1,2,3,1,5,4,8);

    // // spread operator
    // let arr1 = [1,5,6,4];
    // add(arr1)


// // string methods

// let str = "this is a string";

// console.log(str.length);
// console.log(str.indexOf("is"));
// console.log(str.indexOf("is",5));
// console.log(str.lastIndexOf("s"));
// console.log(str.lastIndexOf("s",4));
// console.log(str.search("is")); // can provide a regX also
// console.log(str.slice(-1)); // returns a substring, first param is starting index and second is ending index (exclusive)
// console.log(str.slice(1,-5));
// console.log(str.substring(1,4).length);
// console.log(str.substr(1,4).length); 
// console.log(str.replace("string","strings")); 
// console.log(str.replace("is","are")); 
// console.log(str.replace("a","")); 
// console.log(str);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.split(" ").map((w)=>w.slice(0,1).toUpperCase().concat(w.slice(1))).join(" "))
// console.log("   hey sk   ".trim()); 
// console.log("   hey sk   ".trimEnd()); 
// console.log("   hey sk   ".trimStart()); 

// console.log(str.charAt(3));
// console.log(str.charCodeAt(3));
// console.log("https://app-dev.socialpilot.co/analytics/facebook".split("/"));

// // Array methods

// let arr1 = [
//     "test1",
//     "test2",
//     "test3",
//     "test4",
//     "test1"
// ];
// let arr2 = [
//     1,
//     5,
//     2,
//     3,
//     4,
// ]

// arr.forEach((el)=>{
//     console.log(el);
// })

// console.log(arr.indexOf("test1"));
// console.log(arr.lastIndexOf("test1"));
// console.log(arr.includes("test1",2));
// console.log(arr.find((el)=>el.includes("2")));
// console.log(arr.findIndex((el)=>el.includes("1")));

// console.log(arr1.splice(arr1.length - 1,1,"test5"));
// console.log(arr1.splice(arr1.length - 1,1));
// console.log(arr1);

// console.log(arr2.toString());

// // newly added ES2023
// console.log(arr2.toSorted());
// console.log(arr2.toReversed());
// console.log(arr2.toSpliced(0,1,0));
// console.log(arr2.with(0,50));

// console.log(arr2.filter((el)=>el>2));
// console.log(arr2.map((el)=>el**2));
// console.log(arr2.sort((a,b)=>b-a));
// console.log(arr2.reverse());
// console.log(arr2);
// console.log(arr1.join(" ").split(" "));

// console.log(arr2.reduce((acc,current)=>acc+=current,0));
// console.log(arr2.reduceRight((acc,current)=>{
//     console.log(current);
//     return acc+=current
// },0));

// let str = "this is a string";
// console.log(str.split("").reduceRight((acc,current)=>{
//     acc.push(current);
//     return acc;
// },[]).join(""));

// console.log(arr2.some((el)=>el>=5));
// console.log(arr2.every((el)=>el>=5));



// // Objects methods 

// let user = {
//     fname: "sagar",
//     lname:"nanera",
//     dob:'11-12-2002',
//     calAge(){
//         console.log(this);
//         return new Date(Date.now()).getFullYear() - new Date(this.dob).getFullYear() 
//     }
// }

// console.log(user.calAge())
// console.log(Object.assign({},user))

// console.log(Object.getOwnPropertyNames(user));
// console.log(Object.getOwnPropertyDescriptor(user,"fname"));
// console.log(Object.getOwnPropertyDescriptors(user));
// console.log(Object.getOwnPropertySymbols(user));

// Object.defineProperty(user,
//     'aadharNumber',
//     {
//         value:"132413241342",
//         writable:false,
//         configurable:true,
//         enumerable:true
//     });
//     user.aadharNumber="123412341324"
//     console.log(user.aadharNumber?.length);
    
// Object.freeze(user)
// Object.seal(user)
// console.log(Object.isFrozen(user));
// console.log(Object.isSealed(user));

// console.log(Object.keys(user));
// console.log(Object.isExtensible(user));

// console.log(Object.preventExtensions(user));
// Object.defineProperty(user,
//     'panNumber',
//     {
//         value:"IND132456",
//         writable:false,
//         configurable:true,
//         enumerable:false
//     });
//     console.log(user.panNumber?.length);

// const newUser = {};
// Object.defineProperties(newUser,{
//     name:{
//         configurable:true,
//         enumerable:true,
//         get:function(){
//             return this._name;
//         },
//         set:function(name){
//             if (!name || name === '') {
//                 return "Provide name";
//             }
//             this._name = name;
//         }
//     }
// })

// newUser.name = "skn"

// console.log("newUser--->",newUser.name);
// // console.log(Object.getPrototypeOf(user));

// const userCopy = Object.create(user);
// const userCopy2 = {};
// Object.assign(userCopy2,user);

// console.log(Object.getOwnPropertyNames(userCopy));
// console.log(Object.getOwnPropertyNames(userCopy2));
// // console.log(Object.is(user,userCopy));
// console.log(userCopy.fname);

// console.log(Object.fromEntries(Object.entries(user)));


// const human = {
//     run(){
//         console.log("running");
//     }
// }
// const student = {};
// Object.setPrototypeOf(student,human);

// console.log(student)
// student.run()
// console.log(Object.getPrototypeOf(student))