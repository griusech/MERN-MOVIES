const express = require('express');
const movieController = require('../controller/movieController')
const { upload } = require('../middlewares/uploadMovies')
const router = express.Router();

router.get('/', 
    movieController.viewMovies
)

router.get('/', 
    movieController.viewMovies
)

router.get('/:id', 
    movieController.movieId
)

router.put('/:id', 
    movieController.updateMovie
)

router.post('/img', 
    movieController.getImage
)

router.post('/', 
    upload.single('imageMovie'),
    movieController.createMovie
)

router.delete('/:id', 
    movieController.deleteMovie
)

module.exports = router;
