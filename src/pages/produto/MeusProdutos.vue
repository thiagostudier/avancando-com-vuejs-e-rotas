<template>
    <div id="meus-produtos">
        <h1>Meus Produtos</h1>
        <ul>
            <router-link tag="li" to="/produto/1"><a>Adesivo</a></router-link>
            <router-link tag="li" to="/produto/2"><a>Camiseta</a></router-link>
            <router-link tag="li" to="/produto/3"><a>MousePad</a></router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MeusProdutos',
}
</script>
