interface Movie {
  id: number;
  title: string;
  director: string;
  year: number;
  genre: string;
  duration: number;
  description: string;
  rating: number;
  image: string;
}
const movies : Movie[] = [
  {
    id: 1,
    title: 'Spider-Man',
    director: 'Sam Raimi',
    year: 2002,
    genre: 'Acción',
    duration: 121,
    description: 'Peter Parker, un joven estudiante, se convierte en el superhéroe Spider-Man después de ser mordido por un arácnido radiactivo.',
    rating: 7.4,
    image: 'https://m.media-amazon.com/images/M/MV5BNmY2YmE3NzgtYTE3Ny00MGY0LTk0MmQtYTI5NTc0MDQ5ZmM4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
    {
    id: 2,
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    year: 2008,
    genre: 'Acción',
    duration: 152,
    description: 'Batman se enfrenta al Joker, un criminal  psicópata que busca sumir a Gotham en el caos.',
    rating: 9.1,
    image: 'https://m.media-amazon.com/images/M/MV5BN2U3NmZjMTYtY2JhOS00NzU4LWJkMDAtZjFmZjAyN2ZlMTMxXkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: 3,
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
    genre: 'Ciencia ficción',
    duration: 148,
    description: 'Un ladrón especializado en robar secretos a través de los sueños es contratado para implantar una idea en la mente de un objetivo.',
    rating: 8.8,
    image: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_UF894,1000_QL80_.jpg',
  },
  {
    id: 4,
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    year: 1994,
    genre: 'Drama',
    duration: 142,
    description: 'La historia de un hombre condenado a cadena perpetua que encuentra la esperanza y la amistad en la prisión de Shawshank   .',
    rating: 9.3,
    image: 'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 5,
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    year: 1994,
    genre: 'Crimen',
    duration: 154,
    description: 'La película entrelaza varias historias de crimen en Los Ángeles, con diálogos ingeniosos y violencia estilizada.',
    rating: 8.9,
    image: 'https://m.media-amazon.com/images/I/81UTs3sC5hL._AC_UF894,1000_QL80_.jpg',
  },
  {
    id: 6,
    title: 'The Matrix',
    director: 'Lana Wachowski, Lilly Wachowski',
    year: 1999,
    genre: 'Ciencia ficción',
    duration: 136,
    description: 'Un hacker descubre que la realidad que percibe es una simulación creada por máquinas inteligentes y se une a la resistencia para luchar contra ellas.',
    rating: 8.7,
    image: 'https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 7,
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    director: "Robert Zemeckis",
    duration: 142,
    rating: 8.8,
    image: "https://m.media-amazon.com/images/M/MV5BYTIxMzBjYzUtMDYwOC00OTFmLTllNmMtYTYxNjFhOTViM2YyXkEyXkFqcGc@._V1_.jpg",
    description:"Un hombre de gran corazón participa accidentalmente en importantes acontecimientos históricos."
  },
  { id: 8,
    title: "Fight Club",
    year: 1999,
    genre: "Drama",
    director: "David Fincher",
    duration: 139,
    rating: 8.8,
    image: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:"Un oficinista insatisfecho crea un club secreto junto a un misterioso vendedor de jabón."
  },
  {
    id: 9,
    title: "Goodfellas",
    year: 1990,
    genre: "Crimen",
    director: "Martin Scorsese",
    duration: 145,
    rating: 8.7,
    image: "https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_.jpg",
    description:
      "Un joven se introduce en el mundo del crimen organizado y conoce sus beneficios y consecuencias."
  },
  {
    id: 10,
    title: "Interstellar",
    year: 2014,
    genre: "Ciencia ficción",
    director: "Christopher Nolan",
    duration: 169,
    rating: 8.7,
    image: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
    description:
      "Un grupo de astronautas viaja por el espacio en busca de un nuevo hogar para la humanidad."
  },
  {
    id: 11,
    title: "Parasite",
    year: 2019,
    genre: "Suspenso",
    director: "Bong Joon-ho",
    duration: 132,
    rating: 8.5,
    image: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg",
    description:
      "Una familia con dificultades económicas comienza a trabajar para una familia adinerada."
  },
  {
    id: 12,
    title: "Gladiator",
    year: 2000,
    genre: "Acción",
    director: "Ridley Scott",
    duration: 155,
    rating: 8.5,
    image: "https://picsum.photos/seed/gladiator/400/600",
    description:
      "Un general romano traicionado busca justicia mientras lucha como gladiador."
  },
  {
    id: 13,
    title: "The Lion King",
    year: 1994,
    genre: "Animación",
    director: "Roger Allers y Rob Minkoff",
    duration: 88,
    rating: 8.5,
    image: "https://picsum.photos/seed/lionking/400/600",
    description:
      "Un joven león debe aceptar su destino y recuperar el reino que le pertenece."
  },
  {
    id: 14,
    title: "Whiplash",
    year: 2014,
    genre: "Drama",
    director: "Damien Chazelle",
    duration: 106,
    rating: 8.5,
    image: "https://picsum.photos/seed/whiplash/400/600",
    description:
      "Un joven baterista se enfrenta a un exigente profesor que busca llevarlo al límite."
  },
  {
    id: 15,
    title: "Back to the Future",
    year: 1985,
    genre: "Aventura",
    director: "Robert Zemeckis",
    duration: 116,
    rating: 8.5,
    image: "https://picsum.photos/seed/backfuture/400/600",
    description:
      "Un adolescente viaja accidentalmente al pasado en una máquina del tiempo."
  },
  {
    id: 16,
    title: "Spirited Away",
    year: 2001,
    genre: "Animación",
    director: "Hayao Miyazaki",
    duration: 125,
    rating: 8.6,
    image: "https://picsum.photos/seed/spiritedaway/400/600",
    description:
      "Una niña entra en un mundo mágico y debe encontrar la forma de salvar a sus padres."
  },
  {
    id: 17,
    title: "Coco",
    year: 2017,
    genre: "Animación",
    director: "Lee Unkrich",
    duration: 105,
    rating: 8.4,
    image: "https://picsum.photos/seed/coco/400/600",
    description:
      "Un niño apasionado por la música viaja al mundo de los muertos para conocer su historia familiar."
  },
  {
    id: 18,
    title: "Joker",
    year: 2019,
    genre: "Drama",
    director: "Todd Phillips",
    duration: 122,
    rating: 8.3,
    image: "https://picsum.photos/seed/joker/400/600",
    description:
      "Un hombre marginado por la sociedad comienza una transformación que causa caos en la ciudad."
  },
  {
    id: 19,
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Acción",
    director: "Anthony y Joe Russo",
    duration: 181,
    rating: 8.4,
    image: "https://picsum.photos/seed/endgame/400/600",
    description:
      "Los héroes sobrevivientes se reúnen para intentar revertir una tragedia universal."
  },
  {
    id: 20,
    title: "The Truman Show",
    year: 1998,
    genre : "Comedia dramática",
    director: "Peter Weir",
    duration: 103,
    rating: 8.2,
    image: "https://picsum.photos/seed/trumanshow/400/600",
    description:
      "Un hombre comienza a sospechar que toda su vida forma parte de un programa de televisión."
  }
];

export default movies;      
  