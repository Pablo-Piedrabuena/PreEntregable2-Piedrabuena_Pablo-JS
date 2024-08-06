//OBJETO LITERAL: lista de prodcutos
const productos = [
    {
        id:1,
        nombre:"Queso Cremoso",
        descripción: "Precio por kg",
        categoria:"Queso",
        precio: 5165.94,
        stock: 70,
        img:"../imagenes/productos/cremoso.png"
    },
    {
        id:2,
        nombre:"Queso Cremoso Pizzero Hilado",
        descripción: "Precio por kg",
        categoria:"Queso",
        precio: 5062,
        stock: 55,
        img:"../imagenes/productos/cremoso-pizzero-hilado.png"
    },
    {
        id:3,
        nombre:"Queso Magro - Media Horma",
        descripción: "Precio por kg",
        categoria:"Queso",
        precio: 6020,
        stock: 80,
        img:"../imagenes/productos/magro.png"
    },
    {
        id:4,
        nombre:"Queso Por Salut",
        descripción: "Precio por kg",
        categoria:"Queso",
        precio: 5733,
        stock: 90,
        img:"../imagenes/productos/por-salut.png"
    },
    {
        id:5,
        nombre:"Queso Mozzarella Cilindro Hilada",
        descripción: "Precio por kg",
        categoria:"Queso",
        precio: 6198,
        stock: 100,
        img:"../imagenes/productos/mozzarella-cilindro-hilada.png"
    },
    {
        id:6,
        nombre:"Queso Mozzarella Hilada Para Fetear",
        descripción: "Precio por kg",
        categoria:"Queso",
        precio: 7031,
        stock: 100,
        img:"../imagenes/productos/mozzarella-hilada-barra.png"
    },
    {
        id:7,
        nombre:"Queso Tybo",
        descripción: "Precio por kg",
        categoria:"Queso",
        precio: 6697,
        stock: 100,
        img:"../imagenes/productos/tybo.png"
    },
    {
        id:8,
        nombre:"Queso Colonia",
        descripción: "Precio por kg",
        categoria:"Queso",
        precio: 10000,
        stock: 100,
        img:"../imagenes/productos/colonia.png"
    },
    {
        id:9,
        nombre:"Queso Holanda",
        descripción: "Precio por kg",
        categoria:"Queso",
        precio: 9500,
        stock: 100,
        img:"../imagenes/productos/holanda.png"
    },
    {
        id:10,
        nombre:"Queso Reggianito",
        descripción: "Precio por kg",
        categoria:"Queso",
        precio: 9300,
        stock: 100,
        img:"../imagenes/productos/reggianito.png"
    },
    {
        id: 11,
        nombre:"Queso Sardo",
        descripción: "Precio por kg",
        categoria:"Queso",
        precio: 9168,
        stock: 100,
        img:"../imagenes/productos/sardo.png"
    },
    {
        id: 12,
        nombre:"Queso Azul",
        descripción: "Precio por kg",
        categoria:"Queso",
        precio: 8942,
        stock: 100,
        img:"../imagenes/productos/queso-azul.png"
    },
    {
        id: 13,
        nombre:"Ricotta Semi Magra",
        descripción: "Precio por kg",
        categoria:"Queso",
        precio: 1435,
        stock: 100,
        img:"../imagenes/productos/ricotta.png"
    },
    {
        id: 14,
        nombre:"Salsa Queso Azul en Pouch",
        descripción: "Precio por Pouch de 3 Lts.",
        categoria:"Queso",
        precio: 12141,
        stock: 100,
        img:"../imagenes/productos/salsa-queso-azul-pouch.png"
    },
    {
        id: 15,
        nombre:"Salsa Cheddar en Pouch",
        descripción: "Precio por Pouch de 3 Lts.",
        categoria:"Queso",
        precio: 11787,
        stock: 100,
        img:"../imagenes/productos/salsa-cheddar-pouch.png"
    },
    {
        id: 16,
        nombre:"Rallado Nogolac en Sobre",
        descripción: "Precio por sobre 30 gr.",
        categoria:"Queso",
        precio: 302,
        stock: 100,
        img:"../imagenes/productos/rallado-sobre.png"
    },
    {
        id: 17,
        nombre:"Crema de leche en Balde",
        descripción: "Precio por Balde de 5 Lts.",
        categoria: "Crema",
        precio: 27840,
        stock: 100,
        img:"../imagenes/productos/crema-leche-balde.png"
    },
    {
        id: 18,
        nombre:"Crema de leche en Pote",
        descripción: "Precio por Pote 360 cc.",
        categoria:"Crema",
        precio: 1200,
        stock: 100,
        img:"../imagenes/productos/crema-leche-pote.png"
    },
    {
        id: 19,
        nombre:"Crema de leche en Pouch",
        descripción: "Precio por Pouch de 3 Lts.",
        categoria:"Crema",
        precio: 15738,
        stock: 100,
        img:"../imagenes/productos/crema-leche-pouch.png"
    },
    {
        id: 20,
        nombre:"Manteca en Pan",
        descripción: "Precio por pan 200 gr.",
        categoria:"Manteca",
        precio: 890,
        stock: 100,
        img:"../imagenes/productos/manteca-pan.png"
    },
    {
        id:21,
        nombre:"Leche Entera",
        descripción: "Precio por unidad.",
        categoria: "Leche",
        precio: 1200,
        stock: 100,
        img:"../imagenes/productos/leche-entera.png"
    }
]
const carrito= JSON.parse(localStorage.getItem("carrito")) || []
let productoSeleccionado=""

//VARIABLES/CONSTANTES
let varFiltro="Crema"
let productosPorCategoria

const nodoPadre = document.getElementById("galeriaProductos");
const btnMuestraTodosLosProductos = document.getElementById("filtroTodosLosProductos");
const btnMuestraProdcutoQueso = document.getElementById("filtroQuesos");
const btnMuestraProdcutoCrema = document.getElementById("filtroCremaLeche");
const btnMuestraProdcutoManteca = document.getElementById("filtroManteca");
const btnMuestraProdcutoLeche = document.getElementById("filtroLeche");
const ventanaAgregarProdcutoAlcarrito = document.getElementById("modal-agregarProducto-Carrito");
const ventanaMensajeAlerta = document.getElementById("mensaje-Alerta");
const carritoDOM = document.getElementById("contendor-carrito");
const btnConetenedorformBotonSalir = document.getElementById("Conetenedorform__boton-salir");
const btnMensajeAlertaBoton = document.getElementById("mensaje-Alerta__boton");
const htmlMensajeAlertaMensaje = document.getElementById("mensaje-Alerta__mensaje");
const btnConetenedorFormAgregarCarrito = document.getElementById("Conetenedorform__agregar-carrito");
const itemFiltroPorProducto = document.querySelectorAll(".section-filtro nav ul li a")
const cantidadProductoAComprar = document.getElementById("cantidad");
//Etiquetas de la ventana Para Agregar prodcuto a Carrito
const htmlAgregarProductoCarritoItemIMG = document.getElementById("agregarProducto-Carrito__itemIMG");
const htmlAgregarProductoCarritoItemNombreProducto = document.getElementById("agregarProducto-Carrito__item-nombre-producto");
const htmlAgregarProductoCarritoItemPrecioProducto = document.getElementById("agregarProducto-Carrito__item-precio-producto");
const htmlAgregarProductoCarritoItemDescripcionProducto = document.getElementById("agregarProducto-Carrito__item-descripcion-producto");
const htmlAgregarProductoCarritoItemStockProducto = document.getElementById("agregarProducto-Carrito__item-stock-producto");

/* const btnAgregaAlCarrito = document.getElementsByClassName("agregarAlCarrito") */

//EJECUTO FUNCION/ES LUEGO DE QUE SE CARGUE EL DOM
const objetoAlmacenada = JSON.parse(localStorage.getItem('carrito'));



const currentUrl = window.location.href;
const filename = currentUrl.split('/').pop();
/* alert(filename); */


document.addEventListener('DOMContentLoaded', () => {
    /* filtraProductos("Todos") */
    if(filename === "productos.html" || filename === "productos.html?" || filename === "productos.html#" || filename === "productos.html#?"){
        filtraProductos("Todos")

        btnMuestraTodosLosProductos.addEventListener("click", (e)=>{
            filtraProductos("Todos")
            //Quita la Clase elemento-seleccionado de todos los a
            itemFiltroPorProducto.forEach(li => {
                li.classList.remove('elemento-seleccionado');
            });
        
            //Agregamos la Clase elemento-seleccionado al elemento clickeado
            e.target.classList.add('elemento-seleccionado');    
        })
        
        btnMuestraProdcutoQueso.addEventListener("click", (e)=>{
            filtraProductos("Queso")
            //Quita la Clase elemento-seleccionado de todos los a
            itemFiltroPorProducto.forEach(li => {
                li.classList.remove('elemento-seleccionado');
            });
        
            //Agregamos la Clase elemento-seleccionado al elemento clickeado
            e.target.classList.add('elemento-seleccionado');   
        })
        btnMuestraProdcutoCrema.addEventListener("click", (e)=>{
            filtraProductos("Crema")
            //Quita la Clase elemento-seleccionado de todos los a
            itemFiltroPorProducto.forEach(li => {
                li.classList.remove('elemento-seleccionado');
            });
        
            //Agregamos la Clase elemento-seleccionado al elemento clickeado
            e.target.classList.add('elemento-seleccionado');  
        })
        btnMuestraProdcutoManteca.addEventListener("click", (e)=>{
            filtraProductos("Manteca")
            //Quita la Clase elemento-seleccionado de todos los a
            itemFiltroPorProducto.forEach(li => {
                li.classList.remove('elemento-seleccionado');
            });
        
            //Agregamos la Clase elemento-seleccionado al elemento clickeado
            e.target.classList.add('elemento-seleccionado');  
        })
        
        btnMuestraProdcutoLeche.addEventListener("click", (e)=>{
            filtraProductos("Leche")
            //Quita la Clase elemento-seleccionado de todos los a
            itemFiltroPorProducto.forEach(li => {
                li.classList.remove('elemento-seleccionado');
            });
        
            //Agregamos la Clase elemento-seleccionado al elemento clickeado
            e.target.classList.add('elemento-seleccionado');  
        })
        btnConetenedorformBotonSalir.addEventListener("click", (e)=>{
            ventanaAgregarProdcutoAlcarrito.classList.add('ocultar');
            ventanaAgregarProdcutoAlcarrito.classList.remove('flex');
            productoSeleccionado=""
        })
        btnMensajeAlertaBoton.addEventListener("click", (e)=>{
            ventanaMensajeAlerta.classList.add('ocultar');
            ventanaMensajeAlerta.classList.remove('flex');
        })
        btnConetenedorFormAgregarCarrito.addEventListener("click", (e)=>{
            validaCantidadIngresada(cantidadProductoAComprar.value)
            validaStockDisponible(cantidadProductoAComprar.value,productoSeleccionado)
        
            alert(productoSeleccionado)
            
            let elementoSeleccioanado = productos.find((el)=>{
                return el.id===parseInt(productoSeleccionado)
            })
            alert(elementoSeleccioanado.nombre)
            carrito.push({
                id: parseInt(elementoSeleccioanado.id),
                nombre: elementoSeleccioanado.nombre,
                descripción:elementoSeleccioanado.descripción,
                categoria:elementoSeleccioanado.categoria,
                precio: parseInt(elementoSeleccioanado.precio),
                img:elementoSeleccioanado.img,
                cantidad: parseInt(cantidadProductoAComprar.value)
            });
            localStorage.setItem("carrito", JSON.stringify(carrito))  
        })

    }else if(filename === "carrito.html" || filename === "carrito.html?" || filename === "carrito.html#" || filename === "carrito.html#?"){
        muestraCarrito()   
        creaResumenDeCompra()
    }else{

    }
});




//FUNCIONES
function muestraCarrito(){
    /* console.log(objetoAlmacenada) */
    objetoAlmacenada.forEach((el)=>{
        /* alert(el.nombre) */
        carritoDOM.innerHTML +=`
        <div id="carrito-articulo">
            <div id="articulo__contenedor-imagen">
                <img id="contenedor-imagen__imagen" src="${el.img}" alt="">
            </div>
            <div id="articulo__contenedor-descripcion">
                <h3 id="contenedor-descripcion__nombre-producto">${el.nombre}</h3>
                <p id="contenedor-descripcion__descripcion-producto">${el.descripción}</p>
            </div>
            <p id="articulo__boton-cantidad">Cantidad: ${el.cantidad}</p>
            <button id="articulo__boton-eliminar"><img src="../imagenes/iconos/eliminar.svg" alt=""></a></button>
            <p id="articulo__precio">$ ${(parseInt(el.precio)*(parseInt(el.cantidad))).toFixed(2)}</p>
        </div>`
    })
}
function creaResumenDeCompra(){
    let totalProductosEnCarrito=0
    let importeTotalCompra=0
    /* alert(objetoAlmacenada[0].nombre) */
    objetoAlmacenada.forEach((el)=>{
        totalProductosEnCarrito+=el.cantidad
        importeTotalCompra+= parseInt(el.cantidad)*parseInt(el.precio)
        })
    /* alert(totalProductosEnCarrito + " - " + importeTotalCompra) */
}
function mensajeAlerta(mensaje){
    htmlMensajeAlertaMensaje.innerText=mensaje
    ventanaMensajeAlerta.classList.remove('ocultar');
    ventanaMensajeAlerta.classList.add('flex');
}
function filtraProductos(categoria){
    nodoPadre.innerHTML=""
    varFiltro=categoria
    productosPorCategoria=productos.filter((el)=>{
        return el.categoria===varFiltro
    })
    if(categoria==="Todos"){
        nodoPadre.innerHTML=""
        productos.forEach((el)=> {
            nodoPadre.innerHTML +=`<article class="productos__item">
                <figure>
                    <img src="${el.img}">
                    <figcaption><strong>${el.nombre}</strong></figcaption>
                </figure>
                <div class="item-infoProducto">
                    <p class="infoProducto-descripcion">${el.descripción}</p>
                    <p class="infoProducto-precio">$ ${el.precio.toFixed(2)}</p>
                    <p class="infoProducto-id">${el.id}</p>
                    <button type="boton" class="agregarAlCarrito">Comprar</button>
                </div>
            </article>` 
        })
        agregaEventosALosBotonesComprar()
    }else{
        productosPorCategoria.forEach((el)=> {
            nodoPadre.innerHTML +=`<article class="productos__item">
                <figure>
                    <img src="${el.img}">
                    <figcaption><strong>${el.nombre}</strong></figcaption>
                </figure>
                <div class="item-infoProducto">
                    <p class="infoProducto-descripcion">${el.descripción}</p>
                    <p class="infoProducto-precio">$ ${el.precio.toFixed(2)}</p>
                    <p class="infoProducto-id">${el.id}</p>
                    <button type="boton" class="agregarAlCarrito">Comprar</button>
                </div>
            </article>` 
        })
        agregaEventosALosBotonesComprar()
    }
    
}

function bproductoSeleccionado(){
    let elementoSeleccioanado = productos.find((el)=>{
        return el.id===parseInt(productoSeleccionado)
    })
    htmlAgregarProductoCarritoItemIMG.src=elementoSeleccioanado.img;
    htmlAgregarProductoCarritoItemNombreProducto.innerHTML=elementoSeleccioanado.nombre;
    htmlAgregarProductoCarritoItemPrecioProducto.innerHTML="$ "+elementoSeleccioanado.precio.toFixed(2);
    htmlAgregarProductoCarritoItemDescripcionProducto.innerHTML=elementoSeleccioanado.descripción;
    htmlAgregarProductoCarritoItemStockProducto.innerHTML=elementoSeleccioanado.stock;
}

function agregaEventosALosBotonesComprar(){
    const arrayBotones =Array.from(document.getElementsByClassName("agregarAlCarrito"))
    arrayBotones.forEach(e =>{
        e.addEventListener('click', (e) => {
            productoSeleccionado=(e.target.parentElement.children[2].innerText)
            ventanaAgregarProdcutoAlcarrito.classList.add('flex');
            ventanaAgregarProdcutoAlcarrito.classList.remove('ocultar');
            //Agrega los Datos al HTML de la ventana de Compra
            bproductoSeleccionado(productoSeleccionado)
            })
            
    })
}

function validaCantidadIngresada(valor){
    if((valor==="") || (valor===0) || isNaN(valor)){
        mensajeAlerta("Debe ingresar un valor")
        /* alert("Debe ingresar un valor") */
    }
}

function validaStockDisponible(valor){
    let elementoSeleccioanado = productos.find((el)=>{
        return el.id===parseInt(productoSeleccionado)
    })
    if(elementoSeleccioanado.stock < valor){
        mensajeAlerta("No tenemos suficiente.\n Actualmente en stock " + elementoSeleccioanado.stock)
        /* alert("No tenemos stock suficiente.\n"+ "Actualmente en stock " + elementoSeleccioanado.stock) */
    }/* else{
        alert(elementoSeleccioanado.stock)
    alert(valor)
    } */
}


//EVENTOS




