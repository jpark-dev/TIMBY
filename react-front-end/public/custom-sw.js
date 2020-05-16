self.addEventListener('push', event => {
  const data = event.data.json();
  console.log('New notification', data)

  clients.matchAll({
    type: 'window',
    includeUncontrolled: true
  })
  .then(function(windowClients)
  {   
    windowClients.forEach(function(windowClient){
    windowClient.postMessage({
      message: 'Received a push message.'+event.data.text(),
      time: new Date().toString()
    });
  });
  });

  const options = {
    body: data.body,
  }
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

