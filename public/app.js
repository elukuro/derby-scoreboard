if('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/service-worker.js')
    .then(function(registration){
        console.log(
            'Service worker registration succesful with scole: ', registration.scope
        );
    })
    .catch(function(err){
        console.log('Service Worker registration failed: ', err);
    })
}