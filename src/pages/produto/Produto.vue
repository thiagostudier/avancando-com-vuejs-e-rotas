<template>
    <div id="produto">
        <h1>Produto</h1>
        <button @click="toHome">Ir para home</button>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'Produto',
    methods:{
        toHome(){
            this.$router.push('/'); //FUNÇÃO PARA NAVEGAR ENTRE AS TELAS
        }
    }
}
</script>
