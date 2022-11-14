// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {Data} from '../../interfaces'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    
    materialLista:[
    { 
      "Id":1,
      "Material": 100001931,
      "Unidad_medida": "PI",
      "Stock": 0,
      "Descripcion": "Espuma poliuretano canula manual 750ml",
      "Almacen": "FLM RO Barcelona",
      "Imagen": "http://localhost:3000/favicon.ico"
     },
     {
      "Id":2,
      "Material": 100001982,
      "Unidad_medida": "PI",
      "Stock": 31,
      "Descripcion": "Brazalete para Recurso Preventivo",
      "Almacen": "FLM RO Barcelona",
      "Imagen":"http://localhost:3000/favicon.ico"
     },
     {
      "Id":3,
      "Material": 100002032,
      "Unidad_medida": "PI",
      "Stock": 0,
      "Descripcion": "PLETINA DESCARGADORES",
      "Almacen": "FLM RO Barcelona",
      "Imagen":"http://localhost:3000/favicon.ico"
     },
     {
      "Id":4,
      "Material": 100002033,
      "Unidad_medida": "PI",
      "Stock": 93,
      "Descripcion": "PLETINA TIERRA",
      "Almacen": "FLM RO Barcelona",
      "Imagen":"http://localhost:3000/favicon.ico"
     },
     {
      "Id":5,
      "Material": 100002034,
      "Unidad_medida": "PI",
      "Stock": 0,
      "Descripcion": "TUBO REDONDO GALVANIZADO 1 1\/2 x 3000 MM",
      "Almacen": "FLM RO Barcelona",
      "Imagen":"http://localhost:3000/favicon.ico"
     },
     {
      "Id":6,
      "Material": 100002035,
      "Unidad_medida": "PI",
      "Stock": 0,
      "Descripcion": "PLETINA DE TIERRA 250X50\/5 9 TALADROS M8",
      "Almacen": "FLM RO Barcelona",
      "Imagen":"http://localhost:3000/favicon.ico"
     },
    
    ]
   
   
})

}
