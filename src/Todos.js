import React from "react";

const Todos = ({todos, deleteTodo}) =>{
    const todoList = todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}><h4>{todo.content}</h4></span>
                </div>
            )
        })
    ) 
    
    :(
        <div><p className="center"><h3>You have no todo's left, ohho XD!</h3></p></div>
    )
    return(
        
        <div className="todos collection">
         {todoList}
        </div>
    )
}
export default Todos;