document.addEventListener("DOMContentLoaded", function () {
  const ticketForm = document.getElementById("ticket-form");
  const ticketType = document.getElementById("ticket-type");
  const quantity = document.getElementById("quantity");
  const totalPrice = document.getElementById("total-price");
  const konfirmasiModal = new bootstrap.Modal(
    document.getElementById("konfirmasi-modal")
  );

  // Update total price when inputs change
  function updatePrice() {
    const price = parseInt(ticketType.value) || 0;
    const qty = parseInt(quantity.value) || 0;
    const total = price * qty;
    totalPrice.textContent = `Rp ${total.toLocaleString("id-ID")}`;

    // Update ticket summary
    document.getElementById("selected-ticket-type").textContent =
      ticketType.options[ticketType.selectedIndex].text;
    document.getElementById("selected-ticket-quantity").textContent = qty;
    document.getElementById(
      "selected-total-price"
    ).textContent = `Rp ${total.toLocaleString("id-ID")}`;
  }

  ticketType.addEventListener("change", updatePrice);
  quantity.addEventListener("input", updatePrice);

  // Handle form submission
  ticketForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const tipeTicket = ticketType.options[ticketType.selectedIndex].text;
    const jumlah = quantity.value;
    const total = parseInt(ticketType.value) * parseInt(quantity.value);

    // Populate modal content
    document.getElementById("modal-konfirmasi-body").innerHTML = `
          <p><strong>Nama:</strong> ${nama}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Tipe Tiket:</strong> ${tipeTicket}</p>
          <p><strong>Jumlah Tiket:</strong> ${jumlah}</p>
          <p><strong>Total Pembayaran:</strong> Rp ${total.toLocaleString(
            "id-ID"
          )}</p>
      `;

    // Show modal
    konfirmasiModal.show();
  });

  // Handle payment confirmation
  document
    .getElementById("konfirmasi-bayar")
    .addEventListener("click", function () {
      alert("Pembayaran berhasil! Tiket akan dikirim ke email Anda.");
      konfirmasiModal.hide();
      ticketForm.reset();
      updatePrice();
    });
});
