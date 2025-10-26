# 📌비동기 처리와 Promise, async/await — 이론과 실전 요약

## 비동기(asynchronous)란?

비동기란 "요청의 응답을 기다리지 않고 다음 작업을 수행하는 방식"입니다. 즉,
동기(synchronous)처럼 코드가 위에서 아래로 순차적으로 멈추어 기다리지 않고,
다른 작업을 진행하며 외부 응답(네트워크, 파일 I/O 등)을 비동기적으로 처리합니다.

왜 중요할까?

- 사용자 인터페이스가 멈추지 않도록 한다(특히 브라우저 환경에서 필수).

- 자원 대기 시간을 유효하게 활용해 처리량을 높인다.

### 간단한 비유

- 세탁기(비동기)를 돌리는 동안 다른 집안일을 할 수 있다. 반면 동기적이라면
  세탁이 끝날 때까지 아무것도 못 한다.

---

## 콜백(Callback)과 문제점

콜백은 다른 함수에 전달되어 특정 시점에 호출되는 함수입니다. 간단한 예:

```jsx
function sayHello(name, callback) {
  const words = `안녕하세요, 제 이름은 ${name} 입니다.`;
  callback(words);
}

sayHello("유민기", (message) => console.log(message));
```

하지만 비동기 단계가 많아지면 중첩이 깊어지고 유지보수가 어려워집니다(콜백
헬).

```jsx
step1((v1) => {
  step2((v2) => {
    step3((v3) => {
      // ...
    });
  });
});
```

콜백의 문제: 가독성 저하, 에러 처리 분산, 제어 흐름 추적 어려움.

---

## Promise란? (정의와 역할)

Promise는 "미래의 값"을 나타내는 객체입니다. 비동기 작업의 최종 성공(fulfilled)
또는 실패(rejected)를 표현합니다. 주요 목적은 비동기 제어 흐름을 더 직관적으로
관리하게 하는 것에 있습니다.

```jsx
const p = new Promise((resolve, reject) => {
  fetch("/data")
    .then((res) => res.json())
    .then((data) => resolve(data))
    .catch((err) => reject(err));
});
```

Promise 내부의 콜백을 executor라고 부릅니다.

### 상태(state)와 전이

- Pending: 아직 결과가 결정되지 않은 초기 상태

- Fulfilled: 성공적으로 완료되어 값(value)을 가짐

- Rejected: 오류로 인해 실패(reason)를 가짐

한 번 Fulfilled 또는 Rejected가 되면 상태는 불변(immutable)입니다.

---

## then / catch / finally (사용법)

```jsx
p.then((value) => {
  // 성공 처리
})
  .catch((err) => {
    // 오류 처리
  })
  .finally(() => {
    // 성공/실패와 관계없이 항상 실행
  });
```

체이닝: then은 새로운 Promise를 반환하므로 연속적인 비동기 흐름을 읽기 좋게
구성할 수 있습니다. 에러는 가장 가까운 catch로 전파됩니다.

### 실제 예시

```jsx
export const postApplicationData = (data, navigate, setIsLoading) => {
  Axios.post("/application", data, {
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      setIsLoading(false);
      navigate("/complete");
      sessionStorage.removeItem("studentId");
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err?.response?.data?.message ?? "알 수 없는 오류");
    });
};
```

---

## 자바스크립트 런타임: 호출 스택, 이벤트 루프, 태스크 큐

Promise와 async/await를 이해하려면 런타임의 기본 모델을 아는 것이 중요합니다.

- 호출 스택(Call Stack): 현재 실행 중인 함수들이 쌓이는 곳.
- 태스크 큐(Task Queue / Macrotask queue): setTimeout, I/O 콜백 등이 들어가는 큐.
- 마이크로태스크 큐(Microtask queue): Promise의 then/catch, MutationObserver 등
  우선도가 높은 큐.
- 이벤트 루프(Event Loop): 호출 스택이 비어 있으면 마이크로태스크를 먼저 비우고,
  그 다음 마크로태스크를 처리합니다.

이 원칙 때문에 Promise.then으로 예약한 콜백(마이크로태스크)은 같은 턴의
setTimeout보다 먼저 실행됩니다.

간단한 예:

```jsx
console.log("start");
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");
// 출력 순서: start, end, promise, timeout
```

---

## async / await (동작 원리와 사용법)

`async` 함수는 항상 Promise를 반환합니다. `await`는 우측의 표현식이
Promise라면 그 해결을 기다리고, 값 또는 거부(reason)를 반환/던집니다.

```jsx
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("에러 발생:", error);
  } finally {
    console.log("요청 완료");
  }
}

fetchData();
```

주의사항:

- `await`는 async 함수 내부에서만 사용 가능.

- 여러 독립적인 비동기 작업을 직렬로 await하면 전체 시간이 늘어납니다. 병렬로
  실행하려면 Promise를 먼저 생성한 후 `await Promise.all([...])`로 기다립니다.

```jsx
// 나쁜 예: 직렬 처리되어 느림
const a = await fetch(urlA);
const b = await fetch(urlB);

// 좋은 예: 병렬로 시작한 뒤 동시에 대기
const pA = fetch(urlA);
const pB = fetch(urlB);
const [aRes, bRes] = await Promise.all([pA, pB]);
```

---

## 에러 전파와 처리 전략

- Promise 체인에서 에러는 체인을 따라 전파되어 가장 가까운 `catch`로
  전달됩니다.
- async/await에서는 try/catch로 감싸서 처리하거나 호출자에게 에러를
  재던져 호출자가 처리하게 할 수 있습니다.
- 전역 예외(예: 브라우저에서는 window.onunhandledrejection)도 확인해야 함.

---

## 고급 주제: 성능과 취약점

- 마이크로태스크가 과도하게 쌓이면 렌더링이 지연될 수 있음. UI 관련 작업은
  마크로태스크로 분리 고려.
- 취소(AbortController) 패턴 사용으로 불필요한 네트워크 요청 취소 가능.
- 타임아웃과 재시도 전략을 적절히 설계(네트워크 조건에 따른 백오프 등).

---

## Promise vs async/await 비교(요약)

- 코드 스타일: Promise는 체이닝, async/await는 동기처럼 보이는 구조
- 가독성: 복잡한 흐름은 async/await가 더 명확한 편
- 병렬 처리: 둘 다 가능(Promise.all, await Promise.all)
- 예외 처리: Promise.catch vs try/catch

---

- 비동기: 응답을 기다리지 않고 다음 작업을 수행하는 방식
- 콜백: 가장 원시적인 방법, 중첩 시 가독성 저하
- Promise: 비동기 결과를 표현하는 객체(상태: pending → fulfilled/rejected)
- async/await: Promise를 더 읽기 쉽게 다루는 문법
