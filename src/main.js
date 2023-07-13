import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

const app = createApp(App);

//Directiva personalizada
app.directive('font-size', {
    beforeMount: (el, binding) => {
        el.style.fontSize = '70px';
    }
});

app.mount('#app');
