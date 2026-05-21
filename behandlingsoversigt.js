// ===============================
// VARIABLE SCOPE (let / const)
// ===============================
let currentIndex = 0; // ændrer sig når man klikker
const treatments = [
  {
    name: "Hovedpine",
    image: "img/alberte_nakke.webp",
    description: "Hovedpine opstår ofte på grund af spændinger eller ubalance i nakke og kæbe. Med specialiseret erfaring i behandling af hovedrelaterede smerter hjælper jeg dig med at finde årsagen og skabe varig lindring.",
    link: "booking.html",
    secondaryLink: "hovedpine.html"
  },
  {
    name: "Skulder og nakkegener",
    image: "img/skulder-og-nakkegener.webp",
    description: "Skulder- og nakkesmerter skyldes ofte spændinger, overbelastning eller nedsat bevægelighed. Med særlig erfaring i behandling af nakke- og skulderproblematikker hjælper jeg dig med at genvinde frihed i bevægelsen og mindske smerterne.",
    link: "booking.html",
    secondaryLink: "skulder-nakke.html"
  },
  {
    name: "Knæ og hofter",
    image: "img/knæ-og-hofter.webp",
    description: "Knæ- og hoftesmerter opstår ofte ved overbelastning, nedsat styrke eller ændret bevægemønster. Med erfaring i behandling og genoptræning af både akutte og længerevarende problemer hjælper jeg dig tilbage til en stærk og stabil hverdag.",
    link: "booking.html",
    secondaryLink: "knae-hofte.html"
  },
  {
    name: "Kæbegener",
    image: "img/kæbegener.webp",
    description: "Kæbesmerter kan stamme fra spændinger, bidfunktion eller nakkeproblemer. Med erfaring i behandling af kæberelaterede gener hjælper jeg dig med at skabe balance og reducere smerterne.",
    link: "booking.html",
    secondaryLink: "kaebe.html"
  },
  {
    name: "Fod problematikker",
    image: "img/fodproblematikker.webp",
    description: "Fodproblemer opstår ofte ved fejlbelastning, nedsat støtte eller ændret gangmønster. Jeg hjælper dig med at finde årsagen og skabe bedre støtte og funktion i hverdagen.",
    link: "booking.html",
    secondaryLink: "fodproblemer.html"
  },
  {
    name: "Ryg",
    image: "img/ryg.webp",
    description: "Rygsmerter skyldes ofte stivhed, overbelastning eller nedsat kontrol. Med erfaring i behandling af både akutte og længerevarende rygproblemer hjælper jeg dig tilbage til en stærkere og mere stabil ryg.",
    link: "booking.html",
    secondaryLink: "ryg.html"
  },
  {
    name: "Massage",
    image: "img/massage.webp",
    description: "Massage kan løsne spændinger, øge blodcirkulationen og give ro i kroppen. Jeg tilpasser behandlingen til dine behov, så du får den mest effektive lindring.",
    link: "booking.html",
    secondaryLink: "massage.html"
  },
  {
    name: "Formthotics",
    image: "img/formthotics.webp",
    description: "Formthotics er individuelt tilpassede indlægssåler, der støtter foden og forbedrer din belastning. Jeg hjælper dig med at finde den rette løsning, så du kan gå og stå mere komfortabelt.",
    link: "booking.html",
    secondaryLink: "formthotics.html"
  },
  {
    name: "Spenco sandaler",
    image: "img/spenco-sandaler.webp",
    description: "Spenco sandaler giver støtte, komfort og aflastning til fødderne. Jeg guider dig til den model, der passer bedst til dine behov og din hverdag.",
    link: "booking.html",
    secondaryLink: "spenco.html"
  }
];

// ===============================
// DOM ELEMENTER
// ===============================
const list = document.getElementById("treatmentList");
const img = document.getElementById("treatmentImage");
const title = document.getElementById("treatmentTitle");
const desc = document.getElementById("treatmentDescription");
const link = document.getElementById("treatmentLink");
const secondary = document.getElementById("treatmentSecondary");


// ===============================
// FUNKTION: Byg menuen
// ===============================
function renderMenu() {
  treatments.forEach((t, index) => {
    const li = document.createElement("li");
    li.textContent = t.name;

    // EVENT: klik på menu
    li.addEventListener("click", () => setActiveTreatment(index));

    list.appendChild(li);
  });
}


// ===============================
// FUNKTION: Opdater indhold
// ===============================
function setActiveTreatment(index) {
  currentIndex = index;

  const t = treatments[index];

  img.src = t.image;
  title.textContent = t.name;
  desc.textContent = t.description;
  link.href = t.link;
  secondary.href = t.secondaryLink;

  // Aktiv menu-styling
  [...list.children].forEach(li => li.classList.remove("active"));
  list.children[index].classList.add("active");
}


// ===============================
// FUNKTIONER: Næste / Forrige (brug af operatorer + modulo)
// ===============================
function nextTreatment() {
  currentIndex = (currentIndex + 1) % treatments.length;
  setActiveTreatment(currentIndex);
}

function prevTreatment() {
  currentIndex = (currentIndex - 1 + treatments.length) % treatments.length;
  setActiveTreatment(currentIndex);
}


// ===============================
// EVENT: Keyboard navigation
// ===============================
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextTreatment();
  if (e.key === "ArrowLeft") prevTreatment();
});


// ===============================
// LIBRARY (valgfrit): Day.js til debug-tidspunkt
// ===============================
console.log("Behandlingsmodul loaded:", new Date().toLocaleTimeString());


// ===============================
// INITIALISERING
// ===============================
renderMenu();
setActiveTreatment(0);
