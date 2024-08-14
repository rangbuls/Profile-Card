// Cek apakah elemen .save-contact ada di halaman
const saveContactBtn = document.querySelector('.save-contact');
if (saveContactBtn) {
    saveContactBtn.addEventListener('click', function() {
        alert('Contact saved!');
    });
}

// Cek apakah elemen .tombol dan .menu ada di halaman
const tombol = document.querySelector('.tombol');
const menu = document.querySelector('.menu');

if (tombol && menu) {
    // Membuat event click untuk tombol hamburger menu
    tombol.addEventListener('click', () => {
        menu.classList.toggle('aktif');
    });
} else {
    console.warn("Elemen .tombol atau .menu tidak ditemukan di halaman ini.");
}
