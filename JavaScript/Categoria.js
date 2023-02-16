class Categoria {
    constructor(id,caja,tipo){
        this._id=id;
        this._caja=caja;
        this._tipo=tipo;
    }
    get id(){
        return this._id;
    }
    set id(id){
        this._id=id;
    }
    get caja(){
        return this._caja;
    }
    set caja(caja){
        this._caja=caja;
    }
    get tipo(){
        return this._tipo;
    }
    set tipo(tipo){
        this._tipo=tipo;
    }
}