import React from 'react';
import Banner from '../../components/banner/banner';
import bannerImg from "../../img/bannerImg.png"
import CardArray from '../../components/cardarray/CardArray';

const Home = () => {
  return (
    <><Banner 
        picture={bannerImg}
        title="Chez vous, partout et ailleurs"
        />
      <CardArray /></>
  );
};

export default Home;
