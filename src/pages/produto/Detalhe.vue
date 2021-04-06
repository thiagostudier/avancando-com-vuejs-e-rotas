<template>
    <div id="detalhe">
        <h1>Detalhe</h1>
        <p>Código do produto: {{id}}</p>
    </div>
</template>

<script>
export default {
    name: 'Detalhe',
    props: ['id'],
}
</script>
