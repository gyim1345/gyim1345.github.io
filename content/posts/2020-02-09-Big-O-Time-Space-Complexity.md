---
layout: post
title: "Big O notation, time and space complexity"
description: 빅O, 시간 공간 복잡도
template: "post"
date: "2020-02-09"
---


시간 복잡도 - 알고리즘을 해결하는 데 소요되는 시간

공간 복잡도 - 시스템이 찍은 총 공간 또는 메모리.

빅 O 표기법은 컴퓨터 과학에서 알고리즘의 성능이나 복잡성을 기술하기 위해 사용된다.

g O는 특히 최악의 시나리오를 기술하며, 필요한 실행 시간이나 알고리즘이 사용하는 공간을 기술하는 데 사용할 수 있다. 알고리즘에 필요한 정확한 런타임은 쓰는 컴퓨터에 따라 달리 진다. 그래서 우리는 그것을 계산하는 대신에 런타임이 얼마나 빨리 성장하는지 알아보기 위해 개념을 사용한다.

<img src= "./static/bigO.JPG" alt="bigO" />

bigO는 보통 O(n)으로 표시되고 n은 입력 크기이다. 

O(1)는 입력 데이터 세트의 크기에 관계없이 항상 동일한 시간(또는 공간)에서 실행되는 알고리즘을 설명한다.

```javascript
const a = ()=> {
  let number = 0;
 return number 
}
```

이것은 O(1)이 되겠다. 함수 a를 불러오면 무조건 0을 돌려준다.

O(N)는 입력 데이터 세트의 크기에 비례하여 성능이 선형적으로 증가하는 알고리즘을 설명한다.

```javascript
array = [1,2,3,..n];

const sum = (array)=> {
  var total = 0;
  array.forEach(num => {
  total += num
   });
 return total 
}
```

런타임은 선형적으로 올라가므로 입력값들의 수인 n만 큼이니 O(n) 이 된다.

O(N^2)는 입력 데이터 세트 크기의 제곱에 정비례하는 성능을 가진 알고리즘을 나타낸다.  
array 배열 안에 배열이 있다고 치자

```javascript
const sum = (array)=> {
  var total = 0;
  array.forEach(num => {
    num.forEach(num2 =>{
      total += num + num2
    }
  )
  });
 return total 
}
```
이렇게 하면 이중 루프가 돌면서 O(n^2) 이 되겠다.


O(2^N)는 입력 데이터 세트에 대한 각 추가 물과 함께 증가량이 두 배가 되는 알고리즘을 의미한다. O(2^N) 함수의 성장 곡선은 기하급수적이다.

```javascript
const fibNumber = (number) => {
    if (number <= 1) return number
    return fibNumber(number-2) +fibNumber(number-1)
}
```

O(logN)은 base N logarithm을 갖는 것을 말한다. 함수를 호출하기 전에 N 으로 나누어 불러오는 알고리즘을 말한다.

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
```
<https://medium.com/employbl/implement-linear-and-binary-search-algorithms-with-javascript-2149997588f0> 에서 가져온 binary search의 예제이다. 반을 나눠서 왼쪽 오른쪽 등을 골라서 찾을 때까지 반복한다.

공간 복잡도는 반대로 위에 말했듯이 메모리에 저장되어 있는 공간이다.위에 썼던 첫 번째 예제를 보자면 입력값이 없고 변수가 하나이다. 고로 O(1). 2번째 예제를 보면 array 랑 total 이 있는데 total 은 입력값 array에 따라 커지므로 O(N)을 갖는다. 3번째 것도 변환되는 total만 보자면 O(N)의 크기를 갖는다.

References:  

<https://dev.to/chandra/what-is-big-o-notation-understand-time-and-space-complexity-in-javascript-4684>

<https://medium.com/@zoebai_70369/big-o-notation-time-and-space-complexity-305a1e301e35>

<https://medium.com/employbl/implement-linear-and-binary-search-algorithms-with-javascript-2149997588f0>

<https://velog.io/@junyong92/TIL-Time-Complexity>

<https://medium.com/swlh/a-gentle-explanation-of-logarithmic-time-complexity-79842728a702>