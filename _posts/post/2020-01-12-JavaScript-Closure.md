---
layout: post
title: "JavaScript Closure"
description: 자바 스크립트 클로져
category: posts
---


MDN에서는  클로저를 이렇게 정의를 한다.
> A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. 
> -- <cite>[MDN web docs][1]</cite>

번역을 하면 
>클로저는 함수들과 그 함수들을 참조하는 스테이트들의 조합이다. 클로저 내부 함수의 scope에서 외부 함수의 scope에 접근할 수 있게 해준다. JavaScript에서는 함수가 생성될 때마다 함수 생성 시점에 클로저가 생성된다.
> -- <cite>[MDN web docs][1]</cite>

[1]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

클로저를 보기 전에 lexical environment를 봐야 합니다.

```javascript
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```

위 예시는 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) 에서 가져온 예시입니다. 함수 init 안의 name이라는걸 정의 하고 displayName이라는 함수를 또 정의합니다. 그 정의된 함수는 바깥 함수인 init에서 정의된 name을 써서 alert 창으로 띄웁니다. 결국엔 init를 실행하면 Mozilla가 출력됩니다. 위에 말했듯이 안의 함수는 바깥 함수의 것들을 불러와서 쓸 수 있습니다. 이게 바로 lexical environment입니다.

closure는 이 lexical scope를 재사용한다고 생각하면 편합니다.

```javascript
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

위 예제는 myFunc를 새로 정의해서 makeFunc의 기능처럼 새로 만듭니다. 그래서 새로 정의된 함수에서 값들을 바꾸면 기존 건 바뀌지 않습니다. 예를 들어서

```javascript
function makeFunc(sentName) {
  var name = sentName;
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc1 = makeFunc();
var myFunc2 = makeFunc();
myFunc1('newName');
myFunc2('newName2');
```

이렇게 하면 alert 창으로 myFunc1는 'newName', myFunc2는 'newName2' 출력합니다.

조금 더 복잡한 예시를 보자면 


```javascript
function makeFunc(sentName) {
  return displayName(sentName2) {
    return sentName+sentName2;
  }
}

var myFunc1 = makeFunc('hello');
var myFunc2 = makeFunc('hi');
console.log(myFunc1('Gi')); //helloGi
console.log(myFunc1('aaasd'));//helloaaasd
console.log(myFunc2('Bong'));//hiBong
console.log(myFunc2('123124'));//hi123124
```

이렇게 하면 myFunc1, myFunc2는 옆에 주석대로 출력합니다.

closure를 쓰는 이유 중 또 하나의 이유는 private 메서드를 이미테이션 하기 위해서이다.

```javascript
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1
```

위는 counter에 private라고(외부에서 접근이 불가능하다고 가정하고) 치면 우리는 counter 안의 함수인 increment와 decrement나 value로 counter의 데이터를 가져오거나 수정을 한다.

```javascript

var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};

var counter1 = makeCounter();
var counter2 = makeCounter();
alert(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
alert(counter1.value()); /* Alerts 2 */
counter1.decrement();
alert(counter1.value()); /* Alerts 1 */
alert(counter2.value()); /* Alerts 0 */
```

더 나아 가서 아예 새로 만들어서 쓸 수도 있다. 당연히 새로 만들었으니 세 counter는 개별적으로 관리가 된다.

위에서 봤듯이 closure를 쓰므로 함수를 새로 작성을 안 하고 재활용도 가능하고 데이터 관리를 할 수 있고 private인 데이터들을 git객체 안에 함수들을 넣어서 원하는 조건으로만 변경을 제한 할 수 있습니다. 이러한 장점이 있음으로 closure를 씁니다.

reference:

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures>
<https://poiemaweb.com/js-closure>
<https://velog.io/@ki_blank/Javascript-%ED%81%B4%EB%A1%9C%EC%A0%80Closure>