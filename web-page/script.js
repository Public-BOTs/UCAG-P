if (window.lucide) window.lucide.createIcons();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('video').forEach((video) => { video.playbackRate = 2; });

if (!reduceMotion && 'IntersectionObserver' in window) {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play().catch(() => {});
      } else {
        entry.target.pause();
      }
    });
  }, { threshold: 0.35 });

  document.querySelectorAll('video[data-autoplay]').forEach((video) => videoObserver.observe(video));
}

