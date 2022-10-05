import React, { useEffect } from 'react';
import { videos, photos } from '../../data';
import './style.scss';
import { gsap } from 'gsap';

function VideoElement({ src }: any) {
  return (
    <div className="hero-element">
      <video
        className="collage-element"
        playsInline
        autoPlay
        webkit-playsinline=""
        src={src}
      ></video>
    </div>
  );
}

function ImageElement({ src }: any) {
  return (
    <div className="hero-element">
      <img src={src} className="collage-element" alt="" />
    </div>
  );
}

const HeroCollage = () => {
  const leftImages = photos.slice(0, 2);
  const rightImages = photos.slice(2, photos.length);
  const [leftVideo, rightVideo] = videos;

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.5,
    });

    tl.fromTo(
      '.hero-element',
      { y: 300 },
      {
        y: 0, 
        duration: 1,
        delay: function (index) {
          return 0.2 * index;
        },
      }
    );
  });

  return (
    <div className="hero-collage">
      <div className="left-column">
        {leftImages.map((src) => (
          <ImageElement key={src} src={src} />
        ))}
        <VideoElement src={leftVideo} />
      </div>
      <div className="right-column">
        <VideoElement src={rightVideo} />
        {rightImages.map((src) => (
          <ImageElement key={src} src={src} />
        ))}
      </div>
    </div>
  );
};

export default HeroCollage;
