import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/FilterList';
import AddMovie from './components/AddMovie';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'The Dark Knight',
      description: 'A heroic battle against the Joker',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
      rating: 4.9,
    },
    {
      title: 'Avengers: Endgame',
      description: 'The Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
      posterURL: 'https://m.media-amazon.com/images/I/91bQzd+HWHL._AC_UF1000,1000_QL80_.jpg',
      rating: 4.8,
    },
    {
      title: 'Wonder Woman',
      description: 'When an American pilot crashes on the shores of her sheltered island paradise, Diana, an Amazonian princess, learns of a conflict raging in the outside world.',
      posterURL: 'https://musicart.xboxlive.com/7/629e5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
      rating: 4.7,
    },
    {
      title: 'Black Panther',
      description: 'T\'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZbr2QKZB8Z4iSVtAra9ydwMQB7GGm7w-aw&s',
      rating: 4.7,
    },
    {
      title: 'Man of Steel',
      description: 'Clark Kent, one of the last of an extinguished race disguised as an unremarkable human, is forced to reveal his identity when Earth is invaded by an army of survivors who threaten to bring the planet to the brink of destruction.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_jDhJvXGUYstuokLgTWpmfE2CWd91yM7Og&s',
      rating: 4.6,
    },
    {
      title: 'Spider-Man: Homecoming',
      description: 'Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.',
      posterURL: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/03/spider-man-with-spidey-sense.jpg?q=50&fit=contain&w=943&h=&dpr=1.5',
      rating: 4.6,
    },
  ]);
  

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating === '' || movie.rating >= parseFloat(filterRating))
    );
  });

  return (
    <div className="App">
      <h1>Movie List</h1>
      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
