import React from "react";
import { Link } from "react-router-dom"
import { IoCreate } from "react-icons/io"
import { FcTodoList } from "react-icons/fc"


const Header = (props) => {
// instead of having a cart like shopping, I want a todolist icon with number of urgent todos
return (
    <>
    <div className="header"> 
    <h1>
        <Link to="/" onClick={() => props.setPage("To Do | Home")}><span>To Do</span>
        </Link>
    </h1>
    </div>
    </>
)
};


export default Header