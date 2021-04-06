<template>
  <nav id="header">
    <h1>Sujeito Programador</h1>
    <ul>
      <router-link to="/" tag="li" active-class="ative" exact>
        <a>Home</a>
      </router-link>
      <router-link to="/produto" tag="li" active-class="ative" exact>
        <a>Produto</a>
      </router-link>
    </ul>
  </nav> 
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
     #header{
        display: flex;
        justify-content: space-around;
    }
    
    ul{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        list-style: none;
        padding: 0;
    }

    ul li{
        background: brown;
        margin: 3px;
        padding: 3px 10px;
        border-radius: 5px;
    }

    a{
        color: #FFF;
        text-decoration: none;
        margin-left: 5px;
        font-size: 25px;
    }
    .ative{background: #000;}
</style>