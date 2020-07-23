---
layout: study
title: "Simplifying JavaScript: Writing Modern JavaScript with ES5, ES6, and Beyond"
date: "2020-07-23"
template: "study"
description: '자바스크립트: 코딩의 기술'
---
# 1장
- const를 변하지 않는 값을 표현하라
  - const를 쓰면 코드 읽을때 머릿속에 담고 있어야 할 추가 정보를 하나 제거 해준다.
  - 재할당을 막아 준다.
  - 주의 사항 - 불변값이 되지 않는다. (배열의 값을 추가 할 수 있다. 기본적으로 변수를 선언하면 주소를 할당 하는것이다. 그래서 많은 값을 담고 있는 배열에는 값을 넣을 수 있어서 불변이 아니고, 숫자나 문자 하나가 할당 된 변수는 배열처럼 추가가 안되니 변경을 해야 하는데 이때 변경을 하게 되면 주소 재할당이 일어 나게 되어서 에러가 뜬다.)
- let과 const로 유효 범위 충돌을 줄여라
  - var을 쓰면 
``` javascript
> var a = 1;
undefined
> var a = 2;
undefined
> a
2
> let a = 1;
Thrown:
SyntaxError: Identifier 'a' has already been declared
> let b = 2
undefined
> let b = 2;
Thrown:
SyntaxError: Identifier 'b' has already been declared
>                                                        
```
  위와 보듯이 var을 쓰면 변수가 선언 되어 있어도 재 선언이(재할당x) 된다. 그러나 let을 쓰게 되면 실수로 다시 같은 변수에 선언 하게 되면 에러를 뜨게 한다.
  - var은 어휘적 유효 범위(lexical scope)를 따른다(scope 범위는 선언된 함수 내)
  - let은 블록 유효 범위(block scope)를 따른다(scope 범위는 선언된 중괄호 내)
``` javascript
function outer() {
    function inner() {
        console.log(c) // ReferenceError: c is not defined
        console.log(d) // undefined
        if (true) {
            console.log(c) // ReferenceError: c is not defined
            console.log(d) // undefined
            let c = 1;
            var d = 2;
            console.log(c) // 1
            console.log(d) // 2
        }
        console.log(c); //     ReferenceError: c is not defined
        console.log(d); // 2
    }
    inner();
    console.log(c); //     ReferenceError: c is not defined
    console.log(d); //     ReferenceError: d is not defined
}
```
- let과 const로 유효 범위 충돌을 줄여라
    - 초기에 잠재적인 버그를 잡는데 도움이 된다.
- 블록 유효 범위 변수로 정보를 격리하라
    - lexical scope를 쓰게 되면 hoisting이라는 컴파일 과정 덕분에 변수가 선언되기 전에 적븐 할 수 있다.
    - REPL(Read Evaluate Print Loop)를 적절히 사용하자.(코드 디버깅 할때 쓰는 terminal에서 띄우는 node 같은것.)
- 템플릿 리터럴ㄹ로 변수를 읽을 수 있는 문자열로 변환하라
``` javaScript
const name = "john";
const age = 22;
const location = "NY"
return "My name is " + name + ". I am " + age + " years old. I live in " + location "."
```
이거 보단 밑에 
``` javascript
const name = "john";
const age = 22;
const location = "NY"
return `My name is ${name}. I am ${age} years old. I live in ${location}.`
```
이 더 깔끔하다. 읽는 입장에서와 쓰는 입장에서도이다.
# 2장