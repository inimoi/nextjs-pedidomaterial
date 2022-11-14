

export interface Data {
    
    materialLista: MaterialListResponse[],
}



export interface MaterialListResponse{
    Id:number,
    Material:number,
    Unidad_medida:string,
    Stock:number,
    Descripcion:string,
    Almacen: string,
    Imagen:string
  }
