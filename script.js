// ========================
// DATA GUNUNG
// ========================
const mountains = [
  { name: "Semeru", area: "Malang / Lumajang", elev: 3676, desc: "Gunung tertinggi di Pulau Jawa dan sangat populer bagi pendaki.", fact: "Puncaknya bernama Mahameru." },
  { name: "Bromo", area: "Probolinggo", elev: 2329, desc: "Gunung berapi aktif dengan kawah ikonik.", fact: "Memiliki upacara Yadnya Kasada." },
  { name: "Ijen", area: "Bondowoso / Banyuwangi", elev: 2799, desc: "Terkenal dengan blue fire dan danau kawah asam.", fact: "Blue fire hanya ada di 2 tempat di dunia." },
  { name: "Raung", area: "Banyuwangi / Jember", elev: 3344, desc: "Kaldera besar dan jalur ekstrem.", fact: "Kalderanya termasuk terbesar di Indonesia!" },
  { name: "Arjuno", area: "Batu / Pasuruan", elev: 3339, desc: "Gunung kembar dengan Welirang.", fact: "Banyak situs kuno ditemukan." },
  { name: "Welirang", area: "Batu / Mojokerto", elev: 3156, desc: "Gunung belerang aktif.", fact: "Welirang berarti belerang." },
  { name: "Butak", area: "Batu / Malang", elev: 2868, desc: "Gunung dengan sabana luas.", fact: "Dijuluki Semeru mini." },
  { name: "Kawi", area: "Malang / Blitar", elev: 2651, desc: "Penuh legenda dan petilasan.", fact: "Dikaitkan dengan legenda Rara Anteng." },
  { name: "Anjasmoro", area: "Mojokerto", elev: 2277, desc: "Memiliki banyak puncak.", fact: "Termasuk gunung jarang dieksplor." },
  { name: "Wilis", area: "Kediri", elev: 2563, desc: "Gunung hutan lebat.", fact: "Puncaknya bernama Puncak Limas." },
  { name: "Kelud", area: "Kediri", elev: 1731, desc: "Gunung dengan sejarah erupsi besar.", fact: "Erupsi 2014 meratakan anak gunungnya." },
  { name: "Lamongan", area: "Lumajang", elev: 1651, desc: "Dikelilingi ratusan danau kecil (maar).", fact: "Ada lebih dari 60 maar vulkanik." },
  { name: "Panderman", area: "Batu", elev: 2045, desc: "Favorit pemula dengan jalur pendek.", fact: "Pemandangannya indah ke arah Kota Batu." }
];

// ========================
// ELEMENT HTML
// ========================
const grid = document.getElementById("mountain-list");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

// ========================
// RENDER KARTU GUNUNG
// ========================
function renderCards() {
  grid.innerHTML = "";

  mountains.forEach(m => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${m.name}</h3>
      <p>${m.area}</p>
      <p class="height">Ketinggian: ${m.elev} mdpl</p>
    `;

    card.addEventListener("click", () => openModal(m));
    grid.appendChild(card);
  });
}

// ========================
// MODAL
// ========================
function openModal(m) {
  document.getElementById("modalTitle").textContent = m.name;
  document.getElementById("modalDesc").textContent = m.desc;
  document.getElementById("modalMeta").textContent = `${m.area} • ${m.elev} mdpl`;
  document.getElementById("modalFact").textContent = m.fact;

  modal.style.display = "flex";
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// ========================
// TAMPILKAN SAAT AWAL
// ========================
renderCards();
// ===========================
// NAVBAR ACTIVE ON SCROLL
// ===========================
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 200;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

