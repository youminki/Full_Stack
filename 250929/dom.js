// // DOM
// // 웹 페이지 > HTML 문서 > DOM 트리
// // DOM API
// // DOM Tree
// // DOM 요소(Element) : HTML 요소
// // DOM 노드(Node) : 요소, 속성, 텍스트

// {/* <div id="container">
//   <h1 class="title">제목</h1>
//     <p>내용</p>
// </div>;

// #document
//   └─ <html>
//       └─ <body>
//           └─ <div id="container">
//               ├─ <h1 class="title">제목</h1>
//               └─ <p>내용</p>
//           </div>
//       </body>
//   </html>

// // // DOM 요소 조작
// // // 요소 선택
// // // Dom 요소 > 아직 로드되지 않았을 때 > null, 오류
// // // 페이지 로드 타이밍 문제 안생기도록 windwo.onload 사용
// // // window.onload > 브라우저에서 모든 리소스(이미지, 스타일시트, 스크립트 등) 로드 후 실행
// //  */}


// // window.onload = function() {
// //     // 코드(페이지가 완전히 로드 된 후에 실행)
// // }

// // // DOM 요소 선택
// // getElementById() // id 속성으로 요소 선택

// <p id="title">제목</p>

// const element = document.getElementById('title');
// element.textContent = "변경된 제목"; // '변경된 제목'

// // 각 요소에 지정된 ID를 활용하여 요소 선택, 특정 작업 수행

// // getElementsByClassName() // class 속성으로 요소 선택(여러개)


// const elements = document.getElementsByClassName('text');
// console.log(elements.length); // 2

// for(const elemnet of elements) {
//     element.textContent = "변경된 내용"; // '변경된 내용'
// }
                            
// // getElementsByTagName() // 태그 이름으로 요소 선택(여러개)

// <p>내용1</p>
// <p>내용2</p>

// const elements = document.getElementsByTagName('p');
// console.log(elements.length); // 2

// for(const elemnet of elements) {
//     element.textContent = "변경된 내용"; // '변경된 내용'
// }

