import React from 'react';
import './Card.css';

// This component receives props for a single project
function Card({ title, description, imageUrl, tags }) {
  return (
    <div className="card">
      {/* Column 1: Image Container */}
      <div className="card-image-container">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>
      
      {/* Column 2: Content Container */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-tags">
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;