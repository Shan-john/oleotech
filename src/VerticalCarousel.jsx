import React, { useState } from 'react';
import './VerticalCarousel.css';

const images = [
  'https://picsum.photos/id/1011/400/400',
  'https://picsum.photos/id/1025/400/400',
  'https://picsum.photos/id/1035/400/400',
  'https://picsum.photos/id/1043/400/400',
  'https://picsum.photos/id/1059/400/400',
  'https://picsum.photos/id/1069/400/400',
];

export default function VerticalCarousel() {
  const [index, setIndex] = useState(0);

  const rotate = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `rotateX(-${index * (360 / images.length)}deg)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="carousel-slide">
            <img src={img} alt={`Slide ${i}`} />
          </div>
        ))}
      </div>
      <button onClick={rotate} className="rotate-btn">↓ Rotate</button>
    </div>
  );
}
