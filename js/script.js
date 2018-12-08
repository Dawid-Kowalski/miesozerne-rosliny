const elem = document.querySelector('.main-carousel');
let flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
let flkty = new Flickity( '.main-carousel', {
  // options
});