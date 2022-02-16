import React from 'react'
import { wow } from './wowDb'

export const EspeciesCont = () => {
  console.log(wow);
  return (
    <div className='container '>

      {

        wow.colecciones.map(({ nombre, imagen, claim, descripcion, catalogo, priceList, novedad }) => <div className='row pt-3 '>
          <div className='col-3 row'>

            <h3 className='col-6'>{nombre}</h3>{novedad && <p className='novedad col-6'>(New)</p>}
            <img className='coleccionImagen' src={imagen} />
          </div>

          <div className='col-9'>

            <h5>{claim}</h5>
            <p>{descripcion}</p>
            <button className='botonCatalogo' onClick={() => {
              window.open(catalogo)
            }}>Catalogo</button>
            <button className='botonCatalogo' onClick={() => {
              window.open(priceList)
            }}>Price List</button>

          </div>


        </div>)

      }


    </div>
  )
}
