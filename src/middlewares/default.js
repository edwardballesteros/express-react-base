export default (request, response, next) => {
    console.log('Middleware time:', Date.now());
    next();
} ;