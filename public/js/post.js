const editBox = document.querySelector('.comment-edit');
const deleteBox = document.querySelector('.comment-delete');
const editCommentButton = document.querySelector('.comment-edit--edit');
const deleteCommentButton = document.querySelector('.comment-edit--delete');
const closeCommentButton = document.querySelectorAll('.comment-edit--close');

function openEditBox() {
  editBox.classList.add('show');
}

function openDeleteBox() {
  deleteBox.classList.add('show');
}

function closeBox(e) {
  e.target.parentNode.classList.remove('show');
}

if (editCommentButton && deleteCommentButton && closeCommentButton) {
  editCommentButton.addEventListener('click', openEditBox);
  deleteCommentButton.addEventListener('click', openDeleteBox);
  for (let i = 0; i < closeCommentButton.length; i++) {
    closeCommentButton[i].addEventListener('click', closeBox);
  }
}
