import '@babel/polyfill';
import 'intersection-observer';
import { initTriggerHamburger } from './Modules/hamburger';
// import { initTitleLoadAnim } from './Animations/titleLoadAnim';
// import { initTitleAnim } from './Animations/titleAnim';
// import { initScrollFadeAnim } from './Animations/scrollFade';
// import { initStaggerFadeAnim } from './Animations/staggerFade';
import { initSmoothScroll } from './Modules/smoothScroll';

document.addEventListener('DOMContentLoaded', function() {
    initTriggerHamburger();
    // initTitleLoadAnim();
    // initTitleAnim();
    // initScrollFadeAnim();
    // initStaggerFadeAnim();
    initSmoothScroll();
});
