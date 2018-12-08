const elem = document.querySelector('.main-carousel');
const progressBar = document.querySelector('.progress-bar')

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

flkty.on( 'scroll', function(progress) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});