<template>
  <div class="app-content">
    <side-nav />
    <router-view />
  </div>
</template>

<script setup>
import SideNav from './components/SideNav.vue';
</script>

<style>
#app,button,input, label,textarea {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
  background-color: #fff;
}

.app-content {
  display: flex;
}
/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
