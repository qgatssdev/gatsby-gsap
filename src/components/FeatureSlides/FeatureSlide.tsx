import React, { useRef, useEffect } from 'react';

import useOnScreen from '../../hooks/useOnScreen';

const FeatureSlide = ({
  title,
  description,
  updateActiveImage,
  index,
}: any) => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      console.log(index);
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div ref={ref} className="feature-slide">
      <h3 className="feature-slide-title">{title}</h3>
      <p className="feature-slide-description">{description}</p>
    </div>
  );
};

export default FeatureSlide;
