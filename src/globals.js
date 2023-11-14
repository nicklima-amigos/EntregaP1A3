function backBtnClickHandler() {
  window.history.back();
}

const backBtn = document.querySelector('.back-btn-container button');
backBtn.addEventListener('click', backBtnClickHandler);
