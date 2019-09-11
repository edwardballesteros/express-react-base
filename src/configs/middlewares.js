export default   {
    order: [
        'cookieParser',
        'session',
        'passportInit',            // <==== If you're using "passport", you'll want to have its two
        'passportSession',         // <==== middleware functions run after "session".
        'bodyParser',
        'compress',
        'foobar',                  // <==== We can put other, custom HTTP middleware like this wherever we want.
        'poweredBy',
        'router',
        'www',
        'favicon',
    ],

}