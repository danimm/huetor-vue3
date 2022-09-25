<template lang="pug">
  .wrapper.pt-4.pb-5
    b-container
      b-row
        .col-lg-4.col-md-12.text-white.contact
          img.logo(:src='Logo', alt='Logo Huetor')
          p.mt-4
            // Hotel WordPress Theme is the best hotel, hostel, resort, apartment presentation WordPress theme. With its beautiful design and high coding quality, this theme can showcase your unique accommodations to the world and attract more visitors to your website.
          p Comarca de la Axarquía - Málaga - España
          //- p Trataremos de responder su correo electrónico antes de 24 horas.
          p {{ $t('footer.text1') }}
          p
            img.icon(:src='Phone', alt='phone-icon')
            a.text-white(href="tel:+34659589562") +34 659 589 562
          p
            img.icon(:src='Home', alt='home-icon')
            a.text-white(
              href="https://www.google.com/maps/place/Alojamientos+Huetor/@36.8786239,-4.1887103,1735m/data=!3m1!1e3!4m7!3m6!1s0xd7269d63c8dbefb:0x2f0a38fa3fbf8baa!5m1!1s2018-11-25!8m2!3d36.881525!4d-4.18549"
              target="_blank"
              ) Paraje la Rotura, 29712 La Viñuela, Málaga, España
          p
            img.icon(:src='Mail', alt='mail-icon')
            a.text-white.email(href="mailto:info@alojamientoshuetor.com", target="_blank") info@alojamientoshuetor.com
          p
            img.icon(:src="Instagram", alt="instagram-icon")
            a.text-white(href="https://www.instagram.com/alojamientos_huetor/", target="_blank") alojamientos_huetor
          p
            img.icon(:src="Facebook", alt="facebook-icon")
            a.text-white(href="https://www.facebook.com/alojamientoshuetor/", target="_blank") Alojamientos Huetor
        .col-lg-4.col-md-6.mb-4
          h4.mb-4.text-white {{ $t('footer.titleInstagram') }}
          .grid-container
            picture(v-for="(image,index ) in IGlinks")
              img(:src='image.url', alt=``)
        //- image v-for
        .col-lg-4.col-md-6
          h4.text-white {{ $t('footer.titleLinks') }}
          p.text-white.mt-4
            a.text-white(:href="$t('footer.links.activities.src')", target="_blank") {{ $t('footer.links.activities.text') }}
          p.text-white
            a.text-white(:href="$t('footer.links.malaga.src')", target="_blank") {{ $t('footer.links.malaga.text') }}
          p.text-white
            a.text-white(:href="$t('footer.links.cordoba.src')", target="_blank") {{ $t('footer.links.cordoba.text') }}
          p.text-white
            a.text-white(:href="$t('footer.links.sevilla.src')", target="_blank") {{ $t('footer.links.sevilla.text') }}
          p.text-white
            a.text-white(:href="$t('footer.links.cadiz.src')", target="_blank") {{ $t('footer.links.cadiz.text') }}
          p.text-white
            a.text-white(:href="$t('footer.links.granada.src')", target="_blank") {{ $t('footer.links.granada.text') }}
          p.text-white
            a.text-white(:href="$t('footer.links.jaen.src')", target="_blank") {{ $t('footer.links.jaen.text') }}
          p.text-white
            a.text-white(:href="$t('footer.links.almeria.src')", target="_blank") {{ $t('footer.links.almeria.text') }}
          p.text-white
            a.text-white(:href="$t('footer.links.andalucia.src')", target="_blank") {{ $t('footer.links.andalucia.text') }}
          p.text-white
    b-container
      b-row
        .col.my-4
          img(src='@/assets/images/banner2.jpg', alt=`banner`)
      b-row.lastFooter
        .col-sm-12.col-md-6
          p
          | {{ $t('footer.made')}}
          a.text-white.email(href="mailto:info@danimm.com", target="_blank") info@danimm.com
          
        .col-sm-10.col-md-6.text-right
          //- router-link.nav-link(to="/") Inicio
          //- router-link.nav-link(to="reservations") Reservas
          //- router-link.nav-link(to="gallery") Galería
          //- router-link.nav-link(to="contact") Contacto
          a.nav-link(@click="goLegal") {{ $t('footer.legal') }}

</template>

<script>
export default {
  props: {
    Logo: { type: String, required: true },
    Phone: { type: String, required: true },
    Home: { type: String, required: true },
    Mail: { type: String, required: true },
    Instagram: { type: String, required: true },
    Facebook: { type: String, required: true }
  },
  data() {
    return {
      IGlinks: [
        {
          id: 1,
          url:
            'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/Instagram%2F1_image.png?alt=media&token=11dac811-b53e-46b7-96d0-0894ed514d78'
        },
        {
          id: 2,
          url:
            'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/Instagram%2F2_image.png?alt=media&token=22a96fd8-6d35-4bfb-9925-1572031f11fb'
        },
        {
          id: 3,
          url:
            'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/Instagram%2F3_image.png?alt=media&token=01620dc3-851a-4464-a06c-397fb6996efc'
        },
        {
          id: 4,
          url:
            'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/Instagram%2F4_image.png?alt=media&token=e9543d89-981d-48df-91cd-dd012c3248d9'
        },
        {
          id: 5,
          url:
            'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/Instagram%2F5_image.png?alt=media&token=9b9e5ebb-0dcd-49bc-b8b3-b09d496ae3d0'
        },
        {
          id: 6,
          url:
            'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/Instagram%2F6_image.png?alt=media&token=aa1732a5-2ec3-4d41-a722-16b299e5ab57'
        },
        {
          id: 7,
          url:
            'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/Instagram%2F7_image.png?alt=media&token=8a519a34-7bb5-4852-86cf-700aa7e27d03'
        },
        {
          id: 8,
          url:
            'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/Instagram%2F8_image.png?alt=media&token=397ec329-f948-4fe9-b90d-bf959731f160'
        }
      ]
    };
  },
  methods: {
    goLegal() {
      window.scrollTo(0, 0);
      this.$router.push('legal');
    }
  }
};
</script>

<style scoped>
.wrapper {
  background-color: #333a40;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 120px);
  grid-gap: 10px;
}
img {
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* object-position: left; */
}
.logo {
  max-width: 200px;
  height: auto;
}
.icon {
  max-width: 20px;
  height: auto;
  margin-right: 5px;
}
.lastFooter {
  margin-top: 30px;
  border-top: gray 2px solid;
  padding-top: 30px;
  color: white;
}
.lastFooter a {
  color: white;
  padding-right: 12px;
}
.lastFooter .col {
  padding-left: 0;
  padding-right: 0;
}
.nav-link {
  /* display: none; */
  cursor: pointer;
}
@media screen and (max-width: 992px) {
  /* .grid-container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 120px);
    } */
}
@media screen and (max-width: 768px) {
  h4 {
    margin-bottom: 0;
    margin-top: 20px;
  }
  .contact {
    margin-bottom: 30px;
  }
  /* .col-sm-12 p {
      display: none;
    } */
}

@media screen and (max-width: 576px) {
  .col-sm-10 {
    display: flex;
    justify-content: center;
  }
  .lastFooter p {
    display: none;
  }
}
</style>
