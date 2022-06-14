class PuntoVenta{
    constructor(nombre,tel,web,ubicacion){
        this.nombre=nombre;
        this.tel=tel;
        this.web=web;
        this.ubicacion=ubicacion;
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
}