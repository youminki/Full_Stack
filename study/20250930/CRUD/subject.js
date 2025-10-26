// 게시글 데이터 배열 만들기(전역 상태)
let posts = [
    { id: 1, title: "첫 글", content: "프론트엔드 CRUD를 구현해봅시다." },
    { id: 2, title: "공지사항", content: "수정/삭제 버튼을 눌러보세요." }
];

// 고유 ID 생성을 위한 카운터
let nextId = 3; 

// DOM 요소 선택
const addBtn = document.getElementById('add-btn');
const inputTitle = document.getElementById('input-title');
const inputContent = document.getElementById('input-content');
const postList = document.getElementById('post-list');

// =============================================

// C (Create)
function createPost() {
    //: input 필드 값을 가져와 새 객체를 생성하고 posts 배열에 push 합니다.
    //: input 필드를 초기화하고 renderPosts()를 호출하여 목록을 갱신합니다.
    const title = inputTitle.value.trim();
    const content = inputContent.value.trim();
    if (title && content) {
        const newPost = { id: nextId++, title, content };
        posts.push(newPost);
        inputTitle.value = '';
        inputContent.value = '';
        renderPosts();
    } else {
        alert("제목과 내용을 모두 입력하세요.");
    }
}

// =============================================
// R (Read)
function renderPosts() {
    // posts 배열을 순회하여 postList에 게시글 목록 HTML을 생성/삽입하고, 각 게시글의 수정/삭제 버튼에 이벤트 리스너를 연결합니다.
    postList.innerHTML = '';
    posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <button class="edit-btn">수정</button>
            <button class="delete-btn">삭제</button>
            <div class="edit-form" style="display:none;">
                <input type="text" class="edit-title" value="${post.title}">
                <textarea class="edit-content">${post.content}</textarea>
                <button class="save-btn">저장</button>
                <button class="cancel-btn">취소</button>
            </div>
        `;
        postList.appendChild(listItem);

        const editBtn = listItem.querySelector('.edit-btn');
        const deleteBtn = listItem.querySelector('.delete-btn');
        const saveBtn = listItem.querySelector('.save-btn');
        const cancelBtn = listItem.querySelector('.cancel-btn');
        const editForm = listItem.querySelector('.edit-form');

        editBtn.addEventListener('click', () => {
            editForm.style.display = 'block';
            listItem.querySelector('h3').style.display = 'none';
            listItem.querySelector('p').style.display = 'none';
            editBtn.style.display = 'none';
            deleteBtn.style.display = 'none';
        });

        cancelBtn.addEventListener('click', () => {
            editForm.style.display = 'none';
            listItem.querySelector('h3').style.display = 'block';
            listItem.querySelector('p').style.display = 'block';
            editBtn.style.display = 'inline-block';
            deleteBtn.style.display = 'inline-block';
        });

        saveBtn.addEventListener('click', () => {
            const newTitle = listItem.querySelector('.edit-title').value.trim();
            const newContent = listItem.querySelector('.edit-content').value.trim();
            if (newTitle && newContent) {
                updatePost(post.id, newTitle, newContent);
                editForm.style.display = 'none';
                listItem.querySelector('h3').style.display = 'block';
                listItem.querySelector('p').style.display = 'block';
                editBtn.style.display = 'inline-block';
                deleteBtn.style.display = 'inline-block';
            } else {
                alert("제목과 내용을 모두 입력하세요.");
            }
        });

        deleteBtn.addEventListener('click', () => {
        if (confirm("정말 삭제하시겠습니까?")) {
                deletePost(post.id);
            }
        });
    }); 
}

// =============================================
// U (Update)
function enterEditMode(listItem) {
    // listItem에 'edit-mode' 클래스를 추가하여 수정 폼을 보여줍니다.
    listItem.classList.add('edit-mode');
}

function exitEditMode(listItem) {
    // listItem에서 'edit-mode' 클래스를 제거하여 Read 모드로 복귀합니다.
    listItem.classList.remove('edit-mode');
}

function updatePost(id, newTitle, newContent) {
    // 수정 폼의 값을 가져와 posts 배열에서 특정 id의 post 객체를 갱신합니다.
    const post = posts.find(post => post.id === id);
    if (post) {
        post.title = newTitle;
        post.content = newContent;
    }
}

// =============================================
// D (Delete)
function deletePost(id) {
    // filter() 메서드를 사용하여 특정 id의 객체를 제거합니다.
    posts = posts.filter(post => post.id !== id);
    renderPosts();
}    
// 이벤트 리스너 연결
addBtn.addEventListener('click', createPost);

// 초기 렌더링
renderPosts();  
// 사용할만한 함수 또는 메서드
// parseInt() / parseFloat()    문자열 형태의 입력 값 (input.value)을 숫자로 변환할 때 사용. (예: 위치 계산, 카운터 증가)
// Math.random()    0과 1 사이의 난수를 생성. (예: 로또 번호 생성, 게임에서 데미지 계산)
// Math.floor()    숫자를 내림하여 정수로 만들 때 사용. (예: Math.random()으로 생성된 난수 범위를 조정할 때)
// .trim()    입력 필드 값의 앞뒤 공백을 제거하여 유효성 검사 시 사용. (예: 게시글 제목, 내용)
// .includes(sub)    특정 문자열(sub)이 포함되어 있는지 true/false로 검사. (예: 검색 필터링)
// .split(separator)    문자열을 특정 구분자(' '나 ',')로 나누어 배열로 만들 때 사용.
// .forEach(callback)    배열의 모든 요소를 순회하며 각 요소에 대해 함수(콜백)를 실행. (예: 목록 Read 시 DOM 요소 생성)
// .push(item)    배열의 맨 끝에 새로운 요소(객체)를 추가. (예: 게시글 Create 시 사용)
// .filter(callback)    조건에 맞는 요소만 남기고 새로운 배열을 반환. (예: Delete 시 특정 ID를 제외, 특정 상태만 필터링)
// .find(callback)    조건에 맞는 첫 번째 요소를 찾아 반환. (예: Update 시 특정 ID의 게시글 객체를 찾아 수정할 때)
// .map(callback)    배열의 모든 요소를 변형하여 새로운 배열을 반환. (예: 배열의 모든 데이터에 특정 속성을 추가/변경)
// document.getElementById()    ID를 기반으로 단일 요소 선택. (가장 빠름)
// document.querySelector()    CSS 선택자로 첫 번째 일치 요소를 선택.
// document.querySelectorAll()    CSS 선택자로 일치하는 모든 요소를 NodeList 형태로 반환. (반복문 필요)
// document.createElement()    새로운 HTML 요소를 메모리상에 생성. (예: <li>, <button>)
// .addEventListener()    요소에 이벤트 핸들러(함수)를 연결. (예: 'click', 'keydown')
// .appendChild()    부모 요소에 자식 요소를 맨 끝에 추가. (예: <ul>에 <li> 추가)
// .remove()    자기 자신 요소를 DOM 트리에서 제거. (예: 목록 항목 Delete 시)
// .classList.add() / .remove() / .toggle()    CSS 클래스를 추가/제거/토글하여 스타일이나 상태를 변경. (예: 수정 모드, 하이라이트)
// .value    <input>, <textarea> 등 폼 요소의 현재 값을 읽거나 설정. (예: 게시글 Create 시 입력값)
// .textContent / .innerHTML    요소 내부의 텍스트 또는 HTML 구조를 읽거나 설정. (예: 게시글 목록 Read 시 내용 표시)