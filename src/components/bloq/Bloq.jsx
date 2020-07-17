import React from 'react';

import Bardani from './Bardani.jsx';
import Bardanis from '../../bardanis.json';
import Gallery from './Gallery.jsx';

const Bloq = () => {
  return (
    <div className="bloq">
      <h2>Bardani family</h2>
      <img src="https://i.imgur.com/xwGJCGm.png" alt="Bardani family" />
      <div className="bardanis">
        {Bardanis.map((data) => {
          return <Bardani key={data.name} data={data} />;
        })}
      </div>
      <Gallery />
    </div>
  );
};

export default Bloq;
