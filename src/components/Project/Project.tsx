import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        

       
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
              <a href="https://github.com/MrCurious-glitch/PasteApp" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://paste-app-nu-virid.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Notes App</h3>
              <p>  A dynamic web application built with a ReactJS as frontend library, leveraging a use of redux toolkit for state management. It fully implements CRUD operations, allowing users to efficiently create, read, update, and delete text pastes through an intuitive interface. </p>
            </div>
            
            <footer> <ul className="tech-list"> <li>React</li> <li>React-redux</li> <li>Tailwind CSS</li> <li>JS</li> </ul> </footer>
          </div>
        </ScrollAnimation>
         <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
              <a href="https://github.com/MrCurious-glitch/boxwich-master" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://boxwich-master.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>SEO optimized website</h3>
              <p>Designed and developed a responsive static website for a client, utilizing modern front-end technologies to ensure fast loading times and a seamless user experience across all devices. The project involved custom UI design and clean code implementation. </p>      </div>
            
            <footer> <ul className="tech-list"> <li>HTML</li> </ul> </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
              <a href="https://github.com/MrCurious-glitch/transform-text" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://github.com/MrCurious-glitch/transform-text" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>text transform App</h3>
              <p>A versatile text transformation tool that efficiently cleans strings by removing all spaces, converts input into binary format, and applies an uppercase conversion to every word, streamlining data formatting tasks with ease. </p>      </div>
            
            <footer> <ul className="tech-list"> <li>HTML</li> </ul> </footer>
          </div>
        </ScrollAnimation>
        

      </div>
    </Container>
  );
}