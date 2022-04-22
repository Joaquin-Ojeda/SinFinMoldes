class Producto{
    constructor(imagen, descripcion, valor, medidas, categoria, tipo){
        this._imagen=imagen;
        this._descripcion=descripcion;
        this._valor=valor;
        this._medidas=medidas;
        this._categoria=categoria;
        this._tipo=tipo;
    }
    get imagen(){
        return this._imagen;
    }
    set imagen(imagen){
        this._imagen=imagen;
    }

    get descripcion(){
        return this._descripcion;
    }
    set descripcion(descripcion){
        this._descripcion=descripcion;
    }

    get valor(){
        return this._valor;
    }
    set valor(valor){
        this._valor=valor;
    }

    get medidas(){
        return this._medidas;
    }
    set medidas(medidas){
        this._medidas=medidas;
    }

    get categoria(){
        return this._categoria;
    }
    set categoria(categoria){
        this._categoria=categoria;
    }

    get tipo(){
        return this._tipo;
    }
    set tipo(tipo){
        this._tipo=tipo;
    }
}