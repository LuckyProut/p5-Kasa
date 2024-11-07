import React from 'react';
import Banner from '../../components/banner/banner';
import bannerImg from "../../img/bannerImg.png"
import Card from '../../components/card/card';
import Data from '../../data/data.json'
import '../../style/cardarray.scss'
import '../../style/home.scss';

const Home = () => {
  return (
    <>
      <Banner 
        picture={bannerImg}
        title={
          <>
            Chez vous, <br className="mobile-br" />
            partout et ailleurs
          </>
        }
      />
      <section className='location__background'>
        {Data.map((locationData) => (
          <Card
            key={locationData.id}
            id={locationData.id}
            title={locationData.title}
            cover={locationData.cover}
          />
        ))}
      </section>
    </>
  );
};

export default Home;
