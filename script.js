const prices = {
    "Jersey Alternativo": 1389,
    "Jersey Rojiblanco": 1389,
    "Jersey Día de Muertos": 589,
    "Jersey Auriazul": 1389
};

function updatePrice() {
    calculateTotal();
}

function calculateTotal() {
    const product = document.getElementById('product').value;
    const quantity = parseInt(document.getElementById('quantity').value || 1);
    const price = prices[product] || 0;
    const total = price * quantity;
    document.getElementById('totalAmount').innerText = `$${total.toFixed(2)}`;
}

function submitForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;

    if (!name || !email || !product || quantity < 1) {
        alert("Por favor completa todos los campos correctamente.");
        return;
    }

    alert(`Gracias por tu compra, ${name}. Se enviará una confirmación a ${email}.`);
}

async function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const total = document.getElementById('totalAmount').innerText;

    doc.setFontSize(16);
    doc.text("Comprobante de Compra", 20, 20);
    doc.setFontSize(12);
    doc.text(`Nombre: ${name}`, 20, 40);
    doc.text(`Correo: ${email}`, 20, 50);
    doc.text(`Producto: ${product}`, 20, 60);
    doc.text(`Cantidad: ${quantity}`, 20, 70);
    doc.text(`Total: ${total}`, 20, 80);
    doc.text("¡Gracias por tu compra!", 20, 100);
    doc.save("comprobante_compra.pdf");
}

document.querySelectorAll(".collapsible").forEach(button => {
    button.addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        content.style.display = (content.style.display === "block") ? "none" : "block";
    });
});

document.querySelectorAll('.color-filter').forEach(filter => {
    filter.addEventListener('change', function () {
        const selectedColor = this.value;
        document.querySelectorAll('.product').forEach(product => {
            product.style.display = (product.getAttribute('data-color') === selectedColor) ? 'block' : 'none';
        });
    });
});
