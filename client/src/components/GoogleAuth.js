import React, { Component } from 'react';

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: '349365074811-562n3f2gc5um1sn4onfdgg3nnc9es25m.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(() => this.onAuthChange());
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onButtonClick = () => {
    this.state.isSignedIn ? this.auth.signOut() : this.auth.signIn();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    }
    if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onButtonClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    }
    return (
      <button className="ui red google button" onClick={this.onButtonClick}>
        <i className="google icon" />
        Sign In with Google
      </button>
    );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
