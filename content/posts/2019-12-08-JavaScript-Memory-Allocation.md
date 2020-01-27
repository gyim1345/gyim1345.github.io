---
layout: post
title: "JS memory and memory allocation"
description: What is memory and how it works in JS
template: "post"
date: "2019-12-08"
---

## Memory 

컴퓨터의 5 가지 구성 요소는 입력, 출력, 메모리, 데이터 경로 및 제어입니다.  <Br>그 중 메모리에 대하여 얘기 하자면 메모리는 프로그램이 보관 되는 곳이고 또한 실행 될때도 쓰이는 것입니다. 메모리는 작게 보자면 트렌지스터랑 캐패시터등으로 스위치를 이루면서 만들어지는 0 이나 1로 상태를 표현할수 있는 회로입니다. 그 회로를 flipflop 이라고도 합니다.<br>
메모리엔 휘발성과 비 휘발성이라는 종류가 있습니다. 휘발성이란 컴퓨터 전원이 꺼지면 없어지는 것이고 비 휘발성은 컴퓨터가 꺼도 데이터가 유지 되는것입니다.
간단하게 메모리 사용되는 예시를 보자면 인터넷을 열때 하드 storage 에서 불러와서 ram 에 저장 되있습니다.
메모리가 중요한 이유는 메모리가 있으므로써 데이터를 엑세스를 빨리 하기 위해서 입니다. 

쉽게 요약하자면 그냥 주소와 값들을 저장하는 데이터 저장 장소 라고만 알고 있으면 무방합니다.<br>


### 동작 원리

무엇을 하든 어떻게 하든 뭐든 작동할때 binary digits 으로 표현이 가능합니다. 이 binary digits은 memory cell 이라는 곳에 저장이 되어 0 과 1 이라는 상태로 바꿀수 있습니다. 파일과 프로그램등 들은 이런것을 수만개로 조합해서 만든 것입니다. 그래서 cpu 가 뇌 처럼 이런것을 프로세스 합니다. 그래서 어떤것을 실행시켜야 할때 short term memory 에 명령어들을 할당을 합니다. 실행 시키기 위해서 저런 실행 명령어들을 빨리 진행하기 위해서 모든 구역의 shorterm memory 에선 아무 순서로 빼 올수 있습니다. 고로 RAM 혹은 Random Access Memory. 그외에 컴퓨터가 꺼지면 저장하는 매체인 비휘발성인 data storage 등을 써서 데이터를 가지고 오기도 합니다.


-----------------

### Memory in JS 

변수가 저장 되는곳을 보자면 메모리에서 우리는 call stack 이라는 곳으로 구분합니다. call stack 에는 변수의 주소와 값이 저장 되어 있습니다. 그러나 배열이나 객체 들은 그 값이 저장되는 곳에 주소가 저장되고 그 주소를 따라 가면 heap 라는 곳에 값이 저장 되어 있습니다. code 또한 저장소에 저장이 됩니다.

저장된 code 들이 compile 이 되면 compiler os 와 같이 data 들을 보고 어느정도의 크기가 필요한지 미리 계산 해서 callStack 을 만들고 부여합니다.

위의 memory 에 대한 설명들과 매칭을 하자면 storage 에서 code 를 불러 와서 compile 을 할시에 code 에 callstack 이나 data 값들을 ram 에 저장하고 그 휘발성 데이터들은 프로그램을 종료하면 없어지고 프로그램 실행시 저장했던 데이터들은 비휘발성 메모리인 storage 에 저장 합니다.

Js 에서 메모리를 쓸때 js 가 알아서 주소를 할당을 한다고 생각 하면 됩니다. 

그래서 js 에서

언제 할당을 하냐면 
1. 변수를 선언을 했을때
2. 변수의 변화를 주었을때<br>

로 크게 나눌수 있겠네요.


`변수를 선언을 했을때`

```javascript
let variable = 212; 
```

그려면 variable 에 212 이라는 값을 할당을 합니다. <br>
이 때 알아야 할것은 212 라는 값을 주는게 아니라 212 라는 값의 주소를 variable 에 할당을 합니다. 고로

`변수의 변화를 주었을때`

``` javascript
variable = 233;
``` 

을 해주면 233 이라는 값의 주소를 variable 을 주고 212 의 주소는 없앱니다. 이 자동적으로 삭제 하는 기능이 garbage collector 이고 더 들어가보면 복잡해지니 딱히 신경 쓸 필요는 없을듯 합니다.

여기서 const 로 선언 하면 초기화 후에 값을 변환 할수 없다고들 알고 계시죠?

``` javascript
const number = 123;
number = 144; // 에러 뜨죠
```

여기서 값을 변환 해서 에러가 뜬다는 말은 맞다고는 할수는 있지만 더 정확히 말해서 **주소**를 변환을 못하고 그것을 바꿀려고 할때 에러가 뜹니다.

위 의 값들 string, number, boolean, null, undefined, symbol 등을 primitive data 라고 합니다. non primitive 는 배열, 객체가 있습니다.


그럼 주소를 바꾸지 않고 값을 바꾸는 예시를 봅시다.

```javascript
const array = [];

array.push('yourfather');
array.push('yourmom');

console.log(array); // ["yourfather", "yourmom"] 
```

위와 봤듯이 초기화 후에 저희는 배열에 푸시를 해서 변화를 주었는데 에러가 안뜨고 잘 됩니다. 왜냐하면 배열이나 객체들은 데이터들의 주소가 저장되고 값이 그 주소에 저장되어 있기 때문이다.<br>
쉽게 말하자면 <br>const a = 1; 하면 a 의 주소에 1 이라는 값 배정. <br>
const array = ['1','2'] 하면 array 의 주소에 1,2 값으 주소들이 있는곳을 지정 함으로써 1,2 에 있는 값들을 변화 시켜도 array와 1,2 의 값들을 연결 시켜주는 주소가 변화 하는게 아니라서 상관없다.
<br>
좀 더 쉽게 보자면 <br>
const a 주소 = 1 값; <br>
const array 주소 = [ 값들 주소로 불러옴] // 주소들 안에 있는 1,2

더 정확하게 말해서는 <br>


| variable   |    address      |  value |heap|
|----------|:-------------:|:------:|---:|
| a |  12345152 | 1 ||
| array |    12532516  |   12512521 |[1,2]|

array 의 value 값에도 주소가 들어갑니다.

요약하자면 primitive data type 는 다 call stack 이라는 곳에 주소와 값이 지정 되고 non primitive data type 들은 call stack 에 변수 주소와 값 주소가 들어가고 heap 에 값들이 들어 갑니다.


--------

Summarization
- (const, let, var) initializes new address of the value inputed.
  - if it is a primitive data like int string etc. then it is stored in a call stack
  - if it is a non primitive data like an array or object, the data values are stored in the heap with the address linked to the callstack
- const cant change its address after its first initialization but can change its data
- primitive data which is located in the call stack has fixed address and changes to the data means change to the address whereas non primitive datas located in the call stack has fixed address but the data inside can be changed which is located in the heap

------

<br>

References:

1.[How computer memory works - Kanawat Senanan](https://ed.ted.com/lessons/how-computer-memory-works-kanawat-senanan)

2.[JavaScript’s Memory Model](https://medium.com/@ethannam/javascripts-memory-model-7c972cd2c239)

3.[Learning JavaScript: Call By Sharing, Parameter Passing](https://blog.bitsrc.io/master-javascript-call-by-sharing-parameter-passing-7049d65163ed)

4.[How JavaScript works: memory management + how to handle 4 common memory leaks](https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec)