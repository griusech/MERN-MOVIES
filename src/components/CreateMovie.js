import React, { useState, useEffect } from 'react'
import axios from 'axios';

const CreateMovie = (props) => {

    const [ titleMovie, setTitleMovie ] = useState('')
    const [ descMovie, setdescMovie ] = useState('')
    const [ imagine, setImagine ] = useState('')
    const [ edit, setEdit ] = useState(false)

    const urlApi = 'http://localhost:4000/api/movies';
    
    useEffect(() => {
        const { id } = props.match.params
        axios.get(`${urlApi}/${id}`)
        .then( res => {
            console.log(res.data.movie)
            const { title, description, image } = res.data.movie
            setTitleMovie(title)
            setdescMovie(description)
            setImagine(image)
            setEdit(true);
        })
    }, [props.match.params])

    // AGREGAR UNA PELICULA
    const register = async (e) => {
        const newMovie = {
            title: titleMovie,
            description: descMovie,
            image: imagine
        }
        await axios.post(urlApi, newMovie)
        e.preventDefault();
    }   

    // EDITAR UNA PELICULA
    const editMovie = async e => {
        e.preventDefault();
        const newMovie = {
            title: titleMovie,
            description: descMovie,
            image: imagine
        }
        try {
            const { id } = props.match.params
            await axios.put(`${urlApi}/${id}`, newMovie)
            setTitleMovie('')
            setdescMovie('')
            setImagine('')

        } catch (error) {
            
        }
    }

    const handeChange = e => {
        console.log(e.target.files[0])
       if(e.target.files[0]) {
           setImagine(e.target.files[0])
       }
    }

    return (
        <div>
            <form
            onSubmit={(edit ? editMovie : register)} 
            className="col-md-4 m-auto">
                <div className="form-group mt-5">
                    
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Ingrese Titulo" 
                    onChange={e => setTitleMovie(e.target.value)}
                    value={titleMovie}
                    />
                </div>
                <div className="form-group">
                    
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Ingrese Descripcion" 
                    onChange={e => setdescMovie(e.target.value)}
                    value={descMovie}
                    />
                </div>
   
                <div className="input-group">
                <div className="custom-file">
                    <input 
                    type="file" 
                    className="custom-file-input" 
                    id="inputGroupFile01"
                    onChange={handeChange}
                    image = {imagine}
                    aria-describedby="inputGroupFileAddon01" 
                    />
                    <label 
                    className="custom-file-label" 
                    htmlFor="inputGroupFile01"
                    onChange={e => console.log(e)}
                    
                    >Choose file
                    </label>
                </div>
                </div>

                <button type="submit" className="btn btn-primary mt-3">Enviar</button>
            </form>  
        </div>   

    )
}

export default CreateMovie
