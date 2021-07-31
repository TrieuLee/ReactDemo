import React, { Component } from 'react';
import './ToDoItem.css'
class TodoItem extends Component{
    render() {
    let className ='ToDoItem';
    const {item}=this.props;
    if(item.isComplete)className +=' ToDoItem-complete';
        return (    
            <div className={className}>{ this.props.item.title } </div>
            
        )
    }
};
export default TodoItem;