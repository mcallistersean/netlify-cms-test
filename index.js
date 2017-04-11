import Metalsmith from 'metalsmith'

Metalsmith(__dirname)
    .source('content')
    .destination('build')
    .build((err)=> {
        if (err) {
            console.error(err);
            throw err;
        }
    })