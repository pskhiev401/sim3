import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      img: '',
      content: ''
    };
  }

  submitNewPost = () => {

  }

  render() {
    return (
      <BrowserRouter>
        <div className='Form'>Form</div>
      </BrowserRouter>
    );
  }
}

export default Form;
