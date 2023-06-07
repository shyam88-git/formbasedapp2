import React, { Component } from 'react'

class ContactForm extends Component {
    constructor(props){

        super(props);

        this.state={name:""};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){

        this.setState({name:event.target.value});
    }

    handleSubmit(event){

        event.preventDefault();
        alert('You Type:'+this.state.name)
        this.setState({name:""});

    }
  render() {
    return (
      <div>

        <h2>Contact Form</h2>
        <form onSubmit={this.handleSubmit}>

            <label htmlFor='name'>Name:</label>
            <input type="text" value={this.state.name}onChange={this.handleChange} placeholder='Enter name'/>
            <button>Submit</button>


        </form>
      </div>
    )
  }
}
export default  ContactForm;
