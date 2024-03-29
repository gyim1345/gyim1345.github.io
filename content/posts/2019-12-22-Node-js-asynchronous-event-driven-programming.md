---
layout: post
title: "Node.js & asynchronous event driven programming"
description: Node.js 와 비동기 처리 프로그래밍
template: "post"
date: "2019-12-22"
---

javascript는 다양한 runtime(실행 환경)에서 실행됩니다. runtime에 따라 작동 양식이 다른데 그중에서 제일 많이 쓰이는 게 nodejs입니다.

Node.js는 비동기식 이벤트 기반 JavaScript 런타임입니다. 그리고 이것으로 확장 가능한 네트워크 애플리케이션을 구축하도록 설계되었습니다. 이걸로  브라우저 밖에서도 작동하게 되었습니다.

Node.js를 씀으로써 프로세스 교착 상태(dead-locking)으로부터 자유롭습니다. 직접적으로 I/O를 하지 않으므로 blocking 을 안 당합니다. 고로, 확장 가능한 시스템은 개발하기에 매우 좋습니다.

I/O는 libuv가 지원하는 시스템의 디스크 및 네트워크와의 상호작용을 말합니다.

blocking 이란 추가적인 JavaScript의 작업이 JavaScript 외 작업이 완료 될 때 가지 기다리는 것입니다.

Node.js는 이런 blocking 와 non-blocking 메서드를 둘 다 쓸 수 있습니다. blocking 을 쓴다면 동기 처리 프로그램. non-blocking 을 쓴다면 비동기 처리 프로그램. 둘 다 각각 Sync 와 Async 메서드를 씁니다.

코드 면에서 sync는 결괏값이 올 때까지 기다립니다

asyc는 결괏값이 안 와도 다른 작업을 실행할 수 있습니다.

async 예를 들자면 카드 결제하면 결제 프로세스가 다 될 때까지 기다리지 않고 다른 작업을 할 수도 있습니다.

sync 예시를 들면 그러나 마트 가서 현금을 내면 현금을 거슬러 줄 때 가지 아무것도 못합니다.

그래서 위에 예시를 봤듯이 저희는 기다리지 않고 계속 이어서 다른 작업을 하기 원하므로 비동기async를 지향합니다.

비동기 처리 방식으로 처음으로 나왔던 게 콜벡입니다.
콜백은 함수에 써서 콜백 함수로 불렸습니다. 그러나 문제가 콜백을 중복으로 쓸 때 가독성이 너무나도 떨어지고 결국엔 콜백헬이라는 게 생겼습니다.
예를 들어서 a->b->c->d 순으로 실행하려고 할 때 a(b(c(d)))로 해야 돼서 많이 쓸수록 가독성이 너무나도 떨어졌습니다.

`예시`
<p><img src="/img/webpack/callback.png" alt="callBackHell"/></p>

그래서 나온 게 promise 이긴 한데
promise a.then(c) =>).then .... 해서 길어지면 치기 힘들어집니다.

```javascript
new Promise = (resolve, reject) => {

  setTimeout(() => resolve(1), 1000);

}.then(result => { 

  alert(result); // 1
  return result * 2;

}).then(result => { /

  alert(result); // 2
  return result * 2;

}).then(result => {

  alert(result); // 4
  return result * 2;

});
```

그래서 결국에 나온 게 Async Await

```javascript
const f = _ = new Promise = (resolve, reject) => {
  setTimeout(() => resolve(1), 1000); 
};

(async _ => { 
  await f(result * 2)  
  await f(result * 2)
  await f(result * 2)
})();
```

그러면 더 깔끔하게 나옵니다. 이렇게 async/await 메서드를 써서 복잡도를 해소되고 가독성이 더욱 높아졌습니다. 난이도도 동기 프로그래밍만큼 쉬워졌습니다.

<https://nodejs.org/en/about/>

<http://rossboucher.com/await/#/1>