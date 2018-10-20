import React from 'react';

class Footer extends React.Component {

  render() {


    return (
      <footer>
      <div>
        <a href="https://facebook.com" target="_blank">
          <i className="fab fa-facebook-square fa-3x"></i>
        </a>
        <a href="https://twitter.com" target="_blank">
          <i className="fab fa-twitter-square fa-3x"></i>
        </a>
        <a href="https://github.com" target="_blank">
          <i className="fab fa-github-square fa-3x"></i>
        </a>
      </div>
      <p>IzzyCode 2018</p>
      </footer>
    )
  }
}

export default Footer;