import { createApp } from 'vue';
import App from './App.vue';
import FamilyInfo from './components/FamilyInfo.vue';

const app = createApp(App)


app.component("family-info", FamilyInfo)

app.mount('#app');
