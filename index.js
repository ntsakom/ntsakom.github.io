 console.log("Hello World");

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

