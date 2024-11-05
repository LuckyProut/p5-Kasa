import React from 'react';
import starActive from "../../img/staractive.png";
import starInactive from "../../img/starinactive.png";
import '../../style/rating.scss';


function Rating({rating}) {
    const notes = [1, 2, 3, 4, 5];
    return (
      <div className="rating__contenair">
        {notes.map((rating) =>
          rating >= rating ? (
            <img
              key={rating.toString()}
              className="star"
              src={starActive}
              alt="étoile pleine"
            />
          ) : (
            <img
              key={rating.toString()}
              className="star"
              src={starInactive}
              alt="étoile vide"
            />
          )
        )}
      </div>
    );
}

export default Rating;