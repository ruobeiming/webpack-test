import Vue from 'vue';
import App from './app.vue';

import './assert/bda0096882be2e09c3b6bca15.png';
import './style/test.less';

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
	render: (h) => h(App)
}).$mount(root);