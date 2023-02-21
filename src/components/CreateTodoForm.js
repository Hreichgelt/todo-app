import React from "react";
import axios from "axios";

class CreateTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('To do Submitted: ' + this.state.value);
        event.preventDefault();

        const payload = {
            title: this.state.title,
            description: this.state.description
        };

        axios({
            url: 'http://localhost:3000/todo/',
            method: 'POST',
            data: payload
        })
        .then(() => {
            console.log('Data sent')
        })
        .catch(() => {
            console.log('Error brah')
        });
    }

 

  
render() {

        console.log('State:', this.state);

  return (
      <form className="FormTodo" onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type={"text"} value={this.state.value} 
          name="Title" 
          onChange={this.handleChange} />
        </label>
        <label>
          Description:
          <input type={"text"} value={this.state.value} 
          rows={5} maxLength={500} name="Description" 
          onChange={this.handleChange} />
        </label>
        <label>
          Due Date:
          <input type={"date"} value={this.state.value} 
          name="Due Date" 
          onChange={this.handleChange} />
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