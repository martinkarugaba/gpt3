import React from 'react';
import './feature.scss';

const Feature = ({title, text}) => {
  return <div className='feature'>
    <div className="feature__title">
      <div /> {/* this is an empty div */ }
      <h1>{title}</h1>
    </div>
    <div className="feature__text">
      {text}
    </div>
  </div>;
};

export default Feature;
