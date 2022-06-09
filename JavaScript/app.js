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
            <div class="contenido">
                <p class="descripcion-producto">${producto.descripcion}</p>
                <p class="descripcion-producto">Medidas: <p class="descripcion">${producto.medidas}</p></p>
                <p class="descripcion-producto">Precio:<p class="descripcion">${producto.valor}</p></p>
                <br/>
                <!-- <button class="agregarCarrito">Agregar al carrito <ion-icon name="cart-outline"></ion-icon></button> -->
            </div>
            <img src="${producto.imagen}">
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