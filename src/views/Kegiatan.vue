<template>
    <div class="jumbotron">
        <Jumbotron judul="Halaman Kegiatan Komunitas Jak Mania Fanbase"/>
    </div>
    <div class="kegiatan bg-light">
    <div class="container">
    <section class="kegiatan" id="kegiatan">
    <h1 class="judulkegiatan">halaman kegiatan</h1>
    <p class="kalimatkegiatan">Kegiatan yang dilakukan komunitas ini</p>
    <div class="row">
    <div class="col-lg-4 mt-3 mb-3">
    <div class="card" style="width: 100%;">
        <img src="../assets/seminar.jpg" class="card-img-top" alt="seminar">
        <div class="card-body">
            <h5 class="card-title">Seminar</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum assumenda dolores sapiente voluptates a nisi, amet ab hic beatae.</p>
            <a href="#" class="btn btn-primary">Read More</a>
        </div>
    </div>
    </div>
    <div class="col-lg-4 mt-3 mb-3">
        <div class="card" style="width: 100%;">
        <img src="../assets/podcast.jpg" class="card-img-top" alt="podcast">
        <div class="card-body">
            <h5 class="card-title">Podcast</h5>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque vero odit assumenda dolor repellendus earum inventore placeat dolorum saepe dolore.</p>
            <a href="#" class="btn btn-primary">Read More</a>
        </div>
    </div>
    </div>
    <div class="col-lg-4 mt-3 mb-3">
        <div class="card" style="width: 100%;">
        <img src="../assets/latihan.jpg" class="card-img-top" alt="latihan">
        <div class="card-body">
            <h5 class="card-title">Latihan</h5>
            <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet consequuntur inventore eveniet eius unde nesciunt ratione! A dolorum adipisci hic.</p>
            <a href="#" class="btn btn-primary">Read More</a>
        </div>
    </div>
    </div>
    </div>
    </section>
    </div>
    </div>
    <div class="lagu" id="lagu">
    <section class="sectionlagu" id="sectionlagu">
    <h2 class="judullagu">Lagu</h2>
    <p class="penjelasanlagu"> 5 Lagu Terbaik yang dinyanyikan untuk menyemangati tim persija</p>
    <div class="container">
    <table class="table table-bordered table-hover">
<thead>
    <tr>
    <th scope="col">No</th>
    <th scope="col">Judul</th>
    <th scope="col">Pencipta</th>
    </tr>
</thead>
<tbody>
    <tr>
    <th scope="row">1</th>
    <td>Kami Bersama Persija</td>
    <td>Circle Cloud</td>
    </tr>
    <tr>
    <th scope="row">2</th>
    <td>Ku Anak Jakarta</td>
    <td>Orkes Biang Kerok</td>
    </tr>
    <tr>
    <th scope="row">3</th>
    <td>Kesurupan</td>
    <td>Orkes Biang Kerok</td>
    </tr>
    <tr>
    <th scope="row">4</th>
    <td>Kami Persija</td>
    <td>jakBoyz</td>
    </tr>
    <tr>
    <th scope="row">5</th>
    <td>Jakarta Kota Gue</td>
    <td>Gondal Gandul</td>
    </tr>
</tbody>
</table>
</div>
</section>
</div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue'

export default {
    name: 'App',
    components: {
    Jumbotron
    }
}
</script>

<style scoped>
.kegiatan{
    padding-top: 30px;
    padding-bottom: 30px;
}
.judulkegiatan{
    text-transform: capitalize;
}
.judullagu,.penjelasanlagu{
text-align: center;
}
.sectionlagu{
padding-top: 60px;
padding-bottom:60px;
text-align: justify;
}
</style>
