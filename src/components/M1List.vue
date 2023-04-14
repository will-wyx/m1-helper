<script setup lang="ts">
const columns = [
    {title: '序列号', key: 'serial', dataIndex: 'serial'},
    {title: '楼号', key: 'building', dataIndex: 'building'}
];
const data = [
    {serial: 'xxx', building: '1D1E'},
    {serial: '000', building: '191A'},
    {serial: '000', building: '191A'},
    {serial: '000', building: '191A'},
    {serial: '000', building: '191A'},
    {serial: '000', building: '191A'},
    {serial: '000', building: '191A'},
    {serial: '000', building: '191A'},
    {serial: '000', building: '191A'},
    {serial: '000', building: '191A'},
    {serial: '000', building: '191A'},
    {serial: '000', building: '191A'},
    {serial: '000', building: '191A'},
    {serial: '000', building: '191A'},
];
</script>

<template>
    <a-table :columns="columns" :data-source="data" size="small">

    </a-table>
</template>

<style scoped>

</style>
