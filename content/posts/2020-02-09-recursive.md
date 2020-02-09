---
layout: post
title: "Recursive"
description: 재귀
template: "post"
date: "2020-02-09"
---

재귀 함수는 스스로 부르는 함수다.

제일 흔한 예제는 수학에서 펙터 리얼이다. 펙토리얼 10! 을 구하고 하자면 10*9...*1이다. 이것을 프로그래밍 적으로 생각하면 자기 자신을 -1 하면서 1까지 곱해준다.

```javascript
function factorial(x) {
  if (x < 0) return;
  if (x === 0) return 1;
  return x * factorial(x - 1);
}
```

위와 보듯이 재귀는 3가지를 구성하고 있다. 중단 조건, 기본 케이스, 재귀. 중단 조건은 혹시나 모를 무한 루프 등의 에러들을 방지하기 위한 함수 중단 용이다. 기본 케이스는 조건에 맞춰 값을 찾았을 때 루프를 멈춰서 값을 반환한다. 마지막으론 재귀인데 이것은 함수 같은 것을 계속 돌려쓰면서 값을 바꿔주는 등을 한다.

밑에 예제를 보면서 더 이해를 해보자.

<https://www.welcomekakao.com/learn/courses/30/lessons/12948>
에 나오는 핸드폰 가리기 문제이다. 

문제 설명
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건
s는 길이 4 이상, 20이하인 문자열입니다.

입력 phone_number: "01033334444"	
출력 return : |"*******4444"

```javascript
function solution(phone_number, count =0)// count라는 변수를 0이라고
{
    if(count === 7) return phone_number //count 가 7 이면 phone_number을 반환한다
      phone_number = phone_number.split('').map((x,i)=> i=== count ? x = "*" : x=x).join('');// phone_number를 배열로 만들어서 count의 숫자에 맞는 인덱스의 값을 *로 바꿔 준다. 그 후에 다시 문자열로 만들어준다
     return solution(phone_number, count +1)// 재귀 phone_number을 입력값으로 다시 넣어주고 count는 +1 해줘서 다시 함수를 돌려준다.
}
```

phone_number 초기 입력값을 01033334444이라고 하자. count는 0으로 시작하니 처음 if는 넘어간다. 그다음에는 위에 주석대로 첫 번째 phone_number을 *로 바꾸므로 *1033334444 이된다. 이것을 다시 solution에 넣고 count 도 +1 해서 넣어준다. 결국엔 count 가 7이 될 때 phone_number도 *******4444이고 이것을 반환해준다.