---
layout: post
title: "Functional Programming"
description: 함수형 프로그래밍
template: "post"
date: "2020-01-12"
---

>In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data. It is a declarative programming paradigm in that programming is done with expressions or declarations[1] instead of statements. In functional code, the output value of a function depends only on its arguments, so calling a function with the same value for an argument always produces the same result.
> -- <cite>[Wikipedia][1]</cite>

[1]:https://en.wikipedia.org/wiki/Functional_programming

함수형 프로그래밍은 이렇게 정의합니다. 번역을해보자면 함수형의 설계 방식은 계산적인 것들은 수학적 함수의 평가로 정의하고 데이터 변이와 상태 변화를 피합니다. 그리고 선언으로 이루어져 있음으로 선언적 함수입니다. 고로 함수는 멱등성을 지킵니다.  

기능적 프로그래밍에는 가변 변수, 할당, 명령형 구조가 없습니다. 함수에 집중하고 변수들은 어디에서 정의가 되고 다른 함수 내에서도 정의하고 매개변수로 전달이 가능하고 결괏값을 돌려줄 수 있습니다.

이 함수형 장점이라고 하면 당연히 선언적 함수에서 말했던 장점들과

- 순수함수는 추론하기가 더 쉽습니다.
  - 순수 함수는 뭐가 되는지와 안되는지 구분이 되므로 입력과 출력을 확실하게 알 수 있습니다.
- 테스트가 더 쉽고, 순기능이 속성 기반 테스트와 같은 기술에 잘 적응합니다.
  - 명령형과 달리 순수 함수는 숨겨진 상태와 side effect에 대하여 걱정을 할 필요가 없습니다.
- 디버깅이 더 간편합니다
  - 순수 함수로써 입력이 출력을 좌우하므로 디버깅이 쉽습니다.
- 프로그램은 더 안전합니다.
  - 가변변수와 hidden state가 적습니다.
- 프로그램은 상위 레벨에서 작성되므로 이해하기 쉽습니다.
  - 코드 그대로 읽기가 쉽습니다.


함수형을 조금 더 코드 레벨로 들어가서 봅시다.

함수형 프로그래밍은 "first class citizen" 입니다.

```javascript
//변수에 할당
const fn = (input) => console.log(input)
fn('hi')
//객체에 할당
const obj = {
  fn(input) {
    console.log(input)
  }
}
obj.fn('hi')

//배열에 할당
const array = [
  input => console.log(input)
]
a[0]('hi')

//함수에 할당
const fn = (input) => () => console.log(input)
const fn2 = (fn3) => fn3()
fn2(fn('hi'))

//함수에 return
const createFunction = () => {
  return input => console.log(input)
}
const fn = createFunction()
fn('hi')
```

함수형은 이러한 기능들이 있습니다.

함수형은 선언적 프로그래밍 접근방식을 쓰고 루프 사용을 피하고 대신 map, reduce 및 filter와 같은 함수형 프로그래밍 구조를 사용합니다. 왜냐하면 이러함으로써 더 추상적이고 덜 복잡하게 프로그램에서 명령을 하달하기 때문입니다.

함수형의 특징 하나를 더 말하자면 변경불가성입니다. 함수형 프로그래밍에서는 데이터가 절대 변경되지 않습니다. 자료는 불변의 것이고 변수는 바꿀 수 없습니다. 값을 업데이트하려면 새 변수를 생성해야 합니다. 배열에서 새 배열을 만들고 객체는 변경 전 복사가 됩니다.

`예시`  
array.push 대신 함수형에서는 concat를 씁니다.

```javascript
const a = ['asd']
const b = ['bcd'].concat(a)
// b = ['bcd', 'asd']
const c = [...a, '3']
// c = ['asd', '3']
```

위에 말했듯이 데이터들은 복사해서 저장됩니다.

`예시`

```javascript
const a = [1, 2, 3]
const b = a.map((v, i) => v * i)
// b = [0, 2, 6]
```

또 다른 특징중 하나는 recursion 재귀입니다. 자기 자신을 다시 불러오는 게 재귀입니다.

```javascript

const recursive = (a) =>{
    a++;
    if(a<10)
    recursive(a)
}
```

해서 10이 될 때까지 계속 자신을 불러옵니다.

다른 특징 중 하나는 Composition입니다. Composition은 함수를 다른 함수 불러와서 쓸 수 있습니다.

```javascript
obj.do1()
   .do2()
```
혹은
```javascript
obj.do1(do2())
```

이러한 장점들과 기능들을 제공함으로써 보다 다방면적으로 코딩을 작성을 할 수 있습니다.

그래도 누가 뭐라 해도 제일 중요한 이유는 React는 함수형 프로그래밍이기 때문입니다.

References:

<https://danielpedroso.com/2019/02/25/functional-programming-and-react/>

<https://www.epfl.ch/labs/lamp/wp-content/uploads/2019/01/week1-1-no-annot.pdf>

<https://1ambda.github.io/scala/functional-programming-1/>

<https://alvinalexander.com/scala/fp-book/benefits-of-functional-programming>

<https://flaviocopes.com/javascript-functional-programming/>

<https://reactpatterns.github.io/Functional-setState-(Pass-a-function-to-setState)/>

<https://github.com/SeonHyungJo/FE-Dev-Note/blob/master/Functional_Programming/setState.md>
