const fs = require('fs');
const path = require('path');
const Movie = require('../models/movie');


// METODO PARA MOSTRAR TODAS LAS PELICULAS
exports.viewMovies = async (req, res) => {
    try {
       const movies = await Movie.find()
       res.json({ movies })

    } catch (error) {
        console.log("Hubo un error")
    }
}

// METODO PARA CREAR UNA PELICULA
exports.createMovie = async (req, res) => {
    try {
        // // Creo la tarea
        // const movie = new Movie(req.body)
        // // Guardo la tarea
        // await movie.save()
        // res.json({
        //     movie,
        //     msg: "Pelicula Creada"
        // })

        console.log(req.body)
        console.log(req.file)

    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// MOSTRAR PELICULA POR SU ID
exports.movieId = async (req, res) => {
    const movie = await Movie.findById(req.params.id)

    res.json({movie})
}

// ACTUALIZAR PELICULA POR SU ID
exports.updateMovie = async (req, res) => {
    try {
        const { title, description } = req.body;
        const movie = { title, description };
        await Movie.findByIdAndUpdate(req.params.id, movie)

        res.json({
            movie,
            msg: "Pelicula Actualizada"    
        })
        
    } catch (error) {
        res.json("Hubo un error al Actualizar")
    }
    
}

// AGREGAR IMAGEN A UNA PELICULA
exports.getImage = (req, res) => {
    const file = req.params.image;
    const path_file = './upload/articles/' + file;

    fs.exists(path_file, (exists) => {
        console.log(file)
        if (exists) {
            return res.sendFile(path.resolve(path_file));
        }
        else {
            return res.status(404).send
            ({
                status: 'error',
                message: 'La imagen no existe'
            });
        }
    });
},


// ELIMINAR UNA PELICULA POR SU ID
exports.deleteMovie = async (req, res) => { 
    await Movie.findByIdAndDelete(req.params.id);

    res.json({
        msg: "Pelicula Eliminada"
    })
}


