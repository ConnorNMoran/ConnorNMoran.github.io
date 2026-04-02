function openLightbox(src) {
  var overlay = document.getElementById('lightbox-overlay');
  var img = document.getElementById('lightbox-image');

  img.src = src;
  overlay.style.display = 'block';

  setTimeout(function () {
    overlay.style.opacity = '1';
    img.style.transform = 'scale(1)';
  }, 10);
}

function closeLightbox() {
  var overlay = document.getElementById('lightbox-overlay');
  var img = document.getElementById('lightbox-image');

  overlay.style.opacity = '0';
  img.style.transform = 'scale(0.95)';

  setTimeout(function () {
    overlay.style.display = 'none';
  }, 250);
}

// IMPORTANT: wait for DOM before attaching listeners
document.addEventListener('DOMContentLoaded', function () {

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  var overlay = document.getElementById('lightbox-overlay');

  if (!overlay) return; // safety guard

  var touchStartY = 0;
  var touchEndY = 0;

  overlay.addEventListener('touchstart', function (e) {
    touchStartY = e.changedTouches[0].screenY;
  });

  overlay.addEventListener('touchend', function (e) {
    touchEndY = e.changedTouches[0].screenY;

    if (Math.abs(touchEndY - touchStartY) > 50) {
      closeLightbox();
    }
  });

});