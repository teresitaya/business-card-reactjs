import "./Info.css";
import curriculum from "../images/curriculum.jpg";

function Info() {
  return (
    <div className="info-section-container">
      <img src={curriculum} alt="Curriculum" className="photo"></img>
      <h1>Maria T Rosales</h1>
      <span>Frontend Developer</span>
      <small>mtrosales.website</small>
      <div className="contact">
        <a href="mailto:teresitaya@gmail.com" target="_blank"  rel="noreferrer" className="emailBtn">
        <i className="fa-sharp fa-solid fa-envelope"></i> Email
        </a>
        <a href="https://www.linkedin.com/in/maria-teresa-rosales-gonz%C3%A1lez-b799a7123/" target="_blank"  rel="noreferrer" className="linkedInBtn">
        <i className="fa-brands fa-linkedin"></i>LinkedIn</a>
      </div>
    </div>
  );
}

export default Info;
