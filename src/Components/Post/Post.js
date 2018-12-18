import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      img: '',
      content: '',
      author: '',
      authorPicture: ''
    };
  }

  getPostInfo = () => {};

  render() {
    return (
      <BrowserRouter>
        <div className='Post'>Post</div>
      </BrowserRouter>
    );
  }
}

export default Post;
