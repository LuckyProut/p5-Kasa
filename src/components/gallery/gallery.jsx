import React, { useState } from 'react';
import './gallery.scss';
import left from "../../img/left.png";
import right from "../../img/right.png";

const Gallery = ({ pictures, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPrevious = () => {
      const isFirstImage = currentIndex === 0;
      const newIndex = isFirstImage ? pictures.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const goToNext = () => {
      const isLastImage = currentIndex === pictures.length - 1;
      const newIndex = isLastImage ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    return (
        <div className="gallery">
          {pictures.length > 1 && (
            <img 
              src={left} 
              className="gallery__button gallery__button--left" 
              alt="Précédent" 
              onClick={goToPrevious} 
            />
          )}
          <img src={pictures[currentIndex]} alt={title} className="gallery__image" />
          {pictures.length > 1 && (
            <img 
              src={right} 
              className="gallery__button gallery__button--right" 
              alt="Suivant" 
              onClick={goToNext} 
            />
          )}
          {pictures.length > 1 && (
            <div className="image__counter">
              {currentIndex + 1} / {pictures.length}
            </div>
          )}
        </div>
      );
};

export default Gallery;
