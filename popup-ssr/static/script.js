function showPopup() {
  var bodyEl = document.body || document.getElementsByTagName('body')[0];
  bodyEl.insertAdjacentHTML('beforeend', popupDom);
}
function handleClosePopup() {
  var popupBackdropEl = document.getElementsByClassName('popup-backdrop')[0];
  popupBackdropEl.addEventListener('click', () => {
    var popupEl = document.getElementsByClassName('popup-pg')[0];
    popupEl.remove();
  });
}
function initPopup() {
  var headEl = document.head || document.getElementsByTagName('head')[0];
  headEl.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />`);
  window.popupDisplayDelay = displayDelay;
  setTimeout(() => {
    showPopup();
    scalePopup();
    handleClosePopup();
  }, displayDelay);
}

function scalePopup() {
  if (window.innerWidth < popupWidth + 64) {
    let scaleRatio = window.innerWidth / (popupWidth + 64);
    const popupAnimationEl = document.getElementById('popup_animation');
    popupAnimationEl.style.setProperty('--popup-scale', scaleRatio);
  }
}
initPopup();
