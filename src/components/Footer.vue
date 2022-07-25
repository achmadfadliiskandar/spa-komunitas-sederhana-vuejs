<template>
    <div class="footer" id="footer">
        <footer>
            <p class="kalimatfooter">&copy; copyright {{ new Date().getFullYear() }} <strong class="jfooter">jak mania fanbase</strong></p>
        </footer>
    </div>
</template>

<script>
export default {
    name:"App",
    el : "#footer",
}
</script>


<style scoped>
footer{
    background-color: #ff7f00;
    color: #f5f5f5;
    height: 100px;
}
.kalimatfooter{
    padding-top: 45px;
    padding-bottom:20px;
}
.jfooter{
    text-transform: capitalize;
}
</style>