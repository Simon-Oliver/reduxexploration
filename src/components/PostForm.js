import React, { Component } from 'react';

class PostForm extends Component {
  state = {
    title: '',
    body: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label>Title:</label> <br />
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={e => this.onChange(e)}
            />
          </div>
          <br />
          <div>
            <label>Body:</label> <br />
            <textarea name="body" onChange={e => this.onChange(e)} value={this.state.body} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
