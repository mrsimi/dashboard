<template>
    <div>
        <div>
            <table>
                <tr>
                    <th></th>
                    <th>Description</th>
                    <th>Article Position</th>
                    <th></th>
                </tr>
                <tr v-for="(item,index) in magazine" :key="index">
                    <td>{{index+1}}</td>
                    <td>
                        <span class="title">{{item.title}}</span> <br>
                        on <span class="date"> {{toReadableDateTime(item.dateCreated)}}</span>
                    </td>
                    <td>{{item.articlePosition}}</td>
                    <td>
                        <router-link :to="{name: 'editMagazine',
                        params:{id:item.id}}">🖊️ Edit</router-link>  |
                        <a>❌ Delete</a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script setup>
defineProps({
  magazine: Object,
});

function toReadableDateTime(dateCreated) {
  return new Date(dateCreated).toDateString().split(' ').slice(1)
    .join(' ');
}
</script>

<style scoped>
.title{
    font-weight: bold;
}
.date{
    text-transform: uppercase;
}
table{
    width:100%;
   table-layout: fixed;
   overflow-wrap: break-word;
   text-align: left;
   background-color: white;
   border-radius: 5px;
}

table,th,td{
    border-collapse: collapse;
    border: 2px solid #d2d8e1;
    padding: 8px;
    font-size: 0.8rem;
}

button{
    display: block;
    border: none;
    background: none;
    font-weight: bold;
    margin-bottom: 5px;
}

button:hover{
    cursor: pointer;
}

button:visited{
    color: #e17313;
}
</style>
