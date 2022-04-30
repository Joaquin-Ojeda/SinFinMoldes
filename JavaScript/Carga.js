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
                <p class="descripcion">${producto.descripcion}</p>
                <p class="descripcion">Medidas: <p>${producto.medidas}</p></p>
                <p class="descripcion">Precio:<p>${producto.valor}</p></p>
                <br/>
                <button class="agregarCarrito">Agregar al carrito <ion-icon name="cart-outline"></ion-icon></button>
            </div>
            <img src="${producto.imagen}" class="hero-image">
        </div>
        ` 
    }else{
        productoHTML=`
        <div class="articulo impar">
        <img src="${producto.imagen}" class="hero-image">
        <div class="contenido">
            <p class="descripcion">${producto.descripcion}</p>
            <p class="descripcion">Medidas:<p>${producto.medidas}</p></p>
            <p class="descripcion">Precio:<p>${producto.valor}</p></p>
            <br/>
            <button class="agregarCarrito">Agregar al carrito <ion-icon name="cart-outline"></ion-icon></button>
        </div>
        </div>
        `
    }
    return productoHTML;
}
cargarProductos("pajarito");
cargarProductos("flor");
cargarProductos("esquinero");
cargarProductos("decoracion");
cargarProductos("mariposa");
cargarProductos("patita");
cargarProductos("maceta");
cargarProductos("medallon");
cargarProductos("cerradura");
cargarProductos("llave");
cargarProductos("navidad");
cargarProductos("pascua");
cargarProductos("tapa");
cargarProductos("pl");
cargarProductos("plp");
cargarProductos("mayolica");
cargarProductos("rodillo");
cargarProductos("manija");
cargarProductos("tapaF");