---
layout: post
title: "Some Notes on Js and Html for Beginners"
description: let, const, scope, function expression, fucntion declaration, arrow function, object literal, destructuring, forEach, map, filter, Dom, template literals, label, form, Number(), ===, input, findIndex(), addEventListener(), insertAdjacentHTML(),  todolist example 
category: posts
---

<br/>
&nbsp;&nbsp; 안녕하세요 코딩 배운지 1주일 됬습니다! 설명들이 조금 부족할수도 있지만 도움 되시길!<br/><br/>
&nbsp;&nbsp;이번주에는 블로그를 조금 만지고 그 후에 js 와 html 로 todolist 를 만들면서 그 과정에 js 와 html 에 익숙해지는 과정을 가졌습니다. 그 과정에서 필요 했던 정보들을 나열하겠습니다.
<br/> 

(P.S. 소재목들 누르시면 제가 봤던 소스로 들어 가실 수 있습니다!) 

  
1.  <strong>[let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)</strong>, <strong>[const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)</strong>
2. <strong>[scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)</strong>
3. <strong>[함수 선언식 vs 함수 표현식](https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052)</strong>
4. <strong>[arrow function vs function]((https://joshua1988.github.io/web-development/translation/essential-es6-features-for-vuejs/)</strong>)
5. <strong>[객체 리터럴(object literal)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)</strong>
6. <strong>[destructuring](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)</strong>
7. <strong>[forEach, map, filter](https://velog.io/@decody/map-%EC%A0%95%EB%A6%AC)</strong>
8. <strong>[DOM 이란 무엇인가?](https://poiemaweb.com/js-dom)</strong>
9. <strong>[Template literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)<br/></strong>
10. <strong>[label](https://www.codingfactory.net/11008)</strong><br/>
11. <strong>[form](https://developer.mozilla.org/ko/docs/Web/HTML/Element/form) [태그](http://www.nextree.co.kr/p8428/)</strong><br/>
12. <strong>[Number()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)<br/></strong>
13. <strong>[===](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)<br/></strong> 
14. <strong>[input 태그](https://delirussum.tistory.com/35)<br/></strong>
15. <strong>[findIndex()](https://bblog.tistory.com/300)<br/></strong>
16. <strong>[addEventListener](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener)<br/></strong>
17. <strong>[insertAdjacentHTML](https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML)<br/></strong>
18. <strong>[todolist 예제 코드](https://freshman.tech/todo-list/)</strong>


---

1.<strong>[let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)<br/></strong>
구문은 블록 유효 범위를 갖는 지역 변수를 선언하며, 선언과 동시에 임의의 값으로 초기화할 수도 있다. <br/>
블록은 {} 이다<br/>
<br/>
변수 선언문이라고 함<br/>

`예시`) 
```
let variable = anything;
여기서 variable = 변수
let = 선언문
anything = 값
변수 variable 에 anything 이라는 값을 let 으로 선언.
```
<strong>[const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)<br/></strong>
let 이랑 비슷한 변수 선언문이지만 '초기화' 가 안된다. 여기서 초기화라는 뜻은 한번 그 값에 할당값을 주면 바꾸지 못한다. 그것을 이 업계에서 '초기화' 가 안된다고 한다.

결론적으로 let 은 scope 안에서 쓰기 위한 변수 선언문. const 는 let 이랑 비슷하지만 한번 초기화 하면 그 후로 값을 못 바꾼다. 당연 외부에서 바꿀려는 것을 막기 위해서이다.

*추가로 변수 선언문이라고 하지만 다수 변수나 변수와 함수도 같이 넣을수 있다

---

2.<strong>[scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)<br/></strong>
scope = 범위<br/>
scope 단어를 보통 "in the current scope" 라고 쓴다. 그 뜻은 범위 안에 있냐 라는 뜻이다.<br/>
값이나 표현식이 in the current scope 이면 쓸수 있다는 말이다.<br/>
`예시`)
```
{...let x=1231;...}
console.log(x);
```
여기서 보면 블록 안에 let 선언문으로 x 변수를 1231 로 선언을 했는데 블록 밖에서 log 에 출력하라고 했다. 위에서 말했듯이 let은 블록 안에서 선언 됬다면 밖에서 불러 올수 없다. 그러니 x is not in the current scope 라고 할수 있다. x 를 불러 올려고 했다면 제일 간단한 방법은 블록 밖에서 x 선언을 했던가 log 를 안쪽으로 넣었으면 됬다.

scope 는 accessability 를 구분하기 위한 것이다.

---

3.<strong>[함수 선언식 function declaration / 함수 표현식 function expression](https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052)<br/></strong>
함수 선언식function declaration is “saved for later use”, and will be executed later, when it is invoked (called). 선언만 되었고 불러서 써야한다.

함수 표현식function expression. After a function expression has been stored in a variable, the variable can be used as a function. Functions stored in variables do not need function names. They are always invoked (called) using the variable name. 함수 표현식으로 변수 안에 함수를 넣어서 나중에 불러서 쓸수 있다. 

차이점<br/>
Example: Function Expression

alert(foo());  
var foo = function() { return 5; }<br/>
출력은 "ERROR!  foo wasn't loaded yet"

Example: Function Declaration

alert(foo());<br/>
function foo() { return 5; }<br/>
출력은 "5"

Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.<br/>
함수 선언식은 코드들을 출력 하기 전에 다 로드가 된 후에 코드들을 실행한다. 반면에 함수 표현식은 그 선언 하는 코드 줄 까지 가야지만 선언 되므로 그전에 불러올시에 바로 에러 뜬다.

---

4.<strong>[화살표 함수arrow function vs 함수function](https://joshua1988.github.io/web-development/translation/essential-es6-features-for-vuejs/)</strong>

자바스크립트에서 함수를 생성하기 위해서는 주로 function 키워드를 사용한다
function 키워드는 2가지 방법으로 함수를 생성할 수 있다 

<li>함수 선언(Function Declaration) </li>
function sayHi(){ 
  console.log("hi!");
}

<li>함수 표현(Function Expression)</li>
무명(anonymous:이름이 없음) 함수를 생성한 후 변수에 담는 방식이다

`예시)`<br/>
```
//일반 함수 표현식
let sayHi2 = function()
console.log("hi!");
}

//화살 표함수 표현식
var sayHi2 = () => console.log("hi!");
```

 화살표 함수는 무명 함수를 생성하는 방법 중의 하나로 기본 형태는  (파라메터1, 파라메터2,...) => { 함수내용 }이다.

1. 함수 내용이 한줄인 경우 함수내용을 감싸는 {}를 사용하지 않아도 된다.
2. {}가 없는 경우 해당 함수의 실행결과를 자동으로 이천 한다.
3. 함수 내용이 한줄 이상인 경우 return을 사용해서 결과를 리턴한다.
4. 파라메터가 한개인 경우 파라메터를 감싸는 ()를 생략할 수 있다. (파라메터가 없는 경우에는 위의 sayHi2의 경우 처럼 파라메터 없이 빈 ()를 표시하여야 한다.)

```
//함수 표현
filteredArray = myArray.filter(function(element){
  return element > 2;
});

//화살표 함수
filteredArray = myArray.filter(element => element > 2);

일반적인 함수
function (인자) {
	함수 로직
}

화살표 함수
(인자) => {
	함수 로직
}
```

결과적으로 이것은 가독성을 위한 일반 함수 선언식 대체용이다.

---

5.<strong>[객체 리터럴(object literal)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)<br/></strong>
객체object 에 literal 방식으로 선언할때...<br/>
가독성용 객체 선언 방식이다.<br/>

[`예시`](https://webclub.tistory.com/390))
```
//일반 선언 방식
var obj = {}; 
obj.name = 'jaehee';
obj.age = 10;
obj.increaseAge = function (i) { 
this.age + i; 
};

//객체 리터럴 방식
var obj = { 
name : 'jaehee', 
age : 10, 
increaseAge : function (i) { 
this.age + i; 
} 
};
```
결국엔 가독성 때문에 사용 하는 일반 방식 대체용이다.

---

6.<strong>[구조 분해 할당destructuring](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)</strong>

객체나 배열을 분해하기 위해서 쓰는것.<br/>
말 그대로 객체난 배열을 나눠야 할때 쓰는게 구조 분해 할당이다.<br/>

`예시`)
```
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true
```

---

<br/>

7.<strong>[forEach, map, filter](https://velog.io/@decody/map-%EC%A0%95%EB%A6%AC)</strong><br/>
<li>forEach</li>forEach 는 for 대신 쓰는것이다. for 선언할때
 (let i= 0; i< length; i++;)
쓰는것을 많이 봤을 것이다. forEach 는 그것 없이 그냥 다 돌리는 것이다

좀 더 명확하게는<br/>
`예시`)
```
//일반적으로 for 은 이렇게 쓴다
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        new_arr.push(arr[i])
}
//forEach 는 이러하다.
arr.forEach(function (n) {
    if (n % 2 ===0) {
        new_arr.push(n)
    }
```
그냥 가독성용 밑 편의성용이다.

<br/>
<li>map()</li>
이 메소드는 배열이 있다면 일괄적으로 바꿔주는 메소드이다<br/>

`예시`)
```
var arr = ['foo', 'hello', 'diamond', 'A']
var arr2 = arr.map((v) => v.length)
console.log(arr2) 
```  
출력값은 [3, 5, 7, 1] 이다.
뭔가를 일괄적으로 바꿔야할때 이 메소드를 쓰자.
<br/>
<br/>

<li>filter()<br/></li>
요소를 걸러내어 배열로 true/false 반환, 없으면 빈 배열.<br/>
용어 그대로 원하는거 조건에 맞게 필터 해서 보내준다.<br/>

`예시`)
```
var arr = [4, 15, 377, 395, 400, 1024, 3000]
var arr2 = arr.filter((v) => (v % 5 === 0))
console.log(arr2)
```
출력값은 [15, 395, 400, 3000] 이다.<br/>
배열에 찾는게 있다면 이 메소드를 쓰면 좋겠다.


---

<br/>

8.<strong>[DOM 문서 객체 모델](https://poiemaweb.com/js-dom)<br/></strong>
돔,문서 객체 모델, Dom, Document Oriented Model<br/>
텍스트 파일로 만들어져 있는 웹 문서를 브라우저에 렌더링하려면 웹 문서를 브라우저가 이해할 수 있는 구조로 메모리에 올려야 한다. 브라우저의 렌더링 엔진은 웹 문서를 로드한 후, 파싱하여 웹 문서를 브라우저가 이해할 수 있는 구조로 구성하여 메모리에 적재하는데 이를 DOM이라 한다. 즉 모든 요소와 요소의 어트리뷰트, 텍스트를 각각의 객체로 만들고 이들 객체를 부자 관계를 표현할 수 있는 트리 구조로 구성한 것이 DOM이다. 이 DOM은 자바스크립트를 통해 동적으로 변경할 수 있으며 변경된 DOM은 렌더링에 반영된다.<br/>
쉽게 말하자면 이러저러한 것들을 다 연결시켜 통합해서 브라우저에 띄울수 있게 하는게 제일 큰 역할이다. 예를들어서 html 태그를 써서 js 로 동적으로 만들어서 css 로 꾸미고 브라우저에 띄우는 과정 등. 이러함으로써 다른 언어들을 연결하고 필요한 기능을 유기적으로 쓸수 있게 한다.



-----------

9.<strong>[Template literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)<br/></strong>
<li>내장된 표현식을 허용하는 문자열 리터럴이다
여러 줄로 이뤄진 문자열과 문자 보간기능을 사용할 수 있다.
변하는 문자를 쓸려면 template literal 을 써야한다.</li>
<li>`` 안에 특정한 함수의 값들을 가져올려면 ${}써서 string 으로 불러오는것을 방지할수 있다.</li>
 <br/>

---

10.<strong>[label](https://www.codingfactory.net/11008)</strong><br/>
<li>label은 폼의 양식에 이름 붙이는 태그이다.</li>
<li>주요 속성은 for다.
label의 for의 값과 양식의 id의 값이 같으면 연결된다.</li>
<li>label을 클릭하면, 연결된 양식에 입력할 수 있도록 하거나 체크를 하거나 체크를 해제한다.</li>
<li>이 label 요소는 해당 폼 요소에 어떤 값을 넣어야 하는지 라벨을 붙여주는 요소다</li>
<br/>

---

11.<strong>[form](https://developer.mozilla.org/ko/docs/Web/HTML/Element/form) [태그](http://www.nextree.co.kr/p8428/)</strong><br/>
<li>form 요소에 들어간 속성을 보면, action과 method가 있다. 이 중에 action 속성은 이 폼을 전송할 URL을 지정한다.</li>
<li>태그 안에 input 를 넣어서 쉽게 입력 창을 띄울 수 있다. </li>
<li>type text 하면 텍스트 입력창</li>
<li>type button 하면 버튼</li>
<br/>

---

12.<strong>[Number()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)<br/></strong>
<li>함수는 문자를 숫자로 바꿔준다</li>
<br/>

---

13.<strong>[===](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)<br/></strong> 
<li>피연산자들이 같은 타입일 때 동등 비교를 하도록 되어있다</li>
<br/>

---

14.<strong>[input 태그](https://delirussum.tistory.com/35)<br/></strong>
<li>input : 평범하게 글자나 텍스트칸을 넣을 수있는 공간이 생긴다.</li>

<li>input type=""   : 기존의 input에다가 type를 지정하여 type의 옵션을 넣으면,
다양한 모양이 된다. 단 입력이나 기타 등등의 모양 꼴로 변한다.</li>

<li>input type="checkbox" : 이건 체크박스로 나타난다.</li>
<br/>

---

15.<strong>[findIndex()](https://bblog.tistory.com/300)<br/></strong>
<li>findIndex() 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환한다. 만족하는 요소가 없으면 -1을 반환한다.</li>
<br/>

---

16.<strong>[addEventListener](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener)<br/></strong>
<li>addEventListener 를 쓰면 굳이 onclick 같은 html 에 함수를 부르지 않아도 된다.</li>
<br/>

---

17.<strong>[insertAdjacentHTML](https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML)<br/></strong>
<li>insertAdjacentHTML() 로 웹에 간단하게 출력할수 있다.
</li>

-----

18.<strong>[TodoList 예제 코드](https://freshman.tech/todo-list/)</strong>
```
let todoItems = [];

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);

  const list = document.querySelector('.js-todo-list');
  list.insertAdjacentHTML('beforeend', `
    <li class="todo-item" data-key="${todo.id}">
      <input id="${todo.id}" type="checkbox"/>
      <label for="${todo.id}" class="tick js-tick"></label>
      <span>${todo.text}</span>
      <button class="delete-todo js-delete-todo">
        <svg><use href="#delete-icon"></use></svg>
      </button>
    </li>
  `);
}

function toggleDone(key) {
  const index = todoItems.findIndex(item => item.id === Number(key));
  todoItems[index].checked = !todoItems[index].checked;

  const item = document.querySelector(`[data-key='${key}']`);
  if (todoItems[index].checked) {
    item.classList.add('done');
  } else {
    item.classList.remove('done');
  }
}

function deleteTodo(key) {
  todoItems = todoItems.filter(item => item.id !== Number(key));
  const item = document.querySelector(`[data-key='${key}']`);
  item.remove();
}

const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('.js-todo-input');

  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});

const list = document.querySelector('.js-todo-list');
list.addEventListener('click', event => {
  if (event.target.classList.contains('js-tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }

  if (event.target.classList.contains('js-delete-todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }

});

```

---

좋은 하루 되세요!
