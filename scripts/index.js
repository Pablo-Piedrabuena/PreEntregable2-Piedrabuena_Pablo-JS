//OBJETO LITERAL: lista de prodcutos
const productos = [
    {
        id:1,
        nombre:"Queso Cremoso",
        descripción: "Precio por kg",
        categoria:"Queso",
        precio: 5165.94,
        stock: 100,
        img:"../imagenes/productos/cremoso.png"
    },
    {
        id:2,
        nombre:"Queso Cremoso Pizzero Hilado",
        descripción: "Precio por kg",
        categoria:"Queso",
        precio: 5062,
        stock: 100,
        img:"../imagenes/productos/cremoso-pizzero-hilado.png"
    },
    {
        id:3,
        nombre:"Queso Magro - Media Horma",
        descripción: "Precio por kg",
        categoria:"Queso",
        precio: 6020,
        stock: 100,
        img:"../imagenes/productos/magro.png"
    },
    {
        id:4,
        nombre:"Queso Por Salut",
        descripción: "Precio por kg",
        categoria:"Queso",
        precio: 5733,
        stock: 100,
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

let varFiltro="Crema"
let productosPorCategoria

/* let productosPorCategoria=productos.filter((el)=>{
    return el.categoria===varFiltro
}) */


const nodoPadre = document.getElementById("galeriaProductos");
const boton = document.getElementById("filtroTodosLosProductos");
const boton2 = document.getElementById("filtroQuesos");
const boton3 = document.getElementById("filtroCremaLeche");
const boton4 = document.getElementById("filtroManteca");
const boton5 = document.getElementById("filtroLeche");

boton.addEventListener("click", ()=>{
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
                <button type="boton">Añadir al carrito</button>
            </div>
        </article>` 
    })
})
boton2.addEventListener("click", ()=>{
    nodoPadre.innerHTML=""
    varFiltro="Queso"
    productosPorCategoria=productos.filter((el)=>{
        return el.categoria===varFiltro
    })
    productosPorCategoria.forEach((el)=> {
        nodoPadre.innerHTML +=`<article class="productos__item">
            <figure>
                <img src="${el.img}">
                <figcaption><strong>${el.nombre}</strong></figcaption>
            </figure>
            <div class="item-infoProducto">
                <p class="infoProducto-descripcion">${el.descripción}</p>
                <p class="infoProducto-precio">$ ${el.precio.toFixed(2)}</p>
                <button type="boton">Añadir al carrito</button>
            </div>
        </article>` 
    })
})
boton3.addEventListener("click", ()=>{
    nodoPadre.innerHTML=""
    varFiltro="Crema"
    productosPorCategoria=productos.filter((el)=>{
        return el.categoria===varFiltro
    })
    productosPorCategoria.forEach((el)=> {
        nodoPadre.innerHTML +=`<article class="productos__item">
            <figure>
                <img src="${el.img}">
                <figcaption><strong>${el.nombre}</strong></figcaption>
            </figure>
            <div class="item-infoProducto">
                <p class="infoProducto-descripcion">${el.descripción}</p>
                <p class="infoProducto-precio">$ ${el.precio.toFixed(2)}</p>
                <button type="boton">Añadir al carrito</button>
            </div>
        </article>` 
    })
})
boton4.addEventListener("click", ()=>{
    nodoPadre.innerHTML=""
    varFiltro="Manteca"
    productosPorCategoria=productos.filter((el)=>{
        return el.categoria===varFiltro
    })
    productosPorCategoria.forEach((el)=> {
        nodoPadre.innerHTML +=`<article class="productos__item">
            <figure>
                <img src="${el.img}">
                <figcaption><strong>${el.nombre}</strong></figcaption>
            </figure>
            <div class="item-infoProducto">
                <p class="infoProducto-descripcion">${el.descripción}</p>
                <p class="infoProducto-precio">$ ${el.precio.toFixed(2)}</p>
                <button type="boton">Añadir al carrito</button>
            </div>
        </article>` 
    })
})
boton5.addEventListener("click", ()=>{
    nodoPadre.innerHTML=""
    varFiltro="Leche"
    productosPorCategoria=productos.filter((el)=>{
        return el.categoria===varFiltro
    })
    productosPorCategoria.forEach((el)=> {
        nodoPadre.innerHTML +=`<article class="productos__item">
            <figure>
                <img src="${el.img}">
                <figcaption><strong>${el.nombre}</strong></figcaption>
            </figure>
            <div class="item-infoProducto">
                <p class="infoProducto-descripcion">${el.descripción}</p>
                <p class="infoProducto-precio">$ ${el.precio.toFixed(2)}</p>
                <button type="boton">Añadir al carrito</button>
            </div>
        </article>` 
    })
})