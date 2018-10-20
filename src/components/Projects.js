import projects from '../data/projects.json';
import React from 'react';
import Project from './Project'

class Projects extends React.Component {
  render() {

    return(
      <section id="portfolio">
        <a href="#">
          <i className="far fa-arrow-alt-circle-up"></i>
        </a>

        <header id="projects">
            <h1>My Projects</h1>
            <p>These are some of my projects</p>
        </header>
        <div id="projects">
            {projects.allProjects.map((e, i) => {
              return (
                <Project title={e.title} description={e.description} imgName={e.imgName} key={i} />
              )
            })}
        </div>
      </section>




    )
  }
}

export default Projects;
