import React from 'react';
import styles from "../App.css";


class Contact extends React.Component {


  render() {

    return (
      <aside id="contact">
      <a href="#">
        <i className="far fa-arrow-alt-circle-up"></i>
      </a>
      <header>
        <h1>Contact Me</h1>
        <p>Please feel free to drop a line with compliments and good vibes!</p>

      </header>
      <form action="#" method="post">
      <div className="form-field" id="social">
        <label for="user_name" id="social">Name</label>
        <br />
        <input type="text" name="user_name" required></input>
      </div>
      <div className="form-field" id="social">
        <label for="user_email" id="social">Email</label>
      <br />
      <input type="email" name="user_name" required></input>
      </div>
      <div className="form-field" id="social">
        <textarea name="message" id="social"></textarea>
      </div>
      <button type="submit" id="social">Submit</button>
      <input type="submit" value="Contact Me! :) " id="social"></input>

      </form>


      </aside>
    )
  }

}

export default Contact;
