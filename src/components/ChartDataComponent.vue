<template>
    <div class="chart-table">
        <div>
            <table>
                <tr>
                    <th>S/N</th>
                    <th>DESCRIPTION</th>
                    <th>WEEK NUMBER</th>
                    <th>ACTIONS</th>
                </tr>
                <tr v-for="(item,index) in charts" :key="index">
                    <td>{{index+1}}</td>
                    <td>
                        Week of {{toReadableDateTime(item.dateCreated)}} <br>
                        <a href="https://www.youtube.com/embed/MxOuB-H-9hY">Header Video</a>
                    </td>
                    <td>{{item.weekNumber}}</td>
                    <td>
                        <button @click="editChart(item.id)">🖊️ Edit</button>
                        <button>❌ Delete</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script setup>
defineProps({
  charts: Object,
});

function editChart(id) {
  alert(id);
}
function toReadableDateTime(dateCreated) {
  return new Date(dateCreated).toDateString().split(' ').slice(1)
    .join(' ');
}
</script>

<style scoped>
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
