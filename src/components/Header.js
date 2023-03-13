import React from "react";
import { Link } from "react-router-dom"
import './styles/Header.css'
import { IoCreate } from "react-icons/io"
import { FcTodoList } from "react-icons/fc"


const Header = (props) => {
// instead of having a cart like shopping, I want a todolist icon with number of urgent todos
return (
    <>
    <div className="header"> 
    <h1>
        <Link className="allToDos" to="/" onClick={() => props.setPage("To Do | Home")}><span>All To Dos</span>
        </Link>
        <br></br>
        <Link className="form" to="/Create" onClick={() => props.setPage("Create To Do | Form")}><span>Create To Do</span>
        </Link>
    </h1>
    </div>
    </>
)
};


export default Header