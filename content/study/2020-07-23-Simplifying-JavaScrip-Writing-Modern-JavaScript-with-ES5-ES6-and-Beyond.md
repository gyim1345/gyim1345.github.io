---
layout: TIL
title: "2020-08-24-TIL"
template: "til"
date: "2020-08-24"
description: 
---

## Fact

- 아침에 오랜만에 알고리즘 문제들을 풀었다.
- 예전에 썼던 "Simplifying-JavaScript" 책 에 대한 공부를 했다.

## Feelings

- 오랜만에 문제 풀려니깐 너무 어렵다.

## Findings

- 코드 짤때 클린하게 코드를 짜기 위해서 immutable하고 pure function으로 짜서 부수효과를 없애고 혼란은 피해야 한다. 그러기 위해서 배열이나 객체 조작 무조건 복사 해서 새로운 객체/배열을 반환해야 한다.
  - immutable은 새로 생성 하면 그 후에 절대로 바꿀 수 없다는 뜻이다.

그러나 작동할때마다 새로운 것을 만들기에 결국에 엄청 느려지고 메모리 낭비가 많아진다.  
이것을 방지 하기 위해서 persistent datastructure을 쓴다. 
  - persistent는 (mutative api를 가질 수 있지만) 원본은 그대로 놔두고 새로운것을 반환한다.

persistent datastructure을 쓰기 위해서 기본적으로 tree 구조를 쓴다. 객체나 배열을 tree 형태로 구현을 한다. 객체나 배열을 수정하게 되면 node 를 생성해서 안변한것들을 reference로 연결한다. Sharing을 하는 구조라고 볼 수도 있다.

이것을 가능하게 하기 위해서 DAG를 쓴다.  
Directed Acyclic Graph
graph: 무언가 다른것을 가르킨다.
acyclic: 자식이 부모를 가르킬수 없다.
Directed: 방향성 있는.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Purely_functional_tree_after.svg/438px-Purely_functional_tree_after.svg.png)

사진에서 보듯이 e를 추가 할때 그 상위 parent node들만 복사 해서 새로운 tree 를 만든다. 그리고 그외 node들은 그냥 reference 만 연결 해서 사용하는 구조이다.

이렇게 하여 xs 와 ys 둘다 쓸 수 있다. 물론 예전것은 reference가 없어지면 gc되게끔 나둬도 된다.

persistent immutable structural sharing 함으로써 조금 더 메모리 효율적으로 불변성과 순수함수를 지킬 수 있다.

출처: 

[Learning Functional Programming with JavaScript - Anjana Vakil - JSUnconf ](https://www.youtube.com/watch?v=e-5obm1G_FY&t=1599s)  
[React.js Conf 2015 - Immutable Data and React](https://www.youtube.com/watch?time_continue=1848&v=I7IdS-PbEgI&feature=emb_logo)  
## Future Action

- 오랜만에 문제 풀려다 보니깐 뭔가 어색하고 힘들었다. 심지어 문제를 안 읽고 문제를 풀려는 습관이 생긴것 같다 ㅋㅋ... 초심으로 돌아가자 ㅋㅋ
