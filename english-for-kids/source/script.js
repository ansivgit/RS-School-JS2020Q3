import './assets/scss/style.scss';

import App from './models/application';

const LANG = 'En';

const appEn = new App(LANG);

window.addEventListener('DOMContentLoaded', () => {
  appEn.init();
});
