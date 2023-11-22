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
    if(producto.tipo=="lp"){
        if(par){
            productoHTML=`
            <div class="articulo par">
            <img src="${producto.imagen}">
                <div class="contenido">
                    <p class="descripcion-producto">${producto.descripcion}</p>
                    <p class="descripcion-producto">Descripción: <p class="descripcion">${producto.medidas}</p></p>
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
                <p class="descripcion-producto">Descripción:<p class="descripcion">${producto.medidas}</p></p>
                <p class="descripcion-producto">Precio:<p class="descripcion">$${producto.valor}</p></p>
                <br/>
                <button type="button" class="agregarCarrito" onclick="agregarCarrito('${producto.descripcion}')">Agregar al carrito <ion-icon name="cart-outline"></ion-icon></button>
            </div>
            </div>
            `
        }
    }
    else{
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
    if(puntoVenta.tel=="-"){
        ventaHTML=`<div class="punto-venta">
        <img src="${puntoVenta.logo}">
        <div class="punto-venta-descripcion">
            <p>${puntoVenta.nombre}</p>
            <a href="https://www.instagram.com/${puntoVenta.web}/" target="_blank"><ion-icon name="logo-instagram"></ion-icon> @${puntoVenta.web}</a>
            <p><ion-icon name="location"></ion-icon>${puntoVenta.ubicacion}</p>
        </div>
    </div>`
    }
    else{
        ventaHTML=`<div class="punto-venta">
        <img src="${puntoVenta.logo}">
        <div class="punto-venta-descripcion">
            <p>${puntoVenta.nombre}</p>
            <a href="https://www.instagram.com/${puntoVenta.web}/" target="_blank"><ion-icon name="logo-instagram"></ion-icon> @${puntoVenta.web}</a>
            <p><ion-icon name="logo-whatsapp"></ion-icon> ${puntoVenta.tel}</p>
            <p><ion-icon name="location"></ion-icon>${puntoVenta.ubicacion}</p>
        </div>
    </div>`
    }

    
    return ventaHTML;
}
//CARRITO
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
        copia+=producto.descripcion+" X"+aux+" / ";
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

//CAMBIO DE ICONO EN CATALOGO
function cambiarIcono(id){
    let aux=document.getElementById(id).innerHTML;
    if(aux=='<a href="#catalogo"><ion-icon name="arrow-down" role="img" class="md hydrated" aria-label="arrow down"></ion-icon></a>'){
        document.getElementById(id).innerHTML='<a href="#catalogo"><ion-icon name="arrow-up"></ion-icon></a>';
        document.getElementById(id+"BTN").style.position="sticky";
    }
    else{
        document.getElementById(id).innerHTML='<a href="#catalogo"><ion-icon name="arrow-down"></ion-icon></a>';
        document.getElementById(id+"BTN").style.position="relative";
        for(let i=1;i<=22;i++){
            if(document.getElementById("caja"+i).style.visibility=="visible"){
                document.getElementById("caja"+i).style.visibility="hidden";
                document.getElementById("caja"+i).style.display="none";
            }
        }
    }
}
//CARGAR GALERIA
function galeria(trabajo,i){
    let posicion=(i.toString());
    let trabajoHTML=`
    <a href="#image${posicion}">
        <img class="img${posicion}" src="Images/Trabajos/${trabajo}" alt=""/>
    </a>
    `;
    document.getElementById("trabajos").innerHTML+=trabajoHTML;
}
function vistaPrevia(trabajo,i){
    let posicion=(i.toString());
    let anterior=i-1;
    let siguiente=i+1;
    if(i==1){
        anterior=trabajos.length;
    }
    if(i==trabajos.length){
        siguiente=1;
    }
    anterior=anterior.toString();
    siguiente=siguiente.toString();
    

    let trabajoHTML=`
    <article class="light-box" id="image${posicion}">
        <a href="#image${anterior}" class="next"><ion-icon name="arrow-back-circle"></ion-icon></a>
        <img src="Images/Trabajos/${trabajo}" alt="">
        <a href="#image${siguiente}" class="next"><ion-icon name="arrow-forward-circle"></ion-icon></a>
        <a href="#img${posicion}" class="close"><ion-icon name="close-circle"></ion-icon></a>
    </article>
    `;
    document.getElementById("vistaprevia").innerHTML+=trabajoHTML;
}

function cargarTrabajos(){
    let trabajo="";
    for(let i=0;i<trabajos.length;i++){
        trabajo=trabajos[i];
        galeria(trabajo,i+1);
        vistaPrevia(trabajo,i+1);
    }
}
//ACTUALIZACION DE PRECIOS
function redondearPrecio(precio){
    let resto=precio%10;
    let total=0;

    if(resto==0){
        total=precio;
    }
    else{
        if(resto<5){
            total=precio-resto;
        }
        else{
            resto=10-resto;
            total=precio+resto;
        }
    }
    return total;
}

function aumentoDiezPrc(producto, porcentaje){
    let precio=parseInt(producto.valor);
    precio=parseInt(precio*porcentaje);
    precio=redondearPrecio(precio);
    producto.valor=precio.toString();
}

function actualizarPrecios(porcentaje,tipo){
    for(producto of productos){
        if(producto.categoria==tipo){
            aumentoDiezPrc(producto, porcentaje);
        }
    }
}

//AGREGAR PRODUCTOS AL ARRAY

function ordenarPorDescripcion(producto1,producto2){
    let valor=0;
    if(producto1.descripcion<producto2.descripcion){
        valor=-1;
    }
    else{
        valor=1;
    }
    return valor;
}

function agregarProductoEnProductos(imagen,descripcion,valor,medidas,categoria,tipo){
    let producto=new Producto(imagen,descripcion,valor,medidas,categoria,tipo);
    productos.push(producto);
    if(tipo!=="rodillo"){
        productos.sort(ordenarPorDescripcion)
    }
}

//CARGAR CATEGORIAS

function crearCategoria(molde,i,par){
    let nuevo='';
    if(par){
        nuevo=
        `
        <div id="${molde.id}" class="subCategoria2">
            <button id="${molde.id+"Boton"}" onclick="divLogin1('${i}','${molde.caja}')" class="sub">${molde.id}</button>
            <div id="caja${i}" class="cajas">
                <div id="${molde.caja}" class="grid"></div>
                <button onclick="divLogin('${i}')" class="sub">
                    <a href="#${molde.id}"><ion-icon name="arrow-up-outline"></ion-icon></a>
                </button>
            </div>
        </div>

        `;
    }
    else{
        nuevo=
        `
        <div id="${molde.id}" class="subCategoria">
            <button id="${molde.id+"Boton"}" onclick="divLogin1('${i}','${molde.caja}')" class="sub">${molde.id}</button>
            <div id="caja${i}" class="cajas">
                <div id="${molde.caja}" class="grid"></div>
                <button onclick="divLogin('${i}')" class="sub">
                    <a href="#${molde.id}"><ion-icon name="arrow-up-outline"></ion-icon></a>
                </button>
            </div>
        </div>

        `;
    }

    return nuevo;

}
//function cargarMolde(cat){
  //  document.getElementById("cajamoldes-silicona").innerHTML+=cat;
//}
function cargarArt3d(cat){
    document.getElementById("cajaarticulos3D").innerHTML+=cat;
}

function cargarCategorias(categorias){

    let parMoldes=true;
    let parArt3d=false;
    

    for(let i=1;i<=categorias.length;i++){
        
        if(categorias[i-1].tipo==="moldes-silicona")
        {
            cargarMolde(crearCategoria(categorias[i-1],i,parMoldes));
            parMoldes=!parMoldes;
        }
        else{
            cargarArt3d(crearCategoria(categorias[i-1],i,parArt3d));
            parArt3d=!parArt3d;
        }
    }
}

function categoriaNueva(categoria){
    document.getElementById(categoria+"Boton").innerHTML+=` <span class="nuevo">Nuevo!</span>`;
}

// ANIMACION ONVIEW

function isInViewport(element){
    const rect= element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const titulos= document.querySelectorAll('.invi');

document.onscroll=()=>{
    titulos.forEach((element)=>{
        if(isInViewport(element)){
            element.addEventListener('transitionend', element.classList.remove('invi'));
            element.classList.add('slideRight');
        }
    })
}
document.ontouchmove=()=>{
    titulos.forEach((element)=>{
        if(isInViewport(element)){
            element.addEventListener('transitionend', element.classList.remove('invi'));
            element.classList.add('slideRight');
        }
    })
}
