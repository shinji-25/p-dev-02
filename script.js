'use strict'
{
  const body = document.querySelector('body');
  const show = document.getElementById('l-header__show-menu');
  const hide = document.getElementById('l-header__hide-menu');
  const cover = document.getElementById('l-header__cover');

  show.addEventListener('click', () => {
    body.classList.add('l-header__menu-open');
  })

  hide.addEventListener('click', () => {
    body.classList.remove('l-header__menu-open');
  })

  cover.addEventListener('click', () => {
    body.classList.remove('l-header__menu-open');
  })
}