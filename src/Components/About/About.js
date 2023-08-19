import "./About.css";
import AboutImg from "../../asstes/about-img.png";

function About() {
  return (
    <div >
      <div className="container">
        <div className="left-box">
          <img className="" src={AboutImg} alt="AboutImg" />
        </div>
        <div className="right-box">
          <div className="box-1">
            <h2>About Us</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. t has survived
              not only five centuries.
            </p>
          </div>

          <button className="box-2">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
