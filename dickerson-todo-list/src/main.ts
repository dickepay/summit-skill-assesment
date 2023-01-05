import { createApp } from 'vue'

import App from './App.vue'

import { Inkline, components } from '@inkline/inkline';
import '@inkline/inkline/inkline.scss';

import './assets/main.css'
import { key, todoStore } from './stores/todos'

const app = createApp(App)

app.use(Inkline, {
    components
})

app.use(todoStore, key)

app.mount('#app')
