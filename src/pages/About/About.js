import React from 'react';
import Banner from '../../components/banner/banner';
import Collapse from '../../components/collapse/collapse';
import bannerImg from "../../img/bannerImg2.jpg"
import Data from '../../data/information.json';


const About = () => {
  return (
    <><Banner
      picture={bannerImg} />
      <Collapse data={Data}
      /></>
  )
};

export default About;
