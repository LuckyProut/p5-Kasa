import React from 'react';
import '../../style/host.scss'

function Host({name, picture}) {
    return (
      <>
    <div className='host__container'>
        <p className="host__container__name">{name}</p>
        <img
          className="host__container__picture"
          src={picture}
          alt="propriétaire"
        />
    </div>
      </>
    );
}

export default Host;