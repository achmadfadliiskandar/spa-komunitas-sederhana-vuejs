<template>
<div class="jumbotron" id="jumbotron">
<h1 class="judul">{{judul}}</h1>
<hr>
<p class="kalimat">Selamat Datang di Web Komunitas Jak Mania Fanbase</p>
</div>
</template>

<script>
export default {
name: 'App',
props: {
judul: String,
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron{
    background-image:url('../assets/persija.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position:bottom;
    height: 300px;
}
.judul{
    padding-top: 100px;
    color: #f5f5f5;
    font-weight: 800;
    text-shadow: 2px 2px #ff7f00;
}
.kalimat{
    color: #f5f5f5;
    font-weight: 800;
    text-shadow: 2px 2px #ff7f00;
}
hr{
    color:whitesmoke;
}
</style>