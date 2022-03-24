import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: '1', message: 'Здорово Корова', likeCounts: '15'},
    {id: '2', message: 'Я Бык!', likeCounts: '30'}
]

let dialogs = [
    {id: 1, name: 'Конь в пальто'},
    {id: 2, name: 'Мышка норушка'},
    {id: 3, name: 'Кот в сапогах'},
    {id: 4, name: 'Серый волк'},
    {id: 5, name: 'Панда'}
]

let messages = [
    {id: 1, message: 'Привет, как дела?'},
    {id: 2, message: 'Учу React'},
    {id: 3, message: 'Yo'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
