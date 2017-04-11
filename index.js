import Metalsmith from 'metalsmith'

import markdown from 'metalsmith-markdown'
import permalinks from 'metalsmith-permalinks'
import layouts from 'metalsmith-layouts'
import watch from 'metalsmith-watch'

Metalsmith(__dirname)
    .source('content')
    .destination('build')
    .clean(true)
    .metadata({
        title: "My Static Site & Blog",
        description: "It's about saying »Hello« to the World.",
        generator: "Metalsmith",
        url: "http://www.metalsmith.io/",
    })
    .use(markdown({
        "gfm": true,
        "tables": true
    }))
    .use(permalinks({
        relative: false
    }))
    .use(layouts({
        engine: "handlebars",
        default: "layout.html"
    }))
    .use(watch())
    .build((err)=> {
        if (err) {
            console.error(err);
            throw err;
        }
    })