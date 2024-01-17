import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  
    //la ruta base
      {
          path: '/', //el inicio de nuetra 
          redirect: '/juguetes'
      },
    
    {
      path: '/',
      component: {
          render(c) {
              return c('router-view');
          },
      },

      children:[
        {
          path: '/inicio',
          name: 'inicio',
          component: () => import('../components/Inicio.vue')
        },
        {
            path: '/conocenos',
            name: 'conocenos',
            component: () => import('../components/KnowUs.vue')
        },
        {
            path: '/profile',
            name: 'perfil',
            component: () => import('../components/Profile.vue')
        },
        {
            path: '/juguetes',
            name: 'juguetes',
            component: () => import('../components/Juguetes/Juguetes.vue')
        },
        {
            path: '/electrodomesticos',
            name: 'electrodomesticos',
            component: () => import('../components/Electrodomesticos/Electro.vue')
        },
        {
            path: '/hogar',
            name: 'hogar',
            component: () => import('../components/Hogar/Hogar.vue')
        },
        {
          path: '/cocina',
          name: 'cocina',
          component: () => import('../components/Electrodomesticos/Cocina.vue')
      },
      ]
    }
    
    ]
  
  
  const router = new VueRouter({ routes, })
  export default router;