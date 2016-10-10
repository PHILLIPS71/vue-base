import Vue from 'vue';
import VueRouter from 'router';

const User = {
    template:
    `<div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}

const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/user/:id',
            component: User,
            children: [
                {
                    path: '',
                    component: UserHome
                },
                {
                    path: 'profile',
                    component: UserProfile
                },
                {
                    path: 'posts',
                    component: UserPosts
                }
            ]
        }
    ]
})

Vue.use(VueRouter)
const app = new Vue({ router }).$mount('#app')