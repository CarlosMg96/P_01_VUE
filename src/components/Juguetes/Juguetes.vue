<template>
  <b-breadcrumb :items="items"></b-breadcrumb>
</template>

<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'Electronicos',
            href: '/conocenos'
          },
          {
            text: 'Juegos de Video',
            active: true
          },
        ]
      }
    }
}
</script>

<style>

</style>