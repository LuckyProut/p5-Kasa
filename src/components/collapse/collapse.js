import { useState, useRef, useEffect } from "react";
import './collapse.scss'
import arrowUp from "../../img/arrowup.png"
import Data from '../../data/information.json'




const Collapse = ({ title, content }) => {
  const [openStates, setOpenStates] = useState([]);

  const contentRefs = useRef([]);

  const display = (index) => {
    setOpenStates((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  useEffect(() => {
    openStates.forEach((isOpen, index) => {
      if (isOpen && contentRefs.current[index]) {
        contentRefs.current[index].style.height = `${contentRefs.current[index].scrollHeight}px`;
      } else if (contentRefs.current[index]) {
        contentRefs.current[index].style.height = "0px";
      }
    });
  }, [openStates]);

  return (
    <section className='collapse-background'>
      {Data.map(({ title, content }, index) => (
        <div key={index} className="collapse__dropdown__container">
          <div className="collapse__dropdown__title">
            <h2>{title}</h2>
            <p onClick={() => display(index)}>
              <img
                src={arrowUp}
                alt="arrow"
                className={openStates[index] ? "rotated" : "normal"}
              />
            </p>
          </div>
          <div
            className="collapse__dropdown__content"
            ref={(el) => (contentRefs.current[index] = el)} 
            style={{ height: "0px" }} 
          >
            <p>{content}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Collapse;