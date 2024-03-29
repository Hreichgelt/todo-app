import React from "react";
import "./styles/CreateTodoForm.css";
import axios from "axios";

// if(state.succeeded) {
//   return <p>Todo Submitted!</p>
// }

class CreateTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dueAt: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetData = this.resetData.bind(this);

  }
   
    resetData() {
      this.setState({
        title: "",
        description: "",
        dueAt: "",
      });
    }
  
  handleChange(name) {
  
    return (event) => {
      // line by line - copy, change, update state
      const newState = Object.assign(this.state);
      newState[name] = event.target.value;
      this.setState(newState);
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    const payload = {
      title: this.state.title,
      description: this.state.description,
      dueAt: this.state.dueAt,
    };

    axios({
      url: "http://localhost:9000/todo",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data sent");
        this.resetData();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log("State:", this.state);

    return (
    <div className="formTodoWrap">
      <h2>Create New To-Do</h2>

      <form className="formTodo" onSubmit={this.handleSubmit}>
        <label className="title">
          <input
            type={"text"}
            value={this.state.title}
            name="Title"
            placeholder="Title"
            onChange={this.handleChange("title")}
          />
        </label>
        <label className="dueat">
          <input
            type={"date"}
            value={this.state.dueAt}
            name="Due Date"
            placeholder="Due Date"
            onChange={this.handleChange("dueAt")}
          />
        </label>
        <label className="description">
          <input className="notes"
            type={"text"}
            value={this.state.description}
            // rows={500}
            // maxLength={500}
            name="Description"
            placeholder="Notes"
            onChange={this.handleChange("description")}
          />
        </label>
        <button
          className="btn"
          id="submit"
          type="submit"
          // onClick={this.handleClear}
        >
          Save
        </button>
      </form>
      </div>
    );
  }
}

export default CreateTodoForm;

// Check in with Brad about:
// clearing form after submit
// changing date format
// clearing duplicates and issue with TodoData.js - aka .map
