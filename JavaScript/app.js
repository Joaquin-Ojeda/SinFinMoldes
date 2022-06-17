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
                <h3>${producto.descripcion}</h2>
             </div>
             <div class="preview">$${producto.valor}</div>
             <div class="preview cantidad">
                <input id="${producto.descripcion}Input" class="contadorProducto" type="number" value="1"/>
                <button class="botonEliminar" type="button">X</button>
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
    //Ejemplo para crear el total y copiar al portapapeles
    /* 
        let x=producto.descripcion+' '+producto.valor+" 1"+'\n'+producto.descripcion+' '+producto.valor+" 1"+'\n';
        console.log(x);
        let aux = document.createElement("input");
        aux.setAttribute("value", x);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
    */
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
    x.setAttribute("value", copia);
    document.body.appendChild(x);
    x.select();
    document.execCommand("copy");
    document.body.removeChild(x);
}