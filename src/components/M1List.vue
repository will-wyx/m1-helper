<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";
import {message} from 'ant-design-vue';

const columns = [
    {title: 'UID', key: 'uid', dataIndex: 'uid', width: 180},
    {title: '梯号', key: 'elevator', dataIndex: 'elevator', width: 180},
    {title: '楼层', key: 'floor', dataIndex: 'floor', width: 220, ellipsis: true},
    {title: '过期时间', key: 'expireTime', dataIndex: 'expireTime'},
    {title: 'KeyA', key: 'keyA', dataIndex: 'keyA'},
    {title: 'KeyB', key: 'keyB', dataIndex: 'keyB'},
];
const data = ref([]);

onMounted(() => {
    loadData();
    window.electronAPI.addImportSuccessListener(() => {
        message.success('导入成功');
        loadData();
    })
})

onUnmounted(() => {
    window.electronAPI.removeImportSuccessListener()
})

function loadData() {
    window.electronAPI.loadData()
        .then((rows) => {
            data.value = rows.map(row => {
                return {
                    uid: row.uid,
                    expireTime: row.expireTime,
                    elevator: `${row.elevator1.toString(16).padStart(2, '0')}, ${row.elevator2.toString(16).padStart(2, '0')}`,
                    elevator1: row.elevator1,
                    elevator2: row.elevator2,
                    floor: row.floor,
                    keyA: row.keyA,
                    keyB: row.keyB
                }
            })
        });
}
</script>

<template>
    <a-table
            :columns="columns"
            :data-source="data"
            size="small"
            row-class-name="equal-width"
            :pagination="false"
    >

    </a-table>
</template>

<style>
.equal-width {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
}
</style>
