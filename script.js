const btn = document.getElementById("btn");
const message = document.getElementById("message");

const facts = [
    "Gunung Semeru adalah gunung tertinggi di Jawa!",
    "Gunung Bromo memiliki kawah aktif dengan diameter 800 meter.",
    "Kawah Ijen terkenal dengan api biru yang langka di dunia.",
    "Gunung Arjuno memiliki jalur pendakian yang sangat menantang.",
];

btn.addEventListener("click", () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    message.textContent = randomFact;
});
