
import React,{Component} from 'react';
import './App.css';
import TodoItem from './components/ToDoItem'
import tick from './components/img/checkAll.svg';
class App extends Component{
  constructor(){
    super();
    this.state={
      current:0,//all:0 , active:1, complete:2 
      newItem:'',
      todoItems:JSON.parse(localStorage.getItem('todoList'))
    } ;
    this.onKeyUp=this.onKeyUp.bind(this); 
    this.onChange=this.onChange.bind(this);
    this.clickAll=this.clickAll.bind(this);
    this.clickActive=this.clickActive.bind(this);
    this.clickComplete=this.clickComplete.bind(this);
    this.clickClearAll=this.clickClearAll.bind(this);
  }
   onItemClicked(item){
     return(event)=>{
      const isComplete = item.isComplete;
      const {todoItems}=this.state;
      const index=todoItems.indexOf(item);
      this.setState({
        todoItems:[
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete:!isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
     }
  }
  onKeyUp(event){
    let text=event.target.value;
    text=text.trim();
    if(event.keyCode ===13){
      if(!text) return;
      // enter key==13
       this.setState({
         newItem:'',
         todoItems:[
           {
             title:text,isComplete:false
           },
           ...this.state.todoItems
         ]
       })
    }  
  }
  onChange(event) {
  this.setState({
    newItem:event.target.value
  })
  }
  clickAll(){
    this.setState({
      current:0
    })
  }
  clickActive(){
    this.setState({
      current:1
    })
  }
  clickComplete(){
    this.setState({
      current:2
    })
  }
  clickClearAll(){
    this.setState({
      todoItems:[]
    })
  }
  render(){
    localStorage.setItem('todoList',JSON.stringify(this.state.todoItems||[]));
    // set value for arr 
    let arr=this.state.todoItems;
    if(this.state.current===1){
      arr=arr.filter((item)=>item.isComplete===false)
    }
    
    if(this.state.current===2){
      arr=arr.filter((item)=>item.isComplete===true)
    }
    return(
      <section className="App">
        <div className='Header'>
          <img  src={tick} width={37} alt=''/>
          <input className='input' 
          type="text" 
          placeholder='Input here to add activity'
          value={this.state.newItem}
          onKeyUp={this.onKeyUp}
          onChange={this.onChange}/>
          
        </div>
      {
          arr.length>0&& arr.map((item,index) =>
         <TodoItem key={index} item={item} onClick={this.onItemClicked(item)}/>)
      }
      {
        arr.length===0&&'Nothing here'
      }
      <footer class="footer">
		<span class="todo-count"><strong>{this.state.todoItems.length-arr.length}</strong> item left</span>
		<ul class="filters">
			<li>  
			<a class="selected" href="#/" onClick={this.clickAll}>All</a>
			</li>
			<li>
				<a href="#/active" onClick={this.clickActive}>Active</a>
			</li>
			<li>
				<a href="#/completed" onClick={this.clickComplete}>Completed</a>
			</li>
		</ul>
		<button class="clear-completed" onClick={this.clickClearAll}>Clear completed</button>
	</footer>
    </section>
    )
  }
}
export default App;
