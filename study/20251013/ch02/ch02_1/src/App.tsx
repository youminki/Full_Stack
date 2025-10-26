import React from 'react';
import './App.css';
import Profile from './components/profile';
import Demo from './components/Demo';
import EventListener from './pages/EventListener';

const children = [
  <a href="https://www.naver.com" target="_blank" rel="noopener noreferrer"><p>go to naver</p></a>,
  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><p>go to google</p></a>,
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><p>go to facebook</p></a>,
  <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><p>go to github</p></a>
];

function App() {
  return (
    <ul>
      <li>
        <EventListener />
      </li>
      <li>
        <Profile />
      </li>

      <li>
        <Demo />
      </li>

      {children}
    </ul>
  );
}

export default App;
