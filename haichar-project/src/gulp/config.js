var src='./src',
    dest='./dest',
    maps='./maps';

module.exports={
    html:{
        all:src+'/**/*.html',
        src:src+'/*.html',
        dest:dest
    },
    less:{
        all:src+'/css/**/*.less',
        src:src+'/css/**/*.less',
        dest:dest+'/css',
        settings:{}
    },
    js:{
        src:src+'/js/*.js',
        dest:dest+'/js'
    },
    images:{
        src:src+'/images/*.{png,jpg,gif,svg}',
        dest:dest+'/images'
    },
    clean:{src:dest},
    maps:{src:maps}
}