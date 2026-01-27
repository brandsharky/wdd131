//#region Current Year and Last Modified
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML += document.lastModified;
//#endregion


//#region Toggle Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.textContent = navLinks.classList.contains("active") ? "✖" : "☰";
});
//#endregion




//#region Gallery Cards and Card Filter
// Temples Array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Newport Beach California",
    location: "Newport Beach, California",
    dedicated: "2005, August, 28",
    area: 17800,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/newport-beach-california-temple/newport-beach-california-temple-46818-main.jpg",
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg",
  },
  {
    templeName: "Los Angeles California",
    location: "Los Angeles, California",
    dedicated: "1956, March, 11",
    area: 190614,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-38945-main.jpg",
  },
];

const gallery = document.getElementById("gallery");
const heading = document.querySelector("main h1");
const links = document.querySelectorAll("#navLinks a");


// Show Cards
function displayTemples(templeList) {
  gallery.innerHTML = "";

  templeList.forEach((temple) => {
    const card = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
    `;

    card.appendChild(caption);
    card.appendChild(img);

    gallery.appendChild(card);
  });
}


// Filter Cards and Reshow the filtered Version
function filterTemples(filter) {
  let filteredList = [];

  switch (filter) {
    case "Old":
      filteredList = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
      break;

    case "New":
      filteredList = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
      break;

    case "Large":
      filteredList = temples.filter(temple => temple.area > 90000);
      break;

    case "Small":
      filteredList = temples.filter(temple => temple.area < 10000);
      break;

    default:
      filteredList = temples;
  }

  heading.textContent = filter;
  displayTemples(filteredList);
}

// Apply filter to each Nav Link
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    filterTemples(link.textContent);
  });
});


// Show Unordered Temples the Original Time
displayTemples(temples);
//#endregion


