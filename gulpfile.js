// npm install gulp gulp-babel @babel/core --save-dev

const {
  src,
  dest,
  parallel,
  series,
  gulp
} = require( 'gulp' );
const pug = require( 'gulp-pug' );
const less = require( 'gulp-less' );
const minifyCSS = require( 'gulp-csso' );
const concat = require( 'gulp-concat' );

const rename = require( 'gulp-rename' );
const javascriptObfuscator = require( 'gulp-javascript-obfuscator' );
var babel = require( "gulp-babel" );

function html() {
  return src( 'src/*.pug' )
    .pipe( pug() )
    .pipe( dest( 'docs' ) )
}

function css() {
  return src( 'src/*.less' )
    .pipe( less() )
    .pipe( minifyCSS() )
    .pipe( dest( 'docs/css' ) )
}

function js() {
  return src( 'src/*.js' )
    .pipe( concat( 'app.js' ) )
    .pipe( babel() )
    .pipe( dest( 'docs/js' ) )
}

function js_compress() {
  return src( './docs/js/app.js' )
    .pipe( javascriptObfuscator( {
      compact: true
    } ) )
    .pipe( rename( 'app.min.js' ) )
    // .pipe( sourcemaps.write() )
    .pipe( dest( 'docs/js', ) )
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.default = parallel( css, series(js, js_compress), html );
