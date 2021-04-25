import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*Example database*/
let dialogsData = [
    {id: 1, name: 'Dmitry'},
    {id: 2, name: 'Valera'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Galina'}
]
/*Example database*/
let messagesData = [
    {message: 'Hello my friend'},
    {message: 'I love react'},
    {message: 'SPAM SPIM SPIN'}
]

/*Example database*/
let postData = [
    {id: 1, message: 'Who you?', likes: 25, dislikes: 0},
    {id: 2, message: 'What is that?', likes: 723847, dislikes: 9324823},
    {id: 3, message: 'New social?', likes: 2445, dislikes: 10},
    {id: 4, message: 'Hello React', likes: 999, dislikes: 5}
]

ReactDOM.render(

  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postData={postData} />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
