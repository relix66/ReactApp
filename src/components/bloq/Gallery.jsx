import React, { useState } from 'react';

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const images = [
    'https://i.imgur.com/PgQH8fw.jpg',
    'https://i.imgur.com/tEjifkq.jpg',
    'https://i.imgur.com/yp9ZxdP.jpg',
    'https://i.imgur.com/gi67ffx.jpg',
    'https://i.imgur.com/vGnudHN.jpg',
  ];

  const changeIndex = (direction) => {
    const newIndex = index + direction;

    if (newIndex >= 0 && newIndex <= images.length - 1) {
      setIndex(newIndex);
    }
  };

  return (
    <div className="gallery">
      <img src={images[index]} alt="Bardani family" />
      <div className="buttons">
        {index !== 0 && <button onClick={() => changeIndex(-1)}>Previous</button>}
        {index !== images.length - 1 && <button onClick={() => changeIndex(1)}>Next</button>}
      </div>
    </div>
  );
};

export default Gallery;
