var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
gulp.task('server',function () {
    var options = {
        script:'index.js',
        delayTime: 1,
        env:{
            'PORT' : 5000
        },
        watch:['*.js','.']
    }
    return nodemon(options)
    .on('restart',function (ev) {
        console.log('restarting.....');
    })
})