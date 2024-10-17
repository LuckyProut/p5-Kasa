import React from "react";
import "./tag.scss";

function Tag({tags}) {
    return (
      <div className="tag__container">
        {tags.map((tag, index) => (
          <span key={index} className="tag__container__button">
            {tag}
          </span>
        ))}
      </div>
    );
  }
  
  export default Tag;