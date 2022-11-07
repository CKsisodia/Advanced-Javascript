//1.CALL
var obj = { num : 3};

var sum = function(a,b,c){
  return this.num + a +b +c ;
};

console.log(sum.call(obj,5,2,4));


//2.APPLY
var obj = { num : 2};

var sum = function(a,b,c){
  return this.num + a +b +c ;
};

var arr = [1,2,3];
console.log(sum.apply(obj,arr));


//3.BIND
var obj = { num : 2};

var sum = function(a,b,c){
  return this.num + a +b +c ;
};

var bound = sum.bind(obj);

console.log(bound(1,2,3));


//4. student age
const Student = { age : 20 };

const print = function () { 
  return this.age
};

const bound = print.bind(Student);
console.log(bound());



//CURRYING

//by using bind
let multiply = function (x,y){
  console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(3);
let multiplyByThree = multiply.bind(this,3);
multiplyByThree(3);

//by using closures
const add = (x) => {
  function addY(y) {
    return x + y;
  }

  return addY;
};
console.log(add(10)(20));