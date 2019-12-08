---
layout: post
title: "JS memory allocation for var, let, const, array"
description: how memory allocation works on var, let, const and array
category: posts
---

Title: JavaScript var, let, const, array memory allocation


<blockquote>
    
  <p>This post is based on Ethan Nam's JavaScript's Memory model post<br/>이 글은 Ethan Nam의 JavaScript’s Memory Model을 기반으로 한 글입니다.</p>

  <p>Link to the original source: <a href="https://medium.com/@ethannam/javascripts-memory-model-7c972cd2c239" target="_blank" style="color:blue">JavaScript’s Memory Model</a> </p>

  <p>번역본은 <a href="https://junwoo45.github.io/2019-11-04-memory_model/"
   target="_blank" style="color:blue">자바스크립트의 메모리 모델</a> 에서 확인하실 수 있습니다.</p>

</blockquote>


### JavaScript Memory Model (자바스크립트 메모리 모델)
I will go over how Memory allocation works based on the sources above.<br/>
(위에 소스를 보고 메모리 할당이 어떻게 돌아가는지 보겠습니다.)

<br/>

if you dont know var, let, and const and its difference please click the below
<p><font color="blue"><a href="/2019/12/07/Var-Let-Const" alt="varletconst" style="color:blue"><h3>VarLetConst</h3></a></font></p>


-----------------
### Memory Allocation

when we run the following code:<br>
밑의 것을 실행할시에:

```javascript
let myNumber = 23
```

- Create a unique identifier for your variable (“myNumber”).<br>
  변수의 고유 식별자(“myNumber”)를 생성합니다.<Br>
- Allocate an address in memory (will be assigned at runtime).<br>
  메모리에 주소를 할당합니다.(런타임에 할당될 것입니다.)<br>
- Store a value at the address allocated (23).<br>
  생성된 주소에 값(value)을 저장합니다(23).<br>

<p><img src="/img/JavaScript-Memory-Allocation/1.jpeg" alt="memory1" /></p>

so 'myNumber' has a address of '0012CCGWH80' where the address value holds a value of '23'

```
let newVar = myNumber
```

if we set like this, newVar gets a address of '0012CCGWH80' where the address holds a value of '23'

<p><img src="/img/JavaScript-Memory-Allocation/2.jpeg" alt="memory2" /></p>

now if we 

``` javascript
myNumber = myNumber + 1
```

myNumber gets a new address of '0034AAAAH23' where the address holds a value of '24'

<p><img src="/img/JavaScript-Memory-Allocation/3.jpeg" alt="memory3" /></p>


JavaScript has three portions of memory assigned to a program during execution: Code Area, Call Stack and Heap. These combined together is known as the Address Space of the program.
<p><img src="/img/JavaScript-Memory-Allocation/4.png" alt="memory4" /></p>

Code Area: area where you write your js code<br>
Call Stack :stores primitive data(var, let, const data)
Heap: stores non primitive data(array object data)

lets make an array
```javascript
let myArray = []
```

<p><img src="/img/JavaScript-Memory-Allocation/5.jpeg" alt="memory5" /></p>

<p><img src="/img/JavaScript-Memory-Allocation/6.jpeg" alt="memory6" /></p>

my Array gets an address of 0458afczx91 and 22vvcx011 where the 22vvcx001 is the address linked to the heap which stores the array data.

lets push some data
```javascript
myArray.push("first")
myArray.push("second")
myArray.push("third")
myArray.push("fourth")
myArray.pop()
```
<p><img src="/img/JavaScript-Memory-Allocation/7.jpeg" alt="memory7" /></p>

you can see that the data's we pushed is stored in the heap

---------

const memory allocation

we know that we can't change the value, to be more accurate, the address of const after first initialization.

```javascript
const importantID = 489
importantID = 100 // TypeError: Assignment to constant variable
```

<p><img src="/img/JavaScript-Memory-Allocation/9.jpeg" alt="memory9" /></p>

When 100 is assigned to “importantID”, since 100 is a primitive, a new memory address is allocated, and the value of 100 is stored there. Then JS tries to assign the new memory address to “importantID”, and this is where the error is thrown.

<br>

but we usually see arrays declared with a const like this

```javascript
const myArray = []
```

and if we 

``` javascript
myArray.push(1)
myArray.push(2)
myArray.push(3)
myArray.push(4)
myArray.push(5)
```

<p><img src="/img/JavaScript-Memory-Allocation/10.jpeg" alt="memory10" /></p>

push is successfully done. <br>
it works because we are not changing the address but just adding values to the address.<br>

so lets try allocating myArray with a primitive data '3' which has a different address than it used when storing the array.

```javascript 
myArray = 3 //error
```

<p><img src="/img/JavaScript-Memory-Allocation/11.jpeg" alt="memory11" /></p>


--------

Summarization
- (const, let, var) initializes new address of the value inputed.
  - if it is a primitive data like int string etc. then it is stored in a call stack
  - if it is a non primitive data like an array or object, the data values are stored in the heap with the address linked to the callstack
- const cant change its address after its first initialization but can change its data
- primitive data which is located in the call stack has fixed address and changes to the data means change to the address whereas non primitive datas located in the call stack has fixed address but the data inside can be changed which is located in the heap
