<script setup lang="ts">
function handleClick({key}: { key: string }) {
    switch (key) {
        case 'import':
            window.electronAPI.importFile().then()
            break;
        case 'exit':
            window.electronAPI.exit()
            break;
    }
}
</script>

<template>
    <a-menu mode="horizontal"
            triggerSubMenuAction="hover"
            :selectable="false"
            @click="handleClick">
        <a-sub-menu title="文件">
            <a-menu-item key="import">导入</a-menu-item>
            <a-menu-item key="exit">退出</a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>

<style scoped>

</style>
