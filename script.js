// DATA GUNUNG
const mountains = [
  {
    name: "Semeru",
    area: "Malang / Lumajang",
    elev: 3676,
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60"
  },
  {
    name: "Bromo",
    area: "Probolinggo",
    elev: 2329,
    img: "https://images.unsplash.com/photo-1505765053834-5f9b5e5f1bd7?auto=format&fit=crop&w=1200&q=60"
  },
  {
    name: "Ijen",
    area: "Bondowoso / Banyuwangi",
    elev: 2799,
    img: "https://images.unsplash.com/photo-1558981359-4e3f1a1c1b95?auto=format&fit=crop&w=1200&q=60"
  }
];

const container = document.getElementById("mountain-list");

// FUNGSI MENAMPILKAN KARTU GUNUNG
function showRecommendations() {
  container.innerHTML = "";

  mountains.forEach(m => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${m.img}" alt="${m.name}" />
      <div class="card-info">
        <h3>${m.name}</h3>
        <p>${m.area}</p>
        <p>Ketinggian: ${m.elev} mdpl</p>
      </div>
    `;

    container.appendChild(card);
  });
}

// PANGGIL SAAT HALAMAN DIBUKA
showRecommendations();
