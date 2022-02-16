import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch'
import { PersonajeCont } from './PersonajeCont';

export const FilmCard = () => {
    const {movieId} = useParams();
   
    const url = `https://ghibliapi.herokuapp.com/films/${movieId}`
    const movie = useFetch(url);

    return (


        <div className='container'>
            {movie && <>
                <div className='banner'>
                    <img className='movieBanner' src={movie.movie_banner} />
                </div>
                <h3>{movie.title}</h3>
                <h6>{movie.original_title} ({movie.original_title_romanised})</h6>
                <hr />
                <div className='row'>
                    <div className='col-3'>
                        <img className='imagenGhibli' src={movie.image} />
                    </div>
                    <div className='col-9'>
                        <ul className='list-group'>
                            <li className='list-group-item'>Año: {movie.release_date} </li>
                            <li className='list-group-item'>Director: {movie.director}</li>
                            <li className='list-group-item'>Productor: {movie.producer}</li>
                            <li className='list-group-item'>Duración: {movie.running_time} min</li>
                            <li className='list-group-item'>{movie.description}</li>
                        </ul>
                    </div>


                </div>
                <hr />
                {movie.people[0] !== 'https://ghibliapi.herokuapp.com/people/' &&
                <div className='row'>
                    <h4 className='mb-5'>Personajes:</h4>
                    <div className='col-12 d-flex justify-content-between flex-wrap'>
                       
                         {movie.people.map(id => <PersonajeCont url = {id}/>)}                    

                    </div>
                </div>
                }
                

            </>}


        </div>


    )
}
