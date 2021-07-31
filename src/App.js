
import React from 'react';
import './App.css';
import TodoItem from './components/ToDoItem';
function App() {
  const todoItems =[
    {title:'Đi mua cá',isComplete:true},
    {title:'Đi mua gà'},
    {title:'Đi mua rau'}
  ];
  return (
    <div className="App">
      {
        todoItems.map((item,index) =>
         <TodoItem key={index} item={item}/>)
      }
    </div>
  );
}

export default App;
