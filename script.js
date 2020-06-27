'use strict'
{
  // ドロワーメニュー用
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

  // ページ内スクロール用
  const logo = document.querySelector('header').firstElementChild;
  const links = document.getElementById('l-header__links').children;
  
  logo.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  });

  links[0].addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
    body.classList.remove('l-header__menu-open');
  });

  links[1].addEventListener('click', (e) => {
    e.preventDefault();
    const concept = document.getElementById('concept');
    const conceptY = concept.getBoundingClientRect().top;
    window.scroll({
      top: window.pageYOffset + conceptY - 80,
      behavior: 'smooth'
    });
    body.classList.remove('l-header__menu-open');
  });

  links[2].addEventListener('click', (e) => {
    e.preventDefault();
    const room = document.getElementById('room');
    const roomY = room.getBoundingClientRect().top;
    window.scroll({
      top: window.pageYOffset + roomY - 80,
      behavior: 'smooth'
    });
    body.classList.remove('l-header__menu-open');
  });

  links[3].addEventListener('click', (e) => {
    e.preventDefault();
    const news = document.getElementById('news');
    const newsY = news.getBoundingClientRect().top;
    window.scroll({
      top: window.pageYOffset + newsY - 80,
      behavior: 'smooth'
    });
    body.classList.remove('l-header__menu-open');
  });

  links[4].addEventListener('click', (e) => {
    e.preventDefault();
    const access = document.getElementById('access');
    const accessY = access.getBoundingClientRect().top;
    window.scroll({
      top: window.pageYOffset + accessY - 80,
      behavior: 'smooth'
    });
    body.classList.remove('l-header__menu-open');
  });
}