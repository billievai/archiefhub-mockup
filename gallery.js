import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe/dist/photoswipe-lightbox.esm.js';

const lightbox = new Lightbox({
    gallery: '#my-gallery',
    children: '.views-row',
    pswpModule: () => import('./photoswipe.esm.js')
  });
  lightbox.init();

lightbox.init();