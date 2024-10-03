import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home/Home.vue'



import UserDashboard from '@/pages/Dashboard/UserDashboard.vue';
import UserExplore from '@/pages/Dashboard/UserExplore.vue';
import AllMyWishes from '@/pages/Dashboard/AllMyWishes.vue';
import Wishlist from '@/pages/Wishlist.vue';
import Friends from '@/pages/Friends.vue';
import Profile from '@/pages/Profile.vue';
import Login from '@/pages/Auth/Login.vue';
import Register from '@/pages/Auth/Register.vue';
import CreateOption from '@/pages/Auth/CreateOption.vue';
import ForgotPassword from '@/pages/Auth/ForgotPassword.vue';
import ResetPassword from '@/pages/Auth/ResetPassword.vue';
import VerificationSent from '@/pages/Auth/VerificationSent.vue';
import SignUp from '@/pages/Auth/SignUp.vue';
import SignUp2 from '@/pages/Auth/SignUp2.vue';
import NotFound from '@/pages/NotFound.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
/*     {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
 */


    {
      path: '/explore',
      name: 'explore',
      component:UserExplore,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component:UserDashboard,
    },
    {
      path: '/all-wishes',
      name: 'AllMyWishes',
      component: AllMyWishes,
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: Wishlist,
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/create-option',
      name: 'Create Option',
      component: CreateOption,
    },
    {
      path: '/forgot-password',
      name: 'Forgot Password',
      component: ForgotPassword,
    },
    {
      path: '/reset-password',
      name: 'Reset Password',
      component: ResetPassword,
    },
    {
      path: '/verification-sent',
      name: 'Verification Sent',
      component: VerificationSent, 
    },
    {
      path: '/sign-up',
      name: 'Sign Up',
      component: SignUp, 
    },
    {
      path: '/sign-up-2',
      name: 'Sign Up 2',
      component: SignUp2, 
    },

     // Catch-all route for 404 Not Found
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },

  ]
})

export default router
