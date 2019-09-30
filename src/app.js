document.addEventListener( "DOMContentLoaded", function () {
    console.log( "helloworld" );
    let test = document.getElementById( "trends-widget-1" );
    let column_list = document.querySelectorAll( '.column' );

    column_list.forEach( ( column ) => {
        console.log( 'findme' );
        column.addEventListener( 'mouseenter', function ( event ) {
            column.classList.add( 'is-half' );
        } )

        column.addEventListener( 'mouseleave', function ( event ) {
            column.classList.remove( 'is-half' );
        })

    })

} );
