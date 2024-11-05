import React from 'react';
import Banner from '../../components/banner/banner';
import bannerImg from "../../img/bannerImg.png"
import CardGallery from '../../components/cardgallery/cardgallery';
import '../../style/home.scss';

const Home = () => {
  return (
    <><Banner 
        picture={bannerImg}
        title={<>
          Chez vous, <br className="mobile-br" />
          partout et ailleurs
      </>
      }
        />
      <CardGallery /></>
  );
};

export default Home;
