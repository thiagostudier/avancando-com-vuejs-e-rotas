import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home';
import Produto from './pages/produto/Produto';
import MeusProdutos from './pages/produto/MeusProdutos';
import Detalhe from './pages/produto/Detalhe';

/*
 Regisrando o router na instancia do Vue

 > Modelo HASH E HISTORY

 > Hash seusite.com/#/contato
 > History seusite.com/contato


 */
Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/produto/',
            component: Produto,
            props: true,
            beforeEnter: (to, from, next) => {
                console.log('ANTES DA ROTA PRODUTO');
                next();
            },
            children: [
                {path: '', component: MeusProdutos },
                {path: ':id', component: Detalhe, props: true },
            ]
        },
        //SE FOR UMA TELA QUE NÃO EXISTE
        {
            path: "*", 
            redirect: '/'
        }
    ]
});

router.beforeEach((to, from, next) =>{
    console.log('CHAMADO ANTES DAS ROTAS');
    next();
});

export default router;