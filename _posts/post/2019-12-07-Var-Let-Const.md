---
layout: post
title: "JS var, let, const"
description: what let, const, var is and its difference
category: posts
---


```javascript
// declare some variables and initialize them (변수 선언과 초기화)
var a = 5
let b = 'xy'
const c = true

// assign new values 새로운 값을 할당
a = 6
b = b + 'z'
c = false // TypeError: Assignment to constant variable (에러: const에 선언)
```

there are 3 basic types of declaration method in js (js의 3종류 변수 선언)
1. var 
2. let
3. const

<a href ="https://hianna.tistory.com/314" style="color:blue">var, let, const difference(차이점)</a>
var has a scope of function <br> 
var 의 scope 는 함수 한에서 <br>

let has a scope of a block { } <br> 
let 의 scope 는 block {} 안에 <br>

const has a scope of a block and cannot be changed after first initialization<br>
const 의 scope 는 block {} 안이지만 첫 초기화(값할당) 후 변경 불가

scope can be defined as range. so for example <br>

`var`
``` javascript
var hello='hello!'
function sayHello() {
  hello='hello in function!';
  console.log(hello); // hello in function
}

sayHello(); // hello in function!
console.log(hello); // hello!
```

as seen above, declared var inside the function is only available inside the function or when the function is called. <br>
So anything declared inside the function is ignored outside the function

위에서 볼 수 있듯이 함수 내에서 선언 된 var는 함수 내에서 또는 함수가 호출 될 때만 사용할 수 있습니다. <br>
따라서 함수 내부에서 선언 된 것은 함수 외부에서 무시됩니다.

`let`
``` javascript
let hello='hello!'
function sayHello() {
   hello='hello in function!';
  console.log(hello); 
}

sayHello(); // hello in function!
console.log(hello); // hello!
```

let outputs the same value as var
var 과 같은 출력값

`const`
``` javascript
const hello='hello!'
    function sayHello() {
        hello='hello in function!';
        console.log(hello); 
    }
sayHello(); 
console.log(hello); 
```
when giving a new value for hello we get the following error:
"Uncaught TypeError: Assignment to constant variable."

`var and let difference`

``` javascript
<html> 
  
<body> 
    <script> 
        // calling x after definition 
        var x = 5; 
        document.write(x, "\n"); // 5
  
        // calling y after definition  
        let y = 10; 
        document.write(y, "\n"); //10
  
        // calling var z before definition will return undefined 
        document.write(z, "\n");  //undefined
        var z = 2; 
  
        // calling let a before definition will give error 
        document.write(a);//"uncaught Reference error: a is not  defined"
        let a = 3; 
    </script> 
</body> 
  
</html>           
```


-------------------
