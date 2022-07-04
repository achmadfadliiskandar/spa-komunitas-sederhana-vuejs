<template>
  <div class="jumbotron">
    <Jumbotron judul="Welcome To Komunitas Jak Mania Fanbase"/>
  </div>
  <div class="about" id="about">
    <section class="aboutsection" id="aboutsection">
      <h2 class="judulabout">About</h2>
      <p class="penjelasanabout">Tentang / Sejarah</p>
      <div class="container">
      <div class="row">
      <div class="col-lg-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae et magnam earum cum at blanditiis, ipsam provident vero, architecto sapiente quibusdam beatae asperiores aspernatur error accusantium nisi ipsa eum. Vitae laborum illum laboriosam porro eligendi rerum quidem, impedit quam, similique modi exercitationem, veniam quo. Aliquid similique modi blanditiis accusantium voluptatum exercitationem mollitia quibusdam fuga. Error minus eveniet sapiente itaque quasi quod ipsum inventore quisquam excepturi, ex at recusandae harum aliquid.
      </div>
      <div class="col-lg-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa fuga, tempora ratione accusamus harum iste magnam quis corrupti, distinctio est at placeat eligendi quidem nostrum eum sit inventore alias nemo nobis reprehenderit maiores! Maiores placeat obcaecati excepturi veniam pariatur voluptas error, aut facere consectetur, animi dignissimos quae ipsa aliquid eum amet quod eligendi mollitia vel suscipit maxime eaque! Expedita maiores dolorem consequatur culpa ipsum sed, repudiandae sapiente. Officiis, aspernatur?</div>
    </div>
      </div>
    </section>
  </div>
<div class="faq" id="faq">
  <section class="faqsection bg-light" id="faqsection">
    <h2 class="judulfaq">Faq</h2>
    <p class="penjelasanfaq">Frendly asked question / pertanyaan yang sering di tanyakan</p>
    <div class="container">
      <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Apa Tujuanya Website ini dibangun
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Untuk memudahkan / mengetahui mengenal komunitas ini dari website ini</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Pada Tahun berapa jak mania dibuat
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            The Jakmania adalah sebutan bagi kelompok suporter klub sepak bola dari ibu kota Jakarta, Persija Jakarta. The Jakmania juga merupakan salah satu kelompok suporter sepak bola yang fanatik di Indonesia
            Didirikan: 19 Desember 1997
            Ketua: Diky Soemarno
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Apa Sih Jak Mania
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Jak mania adalah sebuah supporter sepak bola / pendukung untuk tim persija jakarta</div>
        </div>
      </div>
    </div>
    </div>
  </section>
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
  name: 'app',
  components: {
    Jumbotron
  }
}
</script>

<style scoped>
.judulabout,.penjelasanabout{
  text-align: center;
}
.judulfaq,.penjelasanfaq{
  text-align: center;
}
.judullagu,.penjelasanlagu{
  text-align: center;
}
.aboutsection{
  padding-top: 60px;
  padding-bottom:60px;
  text-align: justify;
}
.faqsection{
  padding-top: 60px;
  padding-bottom:60px;
  text-align: justify;
}
.sectionlagu{
  padding-top: 60px;
  padding-bottom:60px;
  text-align: justify;
}
</style>