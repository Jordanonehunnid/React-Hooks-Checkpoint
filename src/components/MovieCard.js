import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({ movie }) => {
  return (
    <Card style={styles.card}>
      <Card.Img variant="top" src={movie.posterURL} style={styles.image} />
      <Card.Body style={styles.body}>
        <Card.Title style={styles.title}>{movie.title}</Card.Title>
        <Card.Text style={styles.text}>{movie.description}</Card.Text>
        <Card.Text style={styles.rating}>Rating: {movie.rating}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const styles = {
  card: {
    width: '18rem',
    margin: '10px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    height: '270px', // Set a fixed height to maintain aspect ratio
    objectFit: 'cover', // Ensure the image covers the area without distortion
  },
  body: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '15px',
    height: '220px', // Fixed height for consistency
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '15px',
    flex: '1', // Allow text to take up available space
  },
  rating: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#007bff',
  },
};

export default MovieCard;
