let mark = document.getElementById("mark");
let notif = document.getElementById("notif");
let container = document.querySelectorAll("div");
let image = document.querySelectorAll(".dot");

console.log(image);
mark.addEventListener("click", (e) => {
  e.preventDefault();

  notif.innerHTML = "0";
  image.forEach((img) => {
    img.style.display = "none";
  });

  container.forEach((div) => {
    div.style.background = "#fff";
  });
});
