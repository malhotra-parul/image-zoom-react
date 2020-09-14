import React, { useState } from "react";
import ImageZoom from "../imageZoom/ImageZoom";

export default function ImageContainer({ srcUrl }) {
  const [isActive, setIsActive] = useState(false);
  console.log(srcUrl);

  const onClose = () => {
    setIsActive(false);
  };

  const onZoom = () => {
    setIsActive(true);
  };
  return (
    <ImageZoom
      isActive={isActive}
      imageURL={srcUrl}
      onZoom={onZoom}
      onClose={onClose}
    />
  );
}
