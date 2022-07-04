<template>
    <div class="jumbotron">
        <Jumbotron judul="Halaman Kontak Komunitas Jak Mania Fanbase"/>
    </div>
    <div class="contact">
    <section class="bagiancontact" id="bagiancontact">
    <div class="container">
    <h1 class="judulkontak">halaman Kontak</h1>
    <p class="penjelasankontak">silahkan mengirimkan pesan di bawah ini</p>
    <div class="row">
    <div class="col-lg-6">
        <div class="card">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65295091993!2d106.68942947103515!3d-6.229386698983947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1656910161927!5m2!1sid!2sid" style="width:100%;height:400px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    <div class="col-lg-6">
        <form>
            <div class="mb-3">
                <label for="namaemail">Nama Dan Email</label>
            <div class="input-group">
            <span class="input-group-text">Nama Dan Email</span>
            <input type="text" class="form-control" id="nama" name="nama">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            </div>
            <div class="mb-3">
                <label for="exampleDataList" class="form-label">Klub Kesukaan</label>
                <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
                <datalist id="datalistOptions">
                <option value="Persija"></option>
                <option value="Aremania"></option>
                <option value="Persiba"></option>
                <option value="Rans Fc"></option>
                <option value="Persik Kediri"></option>
                </datalist>
            </div>
            <div class="mb-3">
                <label for="pesan">Pesan</label>
                <div class="form-floating">
                <textarea class="form-control" style="height: 160px;" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Comments</label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary w-100">Submit</button>
            </form>
    </div>
    </div>
    </div>
    </section>
    </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue'

export default {
    name: 'app',
    components: {
    Jumbotron
    }
}
</script>

<style scoped>
.judulkontak,.penjelasankontak{
text-align: center;
text-transform: capitalize;
}
.bagiancontact{
padding-top: 60px;
padding-bottom:60px;
text-align: justify;
}
</style>
