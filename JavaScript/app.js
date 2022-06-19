//JS de Carga de los Productos
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
                <p class="descripcion-producto">Precio:<p class="descripcion">$${producto.valor}</p></p>
                <br/>
                <button class="agregarCarrito" onclick="agregarCarrito('${producto.descripcion}')">Agregar al carrito <ion-icon name="cart-outline"></ion-icon></button>
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
            <p class="descripcion-producto">Precio:<p class="descripcion">$${producto.valor}</p></p>
            <br/>
            <button type="button" class="agregarCarrito" onclick="agregarCarrito('${producto.descripcion}')">Agregar al carrito <ion-icon name="cart-outline"></ion-icon></button>
        </div>
        </div>
        `
    }
    return productoHTML;
}
//JS de los Botones del Catalogo
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
//JS del Header Responsive
function desmarcar(){
    document.getElementById("btn-menu").checked=false;
}
//JS de los Puntos de Venta
function cargarPuntoVenta(){
    let puntoVentaHTML="";
    for(let puntoVenta of puntosVenta){
            puntoVentaHTML+=crearPuntoVentaHTML(puntoVenta);
    }
    document.getElementById('cajaPuntosVenta').innerHTML=puntoVentaHTML;
}

function crearPuntoVentaHTML(puntoVenta){
    let ventaHTML='';
    ventaHTML=`<div class="punto-venta">
        <img src="${puntoVenta.logo}">
        <div class="punto-venta-descripcion">
            <p>${puntoVenta.nombre}</p>
            <a href="https://www.instagram.com/${puntoVenta.web}/" target="_blank"><ion-icon name="logo-instagram"></ion-icon> @${puntoVenta.web}</a>
            <p><ion-icon name="logo-whatsapp"></ion-icon> ${puntoVenta.tel}</p>
            <p><ion-icon name="location"></ion-icon>${puntoVenta.ubicacion}</p>
        </div>
    </div>`
    return ventaHTML;
}
//JS del Carrito
const carrito=[];

function buscarProducto(nombre){
    let producto;
    for(let i=0;i<=productos.length;i++){
        if(productos[i].descripcion==nombre){
            producto=productos[i];
            i=productos.length+1;
        }
    }
    return producto;
}

function crearCarritoHTML(producto){
    let productoHTML='';
    productoHTML=`
    <div id="${producto.descripcion}" class="info items">
             <div class="preview boxProducto">
                <img src="${producto.imagen}"/>
                <h2>${producto.descripcion}</h2>
             </div>
             <div class="preview"><h2>$${producto.valor}</h2></div>
             <div class="preview cantidad">
                <input id="${producto.descripcion}Input" class="contadorProducto" type="number" value="1" min="1" onchange="actualizarTotal()"/>
                <button id="${producto.descripcion}Eliminar" class="botonEliminar" type="button" onclick="eliminarProducto('${producto.descripcion}')"><ion-icon name="close"></ion-icon></button>
             </div>
        </div>
        `;
        return productoHTML;
}

function buscarCarrito(nombre){
    let bool=false;
    for(producto of carrito){
        if(producto.descripcion==nombre){
            bool=true;
        }
    }
    return bool;
}

function agregarCarrito(nombre){
    let producto=buscarProducto(nombre);
    let aux=0;
    if(buscarCarrito(nombre)){
        aux=parseInt(document.getElementById(nombre+"Input").value);
        aux+=1;
        document.getElementById(nombre+"Input").setAttribute('value', aux.toString());
    }
    else{
        carrito.push(producto);
        document.getElementById('carritoProductos').innerHTML+=crearCarritoHTML(producto);
    }
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 800
      })
      actualizarTotal();
}
function copiarCarrito(){
    let copia="";
    let aux="";
    let x=document.createElement("input");
    let total=0;
    for(producto of carrito){
        aux=document.getElementById(producto.descripcion+"Input").value
        copia+=producto.descripcion+" Cantidad:"+aux+" / ";
        total+=(parseInt(producto.valor))*aux;
    }
    copia+=" Total: "+total;

    let url="https://wa.me/+541131452073?text="+copia;
    window.open(url);

    x.setAttribute("value", copia);
    document.body.appendChild(x);
    x.select();
    document.execCommand("copy");
    document.body.removeChild(x);
}

function buscarArray(nombre){
    let indice=-1;
    for(let i=0;i<=carrito.length;i++){
        if(carrito[i].descripcion==nombre){
            indice=i;
            i=(carrito.length)+1;
        }
    }
    return indice;
}

function eliminarPrArray(nombre){
    let indice= buscarArray(nombre);
    if(indice!=-1){
        carrito.splice(indice,1);
    }
}

function eliminarProducto(nombre){
    let eliminado=document.getElementById(nombre);
    eliminarPrArray(nombre);
    eliminado.remove();
    actualizarTotal()
}

function calcularTotal(){
    let total=0;
    let inputValor;
    for(producto of carrito){
        inputValor=document.getElementById(producto.descripcion+"Input").value;
        total+=(parseInt(producto.valor)*inputValor);
    }
    return total;
}
function actualizarTotal(){
    let total= calcularTotal();
    document.getElementById("total").innerHTML="$"+total;
}