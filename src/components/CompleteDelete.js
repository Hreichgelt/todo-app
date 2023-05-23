import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
// import "./styles/CompleteDelete.css";

// This page needs to have one editable card like alltodos, title, desc, datepicker, Comp/Del buttons, a goback btn in header and imported styles file
// Complete btn should add complete sticker self on alltodos page

const formatDate = (date) => {
  const today = new Date(date);

  return today.toLocaleDateString("en-US"); // 9/17/2016
};


const CompleteDelete = (props) => {
  const [oneTodo, setOneTodo] = useState([]);

    //  complete todo
  // need these to show differently or drop to a new page - currently show at bottom
  async function completeTodo (id) {
    
    await axios.put(`${API_URL}/todo/${id}`, {
      completedAt: Date.now(),
    });
    await fetchData();
  }

  // delete shows js array method for if no db was connected.
  // axios.delete hits api endpoint
  function deleteTodo(id) {
    const todoCopy = [...todo];
    // todoCopy.filter(id, 1);
    axios.delete(`${API_URL}/todo/${id}`);
    setTodo(todoCopy);
  }

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}/todo`);
      const json = await response.json();
      console.log(json);
      setTodo(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {

    fetchData();
  }, []);


      return (
          <div className="oneTodoWrap">
              <h2>Edit | Complete | Delete</h2>
              <div className="one-todo-card">
                  <div className="card-items">
                      <div className="title">This is a Title</div>
                      <div className="desc">This is the description</div>
                      <div className="date">This is the date</div>
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
      );
  };

export default CompleteDelete;
