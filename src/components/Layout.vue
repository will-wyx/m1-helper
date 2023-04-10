<script setup lang="ts">
import {DockMenu} from 'vue-dock-menu'
import 'vue-dock-menu/dist/vue-dock-menu.css'

const menus: any = [
  {
    name: 'File',
    menu: [
      {name: '新文件'},
      {isDivider: true},
      {name: '退出'},
    ]
  },
  {name: 'Edit', menu: []},
  {name: 'View', menu: []},
  {name: 'Window', menu: []},
  {name: 'Help', menu: []},
]

function handleSelected(e, r, t) {
  console.log(e, r, t)
}
</script>

<template>
  <DockMenu
      :items="menus"
      :on-selected="handleSelected"
  />
</template>

<style scoped>

</style>
