import React from "react";
import Todo from '../components/Todo'
import Header from '../components/Header'
// import Footer from '../components/Footer'

const Cards = () => {
    return (
        <div>
            <Header />
            <Todo />
            {/* <Footer /> */}
        </div>
    )
}

export default Cards

// Need to link todo-server repo with this to import data

// Parent Child flow 
// route (Card.js) -> set up for all cards Key Value (Todo.js)(imports data and alltodos) -> AllTodoCards -> TodoData