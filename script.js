
const menu = document.querySelector(".menu")
const navMenu = document.querySelector(".nav-menu")
const url = `https://rickandmortyapi.com/api`
const char = `https://rickandmortyapi.com/api/character`
const episode = `https://rickandmortyapi.com/api/episode`
const divImg = document.querySelectorAll('.div-img')

const imgContainer = document.querySelector('.img-container')
const images = [];


fetch(char)
  .then(res => res.json())
  .then(data => { 
    for (let i = 0; i < 20; i++) {
      let info = `
      <div class="img-div">
          <h2>${data.results[i].name}</h2>
        <img class="div-img" src="${data.results[i].image}">
      </div>`
      console.log(data)
      imgContainer.insertAdjacentHTML('beforeend', info)
    }
    const imgDivs = document.querySelectorAll('.img-div')
    imgDivs.forEach((imgDiv, i) => {
      imgDiv.addEventListener('click', () => xtraInfo(data.results[i]))
    })
  })

function xtraInfo(data) {
    console.log(data)
  }


let handleRezise = () => {

  menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

  document.querySelectorAll(".nav-link").forEach(e => e.addEventListener("click", () => {
    menu.classList.remove("active");
    navMenu.classList.remove("active");
  }))
  if (window.innerWidth < 950) {
    return window.innerWidth
  }
}


// window.addEventListener("resize", handleRezise)

// let i = 0;
// const time = 2000;
// const width = 1000;
// let delta = width;

// async function fillImages() {
//   const url = `https://rickandmortyapi.com/api/character`
//   for (let i = 0; i < 12; i++) {
//     let response = await fetch(url)
//     let data = await response.json();


//     images.push(data.value)
//   }

//   renderData()
// }

// fillImages()

// function renderData() {
//   let imagesTags = ""

//   for (let i = 0; i < imgDiv.length; i++) {
//     imagesTags += `<div class="img-div">${images[i]}</div>`
//   }

//   imgDiv.insertAdjacentHTML('beforeend', imagesTags)
// }

// function changeImages() {
//   if (i < images.length - 1) {
//     imgDiv.style.transform = `translateX(${-delta}px)`
//     delta += width
//     i++
//   } else {
//     imgDiv.style.transform = `translateX(0px)`
//     delta = 0
//     i = 0
//   }
// }

// setInterval(changeImages, time)


