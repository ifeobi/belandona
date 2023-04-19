import React, { useState } from "react";
import Image from "next/image";

function ImageWithHover({ src, alt }) {
  const [hovered, setHovered] = useState(false);

  function handleMouseOver() {
    setHovered(true);
  }

  function handleMouseOut() {
    setHovered(false);
  }

  return (
    <Image
      src={hovered ? `${src}-hovered.png` : `${src}.png`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      alt={alt}
      height={900}
      width={1000}
    />
  );
}

export default ImageWithHover;
