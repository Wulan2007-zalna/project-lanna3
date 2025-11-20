# script.js

```javascript
const mountains = [
  {
    id: 'semeru',
    name: 'Semeru',
    area: 'Malang / Lumajang',
    elev: 3676,
    desc: 'Gunung tertinggi di Pulau Jawa, terkenal dengan puncak Mahameru.',
    fact: 'Semeru sering menunjukkan aktivitas fumarola dan letusan kecil.',
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 'bromo',
    name: 'Bromo',
    area: 'Probolinggo',
    elev: 2329,
    desc: 'Gunung berapi aktif dengan kaldera luas dan sunrise ikonik.',
    fact: 'Kawah Bromo memiliki diameter sekitar 800 meter.',
    img: 'https://images.unsplash.com/photo-1505765053834-5f9b5e5f1bd7?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 'ijen',
    name: 'Ijen',
    area: 'Bondowoso / Banyuwangi',
    elev: 2799,
    desc: 'Terkenal dengan kawah biru dan fenomena blue fire.',
    fact: 'Blue fire hanya muncul di malam hari.',
    img: 'https://images.unsplash.com/photo-1558981359-4e3f1a1c1b95?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 'arjuno',
    name: 'Arjuno',
    area: 'Malang',
    elev: 3339,
    desc: 'Gunung populer dengan jalur pendakian hutan dan pemandangan puncak.',
    fact: 'Arjuno dipadati pendaki saat libur panjang.',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 'welirang',
    name: 'Welirang',
    area: 'Mojokerto / Pasuruan',
    elev: 3156,
    desc: 'Gunung berapi aktif yang terkenal dengan belerang alam.',
    fact: 'Nama Welirang berarti "belerang" dalam bahasa Jawa.',
    img: 'https://images.unsplash.com/photo-1533613220915-609f661a6fe1?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 'raung',
    name: 'Raung',
    area: 'Bondowoso / Banyuwangi',
    elev: 3332,
    desc: 'Gunung berapi ekstrim dengan kaldera sangat dalam.',
    fact: 'Puncak Sejati Raung hanya bisa dicapai dengan alat panjat tebing.',
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 'lawu',
    name: 'Lawu',
    area: 'Magetan',
    elev: 3265,
    desc: 'Gunung sakral dengan banyak situs budaya dan jalur pendakian favorit.',
    fact: 'Pasar Setan Lawu terkenal dengan cerita mistisnya.',
    img: 'https://images.unsplash.com/photo-1526711699319-5f44c53e1a46?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 'penanggungan',
    name: 'Penanggungan',
    area: 'Mojokerto',
    elev: 1653,
    desc: 'Gunung kecil namun bersejarah dengan banyak situs kerajaan Majapahit.',
    fact: 'Penanggungan dijuluki "Mini Semeru" karena bentuknya.',
    img: 'https://images.unsplash.com/photo-1589394819885-42a7e3e1bbf7?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 'kelud',
    name: 'Kelud',
    area: 'Kediri',
    elev: 1731,
    desc: 'Gunung berapi aktif yang beberapa kali meletus besar dalam sejarah Jawa.',
    fact: 'Letusan 2014 mengeluarkan material yang mencapai hingga Jawa Barat.',
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 'prau',
    name: 'Prau',
    area: 'Dieng (perbatasan Jatim dekat wisata lintas provinsi)',
    elev: 2565,
    desc: 'Gunung dengan hamparan bukit teletubbies dan sunrise emas.',
    fact: 'Prau adalah spot sunrise paling populer di Jawa.',
    img: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=60'
  }
];

const grid = document.getElementById('mountainGrid');
const search = document.getElementById('search');
const filter = document.getElementById('filter');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

// Render cards
function render(list){
  grid.innerHTML = '';
  list.forEach(m => {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('data-id', m.id);
    card.innerHTML = `
      <img src="${m.img}" alt="${m.name}">
      <h3>${m.name}</h3>
      <p>${m.desc}</p>
      <div class="meta">Area: ${m.area} • ${m.elev} m</div>
    `;
    card.addEventListener('click', () => openModal(m.id));
    grid.appendChild(card);
  })
}

function openModal(id){
  const m = mountains.find(x=>x.id===id);
  if(!m) return;
  document.getElementById('modalImg').src = m.img;
  document.getElementById('modalTitle').textContent = m.name;
  document.getElementById('modalDesc').textContent = m.desc;
  document.getElementById('modalMeta').textContent = `Area: ${m.area} • Ketinggian: ${m.elev} m`;
  document.getElementById('modalFact').textContent = m.fact;
  modal.setAttribute('aria-hidden','false');
}

function close(){ modal.setAttribute('aria-hidden','true'); }
closeModal.addEventListener('click', close);
modal.addEventListener('click', (e)=>{ if(e.target===modal) close(); });

// Filtering
function applyFilters(){
  const q = search.value.trim().toLowerCase();
  const f = filter.value;
  const filtered = mountains.filter(m=>{
    const matchQ = m.name.toLowerCase().includes(q) || m.area.toLowerCase().includes(q);
    let matchF = true;
    if(f === 'tinggi') matchF = m.elev > 2000;
    if(f === 'sedang') matchF = m.elev >= 1000 && m.elev <= 2000;
    if(f === 'rendah') matchF = m.elev < 1000;
    return matchQ && matchF;
  });
  render(filtered);
}

search.addEventListener('input', applyFilters);
filter.addEventListener('change', applyFilters);

// Inisialisasi
render(mountains);
```
