// Write a program to compare two objects and return true or false.
// Ex.
// obj1 = ​{​ hair​:​ ​'long'​,​ beard​:​ ​true​ ​}
// obj2 = ​{​ hair​:​ ​'long'​,​ beard​:​ ​false​ ​}
// Result : false

// solution : 1
const obj1 = { hair: "long", beard: true };
const obj2 = { hair: "lonG", beard: true };

const compareObjects = (obj1, obj2) => {
  for (const key in obj1) {
    if (Object.hasOwnProperty.call(obj2, key)) {
      if (obj1[key] !== obj2[key]) return false;  // assuming the comparison should be case sensitive
    }
  }

  return true;
};

console.log(compareObjects(obj1,obj2));

// 2.​ Write a program to convert string to a 2D array of objects. The first row of the
// string is used as the title.
// Ex.
// inputString = ​'col1,col2\na,b\nc,d'
// Result : [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}]

// solution
const convertTo2dArray = (inputStr) => {

    const [keys,...values] = inputStr.split("\n");

    const keysArr = keys.split(',');

    const res= [];
    for (let index = 0; index < values.length; index++) {
        let value = values[index].split(',');
        let temp = {};
        for (let j=0;j<keysArr.length;j++) {
            temp[keysArr[j]] = value[j];
        }
        res.push(temp);

    }

    console.log(res);

};

convertTo2dArray('col1,col2,col3\na,b,x\nc,d,y')

// 3. Write a program to convert an array of objects to a string. That contains
// dynamic columns and de​limiter​ specified.
// Ex.
// inputString1 = ​[{col1:'a', col2:'b'}]
// Result : 'Col1,col2\na,b'

// solution
const convertToString = (objArr) => {

    const keys = new Set();
    const values = [];

    for (const obj of objArr) {
        keys.add(Object.keys(obj).join(','));
        values.push(Object.values(obj).join(','))
    }

    console.log([...keys,...values].join('\\n'));

};

convertToString([{col1: 'a', col2: 'b',col3:'x'},{col1: 'c', col2: 'd',col3:'y'}])

// 4.Write a program to combine the numbers of a given array into an array
// containing all combinations. (​reduce​)
// Ex.
// input = ​[1,2]
// Result : [[],[1],[2],[2,1]]

// solution :

// doubt in this : solution if from other interns and chatGPT
const allPermutations = (arr) => {
  return arr.reduce(
    (prev, curr) => {
      const newPermutation = JSON.parse(JSON.stringify(prev)); // making deep copy
      newPermutation.forEach((newArr) => newArr.push(curr));
      return [...prev, ...newPermutation];
    },
    [[]]
  );
};
const arr = [1, 2];

console.log(allPermutations(arr));

// other solution :

const input = [1, 2];

const combine = (input) => {
  let result = [[]];
  for (let i = 0; i < input.length; i++) {
    let temp = [];
    for (let j = 0; j < result.length; j++) {
      temp.push(result[j].concat(input[i]));
    }
    // console.log('temp : ',temp);
    result = result.concat(temp);
  }
  return result;
}

console.log(combine(input));

// 5. Write a program to replace the names of multiple object keys.
// Ex.
// obj = ​{​ name​:​ ​'JJ'​,​ job​:​ ​'Programmer'​,​  age​:​ ​22​ ​};
// renameKey =​{​ name​:​ ​'firstName'​,​ job​:​ ​'Role'​ ​};
// Result : { firstName:'JJ', Role:'Programmer', age:22 }

// solution :
const changeKeyNames = (obj, renameObj) => {
  for (const key of Object.keys(obj)) {
    if (!renameObj[key]) continue;
    obj[renameObj[key]] = obj[key];
    delete obj[key];
  }
  console.log(obj);
  return obj
};

changeKeyNames(
  { name: "jj", job: "Programmer", age: 22 },
  { name: "fName", job: "Role" }
);

// 6. Write a program to filter out the non-unique values in an array.
// Ex.
// input = ​[​1​,​ ​2​,​ ​2​,​ ​3​,​ ​4​,​ ​4​,​ ​5​];
// Result : [1,3,5]

// solution :
const nonUniqueElFilter = (arr) => {
  const obj = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const res = [];

  Object.entries(obj)
    .filter((el) => {
      return el[1] === 1;
    })
    .forEach((el) => {
      res.push(+el[0]);
    });

  return res;
};

console.log((nonUniqueElFilter([1, 2, 2, 3, 4, 4, 5])))

//7.​ Write a program that will return true if the string is y/yes or false if the string is n/no. (​regex​)
//Ex.
//input1 =​'y'​;
//input2 = ​'No'​;
//Result :
//true
//false

// solution
const isAgree = (inputStr) =>{

    const truthyRegX = /^(y|yes)$/i;
    const falsyRegX = /^(n|no)$/i;

    if (truthyRegX.test(inputStr)) return true
    if (falsyRegX.test(inputStr)) return false

    return "Please provide valid input string..."

}

console.log(isAgree('y'));
console.log(isAgree('yes'));
console.log(isAgree('N'));
console.log(isAgree('No'));
console.log(isAgree('x'));

// 8. Write a program to get a sorted array of objects ordered by properties and
// orders.
// Ex.
// input =​[ {​ name​:​ ​'fred'​,​ age​:​ ​48​ ​},
// {​ name​:​ ​'barney'​,​ age​:​ ​36​ ​},
// {​ name​:​ ​'fred'​,​ age​:​ ​40​ ​} ];
// ordered by = ​[​'name'​,​ ​'age'​]
// orders = ​[​'asc'​,​ ​'desc'​]
// Result :
// [{"name":"barney","age":36},{"name":"fred","age":48},{"name":"fred","age":40}

// solution

const sortObjs = (inputArr, orderByArr, ordersArr) => {
  return inputArr.sort((currObj, nextObj) => {
    for (let i = 0; i < orderByArr.length; i++) {
      const orderBy = orderByArr[i];
      const order = ordersArr[i] === "asc" ? 1 : -1;

      if (currObj[orderBy] > nextObj[orderBy]) {
        return 1 * order;
      } else if (currObj[orderBy] < nextObj[orderBy]) {
        return -1 * order;
      }
    }
    return 0;
  });
};

console.log(
  sortObjs([
    { name: "fred", age: 48 },
    { name: "barney", age: 36 },
    { name: "fred", age: 40 }
  ],
  ["name", "age"],
  ["asc", "desc"])
);

// 9.​ Write a program to remove the key-value pairs to the given keys.
// Ex.
// input =​{​ a​:​ ​1​,​ b​:​ ​'2'​,​ c​:​ ​3​ ​};
// remove key= ​[​'b'​]
// Result : {"a":1,"c":3}

// solution :

const removeKey = (obj, keysToRemove) => {
  for (const removeKey of keysToRemove) {
    if (obj[removeKey]) {
      delete obj[removeKey];
    }
  }
  console.log(obj);
  return obj;
};

removeKey({ a: 1, b: 2, c: 4 }, ["a", "b"]);

// 10. Write a program to convert time 24 hours to 12 hours.
// Ex.
// input1 =​0​;
// input2 =​13​;
// Result :
// 12am
// 1pm

// solution :

const convertFormate = (time) => {
    return time % 12 === 0 ? '12am' : time >= 12 ? time%12+'pm' : time%12+'am';
};

console.log((convertFormate(15)))
