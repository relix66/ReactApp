import React from 'react';

import Bardani from './Bardani.jsx';
import Gallery from './Gallery.jsx';
import Bardanis from '../../bardanis.json';

const Bloq = () => {
  return (
    <div className="bloq">
      <h2>Bardani family</h2>
      <img src="https://i.imgur.com/xwGJCGm.png" alt="Bardani family" />
      <div className="bardanis">
        {Bardanis.map((member) => {
          return <Bardani key={member.name} member={member} />;
        })}
      </div>
      <Gallery />
    </div>
  );
};

export default Bloq;
