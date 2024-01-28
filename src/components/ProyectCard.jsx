import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './css/Card.css';

const ProyectCard = (props) => {
  const { title, text, image, link } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    width: '25rem',
    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <Card
      className='custom-card'
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card.Img className="custom-card-img" variant="top" src={image} />
      <Card.Body>
        <Card.Title className='custom-card-title'>{title}</Card.Title>
        <Card.Text className='custom-card-text'>
          {text}
        </Card.Text>
        <Card.Link className="custom-card-link" href={link}>Ir al proyecto</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProyectCard;
