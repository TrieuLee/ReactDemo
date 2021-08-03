import React, { Component } from 'react';
import './ToDoItem.css';
import unCheckImg from './img/check.svg'
import checkImg from './img/unCheck.svg'
import remove from './img/remove.svg'
class TodoItem extends Component{
    render() {
    let className ='ToDoItem';
    const {item,onClick}=this.props;
    let url=unCheckImg;
    if(item.isComplete){
        url=checkImg;
    }
    if(item.isComplete)className +=' ToDoItem-complete';
        return (    
            <div className={className}>
                <img onClick={onClick} src={url} width={32} alt=''/>
                <p>{ this.props.item.title } </p>
                
            </div>
            
        )
    }
};
export default TodoItem;