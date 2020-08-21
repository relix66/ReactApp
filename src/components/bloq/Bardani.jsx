import React from 'react';

const Bardani = ({ member }) => {
  return(
    <div className="bardani">
      <p className="name">{member.name}</p>
      <img src={member.img} alt={member.name} />
      {member.aliases.length > 0 &&
        <p>Also known as:</p>
      }
      {member.aliases.map((alias) => {
        return <p key={alias}>{alias}</p>
      })}
    </div>
  )
};

export default Bardani;
