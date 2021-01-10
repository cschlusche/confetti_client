
import { createApp } from 'vue'
import App from './App.vue'
import VueAxios from "vue-axios"
import axios from 'axios'

// https://stackoverflow.com/questions/64269587/how-to-correctly-import-axios-in-vue-3-after-creating-new-project-with-cli
const app = createApp(App).use(VueAxios, axios);
//this.$cookies.config('1h')
app.mount('#app')
