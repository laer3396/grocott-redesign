// ===============================
// VARIABLE SCOPE (let / const)
// ===============================

// 'currentIndex' ændrer sig, når brugeren klikker eller bruger piletaster.
// Derfor bruger jeg 'let', fordi værdien skal kunne opdateres.
let currentIndex = 0;

// 'treatments' er et array af objekter.
//  jeg 'const' bruger. Jeg ændrer ikke selve arrayet, kun indholdet jeg læser fra det.
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

// Her henter jeg alle de elementer i DOM'en, som jeg skal opdatere dynamisk.
// Det gør det muligt at ændre indholdet på siden med JavaScript.
const list = document.getElementById("treatmentList");
const img = document.getElementById("treatmentImage");
const title = document.getElementById("treatmentTitle");
const desc = document.getElementById("treatmentDescription");
const link = document.getElementById("treatmentLink");
const secondary = document.getElementById("treatmentSecondary");


// ===============================
// FUNKTION: Byg menuen
// ===============================

// Denne funktion bygger menuen dynamisk ved at loope gennem arrayet.
// For hver behandling opretter jeg et <li>-element og tilføjer et klik-event.
function renderMenu() {
  treatments.forEach((t, index) => {
    const li = document.createElement("li");
    li.textContent = t.name;

    // Når man klikker på et menupunkt, skifter indholdet i højre side.
    li.addEventListener("click", () => setActiveTreatment(index));

    list.appendChild(li);
  });
}


// ===============================
// FUNKTION: Opdater indhold
// ===============================

// Denne funktion opdaterer hele indholdsområdet baseret på det valgte index.
// Her bruger jeg DOM-manipulation til at ændre billede, tekst og links.
function setActiveTreatment(index) {
  currentIndex = index;

  const t = treatments[index];

  img.src = t.image;
  title.textContent = t.name;
  desc.textContent = t.description;
  link.href = t.link;
  secondary.href = t.secondaryLink;

  // Aktiv styling: fjerner 'active' fra alle og tilføjer til den valgte.
  [...list.children].forEach(li => li.classList.remove("active"));
  list.children[index].classList.add("active");
}


// ===============================
// FUNKTIONER: Næste / Forrige
// ===============================

// Her bruger jeg operatoren (%) til at loope rundt i arrayet.
// Det betyder, at når man når sidste element, starter man forfra.
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

// Her lytter jeg efter piletasterne, så brugeren kan navigere uden mus.
// Det viser brug af events på dokumentniveau.
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextTreatment();
  if (e.key === "ArrowLeft") prevTreatment();
});


// ===============================
// DEBUGGING + LIBRARY
// ===============================

// Her logger jeg tidspunktet for at vise, at scriptet loader korrekt.
// Jeg bruger 'new Date()'
console.log("Behandlingsmodul loaded:", new Date().toLocaleTimeString());


// ===============================
// INITIALISERING
// ===============================

// Til sidst initialiserer jeg modulet ved at bygge menuen
// og vise den første behandling.
renderMenu();
setActiveTreatment(0);
