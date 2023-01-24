class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.movies = [
      {
        title: 'The Shawshank Redemption',
        year: 1994,
        director: 'Frank Darabont',
        duration: '2h 22min',
        genre: ['Crime', 'Drama'],
        score: 9.3,
      },
      {
        title: 'The Godfather',
        year: 1972,
        director: 'Francis Ford Coppola',
        duration: '2h 55min',
        genre: ['Crime', 'Drama'],
        score: 9.2,
      },
      {
        title: 'The Godfather: Part II',
        year: 1974,
        director: 'Francis Ford Coppola',
        duration: '3h 22min',
        genre: ['Crime', 'Drama'],
        score: 9,
      },
      {
        title: 'The Dark Knight',
        year: 2008,
        director: 'Christopher Nolan',
        duration: '2h 32min',
        genre: ['Action', 'Crime', 'Drama', 'Thriller'],
        score: 9,
      },
      {
        title: '12 Angry Men',
        year: 1957,
        director: 'Sidney Lumet',
        duration: '1h 36min',
        genre: ['Crime', 'Drama'],
        score: 8.9,
      },
      {
        title: 'Schindler"s List',
        year: 1993,
        director: 'Steven Spielberg',
        duration: '3h 15min',
        genre: ['Biography', 'Drama', 'History'],
        score: 8.9,
      },
      {
        title: 'Pulp Fiction',
        year: 1994,
        director: 'Quentin Tarantino',
        duration: '2h 34min',
        genre: ['Crime', 'Drama'],
        score: 8.9,
      },
      {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
        director: 'Peter Jackson',
        duration: '3h 21min',
        genre: ['Adventure', 'Drama', 'Fantasy'],
        score: 8.9,
      },
      {
        title: 'Il buono, il brutto, il cattivo',
        year: 1966,
        director: 'Sergio Leone',
        duration: '3h 2min',
        genre: ['Western'],
        score: 8.9,
      },
      {
        title: 'Fight Club',
        year: 1999,
        director: 'David Fincher',
        duration: '2h 19min',
        genre: ['Drama'],
        score: 8.8,
      },
      {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
        director: 'Peter Jackson',
        duration: '2h 58min',
        genre: ['Adventure', 'Drama', 'Fantasy'],
        score: 8.8,
      },
      {
        title: 'Forrest Gump',
        year: 1994,
        director: 'Robert Zemeckis',
        duration: '2h 22min',
        genre: ['Comedy', 'Drama', 'Romance'],
        score: 8.8,
      },
      {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
        director: 'Irvin Kershner',
        duration: '2h 4min',
        genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
        score: 8.8,
      },
      {
        title: 'Inception',
        year: 2010,
        director: 'Christopher Nolan',
        duration: '2h 28min',
        genre: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
        score: 8.8,
      },
      {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
        director: 'Peter Jackson',
        duration: '2h 59min',
        genre: ['Adventure', 'Drama', 'Fantasy'],
        score: 8.7,
      },
      {
        title: 'One Flew Over the Cuckoo"s Nest',
        year: 1975,
        director: 'Milos Forman',
        duration: '2h 13min',
        genre: ['Drama'],
        score: 8.7,
      },
      {
        title: 'Goodfellas',
        year: 1990,
        director: 'Martin Scorsese',
        duration: '2h 26min',
        genre: ['Crime', 'Drama'],
        score: 8.7,
      },
      {
        title: 'The Matrix',
        year: 1999,
        director: 'Lana Wachowski',
        duration: '2h 16min',
        genre: ['Action', 'Sci-Fi'],
        score: 8.7,
      },
      {
        title: 'Shichinin no samurai',
        year: 1954,
        director: 'Akira Kurosawa',
        duration: '3h 27min',
        genre: ['Adventure', 'Drama'],
        score: 8.7,
      },
    ];

    this.moreMovies = [
      {
        title: 'Star Wars',
        year: 1977,
        director: 'George Lucas',
        duration: '2h 1min',
        genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
        score: 8.7,
      },
      {
        title: 'Cidade de Deus',
        year: 2002,
        director: 'Fernando Meirelles',
        duration: '2h 10min',
        genre: ['Crime', 'Drama'],
        score: 8.7,
      },
      {
        title: 'Se7en',
        year: 1995,
        director: 'David Fincher',
        duration: '2h 7min',
        genre: ['Crime', 'Drama', 'Mystery', 'Thriller'],
        score: 8.6,
      },
      {
        title: 'The Silence of the Lambs',
        year: 1991,
        director: 'Jonathan Demme',
        duration: '1h 58min',
        genre: ['Crime', 'Drama', 'Thriller'],
        score: 8.6,
      },
      {
        title: 'It"s a Wonderful Life',
        year: 1946,
        director: 'Frank Capra',
        duration: '2h 10min',
        genre: ['Drama', 'Family', 'Fantasy'],
        score: 8.6,
      },
      {
        title: 'La vita è bella',
        year: 1997,
        director: 'Roberto Benigni',
        duration: '1h 56min',
        genre: ['Comedy', 'Drama', 'War'],
        score: 8.6,
      },
      {
        title: 'The Usual Suspects',
        year: 1995,
        director: 'Bryan Singer',
        duration: '1h 46min',
        genre: ['Crime', 'Drama', 'Mystery', 'Thriller'],
        score: 8.6,
      },
      {
        title: 'Léon',
        year: 1988,
        director: 'Luc Besson',
        duration: '1h 50min',
        genre: ['Crime', 'Drama', 'Thriller'],
        score: 8.6,
      },
      {
        title: 'Saving Private Ryan',
        year: 1998,
        director: 'Steven Spielberg',
        duration: '2h 49min',
        genre: ['Drama', 'War'],
        score: 8.6,
      },
      {
        title: 'Sen to Chihiro no kamikakushi',
        year: 2001,
        director: 'Hayao Miyazaki',
        duration: '2h 5min',
        genre: ['Animation', 'Adventure', 'Family', 'Fantasy', 'Mystery'],
        score: 8.6,
      },
      {
        title: 'American History X',
        year: 1998,
        director: 'Tony Kaye',
        duration: '1h 59min',
        genre: ['Crime', 'Drama'],
        score: 8.5,
      },
      {
        title: 'C"era una volta il West',
        year: 1968,
        director: 'Sergio Leone',
        duration: '2h 44min',
        genre: ['Western'],
        score: 8.6,
      },
      {
        title: 'Interstellar',
        year: 2014,
        director: 'Christopher Nolan',
        duration: '2h 49min',
        genre: ['Adventure', 'Drama', 'Sci-Fi'],
        score: 8.6,
      },
    ];
    this.allMovies = [...this.movies, ...this.moreMovies];
    this.openModal = function () {
      var modal = document.getElementById('movieModal');
      modal.style.display = 'block';
    };

    this.closeModal = function () {
      var modal = document.getElementById('movieModal');
      modal.style.display = 'none';
    };

    this.addMovie = function (newMovie) {
      this.allMovies.push(newMovie);
      var modal = document.getElementById('movieModal');
      modal.style.display = 'none';
    };

    this.newMovie = {
      title: '',
      year: '',
      genre: [],
      director: '',
      score: '',
    };
  }
}

export default HomeCtrl;
