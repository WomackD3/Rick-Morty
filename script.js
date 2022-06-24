const url = `https://rickandmortyapi.com/api`
const char = `https://rickandmortyapi.com/api/character`
const location = `https://rickandmortyapi.com/api/location`
const episode = `https://rickandmortyapi.com/api/episode`


fetch('https://rickandmortyapi.com/api')
  .then(res => res.json())
  .then(res => console.log(res))