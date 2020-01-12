---
layout: post
title: "Imperative vs Declarative Programming for JavaScript"
description: 명령형 프로그래밍 vs 선언형 프로그래밍 자바스크립트
category: posts
---

선언적 프로그래밍은 제어 흐름을 설명하지 않고 계산의 논리를 표현하는 프로그래밍 패러다임이다.
임페어티브 프로그래밍은 프로그램 상태를 바꾸는 문장을 사용하는 프로그래밍 패러다임이다.

조금 더 명확한 예시를 보자면, 서울역에 어떻게 가냐고 물어보면 선언형 프로그래밍은 서울특별시 용산구 동자동 43-205로 대답하고 명령형은 현재 위치가 왕십리라고 치면 왕십리에서 2호선 전철을 타서 시청역까지 간 다음에 시청역에서 1호선으로 갈아탄 후에 서울역까지 가면 된다가 명령형입니다.

예시를 봅시다.

```javascript
///명령형
const container = document.getElementById(‘container’);
const btn = document.createElement(‘button’);
btn.className = ‘red’;
btn.onclick = function(event) {
 if (this.classList.contains(‘red’)) {
   this.classList.remove(‘red’);
   this.classList.add(‘blue’);
 } else {
   this.classList.remove(‘blue’);
   this.classList.add(‘red’);
 }
};
container.appendChild(btn);
```

``` javascript
//선언형
class Button extends React.Component{
  this.state = { color: 'red' }
  handleChange = () => {
    const color = this.state.color === 'red' ? 'blue' : 'red';
    this.setState({ color });
  }
  render() {
    return (<div>
      <button 
         className=btn ${this.state.color}
         onClick={this.handleChange}>
      </button>
    </div>);
  }
}
```

여기에서 차이점은 react는 요소를 직접 건드리지 않습니다. state를 주고 그것을 요소에 rendering 해야 한다고 선언할 뿐입니다. 결국엔 DOM 자체를 조작하지 않습니다.

다른 예시를 봅시다.

```javascript
//Imperative 명령형
const imperative_search = (array, item) => {
  for(let i =0; i<array.length; i++){
    if (i == item)
      return item
    }
  return false

}

//Declarative 선언형
const declarative_search = (array, item) =>
  array.find(item)

//Imperative 명령형
function addNameToBody() {
  const bodyTag = document.querySelector('body')
  const divTag = document.createElement('div')
  let h1Tag = document.createElement('h1')
  h1Tag.innerText = "asd"
  divTag.append(h1Tag)
  bodyTag.append(divTag)
}


//Declarative 선언형
class Add extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
      </div>)
  }
}

```

위에 예제들을 보시다시피 명령형 예제들은 어떻게 함수들을 돌릴 건지 세세하게 선언을 합니다.  
그러나 선언형 예제들을 그냥 무엇을 하라는 것만 나오죠, array.find가 어떻게 돌아가는지 모르겠지만 그래도 무엇을 기대 할 수 있는지는 아는 것처럼.

```javascript
<Btn
  onToggleHighlight={this.handleToggleHighlight}
  highlight={this.state.highlight}>
    {this.state.buttonText}
</Btn>
```

React는 이러한 선언적 사용자 인터페이스를 만들 수 있습니다. Btn 구성요소를 보면 UI가 어떻게 보일지 금방 알 수 있다. 또 다른 이점은 DOM에 저장하는 대신 React 구성 요소 자체에 저장하는 것입니다.

보시다시피 선언형 코드는 프로그램이 문맥에 구애받지 않는 context-independent이다는  것입니다. 설명하자면 같은 코드를 다른 프로그램에서 사용할 수 있고 잘 작동한다는 것을 의미합니다.

선언형의 장점들은 아래와 같습니다.

- 사용성: 코드가 자연 언어인 영어에 가깝기 때문에 더 읽기 쉽고 또한 프로그래머가 아닌 사람들이 배우기가 더 쉽습니다.
- 명료: 추상화되어 같은 일을 할 수 있는 줄이 줄어들게 됩니다.
- 재사용성: 다른 용도로 같은 코드로 재사용이 용이 하다.
- referential 투명성: 수동적인 상태 관리를 최소화한다.
- Commutativity: 실제 구현 순서를 명시하지 않아도 종료 상태를 표현이 가능하다.

React는 함수형 프로그래밍이고 함수형 프로그래밍은 선언적 프로그래밍의 일부분입니다. 고로 react를 쓸려면 선언적 프로그래밍을 아는 게 좋죠.

References:
<https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2>

<https://medium.com/@myung.kim287/declarative-vs-imperative-251ce99c6c44>

<https://www.toptal.com/software/declarative-programming>

<https://tylermcginnis.com/imperative-vs-declarative-programming/>