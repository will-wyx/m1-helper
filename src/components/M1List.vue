<script setup lang="ts">
import {onMounted, ref} from "vue";

const columns = [
    {title: 'UID', key: 'uid', dataIndex: 'uid'},
    {title: '梯号1', key: 'elevator1', dataIndex: 'elevator1'},
    {title: '梯号2', key: 'elevator2', dataIndex: 'elevator2'},
    {title: '楼层', key: 'floor', dataIndex: 'floor'},
    {title: 'KeyA', key: 'keyA', dataIndex: 'keyA'},
    {title: 'KeyB', key: 'keyB', dataIndex: 'keyB'},
];
const data = ref([]);

onMounted(() => {
    window.electronAPI.loadData()
        .then((rows) => {
            data.value = rows.map(row => {
                return {
                    uid: row.uid,
                    elevator1: row.elevator1,
                    elevator2: row.elevator2,
                    floor: row.floor,
                    keyA: row.keyA,
                    keyB: row.keyB
                }
            })
        })
})
</script>

<template>
    <a-table :columns="columns" :data-source="data" size="small">

    </a-table>
</template>

<style scoped>

</style>
