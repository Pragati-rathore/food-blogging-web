import React, { useState } from "react";
import "./CardSlider.css"; // Create this CSS file for styling

const cardsData = [
  {
    id: 1,
    image: "image-url-1.jpg",
    title: "Card 1",
    description: "Description for Card 1",
  },
  {
    id: 2,
    image: "image-url-1.jpg",
    title: "Card 2",
    description: "Description for Card 1",
  },
  {
    id: 3,
    image: "image-url-1.jpg",
    title: "Card 3",
    description: "Description for Card 1",
  },
  {
    id: 4,
    image: "image-url-1.jpg",
    title: "Card 4",
    description: "Description for Card 1",
  },
  {
    id: 3,
    image: "image-url-1.jpg",
    title: "Card 5",
    description: "Description for Card 1",
  },
  {
    id: 6,
    image: "image-url-1.jpg",
    title: "Card 6",
    description: "Description for Card 1",
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
                <img src={card.image} alt={card.title} />
             
                </div>
                <div className="card-box-2">
                <h2>{card.title}</h2>
              <p>{card.description}</p>
              <button>Button</button>
                </div>
              
            </div>
          ))}
        </div>
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage}>&lt;</button>
        <div className="page-indicator">
          {activePage}/{totalPages}
        </div>
        <button onClick={handleNextPage}>&gt;</button>
      </div>
    </div>
  );
};

export default CardSlider;
