import React from 'react';
import { Link } from 'react-app';

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.refs.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  render() {
    return (
      <nav className="mdl-navigation" ref="root">
        <Link className="mdl-navigation__link" to="/"></Link>
        <Link className="mdl-navigation__link" to="/about"></Link>
        <Link className="mdl-navigation__link" to="/not-found"></Link>
      </nav>
    );
  }

}

export default Navigation;
