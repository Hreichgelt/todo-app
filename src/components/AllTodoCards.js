import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/AllTodoCards.css";
import { BsTrash } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

// best practice caps removed /todo
const API_URL = "http://localhost:9000";


// Past due = red || Due soon = yellow || due later = green (card change color based on date?)

const formatDate = (date) => {
  const today = new Date(date);

  return today.toLocaleDateString("en-US"); // 9/17/2016
};

const AllTodos = (props) => {
  // const [completedTodos, setCompletedTodos] = useState(0);
  const [todo, setTodo] = useState([]);

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

  console.log(todo)
  // _id is best practice for a Mongodb id 
  return (
    <div className="all-todos-container">
      {todo.map((todo) => {
        return (
          <div className="todo-container">
            <div className={todo.completedAt ? 'todo-card2' : 'todo-card' } key={todo._id}>
              {/* <div className="btns">
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
              </div> */}
              <div className="details" style={{ color: "black" }}>
                {todo.text}
                <h3 className="title">{todo.title}</h3>
                {/* <h4 className="description">{todo.description}</h4> */}
                <h4 className="dueAt">{formatDate(todo.dueAt)}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllTodos;
