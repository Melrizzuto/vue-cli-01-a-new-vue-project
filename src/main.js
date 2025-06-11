import { createApp } from 'vue';
import App from './App.vue';
import FamilyInfo from './components/FamilyInfo.vue';
import NewMember from './components/newMember.vue';

const app = createApp(App)


app.component("family-info", FamilyInfo)
app.component("new-member-add", NewMember)

app.mount('#app');
