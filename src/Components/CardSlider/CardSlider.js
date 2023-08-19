import React, { useState } from "react";
import "./CardSlider.css"; // Create this CSS file for styling
import image1 from "../../asstes/grilled-tomatoes-1-846x846 1.png"
import image2 from "../../asstes/meal-prep-ideas-846x846 1.png"
import image3 from "../../asstes/meal-prep-ideas-846x846 1 (1).png"
import image4 from "../../asstes/grilled-tomatoes-1-846x846 1 (1).png"
import image5 from "../../asstes/meal-prep-ideas-846x846 1 (2).png"
import image6 from "../../asstes/meal-prep-ideas-846x846 1 (3).png"


const cardsData = [
  {
    id: 1,
    image: image1,
    title: "Grilled  Tomatoes at Home",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    id: 2,
    image: image2,
    title: "Snacks for Travel",
    description:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
},
  {
    id: 3,
    image: image3,
    title: "Post-workout Recipes",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
},
  {
    id: 4,
    image: image4,
    title: "How To Grill Corn",
    description:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
},
  {
    id: 3,
    image: image5,
    title: "Crunchwrap Supreme",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
},
  {
    id: 6,
    image:image6,
    title: "Broccoli Cheese Soup",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
},
  // ... Repeat for other cards
];

const CardSlider = () => {
  const [activePage, setActivePage] = useState(1);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  const handleNextPage = () => {
    setActivePage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setActivePage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (activePage - 1) * cardsPerPage;
  const visibleCards = cardsData.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="card-slider-container">
      <div className="silder-box">
        <div className="Silder-heading">Latest Articles</div>

        <div className="slider">
          {visibleCards.map((card) => (
            <div className="card" key={card.id}>
                <div className="card-box-1">
                <img src={card.image} alt={card.title} className="cardimg" />
             
                </div>
                <div className="card-box-2">
                    <div className="card-heading">
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    </div>
                    <div>
                    <button className="card-button">Read More</button>
                    </div>
                
              
                </div>
              
            </div>
          ))}

        </div>
        <div className="pagination">
        <button className="prev" onClick={handlePrevPage}>&lt;</button>
        <div className="page-indicator">
          {activePage}/{totalPages}
        </div>
        <button className="next" onClick={handleNextPage}>&gt;</button>
      </div>
      </div>
      
    </div>
  );
};

export default CardSlider;
