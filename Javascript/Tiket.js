const ticketType = document.getElementById('ticket-type');
const quantity = document.getElementById('quantity');
const totalPriceDisplay = document.getElementById('total-price');
const hiddenTotalPrice = document.getElementById('hidden-total-price');

// Fungsi untuk menghitung total harga
function calculateTotalPrice() {
    const typePrice = parseInt(ticketType.value) || 0;
    const qty = parseInt(quantity.value) || 0;
    const totalPrice = typePrice * qty;

    // Perbarui tampilan total harga
    totalPriceDisplay.textContent = `Rp ${totalPrice.toLocaleString()}`;

    // Perbarui input hidden dengan total harga
    hiddenTotalPrice.value = totalPrice;
}

// Tambahkan event listener untuk menghitung ulang harga saat input berubah
ticketType.addEventListener('change', calculateTotalPrice);
quantity.addEventListener('input', calculateTotalPrice);

// Menangani pengiriman formulir
const form = document.forms['ticket-form'];
const scriptURL = 'https://script.google.com/macros/s/AKfycbwfJG7C18lfYXSChlDtqhJvHwEvDxP8VcF7FmIEeevw53VLt663AeccgGVtEX00N68/exec';

form.addEventListener('submit', e => {
    e.preventDefault(); // Mencegah pengiriman formulir standar
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert('Pemesanan berhasil!'))
        .catch(error => alert('Terjadi kesalahan: ' + error.message));
});