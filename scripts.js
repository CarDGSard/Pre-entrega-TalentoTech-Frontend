// Modal carrito
const btn_carrito = document.getElementById("btn-carrito");
const btn_cerrar_carrito = document.getElementById("cerrar-carrito");
const modal_carrito = document.getElementById("carrito");

btn_carrito.addEventListener("click", () => {
    modal_carrito.classList.add("mostrar");
});

btn_cerrar_carrito.addEventListener("click", () => {
    modal_carrito.classList.remove("mostrar");
});
//mensaje
const mensaje = document.getElementById("mensaje");

function mostrarMensaje(texto){

    mensaje.textContent = texto;

    mensaje.classList.add("mostrar");

    setTimeout(() => {
        mensaje.classList.remove("mostrar");
    },2500);

}
// Cargar carrito al iniciar
document.addEventListener("DOMContentLoaded", function () {
    cargarCarrito();
});

// Agregar productos
let botonesAgregar = document.getElementsByClassName("agregar-carrito");

for (let i = 0; i < botonesAgregar.length; i++) {
    botonesAgregar[i].addEventListener("click", agregarProducto);
}

// Vaciar carrito
document.getElementById("vaciar-carrito").addEventListener("click", function () {
    localStorage.removeItem("carrito");
    cargarCarrito();
});

function agregarProducto(event) {

    let producto = {
        id: event.target.getAttribute("data-id"),
        nombre: event.target.getAttribute("data-nombre"),
        precio: event.target.getAttribute("data-precio")
    };

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push(producto);

    mostrarMensaje("Consulta agregada✅ ");

    localStorage.setItem("carrito", JSON.stringify(carrito));

    cargarCarrito();
}

function cargarCarrito() {

    let listaCarrito = document.getElementById("lista-carrito");

    listaCarrito.innerHTML = "";

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    for (let i = 0; i < carrito.length; i++) {

        let producto = carrito[i];

        let li = document.createElement("li");

        li.textContent = producto.nombre + " - " + producto.precio;

        listaCarrito.appendChild(li);
    }
}