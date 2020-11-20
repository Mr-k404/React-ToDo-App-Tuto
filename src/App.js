
import React, { Component } from "react";
import Todos from "./Todos"
import AddTodo from "./AddTodo"

class  App extends Component { 
  state ={
    todos: [
      {id:1, content: 'by some milk'},
      {id:2, content: 'play mario kart'}
    ]
  }

  deleteTodo =(id) =>{
    //console.log(id);
    const todos =this.state.todos.filter(todo =>{
      return todo.id !== id
    });
    //console.log(todos);
    this.setState({
      todos
    })
  }
  addTodo = (todo) =>{
     todo.id =Math.random();
     let todos =[...this.state.todos ,todo];
     console.log(todos);

     this.setState({
       todos
     })
  }
  render(){
  return (
    <div className="App container">
      <div className=" card-panel teal lighten-2 center white-text"><h3>Todo's</h3></div>
      <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
    </div>
  );
}
}

export default App;
