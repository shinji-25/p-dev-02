import anime from 'animejs';

// ナビゲーションを開けるアニメーション

const globalNav = document.querySelector('#global_nav');
const navCover = document.querySelector('.js-nav-cover');

const openNavAnim = function() {
    const globalNavItems = Array.from(document.querySelectorAll('.l-global_nav_item'));
    globalNav.classList.remove('is-hidden');
    navCover.classList.remove('is-hidden');
    anime({
        targets: navCover,
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 300,
        complete: function() {
            anime({
                targets: globalNavItems,
                translateY: [100, 0],
                opacity: [0, 1],
                scale: [0.6, 1],
                rotate: [20, 0],
                duration: 500,
                easing: 'easeInOutCubic',
                delay: anime.stagger(120, { start: 100 }),
            });
        },
    });
};

// ナビゲーションを閉じるアニメーション
const closeNavAnim = function() {
    // const navCover = document.querySelector('.js-nav-cover');
    const globalNavItems = Array.from(document.querySelectorAll('.l-global_nav_item'));
    const reverseGlobalNavItems = globalNavItems.reverse();
    anime({
        targets: reverseGlobalNavItems,
        translateY: [0, 100],
        opacity: [1, 0],
        scale: [1, 0.6],
        rotate: [0, 20],
        duration: 400,
        easing: 'easeInOutCubic',
        delay: anime.stagger(80, { start: 100 }),
    });
    anime({
        targets: navCover,
        opacity: [1, 0],
        easing: 'easeInOutQuart',
        duration: 300,
        delay: 300,
        complete: function() {
            globalNav.classList.add('is-hidden');
            navCover.classList.add('is-hidden');
        },
    });
};

// ハンバーガーメニューがクリックされた時のアニメーション
const triggerHamburger = document.getElementById('js-buttonHamburger');

// ハンバーガーメニューを三と×に切り替える処理
const hamburgerAnim = function() {
    if (triggerHamburger.getAttribute('aria-expanded') == 'false') {
        triggerHamburger.setAttribute('aria-expanded', true);
    } else {
        triggerHamburger.setAttribute('aria-expanded', false);
    }
};

const checkDrawerActive = function() {
    const drawerActive = document.querySelector('body').classList.contains('is-drawerActive');

    if (drawerActive) {
        // bodyにis-drawerActiveがついている場合
        closeNavAnim();
    } else {
        // bodyにis-drawerActiveがついていない場合(false)
        openNavAnim();
    }
};

// bodyにclassをつけるだけの簡単なお仕事
// この処理を一番最後に！
const bodyToggleClass = function() {
    const body = document.querySelector('body');
    body.classList.toggle('is-drawerActive');
};

const initTriggerHamburger = function() {
    triggerHamburger.addEventListener('click', function() {
        // alert('ボタンがクリックされたよ');

        checkDrawerActive();
        hamburgerAnim();
        bodyToggleClass();
    });
};

export { initTriggerHamburger };
