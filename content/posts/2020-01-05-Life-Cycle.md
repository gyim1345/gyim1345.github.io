---
layout: post
title: "Life Cycle"
description: React Life Cycle
template: "post"
date: "2020-01-05"
---

그전 포스트 __[React](../../../../2019/12/29/React)__ 와 __[Class-Component-And-Functional-Component](../../../../2020/01/05/Class-Component-And-Functional-Component)__ 로 react에 대하여 알아 봤다. 그리고 요즘에는 Class Component를 잘 안쓴다고 했다. Class Component를 잘 안쓰는 이유는 우리는 생명 주기라는 것을 주기 위해서 그런것이다.

생명주기(life cycle) method는 구성 요소의 여러 단계 동안 실행되는 사용자 지정 기능이다. 구성 요소가 생성되어 DOM(장착)에 삽입될 때, 구성 요소가 업데이트될 때, 구성 요소가 DOM에서 마운트 해제되거나 제거될 때 사용할 수 있는 방법이 있다. 쉽게 말해서 화면 렌더링 후에 무엇인가 추가, 변경, 삭제 하는게 생명주기 메소드다.

생명주기 메소드

- componentDidMount()
- componentDidUpdate()
- componentWillUnmount()

보통 이렇게 3개를 주로 쓴다. component 가 mount 된직후에 componentDidMount() 가 실행된다. Component의 state에 변화가 일어 나면 componentDidUpdate() 가 실행된다. Component가  Dom에서 지워 지면 componentWillUnmount()가 실행 된다.

<p><a href ="https://velopert.com/1130"><img src="/img/lifecycle/lifecycle.png" alt="lifecycle"/></a></p>

```javascript
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

검색을 많이 해보셨으면 아시겠지만 인터넷에 떠도는 제일 흔한 시계 예제다.  
Hello, world render을 해주고 render후 바로 componentDidMount()가 실행 되면서 tick함수를 호출하고 시간을 띄워줍니다. componentWillUnmount()는 Dom에서 clock component가 없어지면 timer을 멈추게 한다.

prop, this.state, lifecycle, component등 많은것을 써야하므로 복잡하다고 생각 할 수 있지만 Hook을 쓰면 이러한것들을 더 쉽게 쓸 수 있다. 다음 포스트는  __[React Hook](../../../../2020/01/05/React-Hook)__ 에 대하여 알아보자.


References:

<https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class>

<https://velog.io/@kyusung/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B5%90%EA%B3%BC%EC%84%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4-%EC%9D%B4%EB%B2%A4%ED%8A%B8>

<https://velopert.com/1130>