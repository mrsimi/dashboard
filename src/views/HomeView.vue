<template>
  <div>
    <div class="home-content">
      <h4>Charts</h4>
      <chart-data-component :category="'Top 100'" :charts="charts"/>
    </div>
  </div>
</template>

<script setup>
import ChartDataComponent from '@/components/ChartDataComponent.vue';
import { onBeforeMount, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const charts = computed(() => store.getters['chart/getCharts']);

onBeforeMount(() => {
  store.dispatch('chart/getCharts');
});
</script>
<style>
.home-content{
  margin: 50px;
}
</style>
