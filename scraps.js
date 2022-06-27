const url = `https://rickandmortyapi.com/api`;
const char = `https://rickandmortyapi.com/api/character`;
const episode = `https://rickandmortyapi.com/api/episode`;
const divImg = document.querySelectorAll(".div-img");
const imgContainer = document.querySelector(".img-container");
const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");
const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");
let next = null;
let prev = null;

fetch(char)
  .then((res) => res.json())
  .then((data) => {
    next = data.info.next;
    prev = data.info.prev;
    displayData(data);
  });

function displayData(data) {
  imgContainer.innerHTML = "";

  for (let i = 0; i < data.results.length; i++) {
    let info = `
    <div class="img-div">
      <img class="div-img" src="${data.results[i].image}">
    </div>`;

    imgContainer.insertAdjacentHTML("beforeend", info);
  }

  const imgDivs = document.querySelectorAll(".img-div");

  imgDivs.forEach((imgDiv, i) => {
    imgDiv.addEventListener("click", () => xtraInfo(data.results[i]));
  });
}

// -----------------------------
//            Modal
// -----------------------------

// Get the modal
let modal = document.getElementById("myModal");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Model Content
function xtraInfo(data) {
  console.log(data);
  // Display model
  modal.style.display = "block";

  // Clear previous modal content
  modal.innerHTML = "";

  // set model content
  let info = `
    <div class="modal-content">
    <span class="close">&times;</span>
    <h2>${data.name}</h2>
    <img class="div-img" src="${data.image}">
    <p>${data.origin.name}</p>
    <p>${data.species}</p>
    <p>${data.status}</p>
    </div>
    `;

  // Inject model content
  modal.insertAdjacentHTML("beforeend", info);

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
}

// -----------------------------
//       Hamburger Menu
// -----------------------------

let handleRezise = () => {
  menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((e) =>
    e.addEventListener("click", () => {
      menu.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );
  if (window.innerWidth < 950) {
    return window.innerWidth;
  }
};

handleRezise();

// Next Button
nextButton.addEventListener("click", () => {
  fetch(next)
    .then((res) => res.json())
    .then((data) => {
      next = data.info.next;
      prev = data.info.prev;
      displayData(data);
    });
});

// Prev Button
prevButton.addEventListener("click", () => {
  fetch(prev)
    .then((res) => res.json())
    .then((data) => {
      next = data.info.next;
      prev = data.info.prev;
      displayData(data);
    });
});