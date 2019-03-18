import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { author } = this.props;
    return (
      <div>
        <p>{author ? author.name : null}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { author: state.authors.find(author => author.id === ownProps.userId) };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
