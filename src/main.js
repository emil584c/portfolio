import { createApp } from 'vue'
import App from './App.vue'






import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import './assets/main.css'

createApp(App)
.component('fa', FontAwesomeIcon)
.mount('#app')


const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
