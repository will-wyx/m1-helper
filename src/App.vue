<script setup lang="ts">
import theme from './theme';

function handleBtn1() {
  console.log('btn 1')
}

function handleBtn2() {
  console.log('btn 2')
}
</script>

<template>
  <var-style-provider :style-vars="theme">
    <router-view></router-view>
  </var-style-provider>
</template>

<style>
</style>
