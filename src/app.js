
const outerFrame = `
<section class="section">
<div class="container">
    <div class="columns">
        $innerFrame$
    </div>
</div>
</section>
`;

let innerFrame = `<div class="column">$frame_content$</div>`;

function query_google_trend ( geo_in ) {
    return `<script> trends.embed.renderWidget( "dailytrends", "", {
        "geo": geo_in,
        "guestPath": "https://trends.google.com:443/trends/embed/"
    } )</script>`;
}

function create_inner_frame ( frame_content ) {
    return innerFrame.replace( '$frame_content$',
        frame_content );
}




function create_outer_frame ( frame_content ) {
    return outerFrame.replace( '$innerFrame$', frame_content );
}

document.addEventListener( "DOMContentLoaded", function () {
    console.log( "helloworld" );
    // document.querySelector( '.app' ).innerHTML = create_outer_frame(
    //     create_inner_frame(query_google_trend('HK'))
    // );
    // document.querySelector( '.app' ).innerHTML = create_outer_frame(create_inner_frame(query_google_trend('HK')));
} );


function helloworld ( text_in ){
    console.log( text_in );
}
