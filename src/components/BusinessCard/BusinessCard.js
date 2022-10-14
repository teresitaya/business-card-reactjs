import About from "../About/About";
import Footer from "../Footer/Footer";
import Info from "../Info/Info";
import Interests from "../Interests/Interests";

import "./BusinessCard.css";

function BusinessCard(props) {
  return (
    <section className="businnes-card-container">
      <div className={"businnes-card "+ props.mode}>
        <Info mode={props.mode} />
       <div className="content-section">
       <About />
        <Interests />
       </div>
        <Footer />
      </div>
    </section>
  );
}

export default BusinessCard;
