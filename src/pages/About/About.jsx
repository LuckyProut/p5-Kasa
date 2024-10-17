import React from 'react';
import Banner from '../../components/banner/banner';
import Collapse from '../../components/collapse/collapse';
import bannerImg from "../../img/bannerImg2.jpg"
import Data from '../../data/information.json'
import './about.scss'


const About = () => {
  return (
    <>
      <Banner picture={bannerImg} />
      <section className="collapses-container">
        {Data.map((collapse) => (
          <Collapse title={collapse.title} key={collapse.title}>
            <p>{collapse.content}</p>
          </Collapse>
        ))}
      </section>
    </>
  );
};

export default About;
