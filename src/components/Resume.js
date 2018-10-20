import React from 'react';
import styles from "../App.css";


class Resume extends React.Component{

  render() {

    return(
      <aside id="resume">
        <h1>Resume</h1>
        <header>
            <h2>This Student</h2>
            <address>
              <a href="tel:3051234321">(305) 123-4321</a>
              <a href="mailto:israel@wyncode.co">israel@wyncode.co</a>
              <a href="https://izzycode.co" rel="nofollow">http://izzycode.co</a>
              "
                Happy Street 1919"
              "
              <br />
              "
                Miami, Florida "
              "
              <br />
                USA
                "
            </address>

        </header>
        <hr />
        <ol>
          <li>
            <h3>Technical Skills</h3>
            <ul>
              <li>Languages: HTML, CSS, JavaScript</li>
              <li>Languages: HTML, CSS, JavaScript</li>
              <li>Languages: HTML, CSS, JavaScript</li>
            </ul>
            <p>A lot of ReactJs. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id animi quidem obcaecati quisquam ullam. Quos aperiam ipsum cupiditate hic cum quaerat aut qui sapiente repudiandae, sed accusantium perspiciatis, molestias.</p>
          </li>
          <li>
            <h3>Experience</h3>
            <ul>
              <li>
                <h4>
                  "The One Place ."
                  <small>2000-2010</small>
                </h4>
                <ul>
                  <li>I did this</li>
                  <li>I did that</li>

                </ul>


              </li>
              <li>
                <h4>"The Other Place "</h4>
                <small>2000-2010</small>
                <ul>
                  <li>I did this</li>
                  <li>I did that</li>
                </ul>


              </li>
            </ul>
          </li>


        </ol>



      </aside>
    )
  }
}
export default Resume;