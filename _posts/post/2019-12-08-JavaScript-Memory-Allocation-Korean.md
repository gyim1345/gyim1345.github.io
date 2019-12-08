---
layout: post
title: "JS  var, let, const, array 메모리 할당 원리"
description: var, let, const and array 메모리 할당이 어떻게 돌아가는지 
category: posts
---

<p><font color="blue"><a href="/2019/12/08/JavaScript-Memory-Allocation" alt="varletconst" style="color:blue"><h3>Go to English Page</h3></a></font></p>


<blockquote>
    
이 글은 Ethan Nam의 JavaScript’s Memory Model을 조금 간추린 글입니다.

  <p>원본 소스: <a href="https://medium.com/@ethannam/javascripts-memory-model-7c972cd2c239" target="_blank" style="color:blue">JavaScript’s Memory Model</a> </p>

  <p>번역본은 <a href="https://junwoo45.github.io/2019-11-04-memory_model/"
   target="_blank" style="color:blue">자바스크립트의 메모리 모델</a> 에서 확인하실 수 있습니다.</p>

</blockquote>

<br>

메모리 할당이 어떻게 되는지 알아 보도록 하겠습니다<br>

<br>

var, let, const 를 모르신다면 밑에 있는 링크를 따라 가시는걸 추천합니다.
<p><font color="blue"><a href="/2019/12/07/Var-Let-Const" alt="varletconst" style="color:blue"><h3>VarLetConst</h3></a></font></p>


-----------------
### 메모리 할당


JavaScript는 사물 (문자열, 문자열 등)이 생성 될 때 메모리를 할당하고 더 이상 사용되지 않을 때 garbage collection이라는 프로세스를 "자동으로"해제합니다

메모리 수명주기는 다음과 같습니다:

<p><img src="/img/JavaScript-Memory-Allocation/10.png" alt="memory-life-cycle" /></p>

메모리 할당 — 메모리는 운영 체제에서 할당하므로 프로그램에서 사용할 수 있습니다. <br>
메모리 사용 — 읽고 쓰기로 할당 된 메모리를 사용합니다. <br>
메모리 해제 — 메모리를 해제하여 한 번 더 비웁니다.

Javascript에서는 값이 처음 초기화시 자동으로 메모리를 할당합니다.

------

Js 메모리 할당이 어떻게 되는지 들어 가봅시다.

이 코드 실행시:<br>

```javascript
let myNumber = 23
```

- 변수의 고유 식별자 (“myNumber”)를 만듭니다.<br>
- 메모리에 주소를 할당합니다. <br>
- 할당 된 주소에 값을 저장합니다. (23). <br>

<p><img src="/img/JavaScript-Memory-Allocation/1.jpeg" alt="memory1" /></p>

따라서 'myNumber'의 주소는 '0012CCGWH80'이며 주소 값은 '23'입니다.


```javascript
let newVar = myNumber
```

이렇게 설정하면 newVar의 주소는 '0012CCGWH80'이며 주소에 저장된 값은 '23'입니다.

<p><img src="/img/JavaScript-Memory-Allocation/2.jpeg" alt="memory2" /></p>

그리고 이제 

``` javascript
myNumber = myNumber + 1
```

myNumber는 새 주소 '0034AAAAH23'을 얻습니다. 주소에 저장된 값은 '24'입니다.

<p><img src="/img/JavaScript-Memory-Allocation/3.jpeg" alt="memory3" /></p>


JavaScript에는 codearea 코드 영역, callstack 호출 스택 및 heap 힙이라는 세 가지 메모리 부분이 실행 중에 프로그램에 할당되어 있습니다. 이를 함께 Address Space of the Program 이라고합니다.
<p><img src="/img/JavaScript-Memory-Allocation/4.png" alt="memory4" /></p>

코드 영역Code Area: 코드 작성하는 공간입니다<br>
호출 스택Call Stack :원시 변수값을 저장합니다(var, let, const data)<br>
힙Heap: 원시변수 값이 아닌것들을 저장합니다(array object data)

배열을 만듭시다
```javascript
let myArray = []
```

<p><img src="/img/JavaScript-Memory-Allocation/5.jpeg" alt="memory5" /></p>

<p><img src="/img/JavaScript-Memory-Allocation/6.jpeg" alt="memory6" /></p>

myArray는 0458afczx91 및 22vvcx011의 주소를 얻습니다. 여기서 22vvcx001은 배열의 데이터를 저장하는 힙에 연결된 주소입니다.

lets push some data
```javascript
myArray.push("first")
myArray.push("second")
myArray.push("third")
```
<p><img src="/img/JavaScript-Memory-Allocation/7.jpeg" alt="memory7" /></p>

우리가 푸시 한 데이터들이 heap 에 들어가는걸 보실수 있습니다.
---------

const 메모리 할당

우리는 첫 번째 초기화 후 const 주소를 변경 할 수 없다는 것을 알고 있습니다.

```javascript
const importantID = 489
importantID = 100 // TypeError: Assignment to constant variable
```

<p><img src="/img/JavaScript-Memory-Allocation/9.jpeg" alt="memory9" /></p>

100이“importantID”에 할당되면 100은 기본이므로 새 메모리 주소가 할당되고 100이 저장됩니다. 그런 다음 JS는 새 메모리 주소를 "importantID"에 할당하려고 시도하며 여기에서 오류가 발생합니다.

<br>

const 배열은 이렇게 선언되는것을 많이 보셨을 것 입니다.

```javascript
const myArray = []
```

선언 후

``` javascript
myArray.push(1)
myArray.push(2)
myArray.push(3)
myArray.push(4)
myArray.push(5)
```

<p><img src="/img/JavaScript-Memory-Allocation/10.jpeg" alt="memory10" /></p>

하면 const 이지만 push 가 성공적이게 됩니다. 이러한 이유는 push 로 우리는 주소를 바꾸는게 아니라 새로운 값을 myArray 에 할당해서 그렇습니다.
<br>

그럼 배열을 3이라고 선언을 해봅시다.

```javascript 
myArray = 3 //error
```

<p><img src="/img/JavaScript-Memory-Allocation/11.jpeg" alt="memory11" /></p>

당연히 에러 뜹니다. myArray 가 const 인데 배열 안의 값들을 수정하는게 아니라 주소를 수정 할려고 하므로 에러 뜹니다.

--------

요약
- (const, let, var) 들은 할당한 값들의 주소들을 줍니다.
  - string 같은 원시 데이터 이면 call stack 이라는 곳에 저장됩니다.
  -  원시 데이터가 아닌 배열이나 객체 이면 데이터들이 heap 라는 곳에 저장되고 그 주소가 call stack 에 연결 되어 있다.
- const 는 주소 값을 변경 할 수 없습니다. 
- 원시 데이터들은 call stack 에 저장되어 있고 고정 주소들이 할당 되어 있다. 데이터 값들을 수정 한다는 말은 주소를 변경한다는 뜻이랑 일맥상통하다. 그외의 것들은 데이터 값들의 주소를 call stack 에 있고 그 주소들을 따라가 heap 에 데이터 값을 저장되어 있다.