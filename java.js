document.getElementById("tip").addEventListener("submit", function(event) {
    event.preventDefault();
 
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const porcentaje = parseFloat(document.getElementById("porcentaje").value);
 
    if (isNaN(subtotal) || isNaN(porcentaje)) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }
 
    const propina = subtotal * (porcentaje / 100);
    const total = subtotal + propina;
 
    document.getElementById("resultado").innerHTML =
        `Propina: $${propina.toFixed(2)}<br>Total a pagar: $${total.toFixed(2)}`;
});