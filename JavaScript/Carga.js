console.log(productos);

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
        </div>
        <img src="Images/Logo.jpg" class="hero-image">
        </div>
        ` 
    }else{
        productoHTML=`
        <div class="articulo impar">
        <img src="Images/Logo.jpg" class="hero-image">
        <div class="contenido">
            <p class="descripcion">${producto.descripcion}</p>
            <p class="descripcion">Medidas:<p>${producto.medidas}</p></p>
            <p class="descripcion">Precio:<p>${producto.valor}</p></p>
        </div>
        </div>
        `
    }
    return productoHTML;
}
cargarProductos("pajarito");
cargarProductos("mariposa");