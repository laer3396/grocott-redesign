const treatments = [
  {
    name: "CFT – Kognitiv funktionel terapi",
    image: "img/alberte_nakke.webp",
    description: "Få en grundig undersøgelse hos en af vores fysioterapeuter. Vi udreder hvilken behandling der passer bedst til dine symptomer.",
    link: "#"
  },
  {
    name: "Nakke",
    image: "assets/nakke.jpg",
    description: "Behandling af nakkesmerter, spændinger og nedsat bevægelighed.",
    link: "#"
  },
  {
    name: "Skulder & Albue",
    image: "assets/skulder.jpg",
    description: "Genoptræning og behandling af skulder- og albueproblemer.",
    link: "#"
  },
  {
    name: "Ryg",
    image: "assets/ryg.jpg",
    description: "Undersøgelse og behandling af rygsmerter og relaterede gener.",
    link: "#"
  }
  // Tilføj resten her...
];

// DOM elements
const list = document.getElementById("treatmentList");
const img = document.getElementById("treatmentImage");
const title = document.getElementById("treatmentTitle");
const desc = document.getElementById("treatmentDescription");
const link = document.getElementById("treatmentLink");

// Build menu
treatments.forEach((t, index) => {
  const li = document.createElement("li");
  li.textContent = t.name;

  li.addEventListener("click", () => {
    setActiveTreatment(index);
  });

  list.appendChild(li);
});

// Load first item by default
setActiveTreatment(0);

function setActiveTreatment(index) {
  const t = treatments[index];

  // Update content
  img.src = t.image;
  title.textContent = t.name;
  desc.textContent = t.description;
  link.href = t.link;

  // Update active state
  [...list.children].forEach(li => li.classList.remove("active"));
  list.children[index].classList.add("active");
}
