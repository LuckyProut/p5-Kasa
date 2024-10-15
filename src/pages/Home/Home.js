import React from 'react';
import Banner from '../../components/banner/banner';
import Card from '../../components/card/card';
import bannerImg from "../../img/bannerImg.png"

const Home = () => {
  return (
    <><Banner 
        picture={bannerImg}
        title="Chez vous, partout et ailleurs"
        />
      <Card /></>
  );
};

export default Home;
