<template>
  <div>
    <div class="home-content">
      <h4>Magazine</h4>
      <button>+ Add Magazine Article</button>
      <magazine-data-component :magazine="magazine"/>
    </div>
  </div>
</template>

<script setup>
import MagazineDataComponent from '@/components/MagazineDataComponent.vue';
import { onBeforeMount, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const magazine = computed(() => store.getters['magazine/getMagazine']);

onBeforeMount(() => {
  store.dispatch('magazine/getMagazine', '1st');
});
</script>
<style>
.home-content{
  margin: 50px;
}

button{
  float: right;
  margin-bottom: 15px;
  background-color: blueviolet;
  border: none;
  color: white;
  padding: 8px 10px;
  border-radius: 5px;
}
</style>
