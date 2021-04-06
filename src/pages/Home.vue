<template>
    <span id="home">
        <div v-if="loading">
            <h1>Carregando</h1>
        </div>
        <div v-if="!loading">
            <article v-for="item in nutri" :key="item.id" class="post">
            <b class="titulo">{{item.titulo}}</b>
            <img :src="item.capa" alt="Capa" />
            <span class="categoria">Categoria: {{item.categoria}}</span>
            <p class="subtitulo">{{item.subtitulo}}</p>
            <a href="" class="botao" rel="noopener noreferrer">Acessar</a>
            </article>
        </div>
    </span>
</template>

<script>
    import api from './../services/api';
    export default {
        name: 'Home',
        data(){
            return{
            nutri: [],
            loading: true
            }
        },
        async created(){
            const response = await api.get('?api=posts'); //AWAIT - ESPERA PRA MIM
            console.log(response);
            this.nutri = response.data;
            this.loading = false;
        }
    }
</script>

<style scopped>
    #home{
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    .post{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 700px;
        background: #fff;
        border-radius: 7px;
        margin: 8px;
        padding: 10px;
    }
    .titulo{
        font-size: 25px;
        margin-bottom: 25px;
        margin-top: 10px;
    }

    .categoria{
        padding-top: 15px;
        font-weight: bold;
    }

    .botao{
        height: 40px;
        background: none;
        border-radius: 5px;
        border: 2px solid #4c89e3;
        color: #4c89e3;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-size: 18px;
        transform: all .5s;
    }

    .botao:hover{
        background: #4c89e3;
        color: #fff;
    }
</style>
