import React, { useState } from "react";
import { images } from "./images";
import ImageContainer from "../imageContainer/imageContainer";
import "./styles.css";

const ImageSlider = () => {
  const [image, setImage] = useState("");
  const handleClick = (e) => {
    console.log(e.target.src);
    setImage(e.target.src);
  };

  const imagesToShow = images.map((img) => (
    <div key={img.id}>
      <img src={img.url} alt={img.alt} onClick={handleClick} />
    </div>
  ));
  return (
    <div className="imageWrapper">
      <div className="imageSlides">{imagesToShow}</div>
      {image && <ImageContainer srcUrl={image} />}
    </div>
  );
};

export default ImageSlider;
