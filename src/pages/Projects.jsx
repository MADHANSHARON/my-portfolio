import './Projects.css';

function Projects() {
  return (
    <div className="projects-page">
      <h2>My Projects</h2>

      {/* === Full Stack Projects === */}
      <h3 className="segment-title"> Full Stack Projects</h3>
      <div className="project-row">

        <div className="project-card">
          <div className="project-card-content">
            <h3>Food Waste Donation System</h3>
            <p>A MERN stack app that connects food donors with NGOs to reduce food waste and hunger.</p>
            <div className="project-links">
              <a href="https://food-donation-app.netlify.app" target="_blank" rel="noreferrer">Live Demo</a>
              <a href="https://github.com/MadhanSharon/food-donation-system" target="_blank" rel="noreferrer">View Code</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card-content">
            <h3>Product Posting App</h3>
               <p>A full-stack MERN application where users can create and view products. Each product has a unique ID and route.</p>
            <div className="project-links">
              <a href="https://madhan-login-app.netlify.app" target="_blank" rel="noreferrer">Live Demo</a>
              <a href="https://github.com/MadhanSharon/login-app" target="_blank" rel="noreferrer">View Code</a>
            </div>
          </div>
        </div>

      </div>

     
      <h3 className="segment-title"> Frontend Projects</h3>
      <div className="project-row">

        <div className="project-card">
          <div className="project-card-content">
            <h3>Weather App</h3>
            <p>A responsive weather checking app using React and a public API.</p>
            <div className="project-links">
              <a href="https://madhansharon.github.io/Weather-app/" target="_blank" rel="noreferrer">Live Demo</a>
              <a href="https://github.com/MADHANSHARON/Weather-app/tree/master/src" target="_blank" rel="noreferrer">View Code</a>
            </div>
          </div>
        </div>
        <div className="project-card">
    <div className="project-card-content">
      <h3>University Portfolio</h3>
      <p>A professional portfolio website built using React and Vite to show the information about the university.</p>
      <div className="project-links">
        <a href="https://madhansharon.github.io/University/" target="_blank" rel="noreferrer">Live Demo</a>
        <a href="https://github.com/MADHANSHARON/University/tree/main/src" target="_blank" rel="noreferrer">View Code</a>
      </div>
    </div>
  </div>

      </div>
    </div>
  );
}

export default Projects;
