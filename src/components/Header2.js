import React from "react";
import { Link } from "react-router-dom"
import '../components/styles/Header2.css'
import { IoCreate } from "react-icons/io"
import { FcTodoList } from "react-icons/fc"

const Header2 = (props) => {
    return (
        <>
        <div className="header2"> 
        <h1>
            <Link className="allToDos" to="/" onClick={() => props.setPage("To Do | Home")}><span>All To-Dos</span>
            </Link>
            <br></br>
        </h1>
        </div>
        </>
    )
}

export default Header2