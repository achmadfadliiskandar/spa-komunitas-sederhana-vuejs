<template>
    <nav class="navbar navbar-expand-lg fixed-top" id="navbar">
<div class="container">
    <router-link class="navbar-brand" to="/">jak mania fanbase</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
        <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/kegiatan" class="nav-link">Kegiatan</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
        </ul>
    </div>
</div>
</nav>
</template>

<script>
export default {
    name:"App"
}
</script>

<style scoped>
.router-link-exact-active {
font-weight: 700;
color: #808080;
}
.navbar-brand{
    border: none;
    color: #f5f5f5;
    text-transform:capitalize;
    font-weight: 700;
}
#navbar{
    background-color: #ff7f00;
    padding-top: 12px;
}
ul,li,a{
    color: #f5f5f5;
}
.navbar-nav{
    text-align: left;
}
</style>