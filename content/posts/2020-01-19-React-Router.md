---
layout: post
title: "React Router"
description: 리엑트 라우터
template: "post"
date: "2020-01-19"
---

React에 막 들어오신 분들은 보통 SPA로 프로젝트를 실행을 한다. SPA는 Single Page Application이고 말 그대로 앱이 한 페이지 내에 작동이 된다. 더 쉽게 말해서 html 파일이 하나이다. SPA를 쓰는 이유는 예전처럼 다중 페이지로 구성을 했을 경우에 매번 페이지를 이동 시에 서버 쪽에서 정보들을 가져와야 하고 요즘 같은 경우에는 정보가 많으므로 트래픽이 많이 사용된다. 그래서 React로 rendering 부분은 유저 브라우저가 담당하도록 하고 필수 정보들만 서버 쪽에서 가져오는 걸로 한다. 그러나 SPA 면 한 페이지에서 모든 것을 이루기 때문에 다중 페이즈를 쓸려면 다른 라이브러리가 필요하다. 이때 쓰는 라이브러리가 react routing이다.

리액트 라우터는 리액트 앱에서 동적으로 라우팅을 만드는 데 사용되는 리액트 위에 구축된 라우팅 라이브러리다. 이 동적 라우팅은 어플리케이션이 렌더링이 될 때 실행이 된다. 그리고 리액트 라우터는 컴포넌트 기반 접근 방식을 구현한다.

리액트 라우터는 우리에게 라우팅 실행을 돕는 세 가지 구성 요소 Route, Link, BrowserRouter를 제공한다.

```javascript
...
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
...

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

```

위의 예시를 출력을 하면 주소 &quot;/&quot;에선 App 컴포넌트의 내용들, /users는 App과 Users의 내용들, &quot;/contact&quot;는 App과 Contact의 내용들이 표시된다.
이것을 방지하기 위해서 우리는 exact path나 switch를 쓰면 된다.

```javascript
...
      <Route exact path="/" component={App} />
...
```

Link component는 그 해당 글에 링크를 부여를 한다

```javascript 
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Users from './users'
import Contact from './contact'
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link> // Home에 "/" 링크 부여
        </li>
        <li>
          <Link to="/users">Users</Link> // Users에 "/users" 링크 부여
        </li>
        <li>
          <Link to="/contact">Contact</Link> // Contact에 "/contact" 링크 부여
        </li>
      </ul>
      <Route exact path="/" component={App} /> // "/" 주소에 App component 출력
      <Route path="/users" component={Users} /> // "/users" 주소에 Users component 출력
      <Route path="/contact" component={Contact} /> // "/contact" 주소에 Contact component 출력
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
```

위에 주석대로 link는 글에 특정한 주소값을 주고 그 밑에 Route는 그 주소에 해당되는 내용들을 설정을 한다.

조금 전에 Switch에 대하여 언급을 했다. Switch 컴포넌트는 주소에 맞는 값을 찾아 첫 번째 값을 렌더링 해준다. 예를 들어서

```javascript
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from 'pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/about/:name" component={About}/>
                </Switch>
            </div>
        );
    }
}

export default App;
```

이런 게 있다면 주소창에 &quot;.../about/asdasd&quot;라고 치면 asdasd에 대한 내용들이 나오는 게 아니라 그냥 &quot;.../about/&quot;에 대한 내용들만 나온다.

조금 더 들어가서 Nested Routes라는 것을 보자.
Nested route 란 route 밑에 서브 route 같은 것을 만든다 예를 들어서 user Component 안에서 1,2,3 user을 users/1, users/2 등으로 만드는 거다.

```javascript
import React from 'react'
import { Route, Link } from 'react-router-dom'
const User = ({ match }) => <p>{match.params.id}</p>
class App extends Component {
    render() {
    const { url } = this.props.match
    return (
      <div>
        <h1>Users</h1>
        <strong>select a user</strong>
        <ul>
          <li>
            <Link to="/users/1">User 1 </Link>
          </li>
          <li>
            <Link to="/users/2">User 2 </Link>
          </li>
          <li>
            <Link to="/users/3">User 3 </Link>
          </li>
        </ul>
        <Route path="/users/:id" component={User} />
      </div>
    )
  }
}
ReactDOM.render(App, document.getElementById('root'))
```

user1,2,3 각 누르면 user1, user2, 혹은 user3 이 뜬다.

References:
<https://velopert.com/3417>
<https://reacttraining.com/react-router/web/guides/quick-start>
<https://codeburst.io/getting-started-with-react-router-5c978f70df91>
<https://www.educative.io/edpresso/what-is-a-react-router>