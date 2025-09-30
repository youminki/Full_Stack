document.addEventListener('click', () => {
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

});


const mouseButton = document.getElementById('mouse-button');
const counterElement = document.getElementById('counter');

let count = 0;

mouseButton.addEventListener('click', () => {
    console.log('click');
    count++;
    counterElement.textContent = count;
});


const keyboardInput = document.getElementById('keyboard-input');
keyboardInput.addEventListener('keydown', (event) => {
    console.log(`Key "${event.key}" pressed  [event: keydown]`);
});

const form = document.getElementById('my-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`);
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    form.reset();
});


//keydown Event
// 입력한 text들이 바로 아래에 그대로 출력되도록(문자키들만)

const inputField = document.getElementById('input-field');
const outputArea = document.getElementById('output-area');

inputField.addEventListener('input', (event) => {
    const currentText = event.target.value;
    outputArea.textContent = currentText;
});


const outerDiv = document.querySelector('.outer');
const innerDiv = document.querySelector('.inner');

outerDiv.addEventListener('click', () => {
    console.log('Outer Div Clicked');
});

innerDiv.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Inner Div Clicked');
});


