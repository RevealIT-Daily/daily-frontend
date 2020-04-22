<template>
  <div class="home">
    <HomeComponent></HomeComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/HomeComponent.vue';
// import HeaderPrincipal from './views/HeaderPrincipal';
// import HeaderLogged from './views/users/HeaderLogged';

export default {
  name: 'Home',
  components: {
    HomeComponent
  }
}
</script>
