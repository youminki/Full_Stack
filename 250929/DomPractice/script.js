// DOM 조작 실습 JavaScript 파일

// =======================================================
// 1. 요소 선택 실습
// =======================================================
const title = document.querySelector('#main-title'); // ID로 선택
const addItemButton = document.getElementById('add-item-btn'); // 구식 ID 선택
const listContainer = document.querySelector('#item-list');
const allListItems = document.querySelectorAll('.list-item'); // 모든 항목 선택 (NodeList)

console.log("선택된 제목:", title.textContent);

// =======================================================
// 2. 내용 변경 및 속성 조작 실습
// =======================================================

// 버튼 클릭 시 제목 텍스트 변경 및 클래스 토글
document.querySelector('#change-text-btn').addEventListener('click', () => {
    // 텍스트 내용 변경 (textContent)
    title.textContent = "클릭되었습니다!"; 
    
    // 클래스 토글
    title.classList.toggle('highlight'); 
});

// =======================================================
// 3. 요소 생성 및 추가 실습
// =======================================================

addItemButton.addEventListener('click', () => {
    // 1. 새로운 <li> 요소 생성
    const newItem = document.createElement('li');
    
    // 2. 내용 설정 및 클래스/속성 부여
    const itemNumber = listContainer.children.length + 1;
    newItem.textContent = `동적으로 추가된 ${itemNumber}번 항목`;
    newItem.classList.add('list-item');
    newItem.setAttribute('data-id', itemNumber);
    
    // 3. 목록 컨테이너의 맨 뒤에 추가 (append 사용)
    listContainer.append(newItem); 
    
    // 추가된 항목에 삭제 이벤트 리스너 등록
    newItem.addEventListener('click', function() {
        this.remove(); 
    });
    
    // 결과 영역에 메시지 표시
    document.querySelector('#result-area').innerHTML = `<p><strong>항목 ${itemNumber}</strong>가 추가되었습니다.</p>`;
});

// =======================================================
// 4. 기존 요소 삭제 실습 (각 항목에 이벤트 리스너 등록)
// =======================================================

allListItems.forEach(item => {
    item.addEventListener('click', function() {
        if (confirm(`'${this.textContent}' 항목을 정말 삭제하시겠습니까?`)) {
            this.remove(); // 클릭된 li 요소 자체를 삭제
        }
    });
});



// =======================================================
// 5. getElementById와 getElementsByClassName 실습
// =======================================================

// getElementById로 main-title에 본인 이름 표시
const mainTitle = document.getElementById('main-title');
mainTitle.textContent = "유민기";

// getElementsByClassName으로 list-item에 본인 특징 표시
const listItems = document.getElementsByClassName('list-item');
const myCharacteristics = [
    "MBTI: INFP",
    "거주지: 안양",
    "취미: 영화보기, 음악듣기"
];

// 기존 항목들을 본인 특징으로 변경
for (let i = 0; i < listItems.length && i < myCharacteristics.length; i++) {
    listItems[i].textContent = myCharacteristics[i];
}


// =======================================================
// 6. main title : 풀스택, list item : 아무거나(통일 or 셋 다 다르게)
// =======================================================

// const mainTitle = document.getElementById('main-title');
// mainTitle.textContent = "풀스택";

// const listItems = document.getElementsByClassName('list-item');
// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].textContent = "DOM 조작 실습중...";
// }


// 메인 타이틀 지우기
// 링크 들어간 a 태그 지우기
// body에 자기 소개말 적기
// 컨테이너 맨 아래에 짧은 인사말 넣기

// 메인 타이틀 지우기 (존재할 때만)
if (mainTitle) {
    mainTitle.remove();
}

// 링크 들어간 a 태그 지우기 (id="myLink"가 있을 때만)
const myLink = document.getElementById('myLink');
if (myLink) {
    myLink.remove();
}

// body에 자기 소개말 적기
const body = document.body;
const introParagraph = document.createElement('p');
introParagraph.textContent = "안녕하세요! 저는 유민기입니다.";
body.appendChild(introParagraph);

// 컨테이너 맨 아래에 짧은 인사말 넣기
const resultArea = document.getElementById('result-area');
if (resultArea) {
    const greetingDiv = document.createElement('div');
    greetingDiv.textContent = "방문해 주셔서 감사합니다!";
    resultArea.appendChild(greetingDiv);
}
