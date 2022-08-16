<template>
    <div class="home-content area">
        <input class="title" v-model="content.title"/>
        <input v-model="content.description"/>
        <input v-model="content.dateCreated"/>
        <input v-model="content.articlePosition"/>
        <textarea rows="40" v-model="content.content" aria-labelledby="#id" id="id" ></textarea>
    </div>
</template>

<script setup>
import {
  onMounted, ref,
} from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();

const content = ref({});
onMounted(() => {
  store.dispatch('magazine/getMagazineById', route.params.id)
    .then((res) => { content.value = res.data; })
    .catch((err) => console.log(err));
});
</script>

<style scoped>
.title{
    font-size: 2rem;
    font-weight: bold;
}
input,textarea{
    display: block;
    min-width: 100%;
    border: none;
    padding: 8px 5px;
    font-size: 1rem;
}

.area{
    padding-top: 50px;
    width: 700px;
    margin: 0 auto;

    padding-bottom: 100px;
}

input,textarea:hover{
    border: none;
    outline: none;
}
input,textarea:focus{
    border: none;
    outline: none;
}
input,textarea:active{
    border:none;
    outline:none;
}

</style>
