function resetSlideScrolling(slide) {
  $(slide).removeClass('scrollable-slide');
}

function handleSlideScrolling(slide) {
  if ($(slide).height() >= 700) {
    $(slide).addClass('scrollable-slide');
  }
}

Reveal.addEventListener('ready', function (event) {
  handleSlideScrolling(event.currentSlide);
});

Reveal.addEventListener('slidechanged', function (event) {
  resetSlideScrolling(event.previousSlide);
  handleSlideScrolling(event.currentSlide);
});
