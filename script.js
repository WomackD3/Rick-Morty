let url = `https://rickandmortyapi.com/api`

fetch('https://rickandmortyapi.com/api')
  .then(res => res.json())
  .then(res => console.log(res))