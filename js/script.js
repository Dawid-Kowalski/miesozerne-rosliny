const elem = document.querySelector('.main-carousel');
const flkty = new Flickity( elem, {
  autoPlay: true,
  cellAlign: 'left',
  contain: true,
  hash: true,
  pageDots: false
});

function resetCell() {
	flkty.selectCell(0);
}