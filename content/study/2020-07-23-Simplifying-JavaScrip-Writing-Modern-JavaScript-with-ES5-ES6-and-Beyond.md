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
# 2장 배열로 데이터 컬렉션을 관리하라
- 배열은 다양한 데이터 요구에 적합하다.
- 사용되는 기능을 한줄로 줄여준다.
- 미묘한 버그를 낳는 조작을 줄여주는 새로운 문법도 있다.
- 유연하다.
- 배열로 유연한 컬렉션을 생성하라.
- 펼침 연산자로 정렬에 의한 혼란을 피하라. 
- 배열에 이터러블이 내장되어 있다.
  - iterable 이란 현제 위치를 알고 있는 상태에서 컬렉션의 항목을 한번에 하나씩 처리하는 방법이다
- 펼침 연산자로 배열을 본떠라
- 맵과 펼침 연산자로 키-값 데이터를 순회하라.
- object.entries()를 이용하면 객체를 키-값 쌍 배열로 변환하는 명세를 확정했다.
  - 확정된 명세란 표준 문법에 그 명세 기능을 구현함.
- 배열 존재 여부는 Includes를 써라. indexOf는 인덱스 찾는데만 쓰자.
- 펼침 연산자로 배열을 본떠라.
  - 배열의 유연성으로 조작과 부수 효과에 대한 문제가 생길 수 있으므로 펼침 연산자로 새로 생성해서 조작을 하도록 하자.
- push() 대신 펼침 연산자를 원본 변경을 피하라.
  - 순수 함수를 만들기 위해 노력해야한다.
    - 부수 효과 없는 함수를 순수 함수라고 한다. 의도치 않게 원본을 조작 할 수 있고 이것은 위험하다. 고로 신뢰성을 가질 수 있는 순수 함수를 써야한다.
- 펼침 연산자로 정렬에 의한 혼란을 피하라.
    - sort()를 쓰면 원본 배열이 변경이 되므로 이것 또한 spread 연산자로 새로 생성해서 sort를 해라
``` javascript
const unorderedStaff = [  ];
const staffOrderedByYear = [...staff].sort(sortByYears);
```
# 3장 특수한 컬렉션을 이용해 코드 명료성을 극대화 하라
- 객체를 이용해 정적인 키-값을 탐색하라.
  - 객체는 단순하기 때문에 정적인 정보를 다루기에 훌룡하다.
  - 빠르고 명료하고 객체 해체 할당도 가능해서 각체로 데이터를 다루는 것이 어느 때보다도 빠르고 간결하다.
- Object.assign을 이용해 조작하지 않고 객체를 생성하라.
```JavaScript
const Obj1 = {
  author: '123',
  title: '321',
  year: 2017,
  rating: null,
};
const Obj2 = {
  author: 'Joe Morgan',
  title: 'Simplifying JavaScript',
};
    const ObjUpdated = Object.assign({}, Obj1, Obj2);
    console.log(ObjUpdated); // { author: 'Joe Morgan', title: 'Simplifying JavaScript', year: 2017, rating: null, };
```
- 객체 펼침 연산자로 정보를 갱신하라
```javascript
  const book = {
    title: 'Reasons and Persons',
    author: 'Derek Parfit',
  };
  const update = { ...book, year: 1984 };
  // { title: 'Reasons and Persons', author: 'Derek Parfit', year: 1984}
```
- 객체 안의 객체들도 펼침 연산자로 새로 생성하라.
```javascript
  const defaultEmployee = {
    name: {
      first: '',
      last: '',
    },
    years: 0,
  };
  // # START:deepMerge
  const employee = {
    ...defaultEmployee,
    name: {
      ...defaultEmployee.name,
    },
  };
  // # END:deepMerge
  employee.name.first = 'joe';
  return [defaultEmployee.name.first, employee.name.first];//  '', joe
////////////////////////////////////////////
  const defaultEmployee = {
    name: {
      first: '',
      last: '',
    },
    years: 0,
  };
  // # START:deepMerge
  const employee = {
    ...defaultEmployee,
  };
  // # END:deepMerge
  employee.name.first = 'joe';
  return [defaultEmployee.name.first, employee.name.first];// joe, joe
}
```
- 중첩되어 있을 경우에는 객체를 복사하지 않고 참조만 복사하기 때문에 조작으로 인한 잠재적인 문제를 만든다.
- 새로운 인스턴스를 생성 후 메서드를 바로 이어 가는 것을 chaining이라고 부른다
```javascript
[1].map(x=> x).filter(x=> x===1) ... 
```
- 맵의 이점들
  - 항목을 자주 추가하거나 삭제를 하는 경우에는 객체보다 맵을 사용하는것이 적합하다. 
  - 맵은 함수 또는 객체등을 포함한 모든 값을 넣을 수 있다.
  - size 속성으로 쉽게 크기를 알아 낼 수 있다.
  - 순회가 가능해서 바로 순회가 가능하다. 
- 맵과 펼침 연산자로 키-값 데이터를 순회하라.
```javascript
const filters = new Map()
  .set('색상', '검정색')
  .set('견종', '래브라도레트리버');
function checkFilters(filters) {
  for (const entry of filters) {
    console.log(entry);
  }
}
// ['색상', '검정색']
// ['견종', '래브라도레트리버']
```
for을 이용한
```javascript
function getAppliedFilters(filters) {
  const applied = [];
  for (const [key, value] of filters) {
    applied.push(`${key}:${value}`);
  }
  console.log(applied)// [ '색상:검정색', '견종:래브라도레트리버' ]
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}
// '선택한 조건은 색상:검정색, 견종:래브라도레트리버 입니다.'
```
펼침 연산자를 이용한
``` javascript
const filters = new Map()
  .set('색상', '검정색')
  .set('견종', '래브라도레트리버');
  console.log(filter)//  Map { '색상' => '검정색', '견종' => '래브라도레트리버' }
function getAppliedFilters(filters) {
  const applied = [...filters].map(([key, value]) => {// 펼침 연산자를 사용하지 않으면 TypeError: filters.map is not a function 가 뜬다.
    return `${key}:${value}`;
  });
    console.log(applied)// [ '색상:검정색', '견종:래브라도레트리버' ]
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}
```
- 맵 이터레이터는 키-값 쌍으로 넘겨준다.
- 맵 자체에는 sort 메서드가 없지만 펼침 연산자를 사용해서 sort를 사용하면 된다.
- 맵 생성시 부수 효과를 피하라.
  - 두맵을 합칠때 부수 효과가 일어 날 수 있으니 하나는 복사 하고 하나는 iterate 해서 새로 생성된것에 넣으면 된다.
``` javascript
function applyDefaults(map, defaults) {
  const copy = new Map([...map]);
  for (const [key, value] of defaults) {
    if (!copy.has(key)) {
      copy.set(key, value);
    }
  }
  return copy;
```
그러나 이것 보단 그냥 
``` javascript
function applyDefaults(map, defaults) {
  return new Map [...map, ...defaults];
```
하면 된다. 그러면 맵에 있는 중복되는 키 값들이 defaults에 있는 것으로 자동으로 덮어 쓰여진다.
- 세트를 이용해 고윳값을 관리하라.
```javascript
const attribute= ['black', 'black', 'chocolate']
function getUnique(attributes) {
  const attributeSet = new Set(attributes); // Set {'black', 'chocolate'};
  return [...attributeSet]// ['black', 'chocolate'];
}
```
객체에서 특정 값을 중복없이 가져 올려고 할때
``` javascript
  const dogs = [
    {
      이름: '맥스',
      색상: '검정색',
    },
    {
      이름: '도니',
      색상: '검정색',
    },
    {
      이름: '섀도',
      색상: '갈색',
    },
  ];
  const colors = [...dogs.reduce((colors, { 색상 }) => colors.add(색상), new Set())];
  return [...colors]; // ['검정색', '갈색'];
```