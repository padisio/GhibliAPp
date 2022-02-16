import React from 'react'
import { useFetch } from '../hooks/useFetch';

export const PersonajeCont = ({ url }) => {
  console.log(url)
  const personaje = useFetch(url);
  personaje && console.log(personaje)
  
  return <>
    {
      personaje && personaje !== {} &&
      <div className=' tarjetaPersonaje col-6 row d-flex justify-content-between'>
        <div className='col-3'>
          <h6 className='a'>{personaje.name}</h6>
        </div>
        <div className='col-8'>

          <ul className='list-group'>
            <li className='list-group-item'>Edad: {personaje.age} </li>
            <li className='list-group-item'>Sexo: {personaje.gender} </li>
            <li className='list-group-item'>Color pelo: {personaje.hair_color} </li>
            <li className='list-group-item'>Color ojos: {personaje.eye_color} </li>
          </ul>
        </div>


      </div>


    }

  </>



}
