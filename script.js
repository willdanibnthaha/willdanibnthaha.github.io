// Tunggu sampai semua konten HTML dimuat
document.addEventListener("DOMContentLoaded", () => {
    
    // Pilih semua elemen yang ingin dianimasikan
    // Kita akan menambah 'class="fade-in"' di HTML nanti
    const elementsToFade = document.querySelectorAll('.fade-in');

    // Siapkan 'pengamat'
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Jika elemennya masuk ke layar
            if (entry.isIntersecting) {
                // Tambahkan class 'show' untuk memicu animasi
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1 // Picu saat 10% elemen terlihat
    });

    // Amati setiap elemen
    elementsToFade.forEach(el => {
        observer.observe(el);
    });
});