<template>
  <div id="home">

    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar';
  import {getHomeMultidata} from 'network/home.js';

  export default {
    name: 'home',
    components: {
      NavBar
    },
    data() {
      return {
        banners: [],
        recommend: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res.data)
        this.banners = res.data.banner.list
        this.recommend = res.data.recommend.list
      }).catch(err => {

      })

    }
  }

</script>

<style>

  .cccc {
    height: 44px;
    background-color: #42B983;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

</style>
