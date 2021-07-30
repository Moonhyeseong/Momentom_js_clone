//querySelector를 사용해 html 요소 가져오기
const loginform = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(evnet) {
  evnet.preventDefault(); //브라우저의 이벤트 기본동작 수행을 멈춘다.
  loginform.classList.add(HIDDEN_CLASSNAME); //함수 실행시 classList에 hidden을 추가해 loginform 요소 숨기기
  const username = loginInput.value; //loginInput.value 저장
  localStorage.setItem(USERNAME_KEY, username); //localStorage에 입력받은 유저이름 저장
  paintGreeting(username);
}

function paintGreeting(username) {
  //h1태그 hidden 해제후 innerText 텍스트 추가
  greeting.innerText = `Hello ${username}`; // greeting.innerText = "Hello "+ username;
  greeting.classList.remove(HIDDEN_CLASSNAME); //함수 실행시 classList에서 hidden을 제거해 greeting 숨김 해제
}

//브라우저가 이벤트를 받아 함수를 실행할때 그냥 실행하지 않고 인자를 전달해 실행한다.

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginform.classList.remove(HIDDEN_CLASSNAME);
  loginform.addEventListener('submit', onLoginSubmit);
} else {
  //show the greeting
  paintGreeting(savedUsername);
}
