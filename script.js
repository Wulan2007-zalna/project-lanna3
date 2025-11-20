// ========================
// DATA GUNUNG
// ========================
const mountains = [
  {
    name: "Semeru",
    area: "Malang / Lumajang",
    elev: 3676,
    desc: "Gunung tertinggi di Pulau Jawa dan sangat populer bagi para pendaki.",
    fact: "Puncaknya bernama Mahameru.",
    img: ""
  },
  {
    name: "Bromo",
    area: "Probolinggo",
    elev: 2329,
    desc: "Gunung berapi aktif dengan kawah yang sangat ikonik.",
    fact: "Memiliki upacara adat Yadnya Kasada setiap tahun.",
    img: ""
  },
  {
    name: "Ijen",
    area: "Bondowoso / Banyuwangi",
    elev: 2799,
    desc: "Terkenal dengan blue fire dan danau kawah asam terbesar di dunia.",
    fact: "Fenomena blue fire hanya ada dua di dunia.",
    img: ""
  },
  {
    name: "Raung",
    area: "Banyuwangi / Bondowoso / Jember",
    elev: 3344,
    desc: "Gunung dengan kaldera besar dan trek terberat di Jawa Timur.",
    fact: "Kaldera Raung termasuk yang terbesar di Indonesia!",
    img: ""
  },
  {
    name: "Arjuno",
    area: "Batu / Pasuruan",
    elev: 3339,
    desc: "Gunung kembar dengan Welirang dan memiliki jalur pendakian panjang.",
    fact: "Banyak situs kuno ditemukan di jalur pendakian.",
    img: ""
  },
  {
    name: "Welirang",
    area: "Batu / Mojokerto",
    elev: 3156,
    desc: "Gunung berapi dengan tambang belerang aktif.",
    fact: "Nama Welirang berarti 'belerang'.",
    img: ""
  },
  {
    name: "Butak",
    area: "Batu / Malang",
    elev: 2868,
    desc: "Gunung hutan asri dengan sabana luas di puncaknya.",
    fact: "Sering dijuluki Semeru versi mini karena sabananya.",
    img: ""
  },
  {
    name: "Kawi",
    area: "Malang / Blitar",
    elev: 2651,
    desc: "Gunung bersejarah dengan banyak petilasan.",
    fact: "Sering dikaitkan dengan legenda Rara Anteng dan Joko Seger.",
    img: ""
  },
  {
    name: "Anjasmoro",
    area: "Mojokerto / Jombang",
    elev: 2277,
    desc: "Gunung yang memiliki banyak puncak dalam satu rangkaian.",
    fact: "Termasuk gunung yang jarang dieksplor pendaki.",
    img: ""
  },
  {
    name: "Wilis",
    area: "Kediri / Nganjuk / Madiun",
    elev: 2563,
    desc: "Gunung non-aktif dengan hutan lebat dan jalur mistis.",
    fact: "Puncaknya disebut 'Puncak Limas'.",
    img: ""
  },
  {
    name: "Kelud",
    area: "Kediri",
    elev: 1731,
    desc: "Gunung berapi aktif dengan sejarah erupsi besar.",
    fact: "Erupsi 2014 menghancurkan anak gunung di tengah kawah.",
    img: ""
  },
  {
    name: "Lamongan",
    area: "Lumajang",
    elev: 1651,
    desc: "Gunung kecil namun dikelilingi ratusan maar dan danau vulkanik.",
    fact: "Memiliki lebih dari 60 danau kecil (maar).",
    img: ""
  },
  {
    name: "Panderman",
    area: "Batu",
    elev: 2045,
    desc: "Gunung favorit pendaki pemula karena jalurnya pendek.",
    fact: "Pemandangan Kota Batu terlihat jelas dari puncaknya.",
    img: ""
  }
];


// ========================
// ELEMENT HTML
// ========================
const grid = document.getElementById("mountain-list");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModal");
const search = document.getElementById("search");


// ========================
// RENDER KARTU GUNUNG
// ========================
function renderCards(list) {
  grid.innerHTML = "";

  list.forEach(m => {
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
// MODAL DETAIL
// ========================
function openModal(m) {
  document.getElementById("modalImg").src = "";
  document.getElementById("modalImg").style.display = "none";

  document.getElementById("modalTitle").textContent = m.name;
  document.getElementById("modalDesc").textContent = m.desc;
  document.getElementById("modalMeta").textContent = `${m.area} • ${m.elev} mdpl`;
  document.getElementById("modalFact").textContent = m.fact;

  modal.style.display = "flex";
}

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


// ========================
// SEARCH FITUR
// ========================
search.addEventListener("input", () => {
  const keyword = search.value.toLowerCase();
  const filtered = mountains.filter(m =>
    m.name.toLowerCase().includes(keyword)
  );

  renderCards(filtered);
});


// ========================
// RENDER AWAL
// ========================
document.addEventListener("DOMContentLoaded", () => {
  renderCards(mountains);
});
