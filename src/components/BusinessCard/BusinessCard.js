import About from "../About/About";
import Footer from "../Footer/Footer";
import Info from "../Info/Info";
import Interests from "../Interests/Interests";

import "./BusinessCard.css";

function BusinessCard() {
  return (
    <section className="businnes-card-container">
      <div className="businnes-card">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </section>
  );
}

export default BusinessCard;
