import React from 'react';
import Card from '../../components/card/card';
import Data from '../../data/data.json'

const CardArray = ({ data }) => {
    return (
        <section className='location-background'>
        {Data.map((locationData) => (
          <Card
            key={locationData.id}
            id={locationData.id}
            title={locationData.title}
            cover={locationData.cover}
          />
        ))}
      </section>
    );
  };

  export default CardArray;