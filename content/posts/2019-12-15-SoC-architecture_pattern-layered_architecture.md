---
layout: post
title: "관심사의 분리 SoC(Separation Of Concerns)"
description: SoC 와 코드 작성 할 때의 패턴과 구조
template: "post"
date: "2019-12-15"
---

관심사의 분리 Soc(Separation of Concerns)란 소프트웨어 상에서 구조를 패턴, 역할, 기능 등을 각각 맞게 섹션 별로 분리해서 작성하는 것입니다. 분리 해서 작성을 하였을 때 주의 사항은 꼭 그 특성에 맞게 하나의 역할을 부여해서 작성을 하는 것입니다. 조금 짧게 말하자면 코드 작성할 때의 Soc 란 작성할 때 하나의 역할 별로 분리해서 작성하라는 것입니다.

일상의 예를 주자면 병원에서의 SoC를 봅시다. 병원에서는 한 환자가 치료 목적을 오면 상황에 따라 다르겠지만 안내를 받고, 진료를 받고, 케어를 받은 후, 약을 받고 집에 간다고 합시다.  안내 데스크의 사람이 안내랑 수속 등을 해주고, 치료는 의사가 해주고, 케어는 간호사들이 해주고, 약은 약사가 줄 것입니다. 이렇게 역할 별로 분리해주는 게 SoC입니다.

그러면 코드에서 SoC의 예제를 봅시다.

예를 들어서 우리는 몇 개의 수들이 있는데 그것의 최대와 최소의 합을 구하고 싶다고 합시다.

`SoC 가 아닌 간단한 예제`

```javascript
const arrayNumbers =[1,3,5,7,6,2]

const getMinMaxSum = (arrayNumbers) => {
    sortedArray = arrayNumbers.sort();
    let min = sortedArray[0];
    let max = sortedArray[sortedArray.length];
    return min+max;
}

```

여기서 보면 이 함수에서 sort를 하고 min 을 구하고 max를 구하고 min max의 합을 구합니다.
물론 간단한 예제라서 이렇게 대충 쓰고 짧게 해도 되겠지만 코드가 길고 난잡하기 시작되면 뭐가 어디 있는지 모르고 정확히 어디서부터 어디까지의 역할을 하는지 모를 수도 있으므로 우리는 저 sort 랑 min 구하는 거랑 max 구하는 걸 따로 빼서 구성하고 저 함수에서는 그것들을 불러와서 합만 하는 게 SoC 작성의 방향성입니다.

`SoC 예제`

```javascript
const arrayNumbers =[1,3,5,7,6,2]

const getMinofSortedArray = (sortedArray) =>{
    return sortedArray[0];
}

const getMaxofSortedArray = (sortedArray) =>{
    return sortedArray[sortedArray.length];
}

const getMinMaxSum = (arrayNumbers) => {
    sortedArray = arrayNumbers.sort();
    let min = getMinofSortedArray(sortedArray);
    let max = getMaxofSortedArray(sortedArray);[sortedArray.length];
    return min+max;
}

```

너무나도 간단한 예제라서 SoC로 구성한 게 더 길지만 더 복잡한 예제를 상상하시면 SoC 이 더 보기 쉽습니다.

이제 태이블로 기본적인 코드 부분에서의 SoC의 계층을 보도록 합시다.

| SoC  |
|:---:|
| Presentation  |
| Business  |
| Resource  |

<!-- <p><img src="/img/SoC-architecture_pattern-layered_architecture/horizontalLayers.png" alt="horizontalSoC" /></p> -->

위와 보듯이 보통 SoC 부분을 크게 화면 렌더링층(Presentation Layer), 비즈니스층(Business Layer), 리소스층(Resource Layer).

어떻게 분할하느냐에 따라 다르겠지만 층이 3개 이상으로 나눌 수도 있습니다. 그러나 크게 3개만 봐도 무방합니다.

화면 렌더링 부분은 말 그대로 화면 띄어 주고 ui에 관련 되어 있습니다. 비즈니스 층은 그 ui 외의 모든 논리, 계산, 객체 모델, 제어 흐름 등을 포함합니다. 리소스 부분은 외부 데이터에 접근을 하는 부분을 관리합니다.

이렇게 역할 별로 분리해서 코드들을 작성을 하게 되면 많은 긍정적인 효과를 가져올 수 있습니다. 예를 들자면 관리에 용이하고, 변경 및 재활용에 또한 용이합니다. 찾기도 쉽습니다.

위의 그림이 수평 SoC라면 밑의 그림은 수직 SoC의 그림입니다.

<p><img src="/img/SoC-architecture_pattern-layered_architecture/vertical_layers.png" alt="VerticalSoC" /></p>

보통 동일한 기능 등을 묶어서 모듈별로 나누는 것입니다. 보통 큰 프로젝트를 이렇게 나눕니다. 예를 들자면 위의 예와 엮어서 말하자면 병원을 한 모듈이라고 하고 다른 모듈을 정부, 회사 등 이라고 하고 그 모듈들을 포함하는 것을 한 국가라고 하면 비슷합니다.

<p><img src="/img/SoC-architecture_pattern-layered_architecture/horizontalAndVerticalLayers.png" alt="horizontalAndVerticalSoC" /></p>

수직 SoC 안에 수평 SoC 가 있다고 생각하시면 편합니다.

그리고 그 수평 SoC 가 크다면 그것 또한 나눠서 쓸 때도 있습니다.

<p><img src="/img/SoC-architecture_pattern-layered_architecture/separation-of-concerns.png" alt="Aspects" /></p>

이렇게 큰 층들을 나눠서 보는 게 ASoC(Aspect Separation of Concerns) 나 AOP(Aspect-Oriented Programming)
이라고 합니다. 그림으로 보듯이 필요한 부분만 필요한 곳에 연결해서 쓸 수 있습니다.

결국엔 코딩 부분에서 SoC를 따른다 하면 우리는 반복되는 코드의 역할을 단일화, 재활용이 용이하게, 크기를 최소화하고, 이름을 줄 때 그 이름에 맞게 그것만 하는, 외부 종속성을 최소화하는 것을 유이하면서 작성하도록 합시다. 이렇게만 한다면 SoC는 컴퓨터 프로그램의 개발 및 유지 관리를 단순화하는 데 유용하고 코드가 잘 분리되면 개별 섹션을 쉽고 독립적으로 재사용, 수정 및 디버깅할 수 있습니다.

그래서 SoC가 잘 구성이 되어 있다면 데이터의 의존성 방향은 지속적으로 같은 방향입니다.

오래된 게임들을 보면 버그가 많고 그것을 고쳐달라고 유저들이 아우성을 쳐도 안 고치고 놔두는 운영자들이 많습니다. 물론 귀찮고 인력 낭비라 그럴 수도 있겠지만 보통 코드들이 너무 방대하게 쌓여 있고 찾기가 너무 어려워서 그럴 가능성이 제일 높습니다. 처음부터 SoC 패턴, 계층화가 제대로 되어 있다면 고치기 쉬웠겠죠? 물론 지켜졌다고 무조건 고치기 쉬운 건 아닐 겁니다!

References:

1.[Wikipedia - Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns#HTML,_CSS,_JavaScript)

2.[Separation of Concerns](https://www.oreilly.com/library/view/programming-javascript-applications/9781491950289/ch05.html)

3.[Separation Of Concerns — Essential JavaScript](https://medium.com/@ariel.salem1989/separation-of-concerns-essential-javascript-1e30994fa7a5)

4.[How to implement Design Pattern – Separation of concerns](https://www.castsoftware.com/blog/how-to-implement-design-pattern-separation-of-concerns)

5.[The Art of Separation of Concerns](http://aspiringcraftsman.com/2008/01/03/art-of-separation-of-concerns/)
