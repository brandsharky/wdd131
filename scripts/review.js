
// Local Storage: Number of Reviews Complete
let count = localStorage.getItem("reviewCount");
count = count ? Number(count) + 1 : 1;
localStorage.setItem("reviewCount", count);
document.getElementById("reviewCount").textContent = count;



// Current Year and Last Modified
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
