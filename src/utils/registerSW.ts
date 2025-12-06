// Service Worker Registration with aggressive update checking
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        updateViaCache: 'none' // Always check for updates
      });

      console.log('Service Worker registered successfully:', registration);

      // Check for updates immediately on page load
      registration.update();

      // Check for updates every 10 seconds (aggressive)
      setInterval(() => {
        registration.update();
      }, 10000);

      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available
              console.log('New service worker available - auto updating');
              
              // Auto-update without confirmation
              newWorker.postMessage({ type: 'SKIP_WAITING' });
              setTimeout(() => {
                window.location.reload();
              }, 100);
            }
          });
        }
      });

      // Reload page when new service worker takes control
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });

      return registration;
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
};

// Initialize service worker
export const initPWA = () => {
  // Register service worker
  registerServiceWorker();

  // Handle online/offline status
  const updateOnlineStatus = () => {
    const status = navigator.onLine ? 'online' : 'offline';
    document.body.classList.toggle('offline', !navigator.onLine);
    
    // Show offline notification
    if (!navigator.onLine) {
      showOfflineNotification();
    }
  };

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();
};

// Show offline notification
const showOfflineNotification = () => {
  const notification = document.createElement('div');
  notification.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg';
  notification.textContent = 'You are offline. Some features may be limited.';
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 5000);
};

// Install prompt handling
export const setupInstallPrompt = () => {
  let deferredPrompt: any;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Store the event for later use
    (window as any).deferredPrompt = deferredPrompt;
  });

  window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    deferredPrompt = null;
    (window as any).deferredPrompt = null;
  });
};
