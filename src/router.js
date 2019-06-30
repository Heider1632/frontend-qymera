import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import store from "./store";

//teacher routes views
import HomeTeacher from "./views/teacher/home";
import ProfileTeacher from "./views/teacher/profile";
import TeacherNavbar from "./layout/teacher/TeacherNavbar";
import GroupTeacher from "./views/teacher/group";


//excutive routes views
import Start from "./views/teacher/start";
import Login from "./views/Login.vue";


//defult components
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

/* eslint-disable */

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/teacher/:id",
      component: Start,
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: "",
          components: { default: HomeTeacher, header: TeacherNavbar, footer: MainFooter },
        },
        {
          path: "profile",
          components: { default: ProfileTeacher, header: TeacherNavbar, footer: MainFooter },
        },
        {
          path: "groups",
          components: { default: GroupTeacher, header: TeacherNavbar, footer: MainFooter },
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters.getUser === null) {
      next({
        path: '/login',
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router;
