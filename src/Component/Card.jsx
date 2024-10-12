import React from 'react';
import './About.css'; // Optional for styling

const Card = ({ title, content, imageUrl, altText }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-content">
        <p>{content}</p>
        {imageUrl && <img className="about_box_4_img" src={imageUrl} alt={altText} />}
      </div>
    </div>
  );
};

export default Card;