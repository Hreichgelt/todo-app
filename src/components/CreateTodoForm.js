import React from "react";
import axios from "axios";

class CreateTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          description: '',
          dueAt: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(name) {
        return (event) => {
          // line by line - copy, change, update state
          const newState = Object.assign(this.state);
          newState[name] = event.target.value
          this.setState(newState);
        }
    }
    handleSubmit(event) {
        event.preventDefault();

        const payload = {
            title: this.state.title,
            description: this.state.description,
            dueAt: this.state.dueAt
        };

        axios({
            url: 'http://localhost:8080/todo',
            method: 'POST',
            data: payload
        })
        .then(() => {
            console.log('Data sent')
        })
        .catch((err) => {
            console.log(err)
        });
    }

render() {

        console.log('State:', this.state);

  return (
      <form className="FormTodo" onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type={"text"} value={this.state.title} 
          name="Title" 
          onChange={this.handleChange('title')} />
        </label>
        <label>
          Description:
          <input type={"text"} value={this.state.description} 
          rows={5} maxLength={500} name="Description" 
          onChange={this.handleChange('description')} />
        </label>
        <label>
          Due Date:
          <input type={"date"} value={this.state.dueAt} 
          name="Due Date" 
          onChange={this.handleChange('dueAt')} />
        </label>
        <button
          className="btn"
          id="submit"
          type="submit"
        >
          Submit
        </button>
      </form>
  );
}
}

export default CreateTodoForm