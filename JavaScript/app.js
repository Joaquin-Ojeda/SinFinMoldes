function cargarProductos(tipo){
    let productosHTML="";
    let par=false;
    for(let producto of productos){
        if (producto.tipo==tipo){
            productosHTML+=crearProductoHTML(producto, par);
            par=!par;
        } 
    }
    document.getElementById(tipo).innerHTML=productosHTML;
}

function crearProductoHTML(producto,par){
    let productoHTML=``;
    if(par){
        productoHTML=`
        <div class="articulo par">
        <img src="${producto.imagen}">
            <div class="contenido">
                <p class="descripcion-producto">${producto.descripcion}</p>
                <p class="descripcion-producto">Medidas: <p class="descripcion">${producto.medidas}</p></p>
                <p class="descripcion-producto">Precio:<p class="descripcion">${producto.valor}</p></p>
                <br/>
                <!-- <button class="agregarCarrito">Agregar al carrito <ion-icon name="cart-outline"></ion-icon></button> -->
            </div>
        </div>
        ` 
    }else{
        productoHTML=`
        <div class="articulo impar">
        <img src="${producto.imagen}">
        <div class="contenido">
            <p class="descripcion-producto">${producto.descripcion}</p>
            <p class="descripcion-producto">Medidas:<p class="descripcion">${producto.medidas}</p></p>
            <p class="descripcion-producto">Precio:<p class="descripcion">${producto.valor}</p></p>
            <br/>
            <!-- <button class="agregarCarrito">Agregar al carrito <ion-icon name="cart-outline"></ion-icon></button> -->
        </div>
        </div>
        `
    }
    return productoHTML;
}

function divLogin(num){
    
    if(document.getElementById("caja"+num).style.visibility=="visible"){
        document.getElementById("caja"+num).style.visibility="hidden";
        document.getElementById("caja"+num).style.display="none";
    }
    else{
        document.getElementById("caja"+num).style.visibility="visible";
        document.getElementById("caja"+num).style.display="block";
    }
}
function divLogin1(num,tipo){
    
    divLogin(num);

    if(document.getElementById(tipo).innerHTML==""){
        cargarProductos(tipo);
    }
}
function desmarcar(){
    document.getElementById("btn-menu").checked=false;
}

function cargarPuntoVenta(){
    let puntoVentaHTML="";
    for(let puntoVenta of puntosVenta){
            puntoVentaHTML+=crearPuntoVentaHTML(puntoVenta);
            console.log(puntoVenta);
    }
    document.getElementById('cajaPuntosVenta').innerHTML=puntoVentaHTML;
}

function crearPuntoVentaHTML(puntoVenta){
    let ventaHTML='';
    ventaHTML=`<div class="punto-venta">
        <div class="punto-venta-icono"><ion-icon name="storefront"></ion-icon></div>
        <div class="punto-venta-descripcion">
            <p>${puntoVenta.nombre}</p>
            <p>${puntoVenta.web}</p>
            <p><ion-icon name="logo-whatsapp"></ion-icon> ${puntoVenta.tel}</p>
            <p><ion-icon name="location"></ion-icon>${puntoVenta.ubicacion}</p>
        </div>
    </div>`
    return ventaHTML;
}
