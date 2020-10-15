import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ListMovies = ({image}) => {

    const [movie, setMovie] = useState([])
    
    const urlApi = 'http://localhost:4000/api/movies';

    useEffect(() => {
        axios.get(urlApi)
        .then(
            res => setMovie(res.data.movies)
        )
    }, [])


    const getMovies = () => {
        axios.get(urlApi)
        .then( 
            res => setMovie(res.data.movies) 
        )
    }

    const deleteMovie = async id => {
        await axios.delete(`${urlApi}/${id}`)
        getMovies();
    }



    return (
        
        <div className="row">
        {
            movie.map(item => (
                <div key={item._id} className="col-sm-4">
                    <div className="card">
                        {console.log(image)}
                    <img src={image} className="card-img-top" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>

                        <button 
                        className="btn btn-danger"
                        onClick={() => deleteMovie(item._id)}
                        >Eliminar</button>

                        <Link to={'/edit/' + item._id}>

                        <button 
                        className="btn btn-warning ml-1"
                        >Editar</button>

                        </Link>
                        
                    </div>
                    </div>
                </div>
            ))
        }
        </div>
        
    )
}

export default ListMovies
