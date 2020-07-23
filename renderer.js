// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
if (typeof self.ServiceWorker !== 'undefined') {
    (async () => {
        // Install service worker
        try {
            const registration = await navigator.serviceWorker.register(
                'sw.js',
                {
                    scope: './',
                },
            );
        } catch (error) {
            console.error('Could not register service worker', error);
        }
    })();
} else {
    console.warn('Environment does not provide a service worker');
}
