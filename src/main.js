import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import firebase from 'firebase/app';
// import { firebaseConfig } from './config/index.js';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

const firebaseConfig = {
  apiKey: 'AIzaSyBfpL5uJQZzabWmSfRC2tseayJA1sb5tkg',
  authDomain: 'popups-builder.firebaseapp.com',
  projectId: 'popups-builder',
  storageBucket: 'popups-builder.appspot.com',
  messagingSenderId: '540978528481',
  appId: '1:540978528481:web:3bd4a84e9d75e721cff7a0',
  measurementId: 'G-S9XB6VR9XF',
};

firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
