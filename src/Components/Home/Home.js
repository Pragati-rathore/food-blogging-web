import "./Home.css";
import FoodTruck from "../../asstes/foodTruck.png";
import About from "../About/About";
import Pizza from "../../asstes/Rectangle\ 400.png";

function Home() {
  return (
    <div>
      <div className="Box">
        <div className="flex-row">
          <div className="left-column">
            <div className="icon">
              <img src={FoodTruck} alt="foof truck" />
            </div>
            <div className="heading">
              <div className="heading1">
                Discover the
                <span className="best"> Best</span> Food and Drinks
              </div>
              <div className="para">
                <p>
                  Naturally made Healthcare Products for the better care &
                  support of your body.
                </p>
              </div>
              <button className="button">Explore Now!</button>
            </div>
          </div>
          <div className="right-column">
            <div className="img">
              <img src={Pizza} alt="img1" className="Pizza"/>
            </div>
          </div>
        </div>
      </div>
      <div >
     
      </div>
      
    </div>
    
  );
}

export default Home;
