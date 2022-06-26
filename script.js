function fetchData() {
  fetch(`https://rickandmortyapi.com/api`).then(res => {
    return res.json();
  }).then(data => {
    console.log(data)
      
      ;    })
}

fetchData()




// const menu = document.querySelector(".menu")
// const navMenu = document.querySelector(".nav-menu")
// const url = `https://rickandmortyapi.com/api`
// const char = `https://rickandmortyapi.com/api/character`
// const episode = `https://rickandmortyapi.com/api/episode`


// menu.addEventListener("click", () => {
//   menu.classList.toggle("active");
//   navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(e => e.addEventListener("click", () => {
//   menu.classList.remove("active");
//   navMenu.classList.remove("active");
// } ))
// let handleRezise = () => {
//   if(window.innerWidth < 950){
//     console.log(window.innerWidth)
//   }
// }

// window.addEventListener("resize", handleRezise)

