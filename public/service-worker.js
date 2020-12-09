// urlB64ToUint8Array is a magic function that will encode the base64 public key
// to Array buffer which is needed by the subscription option
const urlB64ToUint8Array = base64String => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')
    const rawData = atob(base64)
    const outputArray = new Uint8Array(rawData.length)
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
}

// saveSubscription saves the subscription to the backend
const saveSubscription = async subscription => {
    const SERVER_URL = 'http://localhost:4000/save-subscription'
    const response = await fetch(SERVER_URL, {
        method: 'post',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscription),
    })
    return response.json()
}


self.addEventListener('activate',async ()=>{
    try{    
        // const applicationServerKey = urlB64ToUint8Array('BGffNEayVQv13jepXYiEW5mgNiwPit1PVWp2IUX0l96Cgav9JSv1q9z3WKu38A7mrimahloCTCQrlxs-3IBjU0g')
        // const options = { applicationServerKey, userVisibleOnly: true }
        // const subscription = await self.registration.pushManager.subscribe(options)
        // const response = await saveSubscription(subscription)
        console.log('[Service worker] is active')
    }catch(err){
        console.log('ERROR',err)
    }
})

self.addEventListener('install', function(event) {
    console.log('[Service Worker] Installing Service Worker ...', event);
    // event.waitUntil(
    //     caches.open('static').then(function(cache) {
    //         cache.addAll(['/app.js', '/manifest.json']);
    //     })
    // );
});

self.addEventListener('push', function(event) {
    if (event.data) {
        console.log('Push event!! ', event.data.text())
        showLocalNotification('yolo',event.data.text(),self.registration);
    } else {
        console.log('Push event but no data')
    }
})
const showLocalNotification = (title, body, swRegistration)=>{
    const options = {
        body,
    };
    swRegistration.showNotification(title,options);
}

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        } else {
          return fetch(event.request).then(function(res) {
            return caches.open('dynamic').then(function(cache) {
              cache.put(event.request.url, res.clone());
              return res;
            });
          });
        }
      })
    );
  });
  