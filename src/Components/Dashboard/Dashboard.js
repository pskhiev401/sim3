import React, { Component } from 'react';
import './Dashboard.scss';
import axios from 'axios';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      search: '',
      userpost: true,
      editedContent: ''
    };
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    axios
      .get(`/api/getallpost?username=${this.props.match.params.username}`)
      .then(res => {
        this.setState({ post: res.data });
      });
  };

  updateContent = () => {
    console.log(this.state.post.username)
    axios
      .put(`/api/updatecontent/${this.state.post.username}`, this.state.editedContent)
      .then(res => {
        console.log(res.data);
      });
  };

  render() {
    console.log(this.state.post);
    let displayCards = this.state.post.map((e, i) => {
      return (
        <div className='sub_card' key={i}>
          <img
            src='https://image.flaticon.com/icons/svg/149/149071.svg'
            alt='user logo'
          />
          <h1>{e.user_alias}</h1>
          <h2>{e.title}</h2>
          <h4>{e.content}</h4>
          <input
            onChange={e => this.setState({ editedContent: e.target.value })}
            placeholder='Type Here'
          />
          <button onClick={() => this.updateContent(this.state.editedContent)}>
            Submit
          </button>
        </div>
      );
    });
    return (
      <div className='Dashboard'>
        <div className='dash_content'>{displayCards}</div>
      </div>
    );
  }
}

export default Dashboard;
