<script setup lang="ts">
import Navigation from "./Navigation.vue";
</script>

<template>
  <Navigation/>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.container {
  padding: 8px;
}
</style>
