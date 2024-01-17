<template>
  <b-breadcrumb :items="items"></b-breadcrumb>
</template>

<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'Para la cocina',
            href: '/cocina'
          },
          {
            text: 'Estufas',
            href: '/profile',
            active: true
          },
        ]
      }
    }
  }
</script>

<style>

</style>