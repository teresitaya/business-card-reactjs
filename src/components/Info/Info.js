import "./Info.css";
import curriculum from "../images/curriculum.jpg";

function Info(props) {
  return (
    <div className="info-section-container">
      <img src={curriculum} alt="Curriculum" className="photo"></img>
      <h1>Laura Smith</h1>
      <span>Frontend Developer</span>
      <small>laurasmith.website</small>
      <div className="contact">
        <a href="mailto:mailto@gmail.com" target="_blank"  rel="noreferrer" className={`emailBtn ${props.mode} ${!props.hasLinkedin ? "emailBtnOnly": ""}` }>
        <i className="fa-sharp fa-solid fa-envelope"></i> Email
        </a>
        {props.hasLinkedin && <a href="https://www.linkedin.com/in/profileid/" target="_blank"  rel="noreferrer" className={"linkedInBtn " + props.mode}>
        <i className="fa-brands fa-linkedin"></i>LinkedIn</a>}
      </div>
    </div>
  );
}

export default Info;
