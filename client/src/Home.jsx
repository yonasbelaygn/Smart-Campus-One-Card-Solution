import { useEffect } from 'react';
import React, {useState} from 'react';
import a from "./images/7.jpg"
import b from "./images/hab.jpg"
import c from "./images/d.jpg"
import d from "./images/h.jpg"
import e from "./images/dt.jpg"
import f from "./images/dtu.jpg"
const Home =()=> {
  // Array of image URLs
  const images = [
    a,
    b,
    c,
    d,
    e,
    f
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Automatically change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // 5000ms = 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div style={styless.slider}>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        style={styless.image}
      />
    </div>
  );
};

// Styles for the slider
const styless = {
  slider: {
    width: "600px",
    height: "400px",
    margin: "0 auto",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  image: {
    width: "80%",
    height: "80%",
    objectFit: "cover",
  },
};

export default Home