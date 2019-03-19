import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
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

export default connect(mapStateToProps)(UserHeader);
