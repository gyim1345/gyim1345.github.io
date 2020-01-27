---
layout: post
title: "React Hook"
description: React Hook
template: "post"
date: "2020-01-05"
---

그전 포스트 __[React](../../../../2019/12/29/React)__ 와 __[Class-Component-And-Functional-Component](../../../../2020/01/05/Class-Component-And-Functional-Component)__ 로 react에 대하여 알아봤다. 그리고 요즘에는 Class Component를 잘 안 쓴다고 했다. Class Component를 잘 안 쓰는 이유는 우리는 __[생명 주기](../../../../2020/01/05/Life-Cycle)__ 라는 것을 넣기 위해서다.
그러나 이런 것들을 대처하는 것이 나왔는데 그게 바로 Hook이다. Hook는 함수 컴포넌트에 life cycle을 추가 한 것이라고 생각하면 편하다. 그럼 기존한 것이 있는데 왜 새로 갈아 타야 하는지 가 질문일 거다.

Hook으로 갈아타는 이유는 여러 가지 있다. 첫째는 대형 component를 쓸 때 기존한 것은 다루기 힘들었다. 대형 애플리케이션, 중앙 집중화된 상태 저장 구성 요소에 대해 작업한 기술자들은 종종 구성 요소 수명 주기 방법에 걸쳐 분포된 동일하거나 유사한 논리로 크기가 부풀려질 수 있다. 두 번째는 방법 재사용이다. Component 메소드들을 다시 쓸려면 특히 복잡한 논리를 가지고 있는 것들은 high order component나 prop을 render 하는 디자인 패턴에 의존하고 결국엔 개발자들에게 구성 요소 계층 구조를 다시 구축해야 하고 모든 게 엉망이 될 수 있다. 마지막으로 class syntax는 인간과 기계 모두에게 혼란스럽고 react가 유지하고자 하는 순수한 기능적 설계 패턴으로부터 멀어질 수 있다.

결국엔 hook을 써서 더욱더 clean code를 기반으로 작성을 할 수 있다.

Hook을 쓰는 예제를 보자.

``` javascript
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

여기서 useState는 hook이다. 이 state 들은 기본적으로 렌더링 해도 저장이 되어있다. 그전에 봤던 this.state랑 비슷하다고 할 수 있지만 다르다. useState로 2개를 정의하는대 하나는 count, 하나는 setCount. state를 정할 때는 count. count를 변하게 할 때는 setCount를 쓴다. setCount를 그전에 봤던 this.setState랑 비슷한 역할을 한다고 보면 쉽다.

Hook에 생명 주기랑 비슷한 역할을 하는 게 있다. 그것은 useEffect이다.

``` javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

useEffect는 componentDidMount and componentDidUpdate와 유사하다. 이것을 씀으로써 react한테 Dom을 업데이트 후에 실행하게끔 기억 시킨다. 이것은 렌더링 할 때 마다 실행을 시킨다. useEffect는 업데이트를 기본적으로 처리하므로 업데이트 처리를 위한 특별한 코드가 없다. 다음 효과를 적용하기 전에 이전 효과를 정리한다. 렌더링 할 때 마다 실행을 시키는 게 아니라 조건부로 하려면 뒤에 [] 를 붙이고 안에 조건을 붙이면 된다.

```javascript
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  },[조건]);
```

[] 이것만 넣으면 한 번만 실행된다. 조건을 넣으면 조건에 따라 실행이 된다.

Hook을 쓸 때 지켜야 할 사항들이 있다.

- Hook를 쓸 때 함수 선언 직후에 넣어야 한다.
  - loop이나 condition, nested 함수에서 부르면 state 호출 순서가 엉망이 되어서 원하지 않는 결과들이 나올 수도 있다.
- react function component로 만 쓸 수 있다.
  - 일반 JS 함수에서 쓸 수가 없다.

References:

<https://reactjs.org/docs/hooks-rules.html>

<https://medium.com/javascript-in-plain-english/why-hooks-9cd1fb586b75>