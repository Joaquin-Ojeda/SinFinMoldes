class PuntoVenta{
    constructor(nombre,tel,web,ubicacion,logo){
        this.nombre=nombre;
        this.tel=tel;
        this.web=web;
        this.ubicacion=ubicacion;
        this.logo=logo;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get tel(){
        return this._tel;
    }
    set tel(tel){
        this._tel=tel;
    }
    get web(){
        return this._web;
    }
    set web(web){
        this._web=web;
    }
    get ubicacion(){
        return this._ubicacion;
    }
    set ubicacion(ubicacion){
        this._ubicacion=ubicacion;
    }
    get logo(){
        return this._logo;
    }
    set logo(logo){
        this._logo=logo;
    }
}