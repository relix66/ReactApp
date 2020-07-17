import React from 'react';

const Bardani = ({ data }) => {
  return(
    <div className="bardani">
      <p><strong>{data.name}</strong></p>
      <img src={data.img} alt={data.name} />
      {data.aliases.length > 0 &&
        <p>Also known as:</p>
      }
      {data.aliases.map((alias) => {
        return <p key={alias}>{alias}</p>
      })}
    </div>
  )
};

export default Bardani;
