import { readable } from 'svelte/store';
import { browser } from '$app/environment';

export const isOnline = readable(true, (set) => {
  if (browser) {
    // Set initial state
    set(navigator.onLine);

    const update = () => set(navigator.onLine);

    window.addEventListener('online', update);
    window.addEventListener('offline', update);

    return () => {
      window.removeEventListener('online', update);
      window.removeEventListener('offline', update);
    };
  }
});