function showPopup() {
  var bodyEl = document.body || document.getElementsByTagName('body')[0];
  bodyEl.insertAdjacentHTML('beforeend', popupDom);
}
function handleClosePopup() {
  var popupEl = document.getElementsByClassName('popup-pg')[0];
  var popupBackdropEl = document.getElementsByClassName('popup-backdrop')[0];
  popupBackdropEl.addEventListener('click', () => {
    popupEl.remove();
  });
}
function initPopup() {
  var headEl = document.head || document.getElementsByTagName('head')[0];
  headEl.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />`);
  setTimeout(() => {
    showPopup();
    scalePopup();
    handleClosePopup();
  }, displayDelay);
}

function scalePopup() {
  if (window.innerWidth < popupWidth + 32) {
    let scaleRatio = window.innerWidth / (popupWidth + 32);
    const popupBodyEl = document.getElementsByClassName('popup-pg__body-wrap')[0];
    popupBodyEl.style.transform = `scale(${scaleRatio}) !important`;
  }
}
initPopup();
