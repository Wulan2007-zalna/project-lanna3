// DATA GUNUNG
const mountains = [
  {
    name: "Semeru",
    area: "Malang / Lumajang",
    elev: 3676,
    desc: "Gunung tertinggi di Pulau Jawa dan sangat populer bagi para pendaki.",
    fact: "Puncaknya bernama Mahameru.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60"
  },
  {
    name: "Bromo",
    area: "Probolinggo",
    elev: 2329,
    desc: "Gunung berapi aktif dengan kawah yang sangat ikonik.",
    fact: "Memiliki upacara adat Yadnya Kasada setiap tahun.",
    img: "https://images.unsplash.com/photo-1505765053834-5f9b5e5f1bd7?auto=format&fit=crop&w=1200&q=60"
  },
  {
    name: "Ijen",
    area: "Bondowoso / Banyuwangi",
    elev: 2799,
    desc: "Terkenal dengan blue fire dan danau kawah asam terbesar di dunia.",
    fact: "Fenomena blue fire hanya ada dua di dunia.",
    img: "https://images.unsplash.com/photo-1558981359-4e3f1a1c1b95?auto=format&fit=crop&w=1200&q=60"
  },
  {
    name: "Raung",
    area: "Banyuwangi / Bondowoso / Jember",
    elev: 3344,
    desc: "Gunung dengan kaldera besar dan trek terberat di Jawa Timur.",
    fact: "Kaldera Raung termasuk yang terbesar di Indonesia!",
    img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=60"
  },
  {
    name: "Arjuno",
    area: "Batu / Pasuruan",
    elev: 3339,
    desc: "Gunung kembar dengan Welirang dan memiliki jalur pendakian panjang.",
    fact: "Banyak situs kuno ditemukan di jalur pendakian.",
    img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=60"
  },
  {
    name: "Welirang",
    area: "Batu / Mojokerto",
    elev: 3156,
    desc: "Gunung berapi dengan tambang belerang aktif.",
    fact: "Nama Welirang berarti 'belerang'.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60"
  },
  {
    name: "Butak",
    area: "Batu / Malang",
    elev: 2868,
    desc: "Gunung hutan asri dengan sabana luas di puncaknya.",
    fact: "Sering dijuluki Semeru versi mini karena sabananya.",
    img: "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?auto=format&fit=crop&w=1200&q=60"
  },
  {
    name: "Kawi",
    area: "Malang / Blitar",
    elev: 2651,
    desc: "Gunung bersejarah dengan banyak petilasan.",
    fact: "Sering dikaitkan dengan legenda Rara Anteng dan Joko Seger.",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=60"
  },
  {
    name: "Anjasmoro",
    area: "Mojokerto / Jombang",
    elev: 2277,
    desc: "Gunung yang memiliki banyak puncak dalam satu rangkaian.",
    fact: "Termasuk gunung yang jarang dieksplor pendaki.",
    img: "https://images.unsplash.com/photo-1519817650390-64a93db511aa?auto=format&fit=crop&w=1200&q=60"
  },
  {
    name: "Wilis",
    area: "Kediri / Nganjuk / Madiun",
    elev: 2563,
    desc: "Gunung non-aktif dengan hutan lebat dan jalur mistis.",
    fact: "Puncaknya disebut 'Puncak Limas'.",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=60"
  },
  {
    name: "Kelud",
    area: "Kediri",
    elev: 1731,
    desc: "Gunung berapi aktif dengan sejarah erupsi besar.",
    fact: "Erupsi 2014 menghancurkan 'anak gunung' di tengah kawah.",
    img: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=60"
  },
  {
    name: "Lamongan",
    area: "Lumajang",
    elev: 1651,
    desc: "Gunung kecil namun dikelilingi ratusan maar dan danau vulkanik.",
    fact: "Memiliki lebih dari 60 danau kecil (maar).",
    img: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1200&q=60"
  },
  {
    name: "Panderman",
    area: "Batu",
    elev: 2045,
    desc: "Gunung favorit pendaki pemula karena jalurnya pendek.",
    fact: "Pemandangan Kota Batu terlihat jelas dari puncaknya.",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=60"
  }
];

const grid = document.getElementById("mountain-list");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModal");

// RENDER KARTU GUNUNG
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


// MODAL DETAIL
function openModal(m) {
  document.getElementById("modalImg").src = m.img;
  document.getElementById("modalTitle").textContent = m.name;
  document.getElementById("modalDesc").textContent = m.desc;
  document.getElementById("modalMeta").textContent = `${m.area} • ${m.elev} mdpl`;
  document.getElementById("modalFact").textContent = m.fact;
  modal.style.display = "flex";
}

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// SEARCH
const search = document.getElementById("search");
search.addEventListener("input", () => {
  const keyword = search.value.toLowerCase();
  const filtered = mountains.filter(m => m.name.toLowerCase().includes(keyword));
  renderMountains(filtered);
});



// TAMPILKAN REKOMENDASI AWAL
document.addEventListener("DOMContentLoaded", () => renderMountains(mountains));
