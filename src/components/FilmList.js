import React from 'react'
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch'

export const FilmList = () => {

    const respuesta = useFetch('https://ghibliapi.herokuapp.com/films');
    respuesta && console.log(respuesta);



    return (<div className='container'>
        <div className='row d-flex align-items-stretch'>

        {
            respuesta && respuesta.map((film, i) =>
            
                <div className='col-6'>
                    <div className='container cardCont'>
                        <div className='d-flex justify-content-between'>
                        <h3> {film.title} ({film.original_title})</h3> <h3>#{i + 1}</h3>
                        </div>
                        <p>{film.director}</p>

                        <hr />
                        <div className=' row'>
                            <div className='col-3 p-3'>
                                <img alt={film.title} className='imagenGhibli' src={film.image} />

                            </div>
                            <div className='col-9 p-3'>
                                <p>{film.description}</p>

                            </div>

                        </div>
                        <div className='p-3 text-end'>

                            <Link className='verMas' to={`film/${film.id}`}>Ver mas</Link>
                        </div>
                    </div>
                </div>

            )


        }

            </div>
    </div>
    )
}
