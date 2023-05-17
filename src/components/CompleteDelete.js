import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
// import "./styles/CompleteDelete.css";

// This page needs to have one editable card like alltodos, title, desc, datepicker, Comp/Del buttons, a goback btn in header and imported styles file
// Complete btn should add complete sticker self on alltodos page

const CompleteDelete = () => {

}
render() {
    console.log("State:", this.state);

    return (
        <div className="oneTodoWrap">
            <h2>Edit | Complete | Delete</h2>
            <div className="one-todo-card">
                <div className="card-items">
                    <div className="title"></div>
                    <div className="desc"></div>
                    <div className="date"></div>
                    <div className="btns">
                <button
                  className="complete"
                  id={todo._id}
                  onClick={() => completeTodo(todo._id)}
                >
                  <FaCheck />
                </button>
                <button
                  className="delete"
                  id={todo._id}
                  onClick={() => deleteTodo(todo._id)}
                >
                  <BsTrash />
                </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

