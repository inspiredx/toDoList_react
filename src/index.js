import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />,
);




// React.createElement('button', {onClick: () => console.log('CLICK')}, "Нажми на меня!")  //1)вид элемента 2)свойства 3)содержимое(текст  )