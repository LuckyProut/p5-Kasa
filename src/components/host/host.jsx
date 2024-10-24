import React from 'react';
import '../../style/host.scss'

function Host(props) {
    return (
      <>
    <div className='host__container'>
        <p className="host__container__name">{props.name}</p>
        <img
          className="host__container__picture"
          src={props.picture}
          alt="Photo du propriétaire"
        />
    </div>
      </>
    );
}

export default Host;