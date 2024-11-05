import { useState} from "react";
import '../../style/collapse.scss'

import icon from "../../img/arrowup.png";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);

    
  };

  return (
    <div className="collapse">
      <button className="collapse__button" onClick={toggleCollapse}>
        {title}
        <img src={icon} className={isOpen ? 'rotated' : ''} alt="collapse icon" />
      </button>
      <div className={`collapse__content ${isOpen ? 'show' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;