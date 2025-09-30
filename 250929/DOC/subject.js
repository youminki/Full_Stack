document.addEventListener('DOMContentLoaded', () => {
    const mainTitle = document.getElementById('main-title');
    const desc = document.querySelector('.description');
    document.getElementById('btn-change-title').addEventListener('click', () => {
      mainTitle.textContent = '제목 변경';
      desc.textContent = '텍스트 변경';
    });
    document.getElementById('btn-reset-title').addEventListener('click', () => {
      mainTitle.textContent = '제목';
      desc.textContent = '텍스트';
    });
  
    const itemList = document.querySelectorAll('#item-list .list-item');
    document.getElementById('btn-style-list').addEventListener('click', () => {
      itemList.forEach((li, idx) => {
        li.style.background = idx % 0 === 0 ? '#eef6ff' : '#fff';
        li.style.borderColor = '#007bff';
        li.style.fontWeight = '600';
      });
    });
    document.getElementById('btn-reset-list').addEventListener('click', () => {
      itemList.forEach(li => {
        li.style.background = '';
        li.style.borderColor = '#ccc';
        li.style.fontWeight = '';
      });
    });
  
    
    const box = document.getElementById('box');
    const statusIcon = document.getElementById('status-icon');
    document.getElementById('btn-toggle-highlight').addEventListener('click', () => {
      box.classList.toggle('highlight');
      const isHighlighted = box.classList.contains('highlight');
      box.setAttribute('aria-pressed', String(isHighlighted));
      console.log('box highlight:', isHighlighted);
    });
  
    document.getElementById('btn-change-image').addEventListener('click', () => {
      const orig = statusIcon.getAttribute('src');
      if (orig && orig.includes('original')) {
        statusIcon.src = 'placeholder_changed.png';
        statusIcon.alt = '상태: 변경됨';
      } else {
        statusIcon.src = 'placeholder_original.png';
        statusIcon.alt = '상태: 원본';
      }
      console.log('image src changed to', statusIcon.src);
    });
  
    // 새로운 요소 동적 생성
    const container = document.getElementById('container');
    document.getElementById('btn-create-el').addEventListener('click', () => {
      const card = document.createElement('div');
      card.className = 'created-card';
      card.style.padding = '10px';
      card.style.border = '1px solid #ddd';
      card.style.borderRadius = '6px';
      card.style.margin = '6px 0';
      card.textContent = '동적으로 생성된 요소 — ' + new Date().toLocaleTimeString();
      container.appendChild(card);
    });
    document.getElementById('btn-clear-container').addEventListener('click', () => {
      container.innerHTML = '';
    });
  
    // 목록 동적 생성 및 삭제
    const targetList = document.getElementById('target-list');
    const newItemInput = document.getElementById('new-item-input');
    const addBtn = document.getElementById('btn-add-item');
  
    function attachRemoveHandlers(listRoot) {
      listRoot.querySelectorAll('.remove-btn').forEach(btn => {
        // 중복 등록을 방지하기 위해 기존 리스너 제거 후 등록
        btn.removeEventListener('click', handleRemove);
        btn.addEventListener('click', handleRemove);
      });
    }
  
    function handleRemove(e) {
      const li = e.currentTarget.closest('li');
      if (!li) return;
      li.remove();
    }
  
    addBtn.addEventListener('click', () => {
      const text = newItemInput.value.trim();
      if (!text) return alert('항목 텍스트를 입력하세요.');
      const li = document.createElement('li');
      li.className = 'removable list-item';
      li.innerHTML = `${escapeHtml(text)} <button class="remove-btn" style="float:right;">삭제</button>`;
      targetList.appendChild(li);
      newItemInput.value = '';
      attachRemoveHandlers(targetList);
    });
  
    // 초기 삭제 버튼 핸들러 연결
    attachRemoveHandlers(targetList);
  
    // 유틸: 간단한 이스케이프
    function escapeHtml(str) {
      return str.replace(/[&<>"']/g, (m) => ({
        '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
      }[m]));
    }
  
    // 추가: 콘솔에서 조작 확인할 수 있도록 몇 가지 선택자 로그 출력
    console.log('DOM 실습 초기화 완료');
    console.log('mainTitle:', mainTitle);
    console.log('itemList length:', itemList.length);
  });
  


const hoverImg = document.getElementById('status-icon');
if (hoverImg) {
  const originalSrc = 'capture.png';
  const changedSrc = 'placeholder_hover.png';

  hoverImg.addEventListener('mouseover', () => {
    hoverImg.src = changedSrc;
  });

  hoverImg.addEventListener('mouseout', () => {
    hoverImg.src = originalSrc;
  });
}



// 키보드 방향키 태그명은 'Arrow Up/Down/Right/Left'

const player = document.getElementById('player');
if (player) {
  let posX = 200;
  let posY = 735;
  const step = 10;

  player.style.position = 'absolute';
  player.style.top = posY + 'px';
  player.style.left = posX + 'px';

  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowUp':
        posY -= step;
        break;
      case 'ArrowDown':
        posY += step;
        break;
      case 'ArrowLeft':
        posX -= step;
        break;
      case 'ArrowRight':
        posX += step;
        break;
      default:
        return;
    }
    player.style.top = posY + 'px';
    player.style.left = posX + 'px';
    console.log(`player 위치: (${posX}, ${posY})`);
  });
}




//API : 프로그램들이 서로 상호작용할 수 있도록 하는 인터페이스

//웹 api : 브라우저가 제공하는 api
// fetch api : 네트워크 요청을 위한 API
// Geolocation API : 위치 정보 제공
// Local Storage API : 브라우저에 데이터 저장\

// Get Post
// Get : 서버로부터 데이터를 가져올 때
// Post : 서버에 데이터를 보낼 때

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    console.log("가져온 데이터:", data);
  })
  .catch(error => {
    console.error("오류 발생:", error);
  });

// // fetch() 호출 > URL로 요청 전송 > 서버 응답 > .then()으로 응답 변환 > .catch()로 오류 처리

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1
//   })
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log("서버 응답:", data);
//   })
//   .catch(error => {
//     console.error("오류 발생:", error);
//   });

// // fetch() 호출 > URL로 POST 요청 전송 > 서버 응답 > .then()으로 응답 변환 > .catch()로 오류 처리


// if(navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {
//         console.log('Latitude:', position.coords.latitude);
//         console.log('Longitude:', position.coords.longitude); 
//     });
// } else {
//     console.error('Geolocation을 지원하지 않는 브라우저입니다.');
// }

const localstorage = () => {
    const inputData = document.getElementById('inputtext').value;
    localStorage.setItem('note', inputData);
};

const loadData = () => {
  const savedData = localStorage.getItem('note');
  if(savedData) {
    document.getElementById('inputtext').value = savedData;
  }
}


document.addEventListener("DOMContentLoaded", loadData);
const inputElement = document.getElementById('input-data');
inputElement.addEventListener('input', () => {
  localstorage();
  console.log('입력된 데이터:', inputElement.value);

});


// geolocation API로 현재 본인의 위경도를 파악하고 localstorage에 저장하세요


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);
    localStorage.setItem('latitude', latitude);
    localStorage.setItem('longitude', longitude);
  }, (error) => {
    console.error('Error occurred while retrieving location:', error);
  });
} else {
  console.error('Geolocation을 지원하지 않는 브라우저입니다.');
}   
