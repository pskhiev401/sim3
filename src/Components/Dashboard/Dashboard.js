import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      search: '',
      userpost: true
    };
  }
  getAllPost = () => {};

  resetSearch = () => {};

  render() {
    return (
      <BrowserRouter>
        <div className='Dashboard'>dashboard</div>
      </BrowserRouter>
    );
  }
}

export default Dashboard;
