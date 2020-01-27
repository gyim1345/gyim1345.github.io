---
layout: post
title: "Class Component And Functional Component"
description: 
template: "post"
date: "2020-01-05"
---

이전 포스팅 [React](../../../../2019/12/29/React)에 나와 있듯이 react 쓰는 이유 중 하나가 component로 설계해서 그것들을 재사용 할 수 있어서 그 사용성 때문에 쓴다. 그 component를 설계 할 때 2종류가 있다. 하나는 Functional Component와 Class Component.

그전 포스팅 __[React](../../../../2019/12/29/React)__ 에 예제와 설명이 있지만 __[React Hook](../../../../2020/01/05/React-Hook)__ 에 들어가기 전에 다시 환기시키기 위한 포스팅이다.

Component란 선택적으로 properties(prop)를 입력값으로 받고 섹션의 UI가 어떻게 보여야 하는지 React element를 돌려주는 Javascript class 혹은 function이라고 보면 된다.

아래 예시와 설명은 그전 포스팅 __[React](../../../../2019/12/29/React)__ 에서 대부분 가져온 거다.

### 함수(stateless) 와 class(statefull) component

함수형은 props를 써서 react 요소를 return을 해줘서 렌더링을 해준다.  
class component는 logic을 담고 있고 state도 담고 다른 component를 담음으로써 container 역할도 한다.

둘 중 어느 것을 골라야 할 때 고려해야 할 점은 state를 관리하던가, lifecycle 메서드나, logic이나 event handler을 써야 할 때 class를 쓰고 아니면 함수형 component를 쓰면 된다.

prop는 component를 쉽고 다양하게 커스텀 하게 쓸 수 있게 만든 방식이다. 그것들은 속성/데이터를 한 컴포넌트에서 다른 컴포넌트를 보내는 방법을 갖는다. 보통 parent에서 child 컴포넌트로 한방향 데이터플로우 를 갖는다. 주의점은 prop로 보낸 것들은 read-only이고 절대로 수정하면 안 된다.

react component 'Welcome' 이름을 갖는 예시

```HTML
<div id="root"></div>
```

```javascript
function Welcome() {
    return <h1>Hello React!</h1>;
}
ReactDOM.render(<Welcome />, document.getElementById('root'));//Hello React!
```

es6 class를 써서 react component 'Welcome' 이름을 갖고 render 메서드를 쓴 예시

"Hello React!"를 화면에 띄워준다.

```javascript
class Welcome extends React.Component {
    render() { return(<h1>Hello React!</h1>); }
}
ReactDOM.render(<Welcome />, document.getElementById('root')); //Hello React!
```
  
속성 전달 인자를 갖는 예시

```javascript
class Welcome extends React.Component {
    render() { return(<h1>Hello {this.props.name}</h1>); }
}
ReactDOM.render(<Welcome name="John Doe"/>, document.getElementById('root'));//Hello John Doe
```

props.name으로 전달인자 값을 불러와서 써서 "Hello John Doe"를 돌려줘서 화면에 렌더링 해준다.

state 란 동적인 데이터와 컴포넌트의 성격을 저장하는 객체이다. 동적인 데이터라서 정보가 변하는 것을 렌더링 중간중간에 감지할 수 있다. state는 무조건 class로 만 정의할 수 있다.

state는 props 와 비슷하지만, state는 private 하고 모든 것은 그 componenet에 정의된 state에서 결정된다. props에 의하여 출력이 결정되지 않는다.

```javascript
class Hi extends React.Component {
  render(){
    return <h1>Hi</h1>;
  }
}
```

위에 있는 코드는 일반 class component이다.

```javascript
class Hi extends React.Component {
  constructor(props) {
   super(props);
     this.state = {
       name: ‘MyName’
     }
   }
   render(){
     return <h1>Hello { this.state.name }</h1>;
   }
}
```

이것은 state를 추가한 것이다. 위 코드를 보시다시피 props를 불러오는데 super()은 constructor를 쓸 때는 필수이고 props를 부르긴 했는데 안 쓴다. 이것은 왜냐면 나중에 확장성을 위해서 연동이 되는지 확인용이다. state를 초기화할 때 this.state를 썼는데 그 후에 state 변화를 주기 위해서 this.setState를 써야 한다. 이것을 써야지만 component가 state에 변화에 따라 브라우저에 다시 렌더링을 보장할 수 있다.

그러면 state를 바꾸는 예제를 보자.

```javascript
class Form extends React.Component {
  constructor(props){
   super(props);
   this.state = { username: '' };

  handleChange = event => {
    this.setState({ username: event.target.value });
  };

  render() {
   return (
     <>
       <form>
         <h2 id="username">username</h2>
         <input
           type="text"
           name="username"
           value={this.state.username}
           onChange={this.handleChange}
         />
       </form>

       <h2>Your username is: {this.state.username}</h2>
     </>
    );
  }
}
```

이것은 변화에 따라 결과도 달리 보여주는 예제이다. text에 입력할시 onChange로 변화를 감지하고 그 감지로 handleChange 함수를 불러온다. 그 불러온 함수에 setState로 state를 저장한다. 그리고 setState로 state가 변화가 일어남으로써 component를 rerender 시킨다. this.state = { username: '' } 에 username이 입력값으로 바뀌고 &lt;h3&gt;Your username is: {this.state.username}&lt;h3&gt;가 결국에 화면에 보이는 것이다.

여기서 추가로 비제어 component라는게 있다. 비제어(uncontrolled)란 위에 this.state, setstate등이랑 비슷하지만 중간에 값을 수정할 수 없다.
``` javascript
class Form extends React.Component {

 handleSubmit = event => {
   event.preventDefault();
   alert('Your username is: ' + this.input.value);
 };

 render() {
   return (
     <form onSubmit={this.handleSubmit}>
       <h3 id="username">username</h3>
       <input
         type="text"
         name="username"
         ref={(input) => this.input = input}
       />
     </form>
   );
 }
}
```

비제어를 쓸 때는 ref를 쓴다. 보통 state 등을 쓰는 제어 component를 쓴다.

그러나 이제는 생명주기를 쓰기 위해서 class component를 잘 안쓰고 functional component를 더 많이 쓴다. 이것은 다음 포스트 __[React Hook](../../../../2020/01/05/React-Hook)__ 이어 가겠다.

References:

<https://reactjs.org/docs/uncontrolled-components.html>

<https://stories.jotform.com/7-reasons-why-you-should-use-react-ad420c634247>

<https://reactjs.org/>

<https://www.w3schools.com/whatis/whatis_react.asp>

<https://velopert.com/3629>

<https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb>
