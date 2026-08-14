self.addEventListener('install', (e) => {
    console.log('[Service Worker] 安裝成功');
});

self.addEventListener('fetch', (e) => {
    // 簡單攔截，確保 PWA 認可
    e.respondWith(fetch(e.request).catch(() => new Response('請檢查網絡連線')));
});
