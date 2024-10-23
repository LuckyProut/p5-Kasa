import React from 'react';
import Banner from '../../components/banner/banner';
import bannerImg from "../../img/bannerImg.png"
import CardArray from '../../components/cardarray/CardArray';
import '../../style/home.scss';

const Home = () => {
  return (
    <><Banner 
        picture={bannerImg}
        title={<>
          Chez vous,<br className="mobile-br" />
          partout et ailleurs
      </>
      }
        />
      <CardArray /></>
  );
};

export default Home;
