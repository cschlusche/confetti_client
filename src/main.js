
import { createApp } from 'vue'
import App from './App.vue'
import VueAxios from "vue-axios"
import axios from 'axios'
import { createRouter, createWebHashHistory } from 'vue-router'

//

import LoginForm from './components/Login/LoginForm.vue'
import MessagingManager from './components/Messaging/MessagingManager.vue'
import UserProfile from './components/User/UserProfile.vue'

const cmpLoginForm = LoginForm
const cmpMessagingManager = MessagingManager
const cmpUserProfile = UserProfile

// https://stackoverflow.com/questions/64623889/how-to-add-router-to-vue-cli-app-with-vuejs-3
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', name:'Home', component: cmpLoginForm},
        {path: '/login', name:'LoginForm', component: cmpLoginForm},
        {path: '/messaging/:id', name:'MessagingManager', component: cmpMessagingManager},
        {path: '/user/:id', name:'UserProfile', component: cmpUserProfile}
    ]
});

// https://www.digitalocean.com/community/tutorials/how-to-set-up-vue-js-authentication-and-route-handling-using-vue-router
// beforeEach() is a navigationGuard
router.beforeEach((to) => {
    
    console.log('to.path: ' + to.path)

    if(to.path !== '/' && to.path !== '/login'){
        // restricted access

        // TODO refactor into method
    if(localStorage.getItem("token") === null){
        
        // not logged in
        //next({name: 'LoginForm'})
        /* next({
            path: '/login'
        }) */
        router.push({ name: 'Home' })
    
    }else{
        // TODO send authentication token to server to verify
    }
}
})


//

// https://stackoverflow.com/questions/64269587/how-to-correctly-import-axios-in-vue-3-after-creating-new-project-with-cli
const app = createApp(App).use(VueAxios, axios).use(router);
//this.$cookies.config('1h')
app.mount('#app')
